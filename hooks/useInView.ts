import { useEffect, useState, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Hook to detect if element is in viewport
 * Useful for triggering animations on scroll
 * 
 * @param {RefObject<Element>} ref - React ref to observe
 * @param {UseInViewOptions} options - Intersection observer options
 * @returns {boolean} Whether element is in view
 * 
 * @example
 * const ref = useRef(null);
 * const isInView = useInView(ref, { threshold: 0.5 });
 */
export function useInView(
  ref: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.1, rootMargin = "0px" } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return isInView;
}
