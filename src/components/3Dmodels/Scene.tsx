"use client";
import { useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Model from "./Model";

useGLTF.preload("/model2.glb");

export default function Scene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 60],
        fov: 75,
        near: 0.1,
        far: 75,
      }}
    >
      <directionalLight position={[-3, -2, 5]} intensity={3} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
