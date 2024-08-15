import * as React from "react";
import { FaHeart } from "react-icons/fa";
import { GlareCard } from "../ui/glare-card";
import Image from "next/image";
import image from "/public/NFTCard.webp";
import { NFTCardData } from "@/data/NFTCardData";

interface NFTCardProps {
  inputValue: number;
}

const NFTCard: React.FC<NFTCardProps> = ({ inputValue }) => {
  const { info, subtitle, title } = NFTCardData();

  const multipliedInfo = info * inputValue;

  return (
    <section className="relative h-full justify-center sm:flex">
      <GlareCard className="relative mx-auto flex flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          className="transform transition hover:scale-110"
          alt="NFT image"
        />
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-black bg-opacity-50 p-2 text-white">
          <div className="flex items-center space-x-2">
            <Image
              src={image}
              alt="profile"
              height={180}
              width={180}
              className="h-8 w-8 transform rounded-full transition hover:scale-105"
            />
            <div>
              <p className="text-xs">{title}</p>
              <p className="font-bold">{subtitle}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeart className="text-pink-500" />
            <p className="text-lg">{`$ ${multipliedInfo},00`}</p>
          </div>
        </div>
      </GlareCard>
    </section>
  );
};

export default NFTCard;
