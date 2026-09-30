import type { ComponentType, SVGProps } from "react";
import {
  Cloud,
  Database,
  Layers,
  Server as ServerIcon,
  Smartphone,
  Workflow,
} from "lucide-react";
import {
  SiAngular,
  SiDotnet,
  SiExpo,
  SiFirebase,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const SKILL_META: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "#a3a3a3" },
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native + Expo": { icon: SiExpo, color: "#4630EB" },
  "Angular 17": { icon: SiAngular, color: "#DD0031" },
  ".NET / C# / ASP.NET": { icon: SiDotnet, color: "#512BD4" },
  "Entity Framework": { icon: Database, color: "#a855f7" },
  "SQL Server": { icon: ServerIcon, color: "#CC2927" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Azure DevOps": { icon: Cloud, color: "#0078D4" },
  "Clean Architecture": { icon: Layers, color: "#14b8a6" },
  CQRS: { icon: Workflow, color: "#f59e0b" },
  "Desarrollo Mobile": { icon: Smartphone, color: "#dc2626" },
};

export function SkillMarquee({ skills }: { skills: readonly string[] }) {
  const track = [...skills, ...skills];

  return (
    <div className="relative mb-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-3 hover:[animation-play-state:paused]">
        {track.map((skill, i) => {
          const meta = SKILL_META[skill];
          const Icon = meta?.icon;
          return (
            <span
              key={`${skill}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:border-red-200 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:border-red-900/60"
            >
              {Icon ? (
                <Icon className="h-4 w-4 shrink-0" style={{ color: meta.color }} />
              ) : null}
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}
