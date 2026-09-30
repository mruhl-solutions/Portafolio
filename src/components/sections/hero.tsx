"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkedinIcon } from "@/components/icons";
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-5"
        >
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-red-500/30 blur-xl"
            />
            <div className="rounded-full bg-linear-to-br from-red-600 via-zinc-400 to-zinc-700 p-0.5">
              <div className="rounded-full bg-white p-1 dark:bg-zinc-950">
                <Image
                  src="/projects/mati.jpeg"
                  alt={profile.name}
                  width={96}
                  height={96}
                  priority
                  className="h-16 w-16 rounded-full object-cover sm:h-24 sm:w-24"
                />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
              {profile.name}
            </h1>
            <h2 className="mt-1 text-xl font-semibold text-red-600 sm:mt-3 sm:text-3xl dark:text-red-400">
              {profile.role}
            </h2>
          </div>
        </motion.div>

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
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-red-600/25 blur-lg"
            />
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_0_rgba(220,38,38,0)] transition-all hover:scale-[1.03] hover:shadow-[0_8px_30px_-6px_rgba(220,38,38,0.45)] dark:bg-white dark:text-zinc-900"
            >
              Ver Proyectos
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
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
            aria-label="mruhl.code en Instagram"
            className="flex h-11 items-center gap-2 rounded-full border border-zinc-200 py-1 pl-1 pr-4 text-zinc-700 transition-colors hover:border-red-200 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-red-900/60 dark:hover:bg-zinc-900"
          >
            <Image
              src="/brand/mruhl-code-medal.jpg"
              alt="mruhl.code"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm font-medium">@mruhl.code</span>
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
