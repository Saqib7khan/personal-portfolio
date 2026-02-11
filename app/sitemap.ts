import { MetadataRoute } from "next";

/**
 * Sitemap Generator
 * 
 * Generates a sitemap for search engine crawlers.
 * Automatically includes all main pages with priority and update frequency.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohdsaqibkhan.com";
  const currentDate = new Date().toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
