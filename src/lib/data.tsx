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

import LogoUpwork from "/public/images/logos/logo-upwork.svg";
import LogoGreenApex from "/public/images/logos/logo-greenapex.svg";
import LogoGreenApexLight from "/public/images/logos/logo-greenapex-light.svg";
import LogoDotnpixel from "/public/images/logos/logo-dotnpixel.svg";
import LogoDotnpixelLight from "/public/images/logos/logo-dotnpixel-light.svg";

import ProjectEcomstore from "/public/images/project-ecomstore.png";
import ProjectHolidaze from "/public/images/project-holidaze.png";
import ProjectAuction from "/public/images/project-auction.png";
import ProjectWordle from "/public/images/project-wordle.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from "@/lib/types";

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/Tuprosov",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://twitter.com/shahsagarm",
  FIGMA: "https://www.figma.com/@shahsagarm",
  FIGMA_FILE:
    "https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop",
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
    label: "Testimonials",
    href: "#testimonials",
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
    // logo: LogoDotnpixel,
    // darkModeLogo: LogoDotnpixelLight,
    // logoAlt: "Dotnpixel logo",
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

// export const TESTIMONIALS: TestimonialDetails[] = [
//   {
//     personName: "Krisztian Gyuris",
//     personAvatar: AvatarKrisztian,
//     title: "Founder - inboxgenie.io",
//     testimonial:
//       "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
//   },
//   {
//     personName: "Eugen Esanu",
//     personAvatar: AvatarEugen,
//     title: "Founder - shosho.design",
//     testimonial:
//       "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
//   },
//   {
//     personName: "Joe Matkin",
//     personAvatar: AvatarDummy,
//     title: "Freelancer",
//     testimonial:
//       "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
//   },
// ];
