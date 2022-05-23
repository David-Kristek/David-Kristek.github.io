import * as THREE from "three";
import React, {
  useRef,
  useMemo,
  useEffect,
  useState,
  Suspense,
  useLayoutEffect,
} from "react";
import { useGLTF, useAnimations, MeshWobbleMaterial } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { invalidate, useFrame } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.SkinnedMesh;
    Cube004_1: THREE.SkinnedMesh;
    Cube004_2: THREE.SkinnedMesh;
    Bone002: THREE.Bone;
    Helper_Bone: THREE.Bone;
    Arm_Cont_L002: THREE.Bone;
    Arm_Cont_L001: THREE.Bone;
    back_food_L001: THREE.Bone;
    back_food_R001: THREE.Bone;
    Arm_Cont_R001: THREE.Bone;
    Bone001: THREE.Bone;
    back_food_L: THREE.Bone;
    back_food_R: THREE.Bone;
    Cont_tail001: THREE.Bone;
    Cont_tail002: THREE.Bone;
    Bone004: THREE.Bone;
    Arm_Cont_L: THREE.Bone;
    Arm_Cont_R: THREE.Bone;
    pelvic_2: THREE.Bone;
    Hand_L: THREE.Bone;
    Hand_R: THREE.Bone;
    root: THREE.Bone;
  };
  materials: {
    EYES: THREE.MeshStandardMaterial;
    Game_dragon: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "idle Pose";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
interface Props {
  width: number;
}
export default function Model({ width }: Props) {
  const group = useRef<THREE.Group>();
  // @ts-ignore
  const { nodes, materials, animations } = useGLTF(
    "/dragon.gltf"
  ) as GLTFResult;
  const direction = useRef(false);
  // useFrame(() => {
  //   if (!group.current) return;

  //   if (group.current?.rotation.y < 0.5 || group.current?.rotation.y > 1.5) {
  //     direction.current = !direction.current;
  //   }
  //   group.current?.rotateY(direction.current ? 0.0003 : -0.0003);
  // });

  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group);
  const [resp, setResp] = useState<{
    scale: [x: number, y: number, z: number];
    position: [x: number, y: number, z: number];
  }>();
  const resizeHandler = () => {
    if (!group.current) return;
    const width = window.innerWidth;
    setResp(() => {
      if (width > 1536)
        return { scale: [1.1, 1.3, 1.3], position: [-80, -10, 60] };
      if (width > 1280) return { scale: [0.8, 1, 1], position: [-80, -5, 40] };
      if (width > 1023)
        return { scale: [0.7, 0.7, 0.7], position: [-80, -5, 40] };
      if (width > 768)
        return { scale: [1.1, 1.3, 1.3], position: [-80, -5, 52] };
      if (width > 500)
        return { scale: [1.1, 1.3, 1.3], position: [-80, -20, 50] };
      return { scale: [0.6, 1, 1], position: [-80, -20, 50] };
    });
  };
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", () => {
      const scroll = window.pageYOffset;
      if (!group.current) return;
      group.current.rotation.y = scroll * 0.002 + 0.6; 
      
    })
    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <group
      ref={group}
      dispose={null}
      scale={resp?.scale}
      castShadow
      position={resp?.position}
      rotation={[0, 0.6, 0]}
    >
      <group rotation={[0.01, 0, 0]}>
        <primitive object={nodes.Bone002} />
        <primitive object={nodes.Helper_Bone} />
        <primitive object={nodes.Arm_Cont_L002} />
        <primitive object={nodes.Arm_Cont_L001} />
        <primitive object={nodes.back_food_L001} />
        <primitive object={nodes.back_food_R001} />
        <primitive object={nodes.Arm_Cont_R001} />
        <primitive object={nodes.Bone001} />
        <primitive object={nodes.back_food_L} />
        <primitive object={nodes.back_food_R} />
        <primitive object={nodes.Cont_tail001} />
        <primitive object={nodes.Cont_tail002} />
        <primitive object={nodes.Bone004} />
        <primitive object={nodes.Arm_Cont_L} />
        <primitive object={nodes.Arm_Cont_R} />
        <primitive object={nodes.pelvic_2} />
        <primitive object={nodes.Hand_L} />
        <primitive object={nodes.Hand_R} />
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Cube004.geometry}
          material={materials.EYES}
          skeleton={nodes.Cube004.skeleton}
          castShadow
        />
        <skinnedMesh
          geometry={nodes.Cube004_1.geometry}
          material={materials.Game_dragon}
          skeleton={nodes.Cube004_1.skeleton}
          castShadow
        >
          <meshStandardMaterial color={"#3E65FB"} />
        </skinnedMesh>
        <skinnedMesh
          geometry={nodes.Cube004_2.geometry}
          material={materials["Material.001"]}
          skeleton={nodes.Cube004_2.skeleton}
          castShadow
        >
          <meshStandardMaterial color={"#7493E1"} />
        </skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload("/dragon.gltf");
