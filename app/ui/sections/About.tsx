"use client";

import React from "react";
import { motion } from "framer-motion";
import BackgroundCircles from "../components/BackgroundCircles";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen  max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      {/*
      // TODO - add background circles
      <BackgroundCircles /> 
      */}
      <h3 className="invisible absolute top-24 mr-[-16px] text-2xl font-semibold uppercase tracking-[16px] text-white md:visible">
        About
      </h3>
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/photo.jpg"
        className="mt-32 h-56 w-56 flex-shrink-0 rounded-full  object-cover md:mb-0 md:mt-0 md:h-96 md:w-64 md:rounded-lg xl:h-[600px] xl:w-[500px]"
      ></motion.img> */}
      <div className="space-y-4 px-0 md:px-10">
        <h4 className="text-xl font-semibold text-white md:text-3xl">
          Here is a <span className="underline decoration-[#324DD2]">little</span> background
        </h4>
        <p className="text-justify text-sm md:text-base">
          I have always been close to IT, so I had no doubts about my career path. I graduated from
          the University of Zielona Góra in 2014 and since then I have been actively working as a
          developer. At the beginning of my career I worked as a fullstack, but in 2016 I decided to
          specialize in frontend.
          <br />
          <br /> I'm team player with an eye for detail. I have strong creative and analytical
          skills. Perfectionist and minimalism fan. These qualities drive me to deliver quality
          solutions and make a meaningful contribution to every project I undertake. If you have any
          questions or suggestions, please don't hesitate to contact me - I'm always open to
          collaboration and new opportunities.
        </p>
      </div>
    </motion.div>
  );
}
