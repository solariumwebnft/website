import { HeroContent } from "@/data/heroData";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";

export const Hero = () => {
  const { title, subTitle, src } = HeroContent();
  return (
    <div className="relative flex min-h-[82vh] w-[100%] justify-center px-8 md:bg-background">
      <div className="flex justify-center px-8 py-2 text-white">
        <div className="absolute flex h-full w-full justify-center overflow-hidden rounded-lg">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="relative inset-0 h-full w-full object-cover opacity-60"
          />
        </div>

        <div className="relative flex w-full flex-col justify-center gap-10 md:max-w-[700px]">
          <h1 className="font-barlow text-h1 text-center leading-normal md:text-[2.8125rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="font-roboto-mono text-p16 text-center">{subTitle}</p>
          <div className="flex flex-col justify-center gap-8 py-4 sm:flex-row">
            <Button className="button-glass font-barlow gap-2 font-bold">
              Start Collecting <GoArrowUpRight size="23px" />
            </Button>
            <Button
              variant="ghostLink"
              className="button-glass font-barlow gap-2 font-bold"
            >
              Create NFT <GoArrowUpRight size="23px" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
