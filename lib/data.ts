import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rebrainPlatform from "@/public/rebrainPlatform.jpg";
import HEDNO from "@/public/HEDNO.jpg";
import efoodAnalytics from "@/public/efoodAnalytics.jpg";

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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Rebrain Platform",
    description:
      "Facilitated connections between skilled professionals abroad and Greek businesses. Users can register as Scientists / Experts / Researchers or businesses, each with relevant permissions. Developed using WordPress CPTs and ACF, with integration of ESCO's API for enhanced functionality.",
    tags: ["WordPress", "PHP", "REST API", "JavaScript"],
    imageUrl: rebrainPlatform,
  },
  {
    title: "HEDNO Chatbot",
    description:
      "Hellenic Electricity Distribution Network Operator's chatbot landing page  ",
    tags: ["HTML", "SCSS", "JavaScript"],
    imageUrl: HEDNO,
  },
  {
    title: "E-food Analytics",
    description:
      "Track your E-food expenses with dynamic charts and interactive maps. Dive deep into order statistics, frequent stores, and products. Discover your dining habits at a glance.",
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
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
