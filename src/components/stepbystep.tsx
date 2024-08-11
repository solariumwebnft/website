import Image from "next/image";
import ArrowIcon from "../../assets/stepbystep/ArrowIcon";
import { steps } from "@/lib/steps";

export const Stepbystep = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -bottom-[35%] -top-[60%] z-[-10]"
        style={{
          background: `
            url('/background1.svg') center/cover no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
        }}
      />
      <div className="container relative z-10 max-w-[1110px] py-10 pb-[17rem] pt-[9rem]">
        <div aria-label="title" className="pb-10">
          <h1 className="text-center text-5xl font-medium text-white">
            Step by Step
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
                    className="card mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-lg bg-gray-800"
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
                <p className="text-gray-500">{step.number.toUpperCase()}</p>
                <h2 className="text-xl font-medium text-white">{step.title}</h2>
                <p className="text-gray-500">{step.description}</p>
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
