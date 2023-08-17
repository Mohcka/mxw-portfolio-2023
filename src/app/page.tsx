import About from "@/components/about";
import Cgi from "@/components/cgi";
import Contact from "@/components/contact";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Techstack from "@/components/tech-stack";
import ThemeChanger from "@/components/theme-changer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Techstack />
      <div className="bg-zinc-200 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Projects />
        </div>
      </div>
      <About />
      <div className="bg-zinc-200 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Contact />
        </div>
      </div>
    </>
  );
}
