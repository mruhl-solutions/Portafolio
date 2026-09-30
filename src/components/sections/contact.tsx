"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/data/profile";

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="border-y border-zinc-200/70 bg-zinc-50/60 py-24 backdrop-blur-sm dark:border-zinc-800/70 dark:bg-zinc-900/30">
      <Container>
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="¿Tenés un proyecto en mente? Contame de qué se trata y me pongo en contacto."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  <Mail className="h-4 w-4" />
                </span>
                {profile.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  <Phone className="h-4 w-4" />
                </span>
                {profile.phone}
              </p>
              <p className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400">
                  <MapPin className="h-4 w-4" />
                </span>
                {profile.location}
              </p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm lg:col-span-3 dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-red-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-red-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-red-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                placeholder="¿En qué te puedo ayudar?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition-colors focus:border-red-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50"
                placeholder="Contame más sobre tu idea o proyecto..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-900"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              Enviar mensaje
            </button>

            {status === "success" ? (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                ¡Mensaje enviado! Te responderé a la brevedad.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                {FORM_ENDPOINT
                  ? "Ocurrió un error al enviar el mensaje. Intentá nuevamente."
                  : "El formulario todavía no está configurado. Agregá NEXT_PUBLIC_FORM_ENDPOINT en tu archivo .env.local."}
              </p>
            ) : null}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
