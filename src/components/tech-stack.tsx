"use client"

import Image from "next/image";
import { useState } from "react";

const tech = [
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
];

export default function Techstack() {
  const [techSubset, setTechSubset] = useState(tech.slice(0, 10));
  
  function techStackCompare(techName1: string, techName2: string) {
    return techName1.localeCompare(techName2);
  }

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
            items-center 
            gap-x-8 
            gap-y-10 
            sm:max-w-xl 
            sm:grid-cols-6 
            sm:gap-x-10 
            lg:mx-0 
            lg:max-w-none 
            lg:grid-cols-5"
          >
            {tech.slice(0, 10).map((item) => (
              <div key={item.name}>
                <Image
                  src={item.iconUrl}
                  alt={item.name}
                  className="col-span-2 max-h-20 w-full object-contain lg:col-span-1 dark:invert"
                  width={128}
                  height={128}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
