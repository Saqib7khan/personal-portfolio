"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/libs/utils/animations";
import { personalInfo } from "@/data/portfolio";

/**
 * ContactSection Component
 * 
 * Contact form and information display.
 * Includes email, social links, and a simple contact form.
 * 
 * @component
 */
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { apiClient } = await import("@/services/api/apiClient");
      const response = await apiClient.submitContactForm(formState);
      
      if (response.status === 200) {
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-black py-24 text-white"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mx-auto max-w-4xl"
        >
          <h2
            id="contact-heading"
            className="mb-12 text-display font-bold tracking-tight"
          >
            Let&apos;s Connect
          </h2>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-400">Email</h3>
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-lg hover:underline"
                >
                  {personalInfo.contact.email}
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-400">Phone</h3>
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="text-lg hover:underline"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium text-gray-400">Location</h3>
                <p className="text-lg">{personalInfo.contact.location}</p>
              </div>

              <div>
                <h3 className="mb-4 text-sm font-medium text-gray-400">Social</h3>
                <div className="flex gap-4">
                  {personalInfo.socials.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/20 px-4 py-2 text-sm transition-colors hover:bg-white hover:text-black"
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-white px-6 py-3 font-medium text-black transition-transform hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm text-green-400">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm text-red-400">Failed to send. Please try again.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
