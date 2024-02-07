"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Marek Tonder", "I'm a Frontend Developer"],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto h-48 w-48 rounded-full border border-[#333] object-cover"
        src="/photo.jpg"
        width={256}
        height={256}
        alt="Picture of the author"
      />
      <div className="z-20">
        <h2 className="text-md pb-4 uppercase tracking-[8px] text-gray-300">Frontend Developer</h2>
        <h1 className="inline-flex min-h-20 items-center px-8 text-3xl font-semibold text-white md:min-h-max lg:text-5xl">
          <span className="">{text}</span>
          <Cursor cursorColor="#fff" />
        </h1>

        <div className="pt-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
