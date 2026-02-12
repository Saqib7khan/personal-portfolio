"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProviderProps {
  children: ReactNode;
}

/**
 * SmoothScrollProvider Component
 * 
 * Wraps the application with Lenis smooth scrolling.
 * Provides the characteristic "Edwin Le" heavy/luxurious scroll feel.
 * 
 * @component
 * @example
 * <SmoothScrollProvider>
 *   <App />
 * </SmoothScrollProvider>
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      autoRaf
      options={{
        lerp: 0.08, // Balanced smoothness without lag
        duration: 1.4, // Slightly longer easing for a softer feel
        smoothWheel: true, // Enable smooth scrolling with mouse wheel
        wheelMultiplier: 0.8, // Reduce scroll speed for better control
        touchMultiplier: 1.5, // Touch scroll sensitivity
        infinite: false, // Disable infinite scroll
        orientation: "vertical", // Vertical scrolling only
        gestureOrientation: "vertical",
      }}
    >
      {children}
    </ReactLenis>
  );
}
