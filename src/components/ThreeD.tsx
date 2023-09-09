"use client";

import { Canvas, MeshProps, useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useMemo } from "react";
import { useRef, useState } from "react";
import { Model } from "@/components/Models/T";
import { motion } from "framer-motion-3d";
import { Model as Laptop } from "@/components/Models/Laptop";
import { Model as Phone } from "@/components/Models/Phone";
import { Model as VRHeadset } from "@/components/Models/VRHeadset";
import { type Variants } from "framer-motion";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

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

function Box(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current!.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      // @ts-ignore
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

function Sphere(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (meshRef.current!.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <motion.mesh
      // @ts-ignore
      ref={meshRef}
      {...props}
      scale={active ? 1.5 : 1}
      animate={["floating"]}
      variants={{
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
      }}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshNormalMaterial />
    </motion.mesh>
  );
}

function Cube(props: MeshProps) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <motion.mesh
      // @ts-ignore
      ref={meshRef}
      {...props}
      scale={active ? 1.5 : 1}
      animate={["floating"]}
      variants={{
        floating: {
          z: [-1, 1],
          transition: {
            z: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          },
        },
      }}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshPhongMaterial />
    </motion.mesh>
  );
}

const ThreeD = (props: Props) => {
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

  return (
    <>
      <Canvas shadows>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight intensity={30} position={[1.5, 1.5, 1.5]} />
        {/* Place a sphere at the same point as he light */}
        {/* <mesh position={[1.5, 1.5, 1.5]}>
        <sphereGeometry args={[0.1, 32, 32]} />
      </mesh> */}
        <motion.group
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1, -2]}
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
            <motion.group scale={0.7}>
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
                  delay: 0.7,
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
                  delay: 0.9,
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
                  delay: 0.5,
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
