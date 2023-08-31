"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { motion } from "framer-motion";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-700 dark:text-zinc-200 dark:hover:text-teal-700"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-700" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata = {
  title: "About",
  description:
    "I’m Spencer Sharp. I live in New York City, where I design the future.",
};

export default function About() {
  return (
    <Container className="lg:my-16 mb-8 -mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="
        grid
        grid-cols-1
        gap-y-16
        lg:grid-cols-2
        lg:grid-rows-[auto_1fr]
        lg:gap-y-12"
      >
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/00008-2950131524.webp"
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              width={512}
              height={512}
              className="
              aspect-square
              rotate-3
              rounded-2xl
              bg-zinc-100
              object-cover
              dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              sm:text-5xl"
          >
            Hi, I&#39;m Michael 👋, Software Developer, Wielder of Frameworks
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              In 2012, I began my journey into software development, and
              it&#39;s been a rewarding adventure ever since. I started with the
              .Net framework and Angular, consistently delivering solid and
              efficient solutions. Alongside these, TypeScript has been a
              valuable tool, ensuring my code is both reliable and
              well-structured.
            </p>
            <p>
              Outside of coding, I have a genuine passion for 3D modeling and
              design as a hobby. This creative endeavor allows me to blend the
              precision of technology with the freedom of artistic expression.
              Recently, I&#39;ve been exploring the capabilities of Next.js,
              keeping up with the latest trends in web app development. Through
              every endeavor, my aim is to deliver excellence and make a lasting
              impression on the world.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/Mohcka"
              icon={Github}
              className="mt-4"
            >
              <div className="flex items-center">
                Find me on GitHub <ExternalLink className="pl-2" size={24} />
              </div>
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/michael-walker-746b8597/"
              icon={Linkedin}
              className="mt-4"
            >
              <div className="flex items-center">
                Reach out to me on LinkedIn{" "}
                <ExternalLink className="pl-2" size={24} />
              </div>
            </SocialLink>
            <SocialLink
              href="mailto:michaelxwalker95@gmail.com"
              icon={Mail}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              michaelxwalker95@gmail.com
            </SocialLink>
          </ul>
        </div>
      </motion.div>
    </Container>
  );
}
