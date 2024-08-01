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
import { SparklesCore } from "../ui/sparkles";

export const CallToAction = () => (
  <div className="z-20 mt-24 flex max-h-[268px] w-full max-w-[1110px] flex-col justify-between overflow-hidden rounded-3xl bg-gray-800 md:flex-row lg:pr-[40px]">
    <div className="flex flex-col justify-between p-[30px] text-white md:p-[50px]">
      <h2 className="mb-4 text-2xl font-semibold md:max-w-[60%] md:text-3xl lg:max-w-[100%] lg:text-4xl">
        Discover, create and sell your own NFT
      </h2>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <Button className="button-glass z-10">Explore Now</Button>
        <Button className="button-glass z-10">Create Your First NFT</Button>
      </div>
    </div>
    <div className="relative hidden lg:bottom-24 lg:flex lg:space-x-4">
      <SwiperSection effect={EffectFade} speed={2500} autoplay={{ delay: 0 }} />
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
    </div>
  </div>
);
