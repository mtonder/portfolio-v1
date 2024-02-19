import React from "react";
import Badge from "./Badge";

type Project = {
  title: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
};

type Job = {
  period: string;
  company: string;
  jobTitle: string;
  projects: Project[];
};

export default function ExperienceCard({ period, company, jobTitle, projects }: Job) {
  return (
    <article className="flex w-full min-w-[300px] max-w-7xl flex-shrink-0 flex-col items-center space-y-8  rounded-lg p-0 hover:border-[#fff]/10 md:p-10 md:hover:bg-white/5">
      <div className="w-full px-0 text-left ">
        <p className="text-sm">{period}</p>
        <p className="font-bold">{company}</p>
        <h4 className="text-xl font-semibold uppercase text-[#fff] md:text-2xl">{jobTitle}</h4>
        {projects.map((project, index) => (
          <div key={index}>
            <p className="font-semibold">{project.title}</p>
            <span className="text-sm">{project.description}</span>
            <ul className="ml-5 list-disc space-y-1 text-sm">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <div className="my-1 mb-4 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
              {project.techStack.map((tech, index) => (
                <Badge label={tech} key={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
