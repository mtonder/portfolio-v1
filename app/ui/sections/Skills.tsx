"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "../components/Badge";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex max-w-7xl  flex-col items-start justify-evenly overflow-hidden px-8 py-8  text-center md:h-screen md:flex-row md:items-center md:px-10 md:text-left"
    >
      <h3 className="mr-[-8px] text-2xl font-semibold uppercase tracking-[8px] text-white md:absolute md:top-24 ">
        Skills
      </h3>

      <div className="w-full space-y-4  px-0 text-left md:px-10">
        <div className="w-full">
          <h4 className="h-0 text-xl font-semibold text-white opacity-0 md:mt-0 md:h-auto md:text-3xl md:opacity-100">
            <span className="underline decoration-[#324DD2]">Skills</span> that pay the bills
          </h4>
          <p className="mb-8 text-justify text-sm md:text-base">
            Here are some of the technologies and tools I've been working with recently
          </p>
          <h4 className="text-md font-semibold uppercase text-white md:text-xl">Programming</h4>
          <div className="mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
            <Badge label="JavaScript (ES6+)" />
            <Badge label="TypeScript" />
          </div>
          <h4 className="text-md font-semibold uppercase text-white md:text-xl">Frameworks</h4>
          <div className="mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
            <Badge label="React" />
            <Badge label="Next.js" />
            <Badge label="Angular" />
          </div>
          <h4 className="text-md font-semibold uppercase text-white md:text-xl">
            Libraries and tools
          </h4>
          <div className="mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
            <Badge label="Redux Toolkit" />
            <Badge label="MUI" />
            <Badge label="TailwindCSS" />
            <Badge label="PrimeNG" />
            <Badge label="Storybook" />
            <Badge label="Zeroheight" />
            <Badge label="npm/pnpm" />
            <Badge label="Vite" />
            <Badge label="ESlint" />
            <Badge label="Husky" />
            <Badge label="Axios" />
            <Badge label="i18next" />
            <Badge label="Copilot" />
            <Badge label="Visual Code" />
            <Badge label="Vercel" />
            <Badge label="Netlify" />
          </div>
          <h4 className="text-md font-semibold uppercase text-white md:text-xl">
            Work management & Workflow
          </h4>
          <div className="mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
            <Badge label="Jira" />
            <Badge label="Confluence" />
            <Badge label="Bitbucket" />
            <Badge label="GitHub" />
            <Badge label="Kanban" />
            <Badge label="Cross-functional teams" />
            <Badge label="Gitflow" />
            <Badge label="Design System" />
          </div>
          <h4 className="text-md font-semibold uppercase text-white md:text-xl">Design</h4>
          <div className="mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
            <Badge label="Figma" />
            <Badge label="Zeplin" />
            <Badge label="AdobeXD" />
            <Badge label="Relume" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
