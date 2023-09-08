"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import DynamicIcon from "@/components/DynamicIcon";
import { AnimatePresence } from "framer-motion";
import { techIcons } from "@/data/constants/technologies";
import Heading from "./heading";
import Link from "next/link";
import { Expand, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";

const subsetLength = 10;
const removeTime = 2000;

export default function TechList() {
  const [isMounted, setIsMounted] = useState(false);
  const [tecListhSubset, setTechListSubset] = useState(
    techIcons.slice(0, subsetLength)
  );

  const [techInsertionComplete, setTechInsertionComplete] = useState(false);

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
    setIsMounted(true);
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     replaceItemInTechListWithRandom();
  //   }, removeTime); // Change image every 3.5 seconds to allow for overlap

  //   return () => clearInterval(interval);
  // }, [replaceItemInTechListWithRandom]);

  // using removeTime as a delay, set a timeout to replace the item in the list
  // if the insertion is complete.  Then after the timeout, reset the insertion flag
  useEffect(() => {
    if (techInsertionComplete) {
      const timeout = setTimeout(() => {
        replaceItemInTechListWithRandom();
        setTechInsertionComplete(false);
      }, removeTime);
      return () => clearTimeout(timeout);
    }
  }, [techInsertionComplete, replaceItemInTechListWithRandom]);

  if (!isMounted) return null;

  return (
    <>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Heading>
            Broad Knowledge on Some of the Latest and Greatest Technologies
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
                className=" h-20 w-20 mb-10 col-span-2 max-h-20 object-contain lg:col-span-1 dark:invert"
              >
                {/* <Image
                  src={item.iconUrl}
                  alt={item.name}
                  className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 dark:invert"
                  width={128}
                  height={128}
                /> */}
                <DynamicIcon
                  iconItem={tech}
                  insertionCompleteHandler={() =>
                    setTechInsertionComplete(true)
                  }
                />
              </div>
            ))}
          </div>
          <div className="my-20">
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger>
                  <button className="flex mx-auto bg-teal-700 hover:bg-primary transition text-white py-3 px-5 rounded-full font-semibold">
                    Full List <Expand className=" ml-1" />
                  </button>
                </DialogTrigger>
                <DialogContent className="m-0 p-0">
                  <DialogHeader className="mt-5 mx-4">
                    <DialogTitle>Technologies</DialogTitle>
                    <DialogDescription></DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="max-h-96 sm:max-h-[900px] sm:max-w-96 mt-5 border-t ">
                    <div className="grid sm:grid-cols-3 grid-cols-2 py-2 px-4 gap-8">
                      {techIcons.map((tech, i) => (
                        <div
                          key={i}
                          className="flex justify-center items-center flex-col"
                        >
                          <Image
                            src={tech.iconUrl}
                            alt={tech.name}
                            width={64}
                            height={64}
                          />
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
