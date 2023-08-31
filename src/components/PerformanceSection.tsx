import React from "react";
import Image from "next/image";
import Heading from "@/components/heading";

type Props = {};

const PerformanceSection = (props: Props) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <Heading>This Portfolio is Awesome (and Meets Up To Standards)</Heading>
      <div className="rounded-2xl overflow-hidden border-4 flex items-center justify-center">
        <Image
          height={200}
          width={1000}
          src="/lighthouse.webp"
          alt="Lighthouse Image"
        />
      </div>
    </div>
  );
};

export default PerformanceSection;
