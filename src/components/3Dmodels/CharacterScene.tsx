"use client";
import { useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";

import CharacterModel from "./CharacterModel";

useGLTF.preload("/base3d.glb");

export default function CharacterScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        position: [10, 10, 60],
        fov: 75,
        near: 0.1,
        far: 75,
      }}
    >
      <directionalLight position={[-2, -2, 5]} intensity={5} />
      <Suspense fallback={null}>
        <CharacterModel />
      </Suspense>
    </Canvas>
  );
}
