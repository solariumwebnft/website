import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

export default function CharacterModel() {
  const group = useRef<Group>(null);
  const { scene, materials, animations } = useGLTF("/character.glb");
  const { actions, mixer } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  // useEffect(() => {
  //   if (actions) {
  //     // Play the first animation in the GLB file by default
  //     const action = actions[Object.keys(actions)[0]];
  //     if (action) {
  //       action.play();
  //     }
  //   }

  //   return () => {
  //     if (mixer) {
  //       mixer.stopAllAction();
  //     }
  //   };
  // }, [actions, mixer]);

  return (
    <group ref={group} scale={[22, 22, 22]}>
      <primitive object={scene} />
    </group>
  );
}
