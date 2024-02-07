"use client";

import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/telegram";
import "react-social-icons/github";
import "react-social-icons/instagram";
import "react-social-icons/email";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl items-start justify-between p-4 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://linkedin.com"
          network="linkedin"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://telegram.com"
          network="telegram"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com"
          network="github"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          network="instagram"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex cursor-pointer flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="hidden text-sm uppercase text-gray-500 md:inline-flex">Get in touch</p>
      </motion.div>
    </header>
  );
}
