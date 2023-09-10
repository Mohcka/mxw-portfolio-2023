"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
import { useBreakpoint } from "@/hooks/breakpoints";
import { followUpAnimationDelay } from "@/data/constants";

const ThreeD = dynamic(() => import("@/components/ThreeD"), { ssr: false });

const sentence: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 200, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { isAboveLg, isBelowLg } = useBreakpoint("lg");

  useEffect(() => {
    setMounted(true);
  }, []);

  const animationDelay = useMemo(() => followUpAnimationDelay, []);

  // if (!mounted) return null;

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24  lg:py-72">
      {/* {mounted && (width > 1024 ? (
        <div className="absolute h-[50vw] w-[50vw] right-0 top-1/2 -translate-y-1/2 z-10">
          <ThreeD />
        </div>
      ) : (
        <Image
          src="/unsplash.webp"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGOobKkNiYuuqy/LyEllOHl4y4Rt5958+3L51A4GMRG+zrlz+WWlGdgZAXMqEP1lvGBIAAAAAElFTkSuQmCC"
          fill
          priority
        />
      ))} */}

      {isAboveLg && (
        <div className="absolute -bottom-48 h-[100vw] w-[100vw]  left-1/2 -translate-x-1/2 lg:bottom-0 lg:h-[50vw] lg:w-[50vw] lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:left-auto lg:translate-x-0 -z-10">
          <ThreeD />
        </div>
      )}

      <div className="absolute inset-0 -z-20 h-full w-full bg-gray-900/70" />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -top-52 left-1/2 -z-20 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 relative">
          <motion.h2
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl whitespace-pre"
          >
            {"Innovation in".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
            <br />
            {"Every Iteration".split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={letterVariants}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: animationDelay }}
            className="mt-6 text-2xl leading-8 text-gray-200"
          >
            Pushing boundaries, one project at a time.
          </motion.p>
        </div>
      </div>
      {isBelowLg && (
        <div className="relative -z-10">
          <div className="-mt-20 -mb-24 sm:-my-48 h-[100vw] w-[100vw] ">
            <ThreeD />
          </div>
          {/* Used to fix issue where a user can't scroll while tapping over the canvas */}
          <div className="absolute w-full h-full top-0 left-0"></div>
        </div>
      )}
    </div>
  );
}
