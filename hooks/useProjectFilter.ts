import { useState, useMemo } from "react";
import { Project } from "@/libs/types/content";

type FilterCategory = "All" | "AI/ML" | "Web" | "Cloud" | "Research";

/**
 * Hook for filtering projects by category
 * Abstracts filtering logic from presentation layer
 * 
 * @param {Project[]} projects - Array of projects to filter
 * @returns {{ filtered: Project[], activeFilter: FilterCategory, setFilter: Function }}
 * 
 * @example
 * const { filtered, activeFilter, setFilter } = useProjectFilter(allProjects);
 */
export function useProjectFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return {
    filtered,
    activeFilter,
    setFilter: setActiveFilter,
    categories: ["All", "AI/ML", "Web", "Cloud", "Research"] as FilterCategory[],
  };
}
