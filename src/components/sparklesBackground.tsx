import React from "react";
import { SparklesCore } from "./ui/sparkles";

export const SparklesBackground = () => {
  return (
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
  );
};
