import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMeepleArmy } from "react-icons/gi";

import { ProjectDataItem } from "@/lib/types";

import { BirthdayCalculator } from "@/lib/helpers";

import rebrainPlatform from "@/public/rebrainPlatform.jpg";
import HEDNO from "@/public/HEDNO.jpg";
import efoodAnalytics from "@/public/efoodAnalytics.jpg";
import discordBot from "@/public/discordBot.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Hello World",
    location: "Athens, Greece",
    description: `This marks the starting point of my narrative, signifying that I am now ${
      BirthdayCalculator().daysOld
    } days or ${BirthdayCalculator().age} years old.`,
    icon: React.createElement(FaBirthdayCake),
    date: "May 1997",
  },
  {
    title: "Studied Computer Engineering @ University of Thessaly",
    location: "Lamia, Greece",
    description:
      "At the University of Thessaly, I honed my skills in Algorithms and Data Structures and delved deep into the intricacies of Operating Systems. I developed applications using Database Technology, crafted network solutions with Network Programming, and explored the best practices in Software Technology. My hands-on experiences with Computer Networks Systems further solidified my expertise, providing me with a holistic view of the field.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2016",
  },
  {
    title: "Full Stack Web Developer (Internship) @ Crowdpolicy",
    location: "Moschato, Greece",
    description:
      "As a Full-Stack Web Developer at Crowdpolicy, I honed my expertise across a diverse array of technologies, including WordPress, REST APIs, jQuery, Bootstrap, and SASS. My experience encompassed intensive front-end development, PHP programming, and custom theme crafting. This tenure significantly bolstered my technical acumen, reinforcing a robust and evolving skill set.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Mar 2021",
  },
  {
    title: "Graduated in Computer Engineering @ University of Thessaly",
    location: "Lamia, Greece",
    description:
      "My thesis centered on developing a Siamese Neural Network using the VGG19 model, pre-trained on ImageNet. I further implemented a web application that leveraged this model to calculate image similarities, equipped with features like Dark Mode, interactive mapping, and instant Flickr search. The app is primarily in Greek.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021",
  },
  {
    title: "Software Engineer - C.I.T.S.H.A. at Greek Army",
    location: "Athens, Greece",
    description:
      "During my service at the Centre Of Information Technology Support Of The Hellenic Army, I single-handedly built the official Hellenic Army website (army.gr) from scratch using WordPress. I was also in charge of migrating legacy content from Drupal, leveraging Python. My duties expanded to enhancing various web functionalities and ensuring strict adherence to ISO 27001 security standards. Notably, I utilized Docker for containerization, ensuring a seamless deployment process.",
    icon: React.createElement(GiMeepleArmy),
    date: "Jan 2022 - Jan 2023",
  },
] as const;

export const projectsData: ProjectDataItem[] = [
  {
    title: "E-food Analytics",
    description:
      "Track your E-food expenses with dynamic charts and interactive map. Dive deep into order statistics, frequent stores, and products. Discover your dining habits at a glance.",
    tags: [
      "Node.js",
      "Express.js",
      "React.js",
      "React Query",
      "Mantine",
      "Tailwind",
      "ApexCharts",
      "Leafletjs",
      "Axios",
    ],
    imageUrl: efoodAnalytics,
    link: "https://cutt.ly/efood-analytics",
  },
  {
    title: "Rebrain Platform",
    description:
      "Facilitated connections between skilled professionals abroad and Greek businesses. Users can register as Scientists / Experts / Researchers or businesses, each with relevant permissions. Developed using WordPress CPTs and ACF, with integration of ESCO's API for enhanced functionality.",
    tags: ["WordPress", "PHP", "REST API", "JavaScript"],
    imageUrl: rebrainPlatform,
    link: "https://platform.rebraingreece.gr/",
  },
  {
    title: "HEDNO Chatbot",
    description:
      "Hellenic Electricity Distribution Network Operator's chatbot landing page",
    tags: ["HTML", "SCSS", "JavaScript"],
    imageUrl: HEDNO,
    link: "https://chatbot.deddie.gr/",
  },
  {
    title: "Discord Offers Bot",
    description:
      "A proactive Discord bot designed to fetch, manage, and relay offers from various sources to a designated Discord channel. The bot not only tracks and sends new offers but also updates existing ones, checks for expired or deleted offers, and highlights the top 10 offers daily. Integrated with MongoDB for offer storage, it guarantees efficient data handling and seamless interactions.",
    tags: [
      "Python",
      "Discord.py",
      "Asyncio",
      "MongoDB",
      "Web Scraping",
      "API Reverse Engineering",
    ],
    imageUrl: discordBot,
  },
];

export const skillsData = [
  // Basics
  "HTML",
  "CSS",
  "JavaScript",

  // Preprocessors
  "SASS",

  // Languages
  "TypeScript",
  "Python",
  "PHP",

  // Front-end libraries/frameworks
  "React",
  "Next.js",
  "Bootstrap",
  "jQuery",
  "Framer Motion",
  "Tailwind",
  "Redux",

  // Back-end
  "Node.js",
  "Express.js",

  // Databases
  "MongoDB",
  "Prisma",
  "PostgreSQL",

  // API Design
  "Rest API",

  // Version Control
  "Git",

  // Environment/OS & Tools
  "Docker",
  "Windows",
  "Linux",
  "VSCode",

  // CMS
  "WordPress",
] as const;
