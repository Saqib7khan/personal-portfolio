"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils/helpers";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: UserIcon },
  { href: "/#work", label: "Work", icon: GridIcon },
  { href: "/#contact", label: "Contact", icon: MailIcon },
];

const resumeHref = "/resume/My_Resume.pdf";

/**
 * Navigation Component
 * 
 * Floating dock navigation with active state indicators.
 * 
 * @component
 */
export function Navigation() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) {
      return;
    }

    const hash = href.slice(hashIndex);
    if (pathname !== "/") {
      return;
    }

    const element = document.querySelector(hash);
    if (!element) {
      return;
    }

    e.preventDefault();
    const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for fixed nav
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
      aria-label="Primary"
    >
      <div className="flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-2 shadow-lg backdrop-blur-md">
        <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
          MSK
        </Link>
        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group relative flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all hover:border-border hover:bg-surface hover:text-foreground",
                    isActive && "text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-full border border-border bg-background px-2 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:-top-9 group-hover:opacity-100">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <a
          href={resumeHref}
          download
          className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all hover:border-border hover:bg-surface hover:text-foreground"
          aria-label="Download Resume"
        >
          <DownloadIcon className="h-5 w-5" />
          <span className="pointer-events-none absolute -top-8 whitespace-nowrap rounded-full border border-border bg-background px-2 py-1 text-xs text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover:-top-9 group-hover:opacity-100">
            Download Resume
          </span>
        </a>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
      />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 14a4 4 0 0 1-8 0m8 0a4 4 0 0 0-8 0m8 0V7a4 4 0 1 0-8 0v7m12 6H4"
      />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 0l8 6 8-6"
      />
    </svg>
  );
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 3v10m0 0l4-4m-4 4l-4-4m-4 9h16"
      />
    </svg>
  );
}
