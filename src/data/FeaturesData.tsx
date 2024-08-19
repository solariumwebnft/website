import React from "react";
import { motion } from "framer-motion";
import Scene from "../components/3Dmodels/Scene";
import Base from "../components/3Dmodels/Base";
import CharacterScene from "../components/3Dmodels/CharacterScene";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export const FeaturesData = () => {
  const title = "What is Solarium";
  const subtitle =
    "Embark on the 23rd-century era, where humanity, forced to abandon Earth, seeks refuge in space colonies. Solarium, a cluster of uncharted solar systems, offers a unique opportunity for adventure and wealth.";

  const content = [
    {
      title: (
        <TextGenerateEffect
          words={`Overcome Challenges`}
          activeCard={1}
          index={1}
        />
      ),
      description: (
        <motion.div
          className="py-1 text-p16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Trade crypto assets, form strategic alliances, and influence the
          market through your decisions all while participating in a
          decentralized economy system.
        </motion.div>
      ),
      content: (
        <div className="relative -top-[5rem] left-14 h-[150%] w-[300px] md:-top-[2rem] md:h-[150%] lg:left-10 lg:h-[185%] lg:w-[400px]">
          <Base />
        </div>
      ),
    },
    {
      title: (
        <TextGenerateEffect
          words={`Extract Resources`}
          activeCard={0}
          index={0}
        />
      ),
      description: (
        <motion.div
          className="py-1 text-p16"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Strengthen your defenses against alien threats and optimize your
          operations to dominate the galactic economy.
        </motion.div>
      ),
      content: (
        <div className="md-[h-120%] sm:bottom-15 relative bottom-10 left-14 h-[150%] w-[300px] md:bottom-10 md:top-10 lg:left-12 lg:h-[180%] lg:w-[400px]">
          <Scene />
        </div>
      ),
    },
    {
      title: (
        <TextGenerateEffect
          words={`Discover new planets`}
          activeCard={2}
          index={2}
        />
      ),
      description: (
        <motion.div
          className="py-1 text-p16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Resist challenging conditions as you unravel the mysteries of the
          universe and encounter remnants of alien civilizations.
        </motion.div>
      ),
      content: (
        <div className="md-[h-120%] relative bottom-0 left-14 h-[120%] w-[300px] md:bottom-0 md:left-14 md:top-10 lg:bottom-10 lg:left-10 lg:h-[170%] lg:w-[400px]">
          <CharacterScene />
        </div>
      ),
    },
  ];

  const buttonImages = ["/cristal.svg", "/cristal.svg", "/character.svg"];

  return { content, buttonImages, title, subtitle };
};
