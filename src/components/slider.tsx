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

import image from "../../assets/images/murangu.webp";
import Image, { StaticImageData } from "next/image";
import { Button } from "./ui/button";

register();
const images: StaticImageData[] = [
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
  image,
];

export const Slider = () => {
  const swiperElRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlideClick = (index: number) => {
    if (swiperInstance) {
      const realIndex = swiperInstance.realIndex;
      swiperInstance.slideToLoop(index);
      setActiveIndex(realIndex);
    }
  };

  return (
    <div className="container mx-0 px-0">
      <Swiper
        ref={swiperElRef}
        onSwiper={setSwiperInstance}
        effect={"coverflow"}
        freeMode={{
          enabled: true,
          sticky: true,
          momentum: true,
          momentumRatio: 0.5,
          momentumBounce: false,
        }}
        normalizeSlideIndex={true}
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
          enabled: true,
        }}
        speed={800}
        threshold={9}
        touchMoveStopPropagation={true}
        onClick={(swiper) => {
          console.log("swiper", swiper);
        }}
        autoplay={{ delay: 5000 }}
        modules={[EffectCoverflow, Pagination, Navigation, EffectCards]}
        cardsEffect={{
          rotate: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        resistance={false}
        loop={true}
        className="swiper_container"
        observer={true}
        observeParents={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.length > 0
          ? images.map((src, index) => (
              <SwiperSlide
                onClick={() => handleSlideClick(index)}
                key={index}
                className="rounded-xl bg-gray-800 p-4"
              >
                <div className="overflow-hidden rounded-xl hover:shadow-lg">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="z-50 scale-105 transform transition-transform duration-300 ease-in-out will-change-transform hover:scale-125"
                    width={500}
                    height={500}
                  />
                </div>
                <h1 className="mt-3 flex justify-center rounded-md text-xl text-white">
                  titulo
                </h1>
              </SwiperSlide>
            ))
          : null}

        <div className="slider-controler flex justify-between py-4">
          {/* <div className="swiper-button-prev slider-arrow ">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </div>
          <div className="swiper-pagination " /> */}
        </div>
      </Swiper>
    </div>
  );
};
