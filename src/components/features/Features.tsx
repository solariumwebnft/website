import React, { useRef } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

import { FeaturesData } from "@/data/FeaturesData";
const Features = () => {
  const ref = useRef<any>(null);
  const { content, buttonImages, title, subtitle } = FeaturesData();

  return (
    <main
      className="h-full w-full justify-center px-12 pb-48 text-white lg:px-32"
      id="about-us"
    >
      <div className="flex justify-center text-center font-barlow text-h3 md:text-[1.875rem] lg:text-[2.8125rem]">
        {title}
      </div>
      <div className="flex justify-center text-center font-barlow text-p16 md:px-40">
        <p className="max-w-[730px] py-4">{subtitle}</p>
      </div>
      <motion.div ref={ref} className="xl:pl-32">
        <StickyScroll content={content} buttonImages={buttonImages} />
      </motion.div>
    </main>
  );
};

export default Features;
