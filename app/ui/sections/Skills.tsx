"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen  max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="invisible absolute top-24 mr-[-16px] text-2xl font-semibold uppercase tracking-[16px] text-white md:visible">
        Skills
      </h3>
      <div className="w-full space-y-4 px-0 text-left md:px-10"></div>
    </motion.div>
  );
}
