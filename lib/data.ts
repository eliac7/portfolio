import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaBirthdayCake } from "react-icons/fa";
import { GiMeepleArmy } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

import { ProjectDataItem } from "@/lib/types";

import wizyhrm from "@/public/projects/wizyhrm.webp";
import digitalschool from "@/public/projects/digitalschool.webp";
import elot from "@/public/projects/elot.webp";
import pharmafinder from "@/public/projects/pharmafinder.webp";
import vaporkey from "@/public/projects/vaporkey.webp";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "SaaS Architect & Full Stack Engineer",
    location: "Remote / Athens, Greece",
    description:
      "Specializing in 0-to-1 SaaS architecture. Currently building high-performance platforms like PharmaFinder (99/100 Performance Score). I bridge the gap between complex backend logic (FastAPI/Redis) and sub-100ms UI interactions (Next.js 16).",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },
  {
    title: "Lead Full Stack Engineer - Wizy",
    location: "Marousi, Greece",
    description:
      "Sole engineer behind three production platforms using Next.js 14. 1) Built WizyHRM, a Modular Monolith with database-per-tenant isolation. 2) Developed the National Digital School Admin Portal (gov.gr), handling massive HLS streaming loads. 3) Architected the ELOT E-shop with complex VAT/ERP integration. Managed end-to-end dev, from Prisma database design to Vercel/VPS deployments.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jun 2025",
  },
  {
    title: "Software Engineer (R&D / Freelance)",
    location: "Remote",
    description:
      "Dedicated period for mastering modern architectural patterns. Built 'E-food Analytics' to visualize complex consumer data and refactored legacy codebases to use Feature-Sliced Design (FSD). Automated PostgreSQL backups via custom GitHub Actions workflows.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - May 2024",
  },
  {
    title: "Software Engineer - Hellenic Army IT Corps",
    location: "Athens, Greece",
    description:
      "Modernized the official Hellenic Army website (army.gr), serving 550k+ monthly visitors with near-100% uptime in an ISO 27001 compliant environment. Developed Python automation scripts for massive data migration (Drupal to WordPress).",
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
      "I wrote my first line of code over a decade ago. What started as curiosity evolved into a career defined by robust architecture and user-centric performance. I focus on the intersection of technical excellence and business value.",
    icon: React.createElement(FaBirthdayCake),
    date: "May 1997",
  },
] as const;

export const projectsData: ProjectDataItem[] = [
  {
    title: "WizyHRM",
    description:
      "Enterprise HR SaaS built as a Modular Monolith. Features a custom Greek Labor Law engine, database-per-tenant isolation via dynamic middleware, and background CV analysis pipelines using Trigger.dev.",
    tags: [
      "Next.js 15",
      "Multi-Tenancy",
      "Prisma",
      "Trigger.dev",
      "Zod",
      "PostgreSQL",
    ],
    imageUrl: wizyhrm,
    link: "https://wizyhrm.gr",
  },
  {
    title: "Digital School (gov.gr)",
    description:
      "The official streaming backoffice for the Ministry of Education. Orchestrates live lectures via HLS.js with low-latency buffers. Implements complex OIDC Auth with silent refresh loops and Role-Based Access Control (Admin vs Streamer).",
    tags: [
      "Next.js 14",
      "OIDC Auth",
      "HLS.js",
      "SWR",
      "RBAC",
      "Radix UI",
    ],
    imageUrl: digitalschool,
  },
  {
    title: "ELOT E-shop",
    description:
      "E-commerce platform for Hellenic Standardization. Features a complex VAT calculation engine (B2B/B2C/Intra-community) and deep ERP synchronization (Pylon). Uses MeiliSearch for instant faceted search over thousands of ISO standards.",
    tags: [
      "Next.js",
      "MeiliSearch",
      "ERP Integration",
      "NextAuth",
      "Zod",
    ],
    imageUrl: elot,
    link: "https://sales.elot.gr",
  },
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
];

export const skillsData = [
  // Core Stack & Architecture
  "Next.js 15",
  "React",
  "TypeScript",
  "Modular Monolith",
  "Server Actions",
  "Feature-Sliced Design",

  // Backend & Database
  "Node.js",
  "Python (FastAPI)",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "MeiliSearch",

  // DevOps & Tools
  "Docker",
  "Trigger.dev",
  "OIDC / NextAuth",
  "CI/CD (GitHub Actions)",
  "Linux",
  "Git",
] as const;