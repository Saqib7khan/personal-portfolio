/**
 * Animation variants for Framer Motion
 * Centralized to follow DRY principle
 */

import { Variants } from "framer-motion";

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Stagger children animation
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * Scale on hover
 */
export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

/**
 * Image reveal animation (grayscale to color)
 */
export const imageReveal: Variants = {
  initial: {
    filter: "grayscale(100%)",
  },
  hover: {
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Page transition
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
