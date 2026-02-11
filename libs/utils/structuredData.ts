import { personalInfo } from "@/data/portfolio";

/**
 * Structured Data (JSON-LD) Utilities
 * 
 * Generates schema.org structured data for enhanced SEO.
 * Helps search engines understand the content and context of the site.
 */

/**
 * Person Schema
 * Describes the website owner with structured data
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    url: "https://mohdsaqibkhan.com",
    email: personalInfo.contact.email,
    telephone: personalInfo.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "India",
    },
    sameAs: personalInfo.socials.map((social) => social.url),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Greater Noida Institute of Technology",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Web Development",
      "Cloud Computing",
      "Computer Vision",
      "Python",
      "JavaScript",
      "React",
      "AWS",
    ],
  };
}

/**
 * Website Schema
 * Describes the portfolio website
 */
export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohd Saqib Khan Portfolio",
    description: "Portfolio showcasing AI/ML projects, web development work, and cloud architecture solutions",
    url: "https://mohdsaqibkhan.com",
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    inLanguage: "en-US",
  };
}

/**
 * Portfolio Schema
 * Describes the creative work portfolio
 */
export function getPortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: personalInfo.name,
      description: personalInfo.bio,
      image: "https://mohdsaqibkhan.com/og-image.png",
    },
  };
}
