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
    <header className="sticky top-0 z-30 mx-auto flex max-w-7xl justify-between bg-[#041828] px-4 py-2 md:px-0  xl:items-center">
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
          url="https://www.linkedin.com/in/marektonder/"
          target="_blank"
          network="linkedin"
          fgColor="#dcdbd1"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://t.me/marektonder"
          target="_blank"
          network="telegram"
          fgColor="#dcdbd1"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/mtonder"
          target="_blank"
          network="github"
          fgColor="#dcdbd1"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://instagram.com/marektonder"
          target="_blank"
          network="instagram"
          fgColor="#dcdbd1"
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
          className="text-[#dcdbd1] hover:text-[#324DD2]"
        >
          <p className="flex items-center space-x-3  text-sm font-semibold uppercase">
            <EnvelopeIcon className="h-8 w-8" />
            <span className="invisible w-0 md:visible md:w-auto md:pr-2">Get in touch</span>
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
