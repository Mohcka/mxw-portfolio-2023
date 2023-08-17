"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import DynamicIcon from "@/components/DynamicIcon";
import { AnimatePresence } from "framer-motion";

export interface TechItem {
  name: string;
  iconUrl: string;
}

const tech: TechItem[] = [
  {
    name: "React",
    iconUrl: "/react.svg",
  },
  {
    name: "Next.js",
    iconUrl: "/nextjs.svg",
  },
  {
    name: "Tailwind CSS",
    iconUrl: "/tailwind.svg",
  },
  {
    name: "C Sharp",
    iconUrl: "/c-sharp.svg",
  },
  {
    name: "aws",
    iconUrl: "/amazonaws.svg",
  },
  {
    name: "mysql",
    iconUrl: "/mysql.svg",
  },
  {
    name: "mongodb",
    iconUrl: "/mongodb.svg",
  },
  {
    name: "prisma",
    iconUrl: "/prisma.svg",
  },
  {
    name: "graphql",
    iconUrl: "/graphql.svg",
  },
  {
    name: "typescript",
    iconUrl: "/typescript.svg",
  },
  {
    name: "api",
    iconUrl: "/api.svg",
  },
];

const subsetLength = 10;

export default function TechList() {
  const [tecListhSubset, setTechListSubset] = useState(
    tech.slice(0, subsetLength)
  );

  function techListCompare(techName1: string, techName2: string) {
    return techName1 === techName2;
  }

  const replaceItemInTechListWithRandom = useCallback(() => {
    // get the difference between the two arrays
    const filteredTechList = tech.filter((item) => {
      return !tecListhSubset.some((techItem) =>
        techListCompare(techItem.name, item.name)
      );
    });

    // do nothing if  there are no more items to add
    if (filteredTechList.length === 0) return;

    // get a random item from the filtered list
    const randomItem =
      filteredTechList[Math.floor(Math.random() * filteredTechList.length)];
    // choose a random index from the subset to replace
    const randomIndex = Math.floor(Math.random() * tecListhSubset.length);

    // replace the item at the random index with the random item
    const newTechListSubset = [...tecListhSubset];
    newTechListSubset[randomIndex] = randomItem;

    setTechListSubset(newTechListSubset);
  }, [tecListhSubset]);

  useEffect(() => {
    const interval = setInterval(() => {
      replaceItemInTechListWithRandom();
    }, 3500); // Change image every 3.5 seconds to allow for overlap

    return () => clearInterval(interval);
  }, [replaceItemInTechListWithRandom]);

  return (
    <>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 ">
            A Developer Who Knows A Libray or Two
          </h2>
          <div
            className="
            mx-auto 
            mt-10 
            grid 
            max-w-lg 
            grid-cols-4 
            place-items-center
            gap-x-8 
            gap-y-10 
            sm:max-w-xl 
            sm:grid-cols-6 
            sm:gap-x-10 
            lg:mx-0 
            lg:max-w-none 
            lg:grid-cols-5"
          >
            {Array(subsetLength)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className=" h-20 w-20 col-span-2 max-h-20 object-contain lg:col-span-1 dark:invert"
                >
                  {/* <Image
                  src={item.iconUrl}
                  alt={item.name}
                  className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 dark:invert"
                  width={128}
                  height={128}
                /> */}
                  <DynamicIcon iconItem={tecListhSubset[i]} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
