import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/features/SmoothScrollProvider";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";
import { ThemeProvider } from "@/components/features/ThemeProvider";
import { ShootingStars } from "@/components/ui/ShootingStars";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohdsaqibkhan.com"),
  title: {
    default: "Mohd Saqib Khan | Developer & CS Student",
    template: "%s | Mohd Saqib Khan",
  },
  description: "Portfolio of Mohd Saqib Khan, a Computer Science student specializing in AI/ML, Web Development, and Cloud Architecture. Final year B.Tech CSE student from Greater Noida Institute of Technology.",
  keywords: [
    "Mohd Saqib Khan",
    "Full Stack Developer",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "React Developer",
    "Next.js",
    "AWS",
    "Cloud Architecture",
    "Python Developer",
    "TypeScript",
    "Portfolio",
    "Greater Noida",
    "India",
  ],
  authors: [{ name: "Mohd Saqib Khan", url: "https://mohdsaqibkhan.com" }],
  creator: "Mohd Saqib Khan",
  publisher: "Mohd Saqib Khan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohdsaqibkhan.com",
    title: "Mohd Saqib Khan | Developer & CS Student",
    description: "Portfolio showcasing AI/ML projects, web development work, and cloud architecture solutions by Mohd Saqib Khan.",
    siteName: "Mohd Saqib Khan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohd Saqib Khan - Developer & CS Student",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Saqib Khan | Developer & CS Student",
    description: "Portfolio showcasing AI/ML projects, web development work, and cloud architecture solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScrollProvider>
            <ShootingStars />
            {children}
            <ScrollToTopButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
