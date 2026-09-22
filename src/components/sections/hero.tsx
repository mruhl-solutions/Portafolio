"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkedinIcon, InstagramIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[90vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.16),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(113,113,122,0.14),transparent_45%)]"
      />
      <Container className="py-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-red-600 dark:text-red-400"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50"
        >
          {profile.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-2xl font-semibold text-red-600 sm:text-3xl dark:text-red-400"
        >
          {profile.role}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-zinc-900"
          >
            Ver Proyectos
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Contactar
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.instagramDev}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de desarrollador"
            title="@mruhl.code"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
