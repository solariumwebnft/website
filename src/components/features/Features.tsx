import React, { useRef } from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { motion } from "framer-motion";

import { FeaturesData } from "@/data/FeaturesData";
const Features = () => {
  const ref = useRef<any>(null);
  const { content, buttonImages, title, subtitle } = FeaturesData();

  return (
    <main className="h-full w-full justify-center px-12 pb-48 text-white lg:px-32">
      <div className="font-barlow text-h3 flex justify-center text-center md:text-[1.875rem] lg:text-[2.8125rem]">
        {title}
      </div>
      <div className="text-p16 font-barlow flex justify-center text-center md:px-40">
        {subtitle}
      </div>
      <motion.div ref={ref} className="xl:pl-32">
        <StickyScroll content={content} buttonImages={buttonImages} />
      </motion.div>
    </main>
  );
};

export default Features;
