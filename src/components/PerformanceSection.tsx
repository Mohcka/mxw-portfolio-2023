import React from "react";
import Image from "next/image";
import Heading from "@/components/heading";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

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
      <div className="my-8">
        <Link
          href="https://pagespeed.web.dev/analysis/https-mwweb-dev/fxv6lfykv6?form_factor=desktop"
          target="_blank"
          aria-label="More Details"
          className="rounded-full"
        >
          <button className="flex bg-teal-700 hover:bg-primary transition text-white py-3 px-5 rounded-full font-semibold">
            More Details <ExternalLink className="-mt-0.5 ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PerformanceSection;
