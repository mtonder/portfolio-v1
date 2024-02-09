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
    <article className="flex w-full min-w-[300px] flex-shrink-0 snap-center flex-col items-center space-y-8 overflow-hidden overflow-y-auto rounded-lg bg-[#292929] p-4 md:w-[600px] md:p-10 xl:w-[900px]">
      <div className="w-full px-0 text-left md:px-10">
        <p className="text-sm">{period}</p>
        <p className="font-bold">{company}</p>
        <h4 className="text-xl font-semibold uppercase text-[#324DD2] md:text-2xl">{jobTitle}</h4>
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
