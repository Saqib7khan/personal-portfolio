import type { ClassValue } from "clsx";
import clsx from "clsx";

/**
 * Utility for merging Tailwind CSS classes
 * Combines clsx for conditional classes
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string, offset: number = 0) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
  
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
