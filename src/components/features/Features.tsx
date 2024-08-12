import React, { useRef } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

import { FeaturesData } from "@/data/FeaturesData";
const Features = () => {
  const ref = useRef<any>(null);
  const { content, buttonImages, title, subtitle } = FeaturesData();

  return (
    <main className="h-full w-full justify-center px-12 py-48 text-white lg:px-32">
      <div className="flex justify-center text-center text-4xl">{title}</div>
      <div className="text-md flex justify-center text-center md:px-40">
        {subtitle}
      </div>
      <motion.div ref={ref}>
        <StickyScroll content={content} buttonImages={buttonImages} />
      </motion.div>
    </main>
  );
};

export default Features;
