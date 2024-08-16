import Image from "next/image";
import { steps } from "@/data/steps";
import ArrowIcon from "../../../assets/stepbystep/ArrowIcon";

export const Stepbystep = () => {
  return (
    <div className="relative -bottom-[35%] -top-[60%]">
      <div
        className="absolute inset-0 -bottom-[10%] -top-[25%] z-[10] hidden opacity-10 md:block"
        style={{
          background: `
          url('/backgroundStep.svg') center/cover no-repeat`,
          backgroundSize: "none md:cover",
          backgroundPosition: "center",
          minHeight: "97vh",
        }}
      />
      <div className="absolute inset-0 -bottom-[5%] -top-[15%] z-[-10] bg-background"></div>
      <div className="container relative z-10 max-w-[1110px] py-10 lg:pb-[17rem] lg:pt-[9rem]">
        <div aria-label="title" className="pb-14">
          <h1 className="text-center font-barlow text-h3 text-white md:text-[1.875rem] lg:text-[2.8125rem]">
            Step by step Create and Sell Your NFTs
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              <div className="flex flex-col items-center p-4">
                <div className="flex flex-col space-y-4 text-center">
                  <div
                    aria-label="card"
                    className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-card drop-shadow-xl"
                  >
                    <Image
                      src={step.icon}
                      alt={step.title.toLowerCase()}
                      className="h-11 w-11"
                    />
                  </div>
                </div>
              </div>

              <div className="flex max-w-[240px] flex-col gap-4 text-center">
                <p className="font-roboto-mono text-p14 text-white">
                  {step.number.toUpperCase()}
                </p>
                <h2 className="font-barlow text-h6 text-white md:text-[1rem] lg:text-[1.25rem]">
                  {step.title}
                </h2>
                <p className="font-roboto-mono text-p16 text-white">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  aria-label="arrow"
                  className="arrow group-hover:animate-dash absolute right-[-75px] hidden items-center lg:block"
                >
                  <ArrowIcon />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
