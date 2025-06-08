import { Github } from "lucide-react";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoCypress from "/public/images/logos/icon-cypress.svg";
import LogoCypressLight from "/public/images/logos/icon-cypress-light.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import ProjectEcomstore from "/public/images/project-ecomstore.png";
import ProjectHolidaze from "/public/images/project-holidaze.png";
import ProjectAuction from "/public/images/project-auction.png";
import ProjectWordle from "/public/images/project-wordle.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Tuprosov",
  GITHUB_REPO: "https://github.com/Tuprosov/Shakhzodbek-Gayratov",
};

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/Tuprosov",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    position: "Student in Frontend Development",
    startDate: new Date(2023, 8),
    endDate: new Date(2025, 7),
    summary: ["Worked on course asignments and student projects"],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    slug: "holidaze",
    name: "Holidaze",
    objective:
      "To learn more about global states, specifically about Zustand to create stores.",
    description:
      "A platform for booking and hosting rental places. Noroff project-exam",
    imporovement: "",
    url: "https://holidazeeeeeeee.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/PE2-Holidaze",
    previewImage: ProjectHolidaze,
    technologies: ["React", "TailwindCSS", "Vite", "Zustand"],
  },
  {
    slug: "ecomstore",
    name: "EcomStore",
    objective:
      "Start using Vite for tooling and React to create dynamic components, rtk for global states",
    description:
      "An ecom store assignment for shopping online. First React project",
    imporovement: "",
    url: "https://estorereact.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/React-eCom-CA",
    previewImage: ProjectEcomstore,
    technologies: ["React", "TailwindCSS", "Vite", "Redux Toolkit"],
  },
  {
    slug: "wordle",
    name: "Wordle",
    objective:
      "To learn more about React state management, use 'useEffect, useState etc.'",
    description: "Wordle (by NewYorkTimes) recreated",
    imporovement: "",
    url: "https://wordlebyshahzod.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/Wordle",
    previewImage: ProjectWordle,
    technologies: ["React", "TailwindCSS", "Vite"],
  },
  {
    slug: "auctionsite",
    name: "AuctionSite",
    objective: "To apply/learn TailwindCSS and use JS best practices",
    description:
      "An auction platform semester-project for placing a bid on various items",
    imporovement:
      " More robust error handling. Displayed actual error messages and improved UX. Applied retry logic for inital load. Removed console.errors as provided in the feedback",
    url: "https://tuprosov.github.io/Semester-Project-2/index.html",
    gitUrl: "https://github.com/Tuprosov/Semester-Project-2",
    previewImage: ProjectAuction,
    technologies: ["Tailwindcss"],
  },
];
