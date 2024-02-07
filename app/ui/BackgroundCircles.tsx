import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      {/* <div className="absolute mt-52 h-[300px] w-[300px] animate-ping rounded-full border border-[#333]" /> */}
      <div className="absolute mt-52 h-[300px] w-[300px] animate-pulse rounded-full border border-[#324DD2] opacity-10" />
      <div className="absolute mt-52 h-[450px] w-[450px] animate-pulse rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[600px] w-[600px] animate-pulse rounded-full border border-[#324DD2] opacity-20" />
      <div className="absolute mt-52 h-[750px] w-[750px] animate-pulse rounded-full border border-[#333]" />
    </motion.div>
  );
}

export default BackgroundCircles;
