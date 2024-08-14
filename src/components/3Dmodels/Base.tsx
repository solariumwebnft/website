"use client";
import { useGLTF, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import Model from "./Model";
import ModelBase from "./ModelBase";

useGLTF.preload("/medical_tube.glb");

export default function Base() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        position: [15, 25, 60],
        fov: 75,
        near: 0.5,
        far: 75,
      }}
    >
      <directionalLight position={[-3, -2, 5]} intensity={8} />
      <Suspense fallback={null}>
        <ModelBase />
      </Suspense>
    </Canvas>
  );
}

// export default function Base() {
//   return (
//     <Canvas
//       gl={{ antialias: true }}
//       dpr={[1, 1.5]}
//       camera={{
//         position: [15, 15, 60],
//         fov: 75,
//         near: 0.5,
//         far: 75,
//       }}
//     >
//       <directionalLight position={[-3, -2, 5]} intensity={8} />
//       <Suspense fallback={null}>
//         <ModelBase />
//       </Suspense>
//     </Canvas>
//   );
// }
