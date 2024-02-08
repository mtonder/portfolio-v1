"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen  max-w-7xl  flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-left"
    >
      <h3 className="mr-[-16px]text-gray-300 absolute top-24 text-2xl font-semibold uppercase  tracking-[16px]">
        Experience
      </h3>
    </motion.div>
  );
}
