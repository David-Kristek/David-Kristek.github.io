/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    uploads_files_669181_cat_01_color05: THREE.Mesh
  }
  materials: {
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export default function Cat({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/cat.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.uploads_files_669181_cat_01_color05.geometry}
        material={materials['Material.002']}
        position={[3.72, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/cat.gltf')
