"use client";
import { useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/effect-cards";
import "swiper/css/thumbs";
import { EffectCards } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";
import { SliderContentData } from "@/data/SliderCardContent";

register();

export const Slider = () => {
  const swiperElRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const { cardContent } = SliderContentData();

  const handleSlideClick = (index: number) => {
    if (swiperInstance) {
      const realIndex = swiperInstance.realIndex;
      swiperInstance.slideToLoop(index);
      setActiveIndex(realIndex);
    }
  };

  return (
    <div className="container mx-0 max-w-[100vw] px-0 py-[176px] pb-[200px]">
      <Swiper
        ref={swiperElRef}
        onSwiper={setSwiperInstance}
        effect={"coverflow"}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 8,
          stretch: 9,
          depth: 100,
          modifier: 2.5,
        }}
        resistanceRatio={1}
        mousewheel={{
          enabled: false,
        }}
        speed={800}
        threshold={5}
        touchMoveStopPropagation={true}
        onClick={(swiper) => {
          console.log("swiper", swiper);
        }}
        autoplay={{ delay: 5000 }}
        modules={[EffectCoverflow, Pagination, Navigation, EffectCards]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
        centeredSlides={true}
        resistance={false}
        loop={true}
        className="swiper_container"
        observer={true}
        observeParents={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          480: { slidesPerView: 2 },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {cardContent.length > 0
          ? cardContent.map((content, index) => (
              <SwiperSlide
                onClick={() => handleSlideClick(index)}
                key={index}
                className="rounded-[20px] bg-card p-[10px] md:max-w-[500px] xl:max-w-[600px]"
              >
                <div className="overflow-hidden rounded-xl hover:shadow-lg">
                  <Image
                    src={content.src}
                    alt={`Slide ${index + 1}`}
                    className="z-10 scale-105 transform transition-transform duration-300 ease-in-out will-change-transform hover:scale-125"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="mb-2 mt-3">
                  <h1 className="flex justify-center rounded-md text-xl text-white">
                    {content.title}
                  </h1>
                  <div className="flex justify-center rounded-md text-xl text-white">
                    {content.price}
                  </div>
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};
