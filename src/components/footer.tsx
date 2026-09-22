import { Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkedinIcon, InstagramIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-800">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row dark:text-zinc-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.instagramDev}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de desarrollador"
            title="@mruhl.code"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
