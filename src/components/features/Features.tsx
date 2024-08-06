import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const Features = () => {
  const content = [
    {
      title: <TextGenerateEffect words={`PIKACHU`} activeCard={0} index={0} />,
      description: (
        <TextGenerateEffect
          words={`aqui veremos mtas informacoes sobre o pica`}
          activeCard={2}
          index={2}
        />
      ),
      content: (
        <Image
          src="/pokemon-1.svg"
          width={400}
          height={400}
          className="svg-image h-[100%] md:h-[90%]"
          alt="linear board demo"
        />
      ),
    },
    {
      title: (
        <TextGenerateEffect words={`BUMBAZAURU `} activeCard={1} index={1} />
      ),
      description: (
        <TextGenerateEffect
          words={`aqui veremos mtas informacoes sobre o bumbazaru`}
          activeCard={2}
          index={2}
        />
      ),
      content: (
        <Image
          src="/pokemon-2.svg"
          width={400}
          height={400}
          className="svg-image h-[100%] md:h-[90%]"
          alt="linear board demo"
        />
      ),
    },
    {
      title: <TextGenerateEffect words={`COMEDIAH`} activeCard={2} index={2} />,
      description: (
        <TextGenerateEffect
          words={`aqui veremos mtas informacoes sobre o comedia`}
          activeCard={2}
          index={2}
        />
      ),
      content: (
        <Image
          src="/pokemon-3.svg"
          width={400}
          height={400}
          className="svg-image h-[100%] md:h-[90%]"
          alt="linear board demo"
        />
      ),
    },
  ];

  const buttonImages = ["/pokemon-1.svg", "/pokemon-2.svg", "/pokemon-3.svg"];

  return (
    <main className="h-full justify-center gap-20 px-8 text-white">
      <div className="flex justify-center text-center text-4xl">
        logo Solarium
      </div>{" "}
      <div className="flex justify-center text-center text-sm lg:max-w-[900px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus
        ornare, iaculis dui non, rhoncus leo. Duis ut neque mi. Proin a
        convallis ipsum
      </div>
      <StickyScroll content={content} buttonImages={buttonImages} />
    </main>
  );
};

export default Features;
