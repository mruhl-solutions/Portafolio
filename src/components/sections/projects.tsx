"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section id="proyectos" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de proyectos. Reemplazá estos placeholders con tus proyectos reales en src/data/profile.ts."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-sky-50 text-sm font-medium text-indigo-400 dark:from-indigo-500/10 dark:to-sky-500/10 dark:text-indigo-300">
                {project.title}
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Código
                  </a>
                ) : null}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
