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
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
