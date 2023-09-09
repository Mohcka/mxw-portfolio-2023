/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\public\t.glb -T -t 
Files: .\public\t.glb [3.03KB] > t-transformed.glb [1.31KB] (57%)
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { motion } from "framer-motion-3d";

function degrees_to_radians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh;
  };
  materials: {};
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/t-transformed.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <motion.mesh
        geometry={nodes.Plane.geometry}
        material={new THREE.MeshNormalMaterial()}
        rotation={[Math.PI / 2, 0, degrees_to_radians(360)]}
        position={[0, 0.32, 0]}
        scale={[0.75, 0.75, 0.75]}
        animate={["rotating"]}
        variants={{
          rotating: {
            rotateZ: 0,
            rotateY: 0.3,
            transition: {
              rotateZ: { duration: 10, ease: "linear", repeat: Infinity },
            },
          },
        }}
      />
    </group>
  );
}

useGLTF.preload("/t-transformed.glb");
