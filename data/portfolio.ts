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
    id: "livestock-disease-diagnosis",
    title: "AI-Powered Disease Diagnosis",
    description:
      "Early detection system for Foot and Mouth Disease (FMD) in livestock using temperature and motion sensor data. Leverages machine learning models to provide real-time health monitoring.",
    tech: ["Python", "TensorFlow", "IoT Sensors", "Machine Learning", "Data Analysis"],
    image: "/images/projects/livestock-ai.jpg",
    year: 2025,
    category: "AI/ML",
    featured: true,
  },
  {
    id: "wordsmith",
    title: "Wordsmith - Writing Assistant",
    description:
      "AI-powered writing assistant that provides intelligent spelling correction and grammar fixes. Helps users improve their writing quality with real-time suggestions.",
    tech: ["Python", "HTML", "CSS", "JavaScript", "NLP"],
    image: "/images/projects/wordsmith.jpg",
    year: 2024,
    category: "AI/ML",
    featured: true,
  },
  {
    id: "hand-sign-detection",
    title: "Hand Sign Detection",
    description:
      "Real-time computer vision system for recognizing static hand gestures using YOLO and TensorFlow. Enables gesture-based interaction and accessibility features.",
    tech: ["YOLO", "TensorFlow", "OpenCV", "Python", "Computer Vision"],
    image: "/images/projects/hand-detection.jpg",
    year: 2024,
    category: "AI/ML",
    featured: true,
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description:
      "Comprehensive web-based platform for streamlining administrative tasks and academic tracking. Facilitates efficient management of student records and performance monitoring.",
    tech: ["React", "Node.js", "MySQL", "Express", "AWS"],
    image: "/images/projects/student-system.jpg",
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
  { name: "Python", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "TensorFlow", category: "Framework" },
  { name: "Node.js", category: "Framework" },
  { name: "AWS", category: "Cloud" },
  { name: "MySQL", category: "Tool" },
  { name: "Git", category: "Tool" },
  { name: "Docker", category: "Tool" },
];

/**
 * Skills formatted for marquee display
 */
export const marqueeSkills = skills.map((s) => s.name).join(" • ");
