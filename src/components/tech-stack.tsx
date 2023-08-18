"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import DynamicIcon from "@/components/DynamicIcon";
import { AnimatePresence } from "framer-motion";
import { techIcons } from "@/data/constants/technologies";
import Heading from "./heading";

const subsetLength = 10;
const removeTime = 2000;

export default function TechList() {
  const [tecListhSubset, setTechListSubset] = useState(
    techIcons.slice(0, subsetLength)
  );

  function techListCompare(techName1: string, techName2: string) {
    return techName1 === techName2;
  }

  const replaceItemInTechListWithRandom = useCallback(() => {
    // get the difference between the two arrays
    const filteredTechList = techIcons.filter((item) => {
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
    }, removeTime); // Change image every 3.5 seconds to allow for overlap

    return () => clearInterval(interval);
  }, [replaceItemInTechListWithRandom]);

  return (
    <>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading>
            Broad Knowledge of Some of the Latest and Greatest Technologies
          </Heading>
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
            {tecListhSubset.map((tech, i) => (
              <div
                key={tech.name}
                className=" h-20 w-20 col-span-2 max-h-20 object-contain lg:col-span-1 dark:invert"
              >
                {/* <Image
                  src={item.iconUrl}
                  alt={item.name}
                  className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 dark:invert"
                  width={128}
                  height={128}
                /> */}
                <DynamicIcon iconItem={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
