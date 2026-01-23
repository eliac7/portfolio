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
      "Focusing on advanced R&D by building production-grade personal projects. Deepening expertise in Next.js 16 internals, Server Actions, and System Design through the complete architecture refactor of PharmaFinder (v2) and various experimental prototypes.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },
  {
    title: "Lead Full Stack Engineer - Wizy",
    location: "Marousi, Greece",
    description:
      "Led technical delivery for three production platforms, collaborating directly with the CEO, Project Managers, and external government vendors. 1) Architected WizyHRM (SaaS) with physical data isolation and automated runtime provisioning via Trigger.dev. 2) Engineered the National Digital School Admin Portal (gov.gr), coordinating with external backend teams to handle massive HLS streaming loads. 3) Delivered the ELOT E-shop, translating complex tax regulations into a robust VAT engine.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Jun 2025",
  },
  {
    title: "Software Engineer (Product & R&D)",
    location: "Remote",
    description:
      "Focused on the end-to-end engineering of proprietary data products. Designed and shipped 'E-food Analytics' to handle complex data visualization at scale. Architected the MVP for 'PharmaFinder', establishing the core geospatial search algorithms. Refactored legacy codebases to implement Feature-Sliced Design (FSD), improving code maintainability and scalability.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - May 2024",
  },
  {
    title: "Software Engineer - Hellenic Army IT Corps",
    location: "Athens, Greece",
    description:
      "Modernized the official Hellenic Army website (army.gr), serving 550k+ monthly visitors with near-100% uptime in an ISO 27001 compliant environment. Developed Python automation scripts for massive data migration, reducing manual content entry time by 80%.",
    icon: React.createElement(GiMeepleArmy),
    date: "Jan 2022 - Jan 2023",
  },
  {
    title: "Graduated in Computer Engineering",
    location: "University of Thessaly",
    description:
      "Thesis: Siamese Neural Networks for Image Similarity (VGG19). Developed a web application for real-time image analysis with interactive mapping.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2021",
  },
  {
    title: "Full Stack Web Developer (Internship) - Crowdpolicy",
    location: "Moschato, Greece",
    description:
      "Contributed to front-end development and PHP custom theme crafting for fintech and gov-tech projects. Operated within an Agile environment, participating in daily stand-ups and sprint planning.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Mar 2021",
  },
  {
    title: "System Initialized",
    location: "Athens, Greece",
    description:
      "I wrote my first line of code over a decade ago. What started as curiosity evolved into a career defined by robust architecture and user-centric performance. I focus on the intersection of technical excellence and business value.",
    icon: React.createElement(FaBirthdayCake),
    date: "1997",
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
      "Next.js 15",
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
  "Next.js (App Router)",
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