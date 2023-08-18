import DynamicIcon from "@/components/DynamicIcon";
import About from "@/components/about";
import Cgi from "@/components/cgi";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import { Separator } from "@/components/shadcn/ui/separator";
import TechList from "@/components/tech-stack";
import ThemeChanger from "@/components/theme-changer";
import Link from "next/link";
import { Suspense } from "react";

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
          <Projects />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Separator />
      </div>
      <div className=" py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Contact />
        </div>
      </div>
      <Separator />
      <div className=" py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div>
            Vectors and icons by{" "}
            <Link
              href="https://www.svgrepo.com"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              SVG Repo
            </Link>
          </div>
          <div>
            Images generated with{" "}
            <Link
              href="https://github.com/Stability-AI/stablediffusion"
              target="_blank"
              className="text-teal-700 font-semibold"
            >
              StableDiffusion
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
