"use client";
import { CallToAction } from "@/components/callToAction/CallToAction";
import Features from "@/components/features/Features";
import { Footer } from "@/components/footer/footer";
import { GridLayoutMedia } from "@/components/layoutMedia/GridLayoutMedia";

import { NFTComponent } from "@/components/NTF/NFTComponent";

import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Hero } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { Slider } from "@/components/slider/slider";
import { Stepbystep } from "@/components/stepbystep/stepbystep";
import { LoadingLogo } from "@/components/loadingLogo";
import { SparklesBackground } from "@/components/sparklesBackground";

export default function Home() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 800);

  return (
    <main className="relative z-[0] m-0 flex h-full w-full flex-col items-center justify-between bg-background p-0">
      <SparklesBackground />
      {!loading ? (
        <LoadingLogo />
      ) : (
        <div className="max-w-full items-center">
          <Navbar />

          <motion.div
            className="px-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Hero />
          </motion.div>
          <NFTComponent />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Slider />
          </motion.div>

          <Features />
          <Stepbystep />
          <GridLayoutMedia />
          <CallToAction />
          <Footer />
        </div>
      )}
    </main>
  );
}
