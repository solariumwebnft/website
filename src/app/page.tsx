import { CallToAction } from "@/components/callToAction/CallToAction";
import { Navbar } from "@/components/navbar";
import { Slider } from "@/components/slider";
import { SparklesCore } from "@/components/ui/sparkles";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-between bg-black p-0">
      <div className="absolute inset-0 h-full w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
      </div>
      <Navbar />
      <Slider />
      <CallToAction />
      <CallToAction />
    </main>
  );
}
