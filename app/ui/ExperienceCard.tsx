import React from "react";
import Badge from "./components/Badge";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex w-full min-w-[300px] flex-shrink-0 snap-center flex-col items-center space-y-8 overflow-hidden overflow-y-auto rounded-lg bg-[#292929] p-4 md:w-[600px] md:p-10 xl:w-[900px]">
      <div className="w-full px-0 text-left md:px-10">
        <p className="text-sm">Sep 2021 - Jun 2023</p>
        <p className="font-bold">ICEO - Venture Builder</p>
        <h4 className="text-xl font-semibold uppercase text-[#324DD2] md:text-2xl">
          VP of Frontend Development
        </h4>
        <p className="font-semibold">Norion • Fintech/Blockchain • Frontend Department</p>
        <span className="text-sm">
          Platform for building complete tokenisation ecosystems. Offers the issuance and sale of
          token for any asset.
        </span>
        <ul className="ml-5 list-disc space-y-1 text-sm">
          <li>
            Prepared frontend architecture for complex client-tailored microecosystems concept -
            domain driven multirepo with components library.
          </li>
          <li>
            Worked as a developer during initial phase of the project - implemented components,
            tests etc.
          </li>
          <li>
            Conducted 100+ technical interviews in order to build experienced, varied team with
            proper skills and mindset for project.
          </li>
        </ul>
        <div className="my-1 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
          <Badge label="React" />
          <Badge label="MUI" />
          <Badge label="TypeScript" />
          <Badge label="Redux Toolkit" />
          <Badge label="Storybook" />
          <Badge label="RTL" />
          <Badge label="Cypress" />
          <Badge label="Zeroheight" />
          <Badge label="Design system" />
        </div>
        <p className="mt-2 font-semibold">ICEO • Management</p>
        <span className="text-sm">Member of company management.</span>
        <ul className="ml-5 list-disc space-y-1 text-sm">
          <li>
            Member of company management - responsible for company strategy, development and growth.
          </li>
          <li>Frontend representative in company management level meetings.</li>
          <li>
            Managed and growth frontend team from business side - structure, evaluations,
            negotiations, procedures, integrations, onboardings, JIRA.
          </li>
        </ul>
        <div className="my-1 inline-flex flex-auto flex-wrap overflow-hidden text-nowrap text-sm">
          <Badge label="JIRA" />
          <Badge label="Confluence" />
          <Badge label="Bitbucket" />
          <Badge label="Miro" />
          <Badge label="Google Workspace" />
        </div>
        <p></p>
      </div>
    </article>
  );
}
