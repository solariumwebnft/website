import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";

export default function ModelBase() {
  const group = useRef<Group>(null);
  const { scene, materials, animations } = useGLTF("/medical_tube.glb");
  materials.PolygonScifiSpace_Material_Glass_Blue.transparent = true;

  const { actions, mixer } = useAnimations(animations, group);

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.0025;
    }
  });

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }

    return () => {
      if (mixer) {
        mixer.stopAllAction();
      }
    };
  }, [actions, mixer]);

  return (
    <group ref={group} scale={[9, 9, 9]}>
      <primitive object={scene} />
      <directionalLight color={"blue"} intensity={1.5} position={[5, 10, 5]} />
      <ambientLight intensity={0.3} />
    </group>
  );
}
