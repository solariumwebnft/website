import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function ModelBase() {
  const group = useRef<Group>(null);
  const { scene, materials } = useGLTF("/base3d.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
