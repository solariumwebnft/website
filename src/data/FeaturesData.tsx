import React from "react";
import { motion } from "framer-motion";
import Scene from "../components/3Dmodels/Scene";
import Base from "../components/3Dmodels/Base";
import CharacterScene from "../components/3Dmodels/CharacterScene";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const FeaturesData = () => {
  const title = "logo Solarium";
  const subtitle =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus";

  const content = [
    {
      title: <TextGenerateEffect words={`PIKACHU`} activeCard={1} index={1} />,
      description: (
        <motion.div
          className="py-3 text-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o pica
        </motion.div>
      ),
      content: (
        <div className="relative bottom-[4rem] left-14 h-[150%] w-[300px] md:h-[190%] lg:left-10 lg:w-[400px]">
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
          className="py-3 text-sm"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o bumbazaru
        </motion.div>
      ),
      content: (
        <div className="md-[h-120%] sm:bottom-15 relative bottom-10 left-14 h-[150%] w-[300px] md:bottom-10 md:top-10 lg:left-12 lg:h-[180%] lg:w-[400px]">
          <Scene />
        </div>
      ),
    },
    {
      title: <TextGenerateEffect words={`COMEDIAH`} activeCard={2} index={2} />,
      description: (
        <motion.div
          className="py-3 text-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          aqui veremos mtas informacoes sobre o comedia
        </motion.div>
      ),
      content: (
        <div className="md-[h-120%] relative bottom-0 left-14 h-[120%] w-[300px] md:bottom-0 md:left-14 md:top-10 lg:bottom-10 lg:left-10 lg:h-[170%] lg:w-[400px]">
          <CharacterScene />
        </div>
      ),
    },
  ];

  const buttonImages = ["/base.svg", "/pokemon-4.svg", "/character.svg"];

  return { content, buttonImages, title, subtitle };
};
