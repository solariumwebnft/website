import React, { useRef } from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const ref = useRef<any>(null);

  const isInView = useInView(ref, { margin: "-500px" });
  const content = [
    {
      title: <TextGenerateEffect words={`PIKACHU`} activeCard={0} index={0} />,
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
    <main className="h-full justify-center px-8 text-white">
      <div className="flex justify-center text-center text-4xl">
        logo Solarium
      </div>
      <div className="text-md flex justify-center px-40 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus
        ornare, iaculis dui non, rhoncus leo. Duis ut neque mi. Proin a
        convallis ipsum
      </div>
      <motion.div
        ref={ref}
        animate={isInView ? { opacity: 1, x: -50 } : { opacity: 0, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StickyScroll content={content} buttonImages={buttonImages} />
      </motion.div>
    </main>
  );
};

export default Features;
