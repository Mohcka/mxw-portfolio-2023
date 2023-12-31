/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\public\models\laptop.gltf -T -t 
Files: .\public\models\laptop.gltf [108.59KB] > laptop-transformed.glb [7.62KB] (93%)
*/

import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { followUpAnimationDelay } from "@/data/constants";

type GLTFResult = GLTF & {
  nodes: {
    laptop_base: THREE.Mesh;
    screen: THREE.Mesh;
  };
  materials: {};
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export function Model(
  props: JSX.IntrinsicElements["group"] & { videoTexture?: THREE.VideoTexture }
) {
  const { nodes, materials } = useGLTF("/models/laptop.glb") as GLTFResult;
  const texture: THREE.Texture = useLoader(
    THREE.TextureLoader,
    "textures/laptop_base_Diffuse.webp"
  );
  texture.flipY = false;
  const specularMap: THREE.Texture = useLoader(
    THREE.TextureLoader,
    "textures/laptop_base_Specular.webp"
  );
  const laptopMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        map: texture,
        specularMap: specularMap,
        shininess: 100,
      }),
    [texture, specularMap]
  );

  const { videoTexture } = props;

  // const videoURL = "videos/Sprite_Fright.webm";

  // const video = useMemo(() => {
  //   const vid = document.createElement("video");
  //   vid.src = videoURL;
  //   vid.crossOrigin = "Anonymous";
  //   vid.loop = true;
  //   vid.muted = true;
  //   vid.play();
  //   return vid;
  // }, []);

  // const videoTexture = useMemo(() => new THREE.VideoTexture(video), [video]);
  // videoTexture.flipY = false;

  // const videoMaterial = useMemo(
  //   () =>
  //     new THREE.MeshStandardMaterial({
  //       map: videoTexture,
  //       emissiveMap: videoTexture,
  //       side: THREE.DoubleSide,
  //     }),
  //   [videoTexture]
  // );

  const animationDelay = useMemo(() => followUpAnimationDelay, []);

  return (
    <group {...props} dispose={null}>
      <motion.mesh
        geometry={nodes.laptop_base.geometry}
        // material={laptopMaterial}
      >
        <motion.meshPhongMaterial
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: animationDelay + 0.35 }}
          map={texture}
          specularMap={specularMap}
        />
        <mesh
          geometry={nodes.screen.geometry}
          // material={videoMaterial}
          position={[0, 1.175, -1.266]}
        >
          <motion.meshPhongMaterial
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: animationDelay + 0.35 }}
            map={videoTexture}
            emissiveMap={videoTexture}
          />
        </mesh>
      </motion.mesh>
    </group>
  );
}

useGLTF.preload("/models/laptop.glb");
