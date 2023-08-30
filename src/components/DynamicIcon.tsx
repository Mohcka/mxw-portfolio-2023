"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, Variants, usePresence } from "framer-motion";
import Image from "next/image";
import { TechIcon } from "@/data/constants/technologies";

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const DynamicIcon = ({ iconItem }: { iconItem: TechIcon }) => {
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
        <p className="absolute top-[90px] left-1/2 -translate-x-1/2 text-center">
          {iconItem.name}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default DynamicIcon;
