import {
  Project,
  Experience,
  Service,
  Skill,
  PersonalInfo,
} from "@/libs/types/content";

/**
 * Personal Information - Source of Truth
 */
export const personalInfo: PersonalInfo = {
  name: "Mohd Saqib Khan",
  role: "Developer & Computer Science Student",
  bio: "Dedicated and proactive Computer Science student in final year at Greater Noida Institute of Technology, specializing in AI/ML research, web development, and cloud architecture. Passionate about building scalable solutions that solve real-world problems.",
  contact: {
    email: "mohdsaqibkhan7008@gmail.com",
    phone: "+91 8874799298",
    location: "Greater Noida / Lucknow, India",
    availability: "Open to opportunities",
  },
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Saqib7khan",
      username: "Saqib7khan",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/saqib-khan-0070sk33515",
      username: "saqib-khan-0070sk33515",
    },
  ],
};

/**
 * Projects - Source of Truth
 */
export const projects: Project[] = [
  {
    id: "resmind",
    title: "ResMind – Agentic AI Resume Architect",
    description:
      "Full-stack agentic application that utilizes LLMs to autonomously rewrite and reformat user resumes based on specific job descriptions. Features real-time Generative UI with split-screen editor, secure Role-Based Access Control (RBAC), and Row Level Security (RLS) via Supabase Auth. Integrates @react-pdf/renderer to convert AI-structured JSON into perfectly formatted downloadable PDFs.",
    tech: ["Next.js 15", "TypeScript", "Supabase", "OpenAI API", "React-PDF"],
    image: "/images/projects/resmind.jpg",
    link: "https://resmind.vercel.app/",
    year: 2025,
    category: "Web",
    featured: true,
  },
  {
    id: "wordsmith",
    title: "Wordsmith - AI Writing Assistant",
    description:
      "AI-powered writing assistant that offers spelling correction and fixes typos and errors to ensure clean and professional text. Helps users improve their writing quality with intelligent suggestions.",
    tech: ["Python", "HTML", "CSS", "JavaScript"],
    image: "/images/projects/wordsmith.jpg",
    github: "https://github.com/Saqib7khan/Wordsmith",
    link: "https://github.com/Saqib7khan/Wordsmith",
    year: 2024,
    category: "AI/ML",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description:
      "Production-grade, SEO-optimized personal portfolio built with Next.js + TypeScript and styled with Tailwind CSS. Features Framer Motion animations, Lenis smooth scrolling, and a Nodemailer contact API with content driven from a central data layer for easy maintenance and scalability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis", "Nodemailer"],
    image: "/images/projects/portfolio.jpg",
    link: "https://personal-portfolio-nine-alpha-50.vercel.app",
    year: 2025,
    category: "Web",
    featured: true,
  },
  {
    id: "note-taking-app",
    title: "Note-Taking Web App",
    description:
      "Simple yet functional note-taking application with a GUI built using Python and Tkinter, with MySQL as the database for user and note management. Allows users to register, login, reset passwords, add, edit, and delete notes with secure user authentication.",
    tech: ["Python", "Tkinter", "MySQL"],
    image: "/images/projects/note-taking.jpg",
    github: "https://github.com/Saqib7khan/note_taking",
    link: "https://github.com/Saqib7khan/note_taking",
    year: 2023,
    category: "Web",
    featured: true,
  },
];

/**
 * Experience Timeline - Source of Truth
 */
export const experiences: Experience[] = [
  {
    id: "livestock-research",
    title: "AI Research Lead",
    organization: "Final Year Project",
    period: "2024 - 2025",
    description:
      "Leading research on AI-powered livestock disease diagnosis system, focusing on early detection of FMD through sensor data analysis.",
    achievements: [
      "Developed ML models with 92% accuracy for disease detection",
      "Integrated IoT sensors for real-time monitoring",
      "Presented research at college symposium",
    ],
    year: 2025,
  },
  {
    id: "hand-sign-research",
    title: "Computer Vision Research",
    organization: "Academic Project",
    period: "2024",
    description:
      "Conducted research on real-time hand gesture recognition using deep learning, contributing to accessibility technology.",
    achievements: [
      "Implemented YOLO-based detection system",
      "Achieved real-time processing at 30 FPS",
      "Published project documentation and open-sourced code",
    ],
    year: 2024,
  },
  {
    id: "web-development",
    title: "Full Stack Development",
    organization: "Freelance & Academic",
    period: "2023 - Present",
    description:
      "Building scalable web applications using modern frameworks and cloud infrastructure, focusing on user experience and performance.",
    achievements: [
      "Deployed multiple projects on AWS",
      "Maintained 99.9% uptime for production applications",
      "Mentored junior students in web development",
    ],
    year: 2023,
  },
];

/**
 * Services Offered - Source of Truth
 */
export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building responsive, performant web applications using React, Next.js, and modern JavaScript frameworks. Focus on user experience and accessibility.",
  },
  {
    id: "ai-ml-research",
    title: "AI/ML Research",
    description:
      "Researching and implementing machine learning solutions for real-world problems, specializing in computer vision and predictive analytics.",
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    description:
      "Designing and deploying scalable cloud infrastructure on AWS, including EC2, S3, RDS, and Lambda for serverless architectures.",
  },
];

/**
 * Skills - Source of Truth
 */
export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  
  // Frontend
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Framework" },
  
  // Backend
  { name: "Node.js", category: "Framework" },
  
  // Databases
  { name: "PostgreSQL", category: "Tool" },
  { name: "MongoDB", category: "Tool" },
  
  // Cloud & Infra
  { name: "AWS", category: "Cloud" },
  { name: "AWS EC2", category: "Cloud" },
  { name: "AWS S3", category: "Cloud" },
  { name: "Git", category: "Tool" },
  { name: "GitHub", category: "Tool" },
  
  // Core Skills
  { name: "SaaS Architecture", category: "Tool" },
  { name: "REST APIs", category: "Tool" },
  { name: "DB Schema Design", category: "Tool" },
];

/**
 * Skills formatted for marquee display
 */
export const marqueeSkills = skills.map((s) => s.name).join(" • ");
