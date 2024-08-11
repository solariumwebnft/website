import React, { useRef } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "framer-motion";
import Scene from "../3Dmodels/Scene";
import Base from "../3Dmodels/Base";
import CharacterScene from "../3Dmodels/CharacterScene";

const Features = () => {
  const ref = useRef<any>(null);

  const content = [
    {
      title: <TextGenerateEffect words={`PIKACHU`} activeCard={1} index={1} />,
      description: (
        <motion.div
          className="py-3 text-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o pica
        </motion.div>
      ),
      content: (
        <div className="relative bottom-20 left-12 right-0 h-[150%] w-[300px] md:left-0 md:right-12 md:w-[480px]">
          <Base />
        </div>
      ),
    },
    {
      title: (
        <TextGenerateEffect words={`BUMBAZAURU `} activeCard={0} index={0} />
      ),
      description: (
        <motion.div
          className="py-3 text-xl"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o bumbazaru
        </motion.div>
      ),
      content: (
        <div className="relative bottom-10 left-12 h-[200%] w-[300px] md:bottom-0 md:w-[400px]">
          <Scene />
        </div>
      ),
    },
    {
      title: <TextGenerateEffect words={`COMEDIAH`} activeCard={2} index={2} />,
      description: (
        <motion.div
          className="py-3 text-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o comedia
        </motion.div>
      ),
      content: (
        <div className="relative bottom-10 left-10 h-[200%] w-[300px] md:bottom-0 md:w-[400px]">
          <CharacterScene />
        </div>
      ),
    },
  ];
  const buttonImages = ["/base.svg", "/pokemon-4.svg", "/character.svg"];
  return (
    <main className="h-full w-full justify-center px-12 py-48 text-white lg:px-32">
      <div className="flex justify-center text-center text-4xl">
        logo Solarium
      </div>
      <div className="text-md flex justify-center text-center md:px-40">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus
        ornare, iaculis dui non, rhoncus leo. Duis ut neque mi. Proin a
        convallis ipsum
      </div>
      <motion.div ref={ref}>
        <StickyScroll content={content} buttonImages={buttonImages} />
      </motion.div>
    </main>
  );
};

export default Features;
