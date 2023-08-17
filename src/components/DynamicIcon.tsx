"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { TechItem } from "./tech-stack";

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const DynamicIcon = ({ iconItem }: { iconItem: TechItem }) => {
  // const images: string[] = useMemo(
  //   () => [
  //     "/nextjs.svg",
  //     "/tailwind.svg",
  //     "/c-sharp.svg",
  //     "/amazonaws.svg",
  //     "/mysql.svg",
  //   ],
  //   []
  // );

  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3500); // Change image every 3.5 seconds to allow for overlap

  //   return () => clearInterval(interval);
  // }, [images]);

  return (
    <AnimatePresence>
      <motion.div
        key={iconItem.name}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        className="absolute h-20 w-20"
      >
        <Image src={iconItem.iconUrl} alt={iconItem.name} fill />
      </motion.div>
    </AnimatePresence>
  );
};

export default DynamicIcon;
