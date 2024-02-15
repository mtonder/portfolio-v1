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
      className="relative mx-auto flex max-w-full  flex-col items-start justify-evenly overflow-hidden px-8 py-8  text-center md:h-screen md:flex-row md:items-center md:px-10 md:text-left"
    >
      {/*
      // TODO - add background circles
      <BackgroundCircles /> 
      */}
      <h3 className="mr-[-8px] text-2xl font-semibold uppercase tracking-[8px] text-white md:visible md:absolute md:top-24">
        About
      </h3>
      <div className="invisible absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-[#324DD2]/10 md:visible" />

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
      <div className=" max-w-7xl space-y-8 px-0 text-left md:mt-0 md:px-10">
        <h4 className="text-sm font-normal md:mt-0 md:text-3xl md:font-semibold">
          Here is a little background
        </h4>
        <p className="text-md text-justify md:text-base">
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
