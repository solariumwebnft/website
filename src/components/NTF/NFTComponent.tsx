"use client";
import React from "react";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { NFTCardContent } from "@/data/NFTCardContent";
import NFTCard from "./NFTCard";

export function NFTComponent() {
  const { checks, subTitle, title, button } = NFTCardContent();
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
        <Button className="button-glass mt-8 max-w-fit">{button}</Button>
      </section>
      <NFTCard />
    </main>
  );
}
