"use client";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import image from "../../assets/images/murangu.webp";
import Image, { StaticImageData } from "next/image";

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

  const [preloadedImages, setPreloadedImages] = useState<StaticImageData[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      const promises = images.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = document.createElement("img");
          img.src = src.src;
          img.onload = () => resolve();
          img.onerror = () =>
            reject(new Error(`Failed to load image ${src.src}`));
        });
      });

      Promise.all(promises)
        .then(() => setPreloadedImages(images))
        .catch((err) => console.error("Failed to preload images", err));
    };

    preloadImages();
  }, []);

  return (
    <div className="container  mx-0 px-0">
      <Swiper
        ref={swiperElRef}
        effect={"coverflow"}
        freeMode={{
          enabled: true,
          sticky: true,
          momentum: true,
          momentumRatio: 0.5,
          momentumBounce: false,
        }}
        fadeEffect={{
          crossFade: true,
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
        speed={600}
        threshold={9}
        touchMoveStopPropagation={true}
        autoplay={{ delay: 2000 }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        pagination={{
          clickable: true,
          // renderBullet: function (index, className) {
          //   return `<span class="${className}">${index + 1}</span>`;
          // },

          // renderProgressbar: function (progressbarFillClass) {
          //   return '<span class="' + progressbarFillClass + '"></span>';
          // },
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
      >
        {preloadedImages.length > 0
          ? preloadedImages.map((src, index) => (
              <SwiperSlide key={index} className="rounded-xl p-4 bg-gray-800">
                <Image
                  src={src}
                  loading="lazy"
                  alt={`Slide ${index + 1}`}
                  className="rounded-xl"
                  width={500}
                  height={500}
                />
                <h1 className=" flex justify-center mt-3 rounded-md text-xl  text-white">
                  titulo
                </h1>
              </SwiperSlide>
            ))
          : null}

        <div className=" flex py-4 justify-between slider-controler">
          <div className=".swiper-button-prev.slider-arrow">
            <div>1</div>
          </div>
          <div className=".swiper-button-next.slider-arrow">
            <div>2</div>
          </div>
          <div className="swiper-pagination " />
        </div>
      </Swiper>
    </div>
  );
};
