"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils/helpers";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

/**
 * Navigation Component
 * 
 * Minimal floating navigation bar with active state indicators.
 * Mobile-responsive with hamburger menu support (to be added).
 * 
 * @component
 */
export function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-white/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          MSK
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button (Placeholder) */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
