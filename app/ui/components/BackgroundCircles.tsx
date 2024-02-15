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
      className="relative z-40 flex items-center justify-center "
    >
      <div className="absolute z-40 mt-64 h-[350px] w-[350px] animate-pulse rounded-full border border-[#324DD2]/40 " />
      <div className="invisible absolute z-40 mt-64 h-[550px] w-[550px] animate-pulse rounded-full border border-[#324DD2]/35 md:visible " />
      <div className="invisible absolute z-40 mt-64 h-[750px] w-[750px] animate-pulse rounded-full border border-[#324DD2]/30 md:visible " />
      <div className="invisible absolute z-40 mt-64 h-[950px] w-[950px] animate-pulse rounded-full border border-[#324DD2]/25 md:visible " />
      <div className="invisible absolute z-40 mt-64 h-[1150px] w-[1150px] animate-pulse rounded-full border border-[#324DD2]/20 md:visible " />
      <div className="invisible absolute z-40 mt-64 h-[1350px] w-[1350px] animate-pulse rounded-full border border-[#324DD2]/15 md:visible " />
      <div className="invisible absolute z-40 mt-64 h-[1550px] w-[1550px] animate-pulse rounded-full border border-[#324DD2]/10 md:visible " />
    </motion.div>
  );
}

export default BackgroundCircles;
