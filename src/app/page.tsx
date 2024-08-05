import { CallToAction } from "@/components/callToAction/CallToAction";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
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

export default function Home() {
  return (
    <main className="relative m-0 flex h-full w-full flex-col items-center justify-between bg-black p-0">
      <div className="absolute inset-0 h-full w-full">
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
      <Hero />
      <NFTComponent />
      <Slider />
      <CallToAction />
      <GridLayoutMedia />
      <Stepbystep />
      <Footer />
    </main>
  );
}
