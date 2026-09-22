"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type Project } from "@/data/profile";

export function Projects() {
  const [lightbox, setLightbox] = useState<{ project: Project; index: number } | null>(null);

  return (
    <section id="proyectos" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos destacados"
          description="Una selección de proyectos en producción."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-red-900/60"
            >
              <ProjectGallery
                project={project}
                onOpen={(i) => setLightbox({ project, index: i })}
              />

              <div className="flex flex-1 flex-col p-6">
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
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <AnimatePresence>
        {lightbox ? (
          <Lightbox
            project={lightbox.project}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onChangeIndex={(i) => setLightbox({ project: lightbox.project, index: i })}
          />
        ) : null}
      </AnimatePresence>
    </section>
  );
}

function ProjectGallery({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (index: number) => void;
}) {
  const [active, setActive] = useState(0);

  const goTo = (i: number) => {
    const next = (i + project.images.length) % project.images.length;
    setActive(next);
  };

  return (
    <div className="group relative h-56 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
      <button
        type="button"
        onClick={() => onOpen(active)}
        className="block h-full w-full cursor-zoom-in"
        aria-label={`Ver imagen de ${project.title}`}
      >
        <Image
          src={project.images[active]}
          alt={`${project.title} — captura ${active + 1}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </button>

      {project.images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(active - 1);
            }}
            className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(active + 1);
            }}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-4 bg-white" : "w-1.5 bg-white/60"
                }`}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

function Lightbox({
  project,
  index,
  onClose,
  onChangeIndex,
}: {
  project: Project;
  index: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}) {
  const goTo = (i: number) => {
    onChangeIndex((i + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        aria-label="Cerrar"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative flex h-full max-h-[85vh] w-full max-w-4xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={project.images[index]}
          alt={`${project.title} — captura ${index + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {project.images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index - 1);
            }}
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goTo(index + 1);
            }}
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
            {index + 1} / {project.images.length}
          </div>
        </>
      ) : null}
    </motion.div>
  );
}
