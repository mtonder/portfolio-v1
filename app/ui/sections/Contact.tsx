"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:marektonder@gmail.com?subject=${formData.name}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  const YEAR = new Date().getFullYear();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mx-auto flex max-w-7xl  flex-col items-start justify-evenly overflow-hidden px-8 py-8  text-center md:h-screen md:flex-row md:items-center md:px-10 md:text-left"
      >
        <h3 className="mr-[-8px] text-2xl font-semibold uppercase tracking-[8px] text-white md:visible md:absolute md:top-24">
          Contact
        </h3>
        <div className="mb-4 flex flex-col">
          <h4 className="h-0 text-xl font-semibold text-white opacity-0 md:h-auto md:text-3xl md:opacity-100">
            <span className="underline decoration-[#324DD2]">Have something to say?</span> I’m all
            ears.
          </h4>
          <p className="mb-8 text-left text-sm md:text-center md:text-base">
            Fill out the form below and I’ll get back to you as soon as possible.
          </p>

          <form
            className="mx-auto flex w-full flex-col space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="contactInput"
              />
            </div>
            <div className="flex flex-col">
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="contactInput"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                {...register("message", { required: true })}
                id="message"
                name="message"
                placeholder="Your Message"
                className="contactInput"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-[#324DD2] px-4 py-2 text-lg font-semibold text-white md:px-8 md:py-4"
            >
              Send
            </button>
          </form>
        </div>
        <Link href="#hero" className="absolute bottom-0 left-0 right-0 mx-auto">
          <footer className="cursor-pointer text-center text-gray-500/80">
            Marek Tonder @ {YEAR}
          </footer>
        </Link>
      </motion.div>
    </>
  );
}
