"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, profile } from "@/data/profile";

export function About() {
  return (
    <section id="sobre-mi" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Sobre mí"
          title="Perfil y progreso académico"
          description={profile.summary}
        />

        <div className="mb-14 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
          {education.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-indigo-400">
                {item.type === "Educación" ? (
                  <GraduationCap className="h-4 w-4" />
                ) : (
                  <Award className="h-4 w-4" />
                )}
              </span>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300">
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
        </div>
      </Container>
    </section>
  );
}
