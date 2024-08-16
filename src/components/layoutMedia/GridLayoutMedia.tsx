"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

import image1 from "../../../assets/images/image.png";
import image2 from "../../../assets/images/image1.png";
import image3 from "../../../assets/images/image4.png";
import image4 from "../../../assets/images/image3.png";
import image5 from "../../../assets/images/image4.png";
import image6 from "../../../assets/images/image5.png";
import image7 from "../../../assets/images/image6.png";
import image8 from "../../../assets/images/image7.png";
import image9 from "../../../assets/images/image8.png";
import image11 from "../../../assets/images/image0.png";
import image12 from "../../../assets/images/image11.png";
import image13 from "../../../assets/images/image12.png";
import image14 from "../../../assets/images/image13.png";
import { Button } from "../ui/button";

const images = [
  image1,
  image2,
  image5,
  image6,
  image3,
  image4,
  image7,
  image8,
  image9,
  image11,
  image12,
  image13,
  image14,
];

export const GridLayoutMedia = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const changeImage = (index: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeIn(true);
    }, 300);
  };

  const handlePrevious = () => {
    changeImage(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    changeImage(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="z-50 flex w-full flex-col items-center justify-center p-4 px-8 pb-0 pt-20">
      <h1 className="pb-[64px] text-center font-barlow text-h3 text-secondary md:text-start md:text-[1.875rem] lg:text-[2.8125rem]">
        Top Collections in Week
      </h1>
      <div className="relative flex h-[calc(100vw*9/16)] w-full max-w-[1030px] items-center justify-center overflow-hidden rounded-lg text-white md:h-[579.38px]">
        <Button
          onClick={handlePrevious}
          variant="preview"
          className="absolute left-6 z-30 h-10 w-10 -translate-x-1/2 transform rounded-full bg-background text-secondary"
        >
          <SlArrowLeft />
        </Button>

        <div
          className={`relative z-20 h-full w-full rounded-lg transition-opacity duration-500 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={images[currentIndex]}
            alt="nft"
            layout="fill"
            className="scale-100 transform rounded-lg transition"
          />
        </div>

        <Button
          onClick={handleNext}
          variant="preview"
          className="absolute right-6 z-30 h-10 w-10 translate-x-1/2 transform rounded-full bg-background text-secondary"
        >
          <SlArrowRight />
        </Button>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 2000 }}
        className="sm:space-between-[15px] md:space-between-[20px] mt-2 w-full max-w-[1030px]"
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <Button
              onClick={() => changeImage(index)}
              className="relative h-[100px] w-[180px] overflow-hidden rounded-md bg-transparent md:h-[140.625px] md:w-[250px] md:p-0"
              variant="preview"
            >
              <div className="h-full w-full p-0">
                <Image
                  src={image}
                  fill
                  alt={`nft-thumbnail-${index}`}
                  className="rounded-lg object-cover"
                />
              </div>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
