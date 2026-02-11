import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#000000",
        muted: "#888888",
        border: "#e5e5e5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 10vw, 8rem)", { lineHeight: "0.9", letterSpacing: "-0.02em" }],
        "display": ["clamp(2rem, 6vw, 4rem)", { lineHeight: "1", letterSpacing: "-0.01em" }],
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
