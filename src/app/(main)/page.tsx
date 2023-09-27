import DynamicIcon from "@/components/DynamicIcon";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { Separator } from "@/components/shadcn/ui/separator";
// import TechList from "@/components/tech-stack";
import PerformanceSection from "@/components/PerformanceSection";
import ThemeChanger from "@/components/theme-changer";
import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const TechList = dynamic(() => import("@/components/tech-stack"));

export const metadata: Metadata = {
  title: "Michael Walker | Software Developer",
  description:
    "Professional Software Engineer of 5 years, having a strong background in both front-end and back-end development. Committed to delivering high-quality software solutions",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator />
      </div>
      <TechList />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator />
      </div>
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Experience />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator />
      </div>
      <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Projects />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator />
      </div>
      {/* <div className="py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PerformanceSection />
        </div>
      </div>
      <Separator /> */}
      <div className=" py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            Vectors and icons from{" "}
            <Link
              href="https://www.svgrepo.com"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              SVG Repo <ExternalLink size={20} className="inline -mt-1" />
            </Link>{" "}
            and{" "}
            <Link
              href="https://lucide.dev/"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              Lucide Icons <ExternalLink size={20} className="inline -mt-1" />
            </Link>
          </div>
          <div>
            Images generated with{" "}
            <Link
              href="https://github.com/Stability-AI/stablediffusion"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              StableDiffusion{" "}
              <ExternalLink size={20} className="inline -mt-1" />
            </Link>
          </div>
          <div>
            Header Image From{" "}
            <Link
              href="https://unsplash.com/photos/NPlv2pkYoUA"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              Unsplash <ExternalLink size={20} className="inline -mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
