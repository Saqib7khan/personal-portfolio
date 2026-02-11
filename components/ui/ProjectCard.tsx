"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/libs/types/content";
import { scaleOnHover, imageReveal } from "@/libs/utils/animations";
import { cn } from "@/libs/utils/helpers";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * ProjectCard Component (Presentation Layer)
 * 
 * Displays individual project with hover interactions:
 * - Grayscale image by default
 * - Color on hover
 * - Slight scale up (1.05x)
 * - Text reveal animation
 * 
 * @component
 * @example
 * <ProjectCard project={projectData} />
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardContent = (
    <>
      {/* Image */}
      <motion.div
        variants={imageReveal}
        className="relative aspect-[4/3] w-full overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Year */}
        <div className="mb-2 flex items-center justify-between text-sm text-muted">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full border border-border px-3 py-1 text-xs font-medium">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Hover indicator */}
        {project.link && (
          <div className="mt-4 flex items-center text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
            View Project
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      variants={scaleOnHover}
      initial="initial"
      whileHover="hover"
      className={cn(
        "group relative overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-xl",
        className
      )}
    >
      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </Link>
      ) : (
        <div className="block">{cardContent}</div>
      )}
    </motion.article>
  );
}
