"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen  max-w-7xl  flex-col items-center justify-evenly overflow-hidden px-4 text-center md:flex-row md:px-10 md:text-left"
    >
      <h3 className="invisible absolute top-24 mr-[-16px] text-2xl font-semibold uppercase tracking-[16px] text-white  md:visible">
        Experience
      </h3>

      <div className="mt-12 flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
