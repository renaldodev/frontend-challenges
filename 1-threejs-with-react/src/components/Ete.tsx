import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.SkinnedMesh
    Object_7: THREE.SkinnedMesh
    Object_8: THREE.SkinnedMesh
    Object_9: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Object_11: THREE.SkinnedMesh
    Object_12: THREE.SkinnedMesh
    _rootJoint: THREE.Bone
  }
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'mixamo.com'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/ete.gltf') as GLTFResult
  //const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={541.61}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_6.geometry}
            material={nodes.Object_6.material}
            skeleton={nodes.Object_6.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={nodes.Object_7.material}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            material={nodes.Object_8.material}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_9.geometry}
            material={nodes.Object_9.material}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_10.geometry}
            material={nodes.Object_10.material}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_11.geometry}
            material={nodes.Object_11.material}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_12.geometry}
            material={nodes.Object_12.material}
            skeleton={nodes.Object_12.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ete.gltf')
