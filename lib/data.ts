import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { GiMeepleArmy } from "react-icons/gi";

import { ProjectDataItem } from "@/lib/types";

import rebrainPlatform from "@/public/rebrainPlatform.jpg";
import HEDNO from "@/public/HEDNO.jpg";
import efoodAnalytics from "@/public/efoodAnalytics.jpg";
import discordBot from "@/public/discordBot.png";
import weatherApp from "@/public/weatherApp.jpg";
import pharmafinder from "@/public/pharmafinder.png";

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
    title: "Full Stack Web Developer - Wizy",
    location: "Marousi, Greece",
    description:
      "Leading end-to-end development of enterprise SaaS platforms as the sole engineer at Wizy Agency. I've architected and shipped 4+ production applications serving 7,000+ users, including an AI-powered HRM platform with multi-tenant architecture, a government CRM system that replaced Excel workflows, and the secure admin dashboard for digitalschool.gov.gr.\n\nWhat sets my work apart: I own the complete technical stack from database design to deployment automation, implement cutting-edge features like AI-powered CV parsing and real-time data synchronization, and collaborate effectively with external teams on complex government projects like ELOT's e-commerce platform.\n\nI thrive on solving complex technical challenges - whether it's building multi-tenant architectures with database isolation, integrating OIDC authentication flows, or establishing robust CI/CD pipelines that reduce deployment time from hours to minutes.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jun 2025",
  },
  {
    title: "Software Engineer - C.I.T.S.H.A. at Greek Army",
    location: "Athens, Greece",
    description:
      "During my service at the Centre Of Information Technology Support Of The Hellenic Army, I single-handedly built the official Hellenic Army website (army.gr) from scratch using WordPress. I was also in charge of migrating legacy content from Drupal, leveraging Python. My duties expanded to enhancing various web functionalities and ensuring strict adherence to ISO 27001 security standards. Notably, I utilized Docker for containerization, ensuring a seamless deployment process.",
    icon: React.createElement(GiMeepleArmy),
    date: "Jan 2022 - Jan 2023",
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
    title: "Full Stack Web Developer (Internship) @ Crowdpolicy",
    location: "Moschato, Greece",
    description:
      "As a Full-Stack Web Developer at Crowdpolicy, I honed my expertise across a diverse array of technologies, including WordPress, REST APIs, jQuery, Bootstrap, and SASS. My experience encompassed intensive front-end development, PHP programming, and custom theme crafting. This tenure significantly bolstered my technical acumen, reinforcing a robust and evolving skill set.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Mar 2021",
  },
  {
    title: "Hello World",
    location: "Athens, Greece",
    icon: React.createElement(FaBirthdayCake),
    date: "May 1997",
  },
] as const;

export const projectsData: ProjectDataItem[] = [
  {
    title: "PharmaFinder",
    description:
      "Find on-duty pharmacies near you, anytime, anywhere in Greece ⚕️",
    tags: [
      "Python",
      "FastAPI",
      "Planetscale",
      "Web Scraping",
      "Docker",
      "Tanstack React Query",
      "Next.js",
      "React Leaflet",
      "Tailwind",
      "React Hot Toast",
      "Nuqs",
    ],
    imageUrl: pharmafinder,
    link: "https://pharmafinder.gr",
    github: "https://github.com/eliac7/pharmafinder-greece",
  },
  {
    title: "E-food Analytics",
    description:
      "Track your E-food expenses with dynamic charts and interactive map. Dive deep into order statistics, frequent stores, and products. Discover your dining habits at a glance. 🍔",
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
    link: "https://bit.ly/efood-analytcis",
    github: "https://github.com/eliac7/efood-analytics",
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
  {
    title: "Rebrain Platform",
    description:
      "Facilitated connections between skilled professionals abroad and Greek businesses. Users can register as Scientists / Experts / Researchers or businesses, each with relevant permissions. Developed using WordPress CPTs and ACF, with integration of ESCO's API for enhanced functionality.",
    tags: ["WordPress", "PHP", "REST API", "JavaScript"],
    imageUrl: rebrainPlatform,
    link: "https://platform.rebraingreece.gr/",
  },
  {
    title: "Weather App with Node API Proxy Server",
    description:
      "This project features a Node.js-based proxy server tailored for the OpenWeatherMap API, ensuring the secure handling of API keys through features like rate limiting and caching. In tandem with this server, the repository includes a modern weather application that interacts seamlessly with the OpenWeatherMap API. The flexibility of the proxy server allows it to be easily adapted for other APIs, making it a versatile solution for developers. The project stands as a testament to the importance of securely integrating real-world data into applications.",
    tags: [
      "Node.js",
      "Express.js",
      "HTML",
      "CSS",
      "Vanilla Javascript",
      "API Proxy Server",
    ],
    imageUrl: weatherApp,
    github: "https://github.com/eliac7/node-openweather-proxy-server",
  },
  {
    title: "HEDNO Chatbot",
    description:
      "Hellenic Electricity Distribution Network Operator's chatbot landing page",
    tags: ["HTML", "SCSS", "JavaScript"],
    imageUrl: HEDNO,
    link: "https://chatbot.deddie.gr/",
  },
];

export const skillsData = [
  // Modern Full-Stack Expertise
  "Next.js",
  "React",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Node.js",
  "Express.js",

  // Frontend Ecosystem
  "Tailwind",
  "Framer Motion",
  "Zustand",
  "Material UI",

  // Backend & Infrastructure
  "Python",
  "REST API",
  "Docker",
  "Git",
  "Linux",
] as const;
