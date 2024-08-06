import { CallToAction } from "@/components/callToAction/CallToAction";
import Features from "@/components/features/Features";
import { Footer } from "@/components/footer";
import { GridLayoutMedia } from "@/components/layoutMedia/GridLayoutMedia";
import { Navbar } from "@/components/navbar";
import { NFTComponent } from "@/components/NTF/NFTComponent";
import { Slider } from "@/components/slider";
import { Stepbystep } from "@/components/stepbystep";
import { SparklesCore } from "@/components/ui/sparkles";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 *
 * @todo - Fix nft card shaking while perspective effect.
 * @explain We should reduce number of runs component run, and increase smoothness between one run to another.
 * @todo In Call to Action card we should find a way to limit of vetores rendered at the same time, this WILL cause crash!!
 * @todo In carousel component, when the images finish, despite the fact that the images are looped, the carousel stops pre-rendering.
 * @explain Lets try to find a better way to pre-render the images, we should understand better how 'loop' and end of carrousel is working in next.
 * @todo in layoutMedia component fix the modafoka white board at the corners
 * @todo in LayoutMedia component we should find a better way to handle with selected content. (waiting for design)
 * @todo When refresh or first load, add a loading screen with useTimeout to avoid flickering(possibly find a better way to handle with this please).
 * @todo fix opacity of svg bg image in features. The opacity should be partial, from bottom to center with no opacity.
 * @todo ADD hover to svg image in features component
 * @todo fix all site z-index.
 */

export default function Home() {
  return (
    <main className="relative z-[0] m-0 flex h-full w-full flex-col items-center justify-between bg-black p-0">
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
      <Navbar />
      <NFTComponent />
      <Slider />
      <Features />
      <Stepbystep />
      <GridLayoutMedia />
      <CallToAction />
      <Footer />
    </main>
  );
}
