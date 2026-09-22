"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <span className="text-sm font-medium uppercase tracking-widest text-red-600 dark:text-red-400">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
