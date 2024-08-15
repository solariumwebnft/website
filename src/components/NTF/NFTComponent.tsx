"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { NFTCardContent } from "@/data/NFTCardContent";
import NFTCard from "./NFTCard";
import { Input } from "../ui/input";

export function NFTComponent() {
  const [inputValue, setInputValue] = useState<number>(1);

  //substitua a string pela response com a session do usuario
  const session = "session.uid";

  const buttonData = session ? "Create NFT" : "Connect Wallet";

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
    <main className="my-[6.4rem] mb-[10rem] flex w-full flex-col-reverse justify-center gap-8 px-8 md:flex-row lg:gap-40">
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
                className="font-barlow text-p16 flex items-center gap-2"
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
          <Button className="font-barlow button-glass mt-8 w-full font-bold md:max-w-fit">
            {buttonData}
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
