import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import exp from "constants";
import Image from "next/image";

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const ImageRotator = ({image}: {image: string}) => {
  const images: string[] = useMemo(
    () => [
      "/nextjs.svg",
      "/tailwind.svg",
      "/c-sharp.svg",
      "/amazonaws.svg",
      "/mysql.svg",
    ],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 3.5 seconds to allow for overlap

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative">
      <AnimatePresence >
        <motion.div
          key={currentImageIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={imageVariants}
          transition={{ duration: 1 }}
          className="h-48 w-48 absolute"
        >
          <Image
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            width={48}
            height={48}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageRotator;
