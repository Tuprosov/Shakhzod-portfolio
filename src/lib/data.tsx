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
    name: "Holidaze",
    description:
      "A platform for booking and hosting rental places. Noroff preject-exam",
    url: "https://holidazeeeeeeee.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/PE2-Holidaze",
    previewImage: ProjectHolidaze,
    technologies: ["React", "TailwindCSS", "Vite", "Zustand"],
  },
  {
    name: "EcomStore",
    description: "An ecom store assignment for shopping online",
    url: "https://estorereact.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/React-eCom-CA",
    previewImage: ProjectEcomstore,
    technologies: ["React", "TailwindCSS", "Vite", "Redux Toolkit"],
  },
  {
    name: "Wordle",
    description: "Wordle (by NewYorkTimes) recreated",
    url: "https://wordlebyshahzod.netlify.app/",
    gitUrl: "https://github.com/Tuprosov/Wordle",
    previewImage: ProjectWordle,
    technologies: ["React", "TailwindCSS", "Vite"],
  },
  {
    name: "AuctionSite",
    description:
      "An auction platform semester-project for placing a bid on various items",
    url: "https://tuprosov.github.io/Semester-Project-2/index.html",
    gitUrl: "https://github.com/Tuprosov/Semester-Project-2",
    previewImage: ProjectAuction,
    technologies: ["Tailwindcss"],
  },
];
