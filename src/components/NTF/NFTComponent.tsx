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
          <h1 className="font-barlow text-h2 md:text-[2.1875rem] lg:text-[3.375rem]">
            {title}
          </h1>
          <h2 className="font-roboto-mono text-p16">{subTitle}</h2>
          <div className="space-y-2">
            {checks.map((check) => {
              return (
                <p
                  key={check}
                  className="font-barlow text-p16 flex items-center gap-2"
                >
                  <div className="text-primary">
                    <FaCheck />
                  </div>
                  {check}
                </p>
              );
            })}
          </div>
        </div>
        <Button className="font-barlow button-glass mt-8 max-w-fit font-bold">
          {button}
        </Button>
      </section>
      <NFTCard />
    </main>
  );
}
