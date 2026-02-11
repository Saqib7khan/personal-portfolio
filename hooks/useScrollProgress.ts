import { useEffect, useState } from "react";

/**
 * Hook to track scroll progress
 * Returns a value between 0 and 1 representing scroll position
 * 
 * @returns {number} Scroll progress (0-1)
 * 
 * @example
 * const progress = useScrollProgress();
 * // Use for scroll-based animations
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.pageYOffset;
      const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
      setProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return progress;
}
