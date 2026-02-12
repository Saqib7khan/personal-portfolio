"use client";

import { motion } from "framer-motion";
import { Project } from "@/libs/types/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { staggerContainer, fadeInUp } from "@/libs/utils/animations";
import { useCardFocus } from "@/hooks/useCardFocus";

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

/**
 * ProjectGrid Component
 * 
 * Responsive grid layout for project cards.
 * - 1 column on mobile
 * - 2 columns on tablet
 * - 3 columns on desktop
 * 
 * Includes stagger animation for cards on initial load.
 * 
 * @component
 * @example
 * <ProjectGrid projects={projectsData} />
 */
export function ProjectGrid({ projects, className }: ProjectGridProps) {
  const { activeId, getItemHandlers, reset } = useCardFocus<string>();

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      onMouseLeave={reset}
      onBlur={reset}
      className={`grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ${className || ""}`}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={fadeInUp}>
          <ProjectCard
            project={project}
            isDimmed={activeId !== null && activeId !== project.id}
            {...getItemHandlers(project.id)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
