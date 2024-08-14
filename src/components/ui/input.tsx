import * as React from "react";
import { cn } from "@/lib/utils";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "number", ...props }, ref) => {
    const localRef = React.useRef<HTMLInputElement>(null);

    const inputRef = ref || localRef;

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-[50px] w-full appearance-none rounded-md border border-gray-300 bg-secondary px-3 text-lg text-background placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary md:max-w-[110px]",
            "no-arrows",
            className,
          )}
          ref={inputRef}
          {...props}
        />
        <div className="border-1 absolute inset-y-0 right-0 flex flex-col">
          <button
            type="button"
            className="flex h-[25px] w-8 items-center justify-center rounded-tr-md text-background md:mt-8"
            onClick={() => {
              if (
                inputRef &&
                typeof inputRef !== "function" &&
                inputRef?.current
              ) {
                inputRef.current.stepUp();
              }
            }}
          >
            <SlArrowUp />
          </button>
          <button
            type="button"
            className="flex h-[25px] w-8 items-center justify-center rounded-br-md text-background"
            onClick={() => {
              if (
                inputRef &&
                typeof inputRef !== "function" &&
                inputRef?.current &&
                Number(inputRef.current.value) > 0
              ) {
                inputRef.current.stepDown();
              }
            }}
          >
            <SlArrowDown />
          </button>
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
