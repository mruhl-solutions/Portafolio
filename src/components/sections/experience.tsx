"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section id="experiencia" className="border-y border-zinc-200/70 bg-zinc-50/60 py-24 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-900/30">
      <Container>
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia profesional"
          description="Historial laboral y principales responsabilidades en cada rol."
        />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-zinc-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-colors hover:border-red-200 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-red-900/60"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {job.role}
                    </h3>
                    <p className="text-sm font-medium text-red-600 dark:text-red-400">
                      {job.company}
                    </p>
                  </div>
                </div>
                <div className="text-right text-sm text-zinc-500 dark:text-zinc-400">
                  <p className="font-medium">{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {job.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
