"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { NFTCardContent } from "@/data/NFTCardContent";
import NFTCard from "./NFTCard";
import { Input } from "../ui/input";
import { GoArrowUpRight } from "react-icons/go";

export function NFTComponent() {
  const [inputValue, setInputValue] = useState<number>(1);

  //substitua a string pela response com a session do usuario
  const session = "session.uid";

  const buttonData = session ? "Start Collecting" : "Connect Wallet";

  const { checks, subTitle, title } = NFTCardContent();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (!isNaN(value)) {
      setInputValue(value);
    }
  };

  const handleValueChange = (value: number) => {
    setInputValue(value);
  };

  return (
    <main className="mt-[112px] flex w-full flex-col-reverse justify-center gap-8 px-8 md:flex-row lg:gap-40">
      <section className="flex flex-col justify-center md:max-w-[700px]">
        <div className="space-y-6 text-white">
          <h1 className="font-barlow text-h2 md:text-[2.1875rem] lg:text-[3.375rem]">
            {title}
          </h1>
          <h2 className="font-roboto-mono text-p16">{subTitle}</h2>
          <div className="space-y-2">
            {checks.map((check) => (
              <p
                key={check}
                className="flex items-center gap-2 font-barlow text-p16"
              >
                <div className="text-primary">
                  <FaCheck />
                </div>
                {check}
              </p>
            ))}
          </div>
        </div>
        <div className="gap-4 md:flex">
          <Button className="button-glass mt-8 w-full gap-2 font-barlow font-bold md:max-w-fit">
            {buttonData} <GoArrowUpRight size="23px" />
          </Button>
          <Input
            className="mt-4 md:mt-8"
            placeholder="Choose"
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onValueChange={handleValueChange}
          />
        </div>
      </section>
      <NFTCard inputValue={inputValue} />
    </main>
  );
}
