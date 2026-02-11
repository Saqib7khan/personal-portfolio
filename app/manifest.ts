import { MetadataRoute } from "next";

/**
 * Web App Manifest
 * 
 * Provides metadata for PWA installation and home screen appearance.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohd Saqib Khan - Portfolio",
    short_name: "MSK Portfolio",
    description: "Portfolio of Mohd Saqib Khan, Developer & CS Student specializing in AI/ML and Web Development",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
