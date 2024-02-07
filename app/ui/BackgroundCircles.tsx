import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // y: -128,
      }}
      animate={{
        // scale: [1, 2, 3, 1, 1],
        opacity: 1,
        // y: 0,

        // borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative flex items-center justify-center"
    >
      {/* <div className="absolute mt-64 h-[300px] w-[300px] animate-ping rounded-full border border-[#324DD2] opacity-40" /> */}
      <div className="absolute mt-64 h-[350px] w-[350px] animate-pulse rounded-full border border-[#324DD2] opacity-10" />
      <div className="absolute mt-64 h-[550px] w-[550px] animate-pulse rounded-full border border-[#333]" />
      <div className="absolute mt-64 h-[750px] w-[750px] animate-pulse rounded-full border border-[#324DD2] opacity-20" />
      {/* <div className="absolute mt-64 h-[750px] w-[750px] animate-pulse rounded-full border border-[#333]" /> */}
    </motion.div>
  );
}

export default BackgroundCircles;
