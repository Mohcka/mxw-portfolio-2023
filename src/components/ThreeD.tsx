"use client";

import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo } from "react";
import { useRef, useState } from "react";
import { Model } from "@/components/Models/T";
import { motion } from "framer-motion-3d";
import { Model as Laptop } from "@/components/Models/Laptop";
import { Model as Phone } from "@/components/Models/Phone";
import { Model as VRHeadset } from "@/components/Models/VRHeadset";
import { type Variants } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useBreakpoint } from "@/hooks/breakpoints";
import { followUpAnimationDelay } from "@/data/constants";

function degrees_to_radians(degrees: number) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

type Props = {};

const cgiVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  floating: {
    z: [-1, 1],
    transition: {
      delay: 4,
      z: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
  tap: {
    scale: 0.6,
    transition: {
      duration: 1,
      ease: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const ThreeD = (props: Props) => {
  const { isAboveSm } = useBreakpoint("sm");
  const { isAboveLg } = useBreakpoint("lg");
  const videoURL = "videos/slideshow.webm";

  const video = useMemo(() => {
    const vid = document.createElement("video");
    vid.src = videoURL;
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  }, []);

  const videoTexture = useMemo(() => {
    const texture = new THREE.VideoTexture(video);
    texture.flipY = false;
    return texture;
  }, [video]);

  const sceneScale = 0.5;

  const animationDelay = useMemo(() => {
    return followUpAnimationDelay;
  }, []);

  return (
    <>
      <Canvas shadows>
        {isAboveLg && <OrbitControls enableZoom={false} />}
        <ambientLight intensity={0.5} />
        <pointLight intensity={70} position={[1.5, 1.5, 1.5]} />
        {/* Place a sphere at the same point as he light */}
        {/* <mesh position={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[0.1, 32, 32]} />
      </mesh> */}
        <motion.group
          rotation={[Math.PI / 2, 0, 0]}
          position={[-0.2, -1, -2]}
          initial={{ rotateZ: 0 }}
          animate={["rotating"]}
          variants={{
            rotating: {
              rotateZ: [
                THREE.MathUtils.degToRad(20),
                THREE.MathUtils.degToRad(-20),
              ],
              transition: {
                rotateZ: {
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                delay: 1.5,
              },
            },
          }}
        >
          {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
          {/* <Sphere position={[-1.5, 0, 1]} />
        <Cube position={[1.5, 0, 0.55]} /> */}
          {/* <Model position={[0, 1, -0.5]} /> */}
          <Suspense fallback={null}>
            <motion.group scale={isAboveSm ? 0.7 : 0.8}>
              <motion.group
                position={[0, -1.5, -0.5]}
                initial={{
                  z: 4.4,
                  opacity: 0,
                  rotateZ: degrees_to_radians(180),
                }}
                animate={{ z: -0.5, rotateZ: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 7,
                  delay: animationDelay + 0.2,
                }}
              >
                <Laptop
                  rotation={[
                    degrees_to_radians(-70),
                    degrees_to_radians(0),
                    degrees_to_radians(-10),
                  ]}
                  scale={1.5}
                  videoTexture={videoTexture}
                />
              </motion.group>
              <motion.group
                position={[-3, 1, -1]}
                initial={{
                  z: 3.9,
                  opacity: -1,
                  rotateZ: degrees_to_radians(180),
                }}
                animate={{ z: -1, rotateZ: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 7,
                  delay: animationDelay + 0.4,
                }}
              >
                <Phone
                  rotation={[degrees_to_radians(-10), 0, 0]}
                  scale={1.5}
                  videoTexture={videoTexture}
                />
                |
              </motion.group>
              <motion.group
                position={[3, 1.5, 0.3]}
                initial={{
                  z: 4.6,
                  opacity: 0,
                  rotateZ: degrees_to_radians(180),
                }}
                animate={{ z: 0.3, rotateZ: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 7,
                  delay: animationDelay,
                }}
              >
                <VRHeadset
                  rotation={[
                    degrees_to_radians(-110),
                    0,
                    degrees_to_radians(10),
                  ]}
                  scale={0.9}
                  videoTexture={videoTexture}
                />
              </motion.group>
            </motion.group>
          </Suspense>
        </motion.group>
      </Canvas>
      )
    </>
  );
};

export default ThreeD;
