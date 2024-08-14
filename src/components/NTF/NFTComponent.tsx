"use client";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { FaCheck } from "react-icons/fa";
import { NFTCardContent } from "@/data/NFTCardContent";
import NFTCard from "./NFTCard";
import { Input } from "../ui/input";

export function NFTComponent() {
  const { checks, subTitle, title } = NFTCardContent();

  //trocar pela sessao do usuario, apos pegar a sessao do usuario.
  const session = "session.uid";
  //const session = undefined;

  const buttonData = session ? "Create NFT" : "Connect Wallet";

  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value;
      //aqui recebemos o valor do input ao clicar no botao. Apenas um esqueleto da funcao a fim de exemplificar a interacao entre os componentes.
      console.log("Input value:", inputValue);
    }
  };

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
        <div className="column gap-4 md:flex">
          <Button
            className="button-glass mt-8 w-full md:max-w-fit"
            onClick={handleButtonClick}
          >
            {buttonData}
          </Button>
          {session ? (
            <Input
              ref={inputRef}
              className="mt-8"
              placeholder="Choose"
              type="number"
            />
          ) : (
            <></>
          )}
        </div>
      </section>
      <NFTCard />
    </main>
  );
}
