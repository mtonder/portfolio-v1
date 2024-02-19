"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Marek Tonder"],
    loop: 1,
    delaySpeed: 2000,
  });

  return (
    <div className="flex h-[calc(100vh-76px)] flex-col items-center justify-center space-y-8 overflow-hidden  bg-[url('/layered-waves.svg')] bg-cover pb-[76px] text-center md:h-screen md:pb-0">
      <Image
        className="relative mx-auto h-48 w-48 rounded-full border border-[#000]/0 object-cover shadow-lg"
        src="/photo.jpg"
        width={256}
        height={256}
        alt="Picture of the author"
        priority={true}
      />
      <div className="z-20">
        <h2 className="md:text-md text-gray[300] mr-[-8px] pb-4 text-sm font-semibold uppercase tracking-[8px]">
          Frontend Developer
        </h2>
        <h1 className="inline-flex min-h-10 items-center px-2 text-2xl font-semibold text-white md:min-h-max md:px-8 lg:text-5xl">
          <span className="mr-1">{text}</span>
          <div className="mb-1">
            <Cursor cursorColor="#fff" />
          </div>
        </h1>

        <div className=" hidden flex-col space-y-1 pt-2 md:visible md:block ">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#education">
            <button className="heroButton">Education</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
