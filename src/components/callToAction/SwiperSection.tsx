"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/grid";
import "swiper/css";

import image from "../../../assets/images/murangu.webp";

const images: StaticImageData[] = Array(11).fill(image);

export const SwiperSection = ({
  effect,
  speed,
  autoplay,
}: {
  effect: any;
  speed: number;
  autoplay: any;
}) => (
  <div
    className="relative h-full w-full"
    style={{ transform: "rotate(-30deg)" }}
  >
    <Swiper
      ref={useRef(null)}
      normalizeSlideIndex={true}
      resistanceRatio={0}
      speed={speed}
      autoplay={autoplay}
      modules={[effect]}
      direction="vertical"
      slidesPerView={"auto"}
      resistance={false}
      loop={true}
      className="swiper_container flex max-h-[500px]"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="overflow-hidden rounded-xl p-4">
          <Image
            src={img}
            alt="nft"
            width={200}
            height={250}
            className="rounded-lg object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
