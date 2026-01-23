import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { GiMeepleArmy } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

import { ProjectDataItem } from "@/lib/types";

import discordBot from "@/public/projects/discordBot.webp";
import efoodAnalytics from "@/public/projects/efoodAnalytics.webp";
import pharmafinder from "@/public/projects/pharmafinder.webp";
import rebrainPlatform from "@/public/projects/rebrainPlatform.webp";
import vaporkey from "@/public/projects/vaporkey.webp";
import weatherApp from "@/public/projects/weatherApp.webp";

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
    title: "Independent Software Engineer (SaaS)",
    location: "Remote / Athens, Greece",
    description:
      "Architecting and shipping production-grade SaaS applications. I handle the full lifecycle from UI design to VPS deployment. Recent work includes high-performance discovery platforms and secure cryptographic tools, focusing on aggressive performance optimization (99+ Lighthouse scores) and privacy-first architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },
  {
    title: "Lead Full Stack Engineer - Wizy",
    location: "Marousi, Greece",
    description:
      "Led end-to-end development of enterprise SaaS platforms. Architected a multi-tenant HRM system with database-per-tenant isolation (Prisma/PostgreSQL) and a secure document storage system using S3/DigitalOcean Spaces. Implemented RBAC, OIDC authentication, and automated CI/CD pipelines, reducing deployment times by 80%. Collaborated directly with stakeholders to translate business needs into scalable technical solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jun 2025",
  },
  {
    title: "Software Engineer - C.I.T.S.H.A. at Greek Army",
    location: "Athens, Greece",
    description:
      "Modernized the official Hellenic Army website (army.gr), serving 550k+ monthly visitors with near-100% uptime in an ISO 27001 compliant environment. Developed Python automation scripts for massive data migration (Drupal to WordPress) and enhanced security protocols.",
    icon: React.createElement(GiMeepleArmy),
    date: "Jan 2022 - Jan 2023",
  },
  {
    title: "Graduated in Computer Engineering @ University of Thessaly",
    location: "Lamia, Greece",
    description:
      "Thesis: Siamese Neural Networks for Image Similarity (VGG19). Developed a web application for real-time image analysis with interactive mapping.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021",
  },
  {
    title: "Full Stack Web Developer (Internship) @ Crowdpolicy",
    location: "Moschato, Greece",
    description:
      "Contributed to front-end development and PHP custom theme crafting for various fintech and gov-tech projects in an Agile environment.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Mar 2021",
  },
  {
    title: "System Initialized",
    location: "Athens, Greece",
    description:
      "My journey into the world of code began, setting the stage for a path of continuous learning, growth, and innovation.",
    icon: React.createElement(FaBirthdayCake),
    date: "May 1997",
  },
] as const;

export const projectsData: ProjectDataItem[] = [
  {
    title: "PharmaFinder",
    description:
      "A high-performance pharmacy discovery platform. Achieved 99/100 Lighthouse Performance score through ISR, radius-based caching, and hybrid clustering. Features instant map loads (<50ms query time) and full WCAG 2.1 accessibility compliance.",
    tags: [
      "Next.js 16",
      "FastAPI",
      "TanStack Query",
      "Docker",
      "Redis",
      "MapLibre GL",
      "Tailwind",
      "Zod",
    ],
    imageUrl: pharmafinder,
    link: "https://pharmafinder.gr",
    github: "https://github.com/eliac7/pharmafinder-greece",
  },
  {
    title: "VaporKey",
    description:
      "Secure secret-sharing service focusing on cryptography and ephemeral data storage. Uses Redis expiration events for zero-knowledge data retention and secure deletion. Dockerized and deployed on DigitalOcean.",
    tags: [
      "Next.js",
      "Redis",
      "Cryptography",
      "Docker",
      "Tailwind",
      "DigitalOcean",
    ],
    imageUrl: vaporkey,
    link: "https://vapor-key.vercel.app",
    github: "https://github.com/eliac7/vaporkey",
  },
  {
    title: "E-food Analytics",
    description:
      "Interactive expense tracking dashboard for food delivery data. Visualizes order statistics and dining habits with dynamic charts. Built to practice complex data visualization and REST API integration.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Mantine",
      "ApexCharts",
      "Leaflet",
    ],
    imageUrl: efoodAnalytics,
    link: "https://bit.ly/efood-analytcis",
    github: "https://github.com/eliac7/efood-analytics",
  },
  {
    title: "Rebrain Platform",
    description:
      "Professional networking platform connecting Greek experts with local businesses. Implemented complex user roles and ESCO API integration for skill matching.",
    tags: ["WordPress", "PHP", "JavaScript", "ACF"],
    imageUrl: rebrainPlatform,
    link: "https://platform.rebraingreece.gr/",
  },
  {
    title: "Weather App Proxy",
    description:
      "Secure Node.js proxy server for OpenWeatherMap API with rate limiting and caching. Demonstrates API security best practices and backend architecture.",
    tags: ["Node.js", "Express", "API Security", "Caching"],
    imageUrl: weatherApp,
    github: "https://github.com/eliac7/node-openweather-proxy-server",
  },
  {
    title: "Discord Offers Bot",
    description:
      "Proactive bot for fetching and managing deals. Features MongoDB integration for offer tracking and automated expiration checks.",
    tags: ["Python", "Discord.py", "MongoDB", "Asyncio"],
    imageUrl: discordBot,
  },
];

export const skillsData = [
  // Core Stack
  "Next.js (App Router)",
  "React",
  "TypeScript",
  "Node.js",
  "Python (FastAPI)",
  "PostgreSQL",
  "Redis",

  // Frontend & Architecture
  "Tailwind CSS",
  "Framer Motion",
  "Feature-Sliced Design (FSD)",
  "TanStack Query",
  "Zod",
  "Server Actions",
  "WCAG 2.1 (A11y)",

  // Backend & DevOps
  "Prisma",
  "Docker",
  "DigitalOcean (VPS/S3)",
  "CI/CD (GitHub Actions)",
  "Linux",
  "Git",
  "WebSockets",
] as const;
