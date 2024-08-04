"use client";

import Image from "next/image";
import React from "react";
import image from "../../../assets/images/murangu.webp";
import { FaHeart } from "react-icons/fa";
import { GlareCard } from "../ui/glare-card";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { Highlight } from "../ui/hero-highlight";

export function NFTComponent() {
  return (
    <main className="flex w-full justify-center gap-12 p-8 lg:gap-40">
      <section className="flex flex-col justify-center gap-4 md:max-w-[600px]">
        <div className="space-y-4 text-white">
          <h1 className="text-4xl font-bold">
            <Highlight>The World’s Leading Cryptocurrency Platform</Highlight>
          </h1>
          <h2 className="font-thin">
            Buy and sell NFTs from the world’s top artists. More than 1.000
            premium digital artworks are available to be yours!
          </h2>
          <p className="flex items-center gap-2">
            <FaCheck />
            Trusted by more than 80M users world-wide
          </p>
          <p className="flex items-center gap-2">
            <FaCheck />
            The industry’s most comprehensive insurance coverage and verified
            proof of reserves
          </p>
          <p className="flex items-center gap-2">
            <FaCheck />
            Leader in regulatory compliance and security certifications
          </p>
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
