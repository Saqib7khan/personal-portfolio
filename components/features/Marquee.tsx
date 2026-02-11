"use client";

import { motion } from "framer-motion";
import { prefersReducedMotion } from "@/libs/utils/helpers";
import { useEffect, useState } from "react";

interface MarqueeProps {
  text: string;
  speed?: number;
}

/**
 * Marquee Component
 * 
 * Infinite scrolling text loop for skills/interests display.
 * Implements the "Me in brief" section aesthetic.
 * 
 * Features:
 * - Seamless infinite loop
 * - Pause on hover
 * - Respects prefers-reduced-motion
 * 
 * @component
 * @example
 * <Marquee text="Python • React • AWS • Computer Vision" />
 */
export function Marquee({ text, speed = 30 }: MarqueeProps) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    setShouldAnimate(!prefersReducedMotion());
  }, []);

  // Duplicate text for seamless loop
  const displayText = `${text} • ${text} • ${text}`;

  return (
    <div className="relative overflow-hidden bg-black py-6">
      <motion.div
        className="flex whitespace-nowrap"
        animate={
          shouldAnimate
            ? {
                x: [0, -33.33 + "%"],
              }
            : {}
        }
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={shouldAnimate ? { animationPlayState: "paused" } : {}}
      >
        <span className="pr-8 text-3xl font-bold tracking-tight text-white md:text-5xl">
          {displayText}
        </span>
      </motion.div>
    </div>
  );
}
