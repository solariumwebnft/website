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
import { CallToActionData } from "@/data/CallToActionData";
import { GoArrowUpRight } from "react-icons/go";
import React from "react";

export const CallToAction = () => {
  const { primaryButton, secundaryButton, title } = CallToActionData();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    const offset = 70;
    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="px-8 py-[176px]">
      <section className="relative z-20 flex max-h-[268px] max-w-[1030px] flex-col justify-between overflow-hidden rounded-3xl bg-primary md:flex-row lg:mx-auto">
        <div className="absolute inset-0 h-full w-full">
          <ParticlesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>

        <div className="flex flex-col justify-between p-[30px] text-white md:p-[50px]">
          <h2 className="mb-4 font-barlow text-h4 md:max-w-[60%] md:text-[1.5rem] lg:max-w-[100%] lg:text-[2rem]">
            {title}
          </h2>
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
            <Button
              className="button-glass font-barlow font-bold"
              variant="white"
            >
              {primaryButton} <GoArrowUpRight size="23px" />
            </Button>
            <a
              href="#get-started width-100%"
              onClick={(e) => handleSmoothScroll(e, "#get-started")}
            >
              <Button
                className="button-glass font-barlow font-bold"
                variant="ghostLink"
              >
                {secundaryButton}
              </Button>
            </a>
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
