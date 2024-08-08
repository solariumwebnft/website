import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors active-visible:outline-none active-visible:ring-2 active-visible:ring-ring active-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white min-h-[50px] min-w-[190px]  px-4 py-2 rounded-md transition-colors hover:bg-primary/90 hover:cursor-pointer active:bg-primary/70 ",
        white:
          "bg-white text-black min-h-[50px] min-w-[190px] px-4 py-2 rounded-md transition-colors hover:bg-white/90 hover:cursor-pointer active:bg-white/70 ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-transparent text-white min-h-[50px] min-w-[190px] px-4 py-2 rounded-md transition-colors hover:bg-primary/90 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        link: "text-primary ",
        ghostLink:
          "border text-white bg-transparent border-white min-h-[50px] min-w-[190px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
