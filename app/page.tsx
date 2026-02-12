import { Navigation } from "@/components/features/Navigation";
import { Marquee } from "@/components/features/Marquee";
import { ProjectGrid } from "@/components/ui/ProjectGrid";
import { projects, marqueeSkills } from "@/data/portfolio";
import { HeroSection } from "@/components/features/HeroSection";
import { ContactSection } from "@/components/features/ContactSection";
import { DotBackground } from "@/components/ui/DotBackground";
import {
  getPersonSchema,
  getWebsiteSchema,
  getPortfolioSchema,
} from "@/libs/utils/structuredData";

/**
 * Home Page
 * 
 * Main landing page featuring:
 * - Hero section with large typography
 * - Marquee of skills
 * - Selected work grid
 * - Contact section
 * - Structured data for SEO
 */
export default function HomePage() {
  // Filter featured projects
  const featuredProjects = projects.filter((p) => p.featured);

  // Generate structured data
  const personSchema = getPersonSchema();
  const websiteSchema = getWebsiteSchema();
  const portfolioSchema = getPortfolioSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Section */}
        <section aria-label="Skills overview">
          <Marquee text={marqueeSkills} />
        </section>

        {/* Selected Work Section */}
        <section
          id="work"
          className="relative container mx-auto px-6 py-24 overflow-hidden"
          aria-labelledby="work-heading"
        >
          {/* Dot Background */}
          <DotBackground className="opacity-[0.08]" dotSize={1.5} dotSpacing={30} />
          
          <div className="relative z-10">
            <h2
              id="work-heading"
              className="mb-12 text-display font-bold tracking-tight"
            >
              Selected Work
            </h2>
            <ProjectGrid projects={featuredProjects} />
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground py-8 text-background">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Mohd Saqib Khan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
