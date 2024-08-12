import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function Model() {
  const group = useRef<Group>(null);
  const { scene, materials } = useGLTF("/model2.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} scale={[4, 4, 4]}>
      <primitive object={scene} />
    </group>
  );
}
