"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/libs/utils/animations";
import { GridBackground } from "@/components/ui/GridBackground";

/**
 * HeroSection Component
 * 
 * Large typography hero section with CTA.
 * Implements the "Edwin Le" aesthetic with massive headline.
 * 
 * @component
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Grid Background */}
      <GridBackground className="opacity-[0.07]" gridSize={40} />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h1 className="text-hero font-bold leading-none tracking-tighter">
            Sup, I&apos;m Saqib.
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl text-2xl font-medium text-muted md:text-3xl">
            Developer & Computer Science Student specializing in AI, Web Development, and Cloud Architecture.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector("#work");
                if (element) {
                  const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform hover:scale-105"
            >
              View My Work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-8 py-4 text-sm font-medium transition-all hover:bg-foreground hover:text-background"
            >
              About Me
            </Link>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-sm text-muted">
              <span>Scroll</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
