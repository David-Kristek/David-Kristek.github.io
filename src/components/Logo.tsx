import * as THREE from "three";
import React, { Suspense, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "react-three-fiber";

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
    Cylinder: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Logo(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>();
  // useFrame(() => {
  //   if (group && group.current)
  //     group.current.rotation.y += 0.01;
  // });
  function scrollEvent(this: Window, ev: Event) {
    if (group && group.current) group.current.rotation.y = this.window.pageYOffset * 0.005;
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  // @ts-ignore
  const { nodes, materials } = useGLTF("/mylogo.gltf") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Text.geometry}
        material={materials["Material.002"]}
        position={[-0.7, 0.65, -0.05]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2, 2, 2]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        position={[0.62, 1.4, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[2, 0.2, 2]}
      />
    </group>
  );
}

useGLTF.preload("/mylogo.gltf");
