import { HeroContent } from "@/data/heroData";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

export const Hero = () => {
  const { title, subTitle, src } = HeroContent();
  return (
    <div className="relative flex min-h-[70vh] justify-center md:bg-background">
      <div className="flex justify-center py-2 text-white lg:px-8">
        <div className="rounded-0 absolute flex h-full w-[100svw] justify-center overflow-hidden md:w-[98.1svw] lg:w-full lg:rounded-lg">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="relative inset-0 h-full w-full object-cover opacity-60"
          />
        </div>

        <div className="relative flex w-full flex-col justify-center gap-5 sm:gap-8 md:max-w-[700px] md:gap-10">
          <h1 className="text-center font-barlow text-h1 md:text-[2.8125rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="text-center font-roboto-mono text-p16">{subTitle}</p>
          <div className="flex flex-col justify-center gap-4 py-4 sm:flex-row lg:gap-8">
            <Button className="button-glass gap-2 font-barlow font-bold">
              Start Collecting <GoArrowUpRight size="23px" />
            </Button>
            <Button
              variant="ghostLink"
              className="button-glass gap-2 font-barlow font-bold"
            >
              Create NFT <GoArrowUpRight size="23px" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
