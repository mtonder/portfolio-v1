"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../components/ExperienceCard";

type Props = {};

export default function Experience({}: Props) {
  const jobs = [
    {
      period: "Sep 2021 - Jun 2023",
      company: "ICEO - Venture Builder",
      jobTitle: "VP of Frontend Development",
      projects: [
        {
          title: "Norion • Fintech/Blockchain • Frontend Department",
          description:
            "Platform for building complete tokenisation ecosystems. Offers the issuance and sale of token for any asset.",
          responsibilities: [
            "Prepared frontend architecture for complex client-tailored microecosystems concept - domain driven multirepo with components library.",
            "Worked as a developer during initial phase of the project - implemented components tests etc.",
            "Conducted 100+ technical interviews in order to build experienced, varied team with proper skills and mindset for project.",
          ],
          techStack: [
            "React",
            "MUI",
            "TS",
            "Redux Toolkit",
            "Storybook",
            "RTL",
            "Cypress",
            "Zeroheight",
            "Design system",
          ],
        },
        {
          title: "ICEO • Management",
          description: "Member of company management.",
          responsibilities: [
            "Frontend representative in company management level meetings.",
            "Managed and growth frontend team from business side - structure, evaluations, negotiations, procedures, integrations, onboardings, JIRA.",
            "Responsible for company strategy, development and growth.",
          ],
          techStack: ["JIRA", "Confluence", "Bitbucket", "Miro", "Google Workspace"],
        },
      ],
    },
    {
      period: "Jun 2020 - Aug 2021",
      company: "ICEO - Venture Builder • Frontend Department",
      jobTitle: "Senior Frontend Developer",
      projects: [
        {
          title: "DoxyChain • Legaltech/Blockchain",
          description:
            "A solution for managing document flow and secure electronic signing based on blockchain technology.",
          responsibilities: [
            "Prepared frontend architecture as a Project Lead for DoxyChain.",
            "Developed React components with maintaining high code quality.",
            "Developed frontend views in accordance with the provided UI.",
            "Code review, testing and reducing tech debt.",
            "Cooperated with teams from other departments - backend, design etc.",
          ],
          techStack: ["React", "MUI", "TypeScript", "Redux", "RTL"],
        },
        {
          title: "MediHouse • Medtech",
          description:
            "A telemedicine system (5 products) that enables online consultations with doctors and diagnostics through the support of modern technology.",
          responsibilities: [
            "Developed React components with maintaining high code quality.",
            "Developed frontend views in accordance with the provided UI.",
            "Code review, testing.",
            "Developed WebRTC based video chat application with mediasoup SFU.",
          ],
          techStack: ["Next.js", "React", "JavaScript", "MUI", "PrimeReact", "WebRTC", "RTL"],
        },
      ],
    },
    {
      period: "Mar 2018 - May 2020",
      company: "ICEO - Venture Builder • Frontend Department",
      jobTitle: "Frontend Developer",
      projects: [
        {
          title: "AutoInvestor • Fintech/Blockchain",
          description: "A tool for automatic trading on cryptocurrency exchanges.",
          responsibilities: [
            "Prepared frontend architecture as a Project Lead for AutoInvestor.",
            "Prepared UX/UI for the project.",
            "Developed React components with maintaining high code quality.",
            "Developed frontend views in accordance with the provided UI.",
            "Code review, testing and reducing tech debt.",
            "Cooperated with teams from other departments - backend, design etc.",
          ],
          techStack: ["Angular", "RxJS", "PrimeNG", "Jasmine"],
        },
        {
          title: "BB Bot • Fintech/Blockchain",
          description: "A tool for automatic trading on cryptocurrency exchanges.",
          responsibilities: [
            "Next version of AutoInvestor with new features crafted for better experience.",
            "User driven approach and UI consistent with cryptocurrency exchange.",
          ],
          techStack: ["React", "MobX", "Material-UI", "Jest"],
        },
      ],
    },
    {
      period: "May 2016 - Feb 2018",
      company: "Data System Group • IT Department",
      jobTitle: "Frontend Developer",
      projects: [
        {
          title: "DS Locate • Fleet management",
          description: "GPS localization system for fleet management.",
          responsibilities: [
            "Implemented brand new app based on UI project with new stack.",
            "Maintained and developed new features on legacy app.",
            "Cooperated with teams from other departments - backend, design etc.",
          ],
          techStack: ["Angular", "RxJS", "PrimeNG", "Jasmine"],
        },
        {
          title: "Workflow • Company management",
          description:
            "Managing of company documents workflow - from online based contracts to assembly cards within one synced ecosystem.",
          responsibilities: [
            "Developed frontend views in accordance with the provided UI.",
            "Cooperated with teams from other departments - backend, design etc.",
          ],
          techStack: ["Angular", "PrimeNG"],
        },
      ],
    },
    {
      period: "Nov 2014 - May 2016",
      company: "LUMEL S.A. • R&D Department",
      jobTitle: "Production Assistant",
      projects: [
        {
          title: "Labels",
          description:
            "System for managing and printing nameplates for devices manufactured in assembly plant.",
          responsibilities: [
            "Developed software from scratch.",
            "System management and end-user support.",
            "Role included both backend and frontend side.",
          ],
          techStack: ["Qt", "JavaScript", "jQuery"],
        },
        {
          title: "Various projects",
          description: "Supporting the work of the electronics production department.",
          responsibilities: [
            "Implemented calibration software.",
            "Implemented software for HMI panels.",
            "Implemented support for new devices in comapny config software.",
          ],
          techStack: ["Qt", "JavaScript", "HMI"],
        },
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative mx-auto mt-12  flex flex-col items-start justify-evenly px-8 text-left md:flex-row md:px-10"
    >
      <h3 className=" mr-[-8px] text-2xl font-semibold uppercase tracking-[8px] text-white md:absolute md:top-24  ">
        Experience
      </h3>
      <p className="text-left text-sm md:hidden md:text-center md:text-base">
        Commercial work experience since 2014
      </p>

      <div className="flex w-full flex-col items-center space-y-4  py-8 md:mt-32 md:p-10">
        {jobs.map((job, index) => (
          <ExperienceCard
            key={index}
            period={job.period}
            company={job.company}
            jobTitle={job.jobTitle}
            projects={job.projects}
          />
        ))}
      </div>
    </motion.div>
  );
}
