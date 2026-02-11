/**
 * Type Definitions for Portfolio Content
 * 
 * These interfaces define the contracts for all data entities
 * in the portfolio application, following strict typing requirements.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  year: number;
  category: "AI/ML" | "Web" | "Cloud" | "Research";
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  year: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: "Language" | "Framework" | "Tool" | "Cloud";
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  availability: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  bio: string;
  contact: ContactInfo;
  socials: SocialLink[];
}
