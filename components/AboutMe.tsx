"use client";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiDart,
  SiFlutter,
  SiGo,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
} from "react-icons/si";

export function AboutMe() {
  return (
    <div
      id="about"
      className="w-full h-full bg-white dark:bg-neutral-950 font-sans pt-15"
    >
      <div className="max-w-7xl mx-auto py-15 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl py-4">
          My Interests & Skills
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;m passionate about building software across the stack—from
          firmware and backend systems to intuitive front-end interfaces. I love
          experimenting with new tools and technologies to expand my skill set.
          Some of the areas I enjoy working in include:
        </p>
      </div>
      <BentoGrid className="max-w-4xl h-[75vh] mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={cn("[&>p:text-lg]", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "Embedded Systems",
    description: (
      <span className="text-sm">
        I work in C and C++ to develop firmware for microcontrollers and
        implement hardware drivers that interface directly with software-defined
        radios.
      </span>
    ),
    className: "md:col-span-1",
    icon: (
      <div className="flex flex-row space-x-2">
        <SiC className="h-4 w-4 text-neutral-500" />
        <SiCplusplus className="h-4 w-4 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Frontend Development",
    description: (
      <span className="text-sm">
        At work, I use Angular to build embedded web UIs. For personal projects,
        I work with Next.js, React, and Tailwind CSS to create modern,
        responsive interfaces.
      </span>
    ),
    className: "md:col-span-2",
    icon: (
      <div className="flex flex-row space-x-2">
        <SiAngular className="h-4 w-4 text-neutral-500" />
        <SiReact className="h-4 w-4 text-neutral-500" />
        <SiNextdotjs className="h-4 w-4 text-neutral-500" />
        <SiTailwindcss className="h-4 w-4 text-neutral-500" />
      </div>
    ),
  },
  {
    title: "Backend Development",
    description: (
      <span className="text-sm">
        In my free time, I experiment with Go, SQLite, and PostgreSQL to build
        APIs and backend services.
      </span>
    ),
    className: "md:col-span-1",
    icon: (
      <div className="flex flex-row space-x-2">
        <SiGo className="h-4 w-4 text-neutral-500" />
        <SiSqlite className="h-4 w-4 text-neutral-500" />
        <SiPostgresql className="h-4 w-4 text-neutral-500" />
      </div>
    ),
  },

  {
    title: "Python",
    description: (
      <span className="text-sm">
        I use Python at work to automate testing equipment, process data, and
        perform digital signal processing (DSP) to analyze, reverse-engineer,
        and model different signals. I also build internal CLI tools used by my
        team at work.
      </span>
    ),
    className: "md:col-span-1",
    icon: <SiPython className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Cross-Platform Mobile Development",
    description: (
      <span className="text-sm">
        I enjoy building cross-platform apps with Flutter. I spend most of my
        free time creating practical tools such as a workout tracker and a
        budgeting app.
      </span>
    ),
    className: "md:col-span-1",
    icon: (
      <div className="flex flex-row space-x-2">
        <SiFlutter className="h-4 w-4 text-neutral-500" />
        <SiDart className="h-4 w-4 text-neutral-500" />
      </div>
    ),
  },
];
