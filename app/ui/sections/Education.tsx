"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
        Education
      </h3>
      <div className="w-full space-y-4 px-0 text-left md:px-10">
        <div className="w-full">
          <p className="text-sm">Mar 2013 - Jun 2014</p>
          <p className="font-bold">University of Zielona Góra</p>
          <h4 className="text-sm font-semibold text-white md:text-2xl">
            Master of Science in Computer Science with specialization in IT Systems Engineering
          </h4>
          <span className="mt-1 flex flex-col text-sm md:text-base">
            Master's Thesis:{" "}
            <Link
              className="font-semibold text-blue-600"
              href={"https://1drv.ms/b/s!Aujve2Y81fPBge0zxAhUYiNekiCFrA?e=vWTObw"}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Optimization of stock investments with swarm intelligence
            </Link>
            <span> GPA: 5.0/5.0</span>
          </span>
        </div>
        <div className="w-full">
          <p className="text-sm">Oct 2009 - Feb 2013</p>
          <p className="font-bold">University of Zielona Góra</p>
          <h4 className="text-md font-semibold  text-white md:text-2xl">
            Bachelor of Science in Computer Science with specialization in Microinformatic Systems
            Engineering
          </h4>
          <span className="flex flex-col  text-sm md:text-base">
            <span className="mt-1 flex flex-col">
              BSc Thesis:{" "}
              <Link
                className="font-semibold text-blue-600"
                href={"https://1drv.ms/b/s!Aujve2Y81fPBge001mbHjZhyKk5CEQ?e=P2dKCO"}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Implementation of a graphical editor for hierarchical, interpreted Petri nets
              </Link>
            </span>
            <span className="mt-1 flex flex-col text-sm md:text-base">
              Article from KNWS science conference:{" "}
              <Link
                className="font-semibold text-blue-600"
                href={"https://1drv.ms/b/s!Aujve2Y81fPBge0yH6XsBV83g2Z60w?e=SasLhr"}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                System for logic controller design based on hierarchical, interpreted and colored
                Petri net model
              </Link>
            </span>
            <span> GPA: 5.0/5.0</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
