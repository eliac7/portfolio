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
    title: "Software Engineer (Independent)",
    location: "Athens, Greece",
    description:
      "Focusing on advanced R&D and performance optimization of personal projects (PharmaFinder, VaporKey) while actively seeking full-time opportunities. Deepening expertise in Next.js 16 internals, Server Actions, and System Design.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },
  {
    title: "Lead Full Stack Engineer - Wizy",
    location: "Marousi, Greece",
    description:
      "Sole engineer behind three production platforms using Next.js 15. 1) Architected WizyHRM, a multi-tenant SaaS with physical database isolation (Postgres-per-tenant). Engineered an automated infrastructure pipeline using Trigger.dev and Cloudflare API to provision databases and DNS records at runtime. 2) Developed the National Digital School Admin Portal (gov.gr), handling massive HLS streaming loads. 3) Built the ELOT E-shop with complex VAT/ERP synchronization.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jun 2025",
  },
  {
    title: "Software Engineer (Open Source / R&D)",
    location: "Remote",
    description:
      "Dedicated period for upskilling in modern architecture. Developed 'E-food Analytics' to practice complex data visualization and refactored personal projects to use Feature-Sliced Design (FSD). Automated PostgreSQL backups via custom GitHub Actions workflows.",
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
      "Enterprise SaaS with physical data isolation. Orchestrates runtime infrastructure provisioning (creating databases & DNS records) via Trigger.dev and Cloudflare. Features a proprietary Greek Labor Law engine and dependency-aware subscription logic.",
    tags: [
      "Next.js 15",
      "Multi-Tenancy",
      "Trigger.dev",
      "Cloudflare API",
      "Prisma",
      "Zod",
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