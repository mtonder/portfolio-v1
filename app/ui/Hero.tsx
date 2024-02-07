"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Marek Tonder",
      "Perfectionist",
      "Minimalism fan",
      "Team player",
      "Keen eye for detail",
    ],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        className="relative mx-auto h-32 w-32 rounded-full border border-[#324DD2]/40 object-cover"
        src="/photo.jpg"
        width={256}
        height={256}
        alt="Picture of the author"
      />
      <div className="z-20">
        <h2 className="text-md pb-4 uppercase tracking-[16px] text-gray-400">Frontend Developer</h2>
        <h1 className="px-10 text-4xl font-semibold text-white lg:text-5xl">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#324DD2" cursorStyle />
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
