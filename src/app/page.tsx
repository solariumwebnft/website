import { Slider } from "@/components/slider";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 md:p-24">
      <Slider />
    </main>
  );
}
