"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly overflow-hidden px-10 text-center md:flex-row md:text-center"
    >
      <h3 className="invisible absolute top-24 mr-[-16px] text-2xl font-semibold uppercase tracking-[16px] text-white md:visible">
        Contact
      </h3>
      <div className="flex flex-col">
        <h4 className="text-xl font-semibold text-white md:text-3xl">
          <span className="underline decoration-[#324DD2]">Have something to say?</span> I’m all
          ears.
        </h4>
        <p className="mb-8 text-sm md:text-base">
          Fill out the form below and I’ll get back to you as soon as possible.
        </p>

        <form className="mx-auto flex w-full flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
    </motion.div>
  );
}
