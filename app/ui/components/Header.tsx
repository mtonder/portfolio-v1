"use client";

import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/telegram";
import "react-social-icons/github";
import "react-social-icons/instagram";
import "react-social-icons/email";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 mx-auto flex max-w-7xl justify-between p-4 xl:items-center">
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
          target="_blank"
          network="linkedin"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://telegram.com"
          target="_blank"
          network="telegram"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com"
          target="_blank"
          network="github"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com"
          target="_blank"
          network="instagram"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <Link href="#contact" className="flex flex-row items-center">
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
          className="text-[gray] hover:text-[#324DD2]"
        >
          <p className="flex items-center text-sm font-semibold uppercase">
            <EnvelopeIcon className="h-8 w-8" />
            <span className="invisible w-0 md:visible md:ml-2 md:w-auto">Get in touch</span>
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
