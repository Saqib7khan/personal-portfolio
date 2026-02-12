"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/features/Navigation";
import { ContactSection } from "@/components/features/ContactSection";
import { GridBackground } from "@/components/ui/GridBackground";
import { DotBackground } from "@/components/ui/DotBackground";
import {
  personalInfo,
  services,
  experiences,
  skills,
} from "@/data/portfolio";
import { fadeInUp, staggerContainer } from "@/libs/utils/animations";

/**
 * About Page
 * 
 * Comprehensive information about Mohd Saqib Khan:
 * - Bio section
 * - Services offered
 * - Experience timeline
 * - Skills breakdown
 */
export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative container mx-auto px-6 py-24 overflow-hidden">
          <GridBackground className="opacity-[0.07]" gridSize={40} />
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-4xl relative z-10"
          >
            <h1 className="mb-8 text-hero font-bold leading-none tracking-tighter">
              Sup, I&apos;m Saqib.
            </h1>
            <p className="text-xl leading-relaxed text-muted md:text-2xl">
              {personalInfo.bio}
            </p>
            <div className="mt-6 text-lg text-muted">
              <p>📍 {personalInfo.contact.location}</p>
              <p className="mt-2">✨ {personalInfo.contact.availability}</p>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section className="border-t border-border bg-surface-muted py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-12 text-display font-bold tracking-tight"
              >
                What I Do
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={fadeInUp}
                    className="rounded-lg bg-surface p-8 shadow-sm"
                  >
                    <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                    <p className="leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="relative container mx-auto px-6 py-24 overflow-hidden">
          <DotBackground className="opacity-[0.08]" dotSize={1.5} dotSpacing={30} />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-12 text-display font-bold tracking-tight"
            >
              Experience
            </motion.h2>

            <div className="space-y-12">
              {experiences.map((exp) => (
                <motion.article
                  key={exp.id}
                  variants={fadeInUp}
                  className="border-l-2 border-foreground pl-8"
                >
                  <div className="mb-2 flex items-center gap-4">
                    <span className="rounded-full bg-foreground px-4 py-1 text-sm font-medium text-background">
                      {exp.year}
                    </span>
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>

                  <h3 className="mb-2 text-2xl font-bold">{exp.title}</h3>
                  <p className="mb-4 text-lg text-muted">{exp.organization}</p>
                  <p className="mb-4 leading-relaxed">{exp.description}</p>

                  {exp.achievements && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground" />
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="border-t border-border bg-surface-muted py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="mb-12 text-display font-bold tracking-tight"
              >
                Skills & Tools
              </motion.h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {["Language", "Framework", "Cloud", "Tool"].map((category) => (
                  <motion.div key={category} variants={fadeInUp}>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-muted">
                      {category}s
                    </h3>
                    <ul className="space-y-2">
                      {skills
                        .filter((s) => s.category === category)
                        .map((skill) => (
                          <motion.li
                            key={skill.name}
                            className="group relative rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground/80 shadow-sm transition-all duration-300 cursor-pointer hover:border-foreground/30 hover:text-foreground hover:shadow-md"
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="relative z-10">{skill.name}</span>
                          </motion.li>
                        ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
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
