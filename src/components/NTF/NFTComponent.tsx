"use client";
import Image from "next/image";
import React from "react";
import image from "../../../assets/images/murangu.webp";
import { FaHeart } from "react-icons/fa";
import { GlareCard } from "../ui/glare-card";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { NFTCardContent } from "@/data/NFTCardContent";

export function NFTComponent() {
  const { checks, subTitle, title } = NFTCardContent();
  const words = "The World’s Leading Cryptocurrency Platform";
  return (
    <main className="my-[6.4rem] mb-[10rem] flex w-full justify-center gap-8 px-8 lg:gap-40">
      <section className="flex flex-col justify-center md:max-w-[700px]">
        <div className="space-y-6 text-white">
          <h1 className="font-bold md:text-[30px] lg:text-[54px]">{title}</h1>
          <h2 className="font-thin">{subTitle}</h2>
          <div className="space-y-2">
            {checks.map((check) => {
              return (
                <p key={check} className="flex items-center gap-2">
                  <div className="text-primary">
                    <FaCheck />
                  </div>
                  {check}
                </p>
              );
            })}
          </div>
        </div>
        <Button className="button-glass mt-8 max-w-fit">
          Start collection
        </Button>
      </section>
      <section className="hidden h-full justify-center md:relative md:flex">
        <GlareCard className="relative mx-auto hidden flex-col items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg md:flex">
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
                <p className="text-xs">Created By:</p>
                <p className="font-bold">NewKillua</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaHeart className="text-pink-500" />
              <p className="text-xs">02h 04m 56s</p>
            </div>
          </div>
        </GlareCard>
      </section>
    </main>
  );
}
