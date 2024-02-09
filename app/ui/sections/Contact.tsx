"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Contact({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-center"
    >
      <h3 className="invisible absolute top-24 mr-[-16px] text-2xl font-semibold uppercase tracking-[16px] text-white md:visible">
        Contact
      </h3>
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold text-white md:text-3xl">
          <span className="underline decoration-[#324DD2]">Have something to say?</span> I’m all
          ears.
        </h4>
        <p> Fill out the form below and I’ll get back to you as soon as possible.</p>
      </div>
    </motion.div>
  );
}
