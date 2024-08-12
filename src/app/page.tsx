"use client";
import { CallToAction } from "@/components/callToAction/CallToAction";
import Features from "@/components/features/Features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { GridLayoutMedia } from "@/components/layoutMedia/GridLayoutMedia";
import { Navbar } from "@/components/navbar";
import { NFTComponent } from "@/components/NTF/NFTComponent";
import { Slider } from "@/components/slider";
import { Stepbystep } from "@/components/stepbystep";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/3Dmodels/Scene"), {
  ssr: false,
});
/**
 *
 * @todo - [done] Fix nft card shaking while perspective effect.
 * @explain [done] We should reduce number of runs component run, and increase smoothness between one run to another.
 * @todo In Call to Action card we should find a way to limit of vetores rendered at the same time, this WILL cause crash!!
 * @todo In carousel component, when the images finish, despite the fact that the images are looped, the carousel stops pre-rendering.
 * @explain Lets try to find a better way to pre-render the images, we should understand better how 'loop' and end of carrousel is working in next.
 * @todo [done] in layoutMedia component fix the modafoka white board at the corners
 * @todo in LayoutMedia component we should find a better way to handle with selected content. (waiting for design)
 * @todo [done] When refresh or first load, add a loading screen with useTimeout to avoid flickering(possibly find a better way to handle with this please).
 * @todo fix opacity of svg bg image in features. The opacity should be partial, from bottom to center with no opacity.
 * @todo [done] When refresh or first load, add a loading screen with useTimeout to avoid flickering(possibly find a better way to handle with this please).
 * @todo [done] fix opacity of svg bg image in features. The opacity should be partial, from bottom to center with no opacity.
 * @todo ADD hover to svg image in features component
 * @todo [done] add correct theme
 * @todo [done] fix all site z-index.
 * @TODO [done] remove scroll of carrousell
 * @todo [done] fix features component height
 * @todo [done] fix the width of call to action component (PAY ATTENTION TO THE RESPONSIVE)
 * @todo [] add background to sessions
 * @todo SEO
 * @todo [done] icone da tab do navegador
 * @todo metadados
 * @todo [done] titulo do site
 * @todo descricao do site
 * @todo [done] site map
 * @todo robots.txt
 * @todo open graph
 */

export default function Home() {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 800);

  return (
    <main className="relative z-[0] m-0 flex h-full w-full flex-col items-center justify-between bg-background p-0">
      <div className="absolute inset-0 z-[-10] h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage2"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      {!loading ? (
        <div className="flex min-h-[100vh] min-w-[100vw] items-center justify-center">
          <div className="flex max-h-[50px] min-w-[50px] bg-white">
            carregando!
          </div>
        </div>
      ) : (
        <div className="max-w-full items-center">
          <motion.div
            className="px-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <Navbar />
          </motion.div>

          <motion.div
            className="px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Hero />
          </motion.div>
          <NFTComponent />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
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
