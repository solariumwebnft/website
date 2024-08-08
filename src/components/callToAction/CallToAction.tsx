"use client";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import "swiper/css";
import { EffectCoverflow, EffectFade } from "swiper/modules";

import { Button } from "../ui/button";
import { SwiperSection } from "./SwiperSection";
import { ParticlesCore } from "../ui/particles";

export const CallToAction = () => {
  return (
    <main className="p-8">
      <section className="relative z-20 mt-24 flex max-h-[268px] max-w-screen-2xl flex-col justify-between overflow-hidden rounded-3xl bg-primary px-[24px] md:flex-row lg:pr-[40px]">
        <div className="absolute inset-0 h-full w-full">
          <ParticlesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 h-full w-full" // Updated this line
            particleColor="#FFFFFF"
          />
        </div>

        <div className="flex flex-col justify-between p-[30px] text-white md:p-[50px]">
          <h2 className="mb-4 text-2xl font-semibold md:max-w-[60%] md:text-3xl lg:max-w-[100%] lg:text-4xl">
            Discover, create and sell your own NFT
          </h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Button className="button-glass" variant="white">
              Explore Now
            </Button>
            <Button className="button-glass" variant="ghostLink">
              Create Your First NFT
            </Button>
          </div>
        </div>
        <section className="relative hidden lg:bottom-24 lg:flex lg:space-x-4">
          <SwiperSection
            effect={EffectFade}
            speed={2500}
            autoplay={{ delay: 0 }}
          />
          <SwiperSection
            effect={EffectCoverflow}
            speed={2800}
            autoplay={{ delay: 0, reverseDirection: true }}
          />
          <SwiperSection
            effect={EffectCoverflow}
            speed={3200}
            autoplay={{ delay: 0 }}
          />
        </section>
      </section>
    </main>
  );
};
