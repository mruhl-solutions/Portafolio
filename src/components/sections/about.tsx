"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillMarquee } from "@/components/skill-marquee";
import { education, profile } from "@/data/profile";

export function About() {
  const degree = education.filter((item) => item.type === "Educación");
  const certifications = education.filter((item) => item.type === "Certificación");

  return (
    <section id="sobre-mi" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Sobre mí"
          title="Perfil y progreso académico"
          description={profile.summary}
        />

        <SkillMarquee skills={profile.skills} />

        {degree.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="mb-6 flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-red-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-red-900/60"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-red-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-red-400">
              <GraduationCap className="h-4 w-4" />
            </span>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                  {item.type}
                </span>
                {item.period ? (
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                    {item.period}
                  </span>
                ) : null}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.place}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-colors hover:border-red-200 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-red-900/60"
            >
              <div className="mb-2 flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-red-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-red-400">
                  <Award className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {item.place}
                    {item.period ? ` · ${item.period}` : ""}
                  </p>
                </div>
              </div>
              <p className="flex-1 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
              {"link" in item && item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs font-medium text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  Ver certificado
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
