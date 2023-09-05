"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  useAnimationControls,
} from "framer-motion";
import Image from "next/image";
import { TechIcon } from "@/data/constants/technologies";

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const DynamicIcon = ({
  iconItem,
  insertionCompleteHandler,
}: {
  iconItem: TechIcon;
  insertionCompleteHandler: () => void;
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (imgLoaded) {
      controls.start({ opacity: 1, y: 0 });
      
    }
  }, [imgLoaded, controls]);

  return (
    <AnimatePresence>
      <motion.div
        key={iconItem.name}
        initial="hidden"
        animate={controls}
        exit="exit"
        onAnimationComplete={() => insertionCompleteHandler()}
        variants={imageVariants}
        transition={{ duration: 0.5 }}
        className="absolute h-20 w-20"
      >
        <Image
          src={iconItem.iconUrl}
          alt={iconItem.name}
          fill
          onLoadingComplete={(img) => setImgLoaded(true)}
        />
        <p className="absolute top-[90px] left-1/2 -translate-x-1/2 text-center">
          {iconItem.name}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default DynamicIcon;
