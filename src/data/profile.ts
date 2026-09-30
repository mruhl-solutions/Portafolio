export const profile = {
  name: "Matías Agustín Ruhl",
  role: "Desarrollador de Software",
  location: "Buenos Aires, Argentina",
  tagline:
    "Construyo aplicaciones web eficientes y escalables, diseñando interfaces simples e intuitivas que garantizan una excelente experiencia de usuario",
  summary:
    "Desarrollador de Software full-stack con 8 años de experiencia (5 en el sector seguros), especializado en el ecosistema .NET (C#, ASP.NET MVC, Entity Framework), SQL Server y APIs para sistemas críticos de negocio. Trabajo también con DevOps e infraestructura, gestionando pipelines y releases con Azure DevOps. En paralelo, amplié mi perfil hacia el frontend y mobile — Angular, React y Firebase — para desarrollar proyectos de punta a punta. Fuera del trabajo soy un apasionado del deporte, lo que me impulsó a desarrollar por mi cuenta aplicaciones a medida para ese ámbito, como las que podés ver en la sección de proyectos.",
  email: "mruhlcode@gmail.com",
  phone: "011 6043-3616",
  socials: {
    linkedin: "https://www.linkedin.com/in/matias-agustin-ruhl/",
    instagramDev: "https://www.instagram.com/mruhl.code/",
  },
  skills: [
    "Next.js",
    "React",
    "React Native + Expo",
    "Angular 17",
    ".NET / C# / ASP.NET",
    "Entity Framework",
    "SQL Server",
    "Firebase",
    "Supabase",
    "TypeScript",
    "Azure DevOps",
    "Clean Architecture",
    "CQRS",
    "Desarrollo Mobile",
  ],
} as const;

export const education = [
  {
    type: "Educación",
    title: "Ingeniería Informática",
    place: "Universidad Nacional Arturo Jauretche",
    period: "2019 — En curso",
    description:
      "Formación en ingeniería informática con foco en desarrollo de software, bases de datos y arquitectura de sistemas. Restan 9 materias para el título intermedio.",
  },
  {
    type: "Certificación",
    title: "React Native + Expo",
    place: "Udemy",
    period: "",
    description: "Desarrollo de aplicaciones móviles multiplataforma con React Native y Expo.",
    link: "https://www.udemy.com/certificate/UC-88a31e6d-9a2a-4330-b8e0-68f5ab98e0f7/",
  },
  {
    type: "Certificación",
    title: "Bootcamp Desarrollador Back End .NET",
    place: "MindHub",
    period: "",
    description: "Especialización backend en el ecosistema .NET (C#, ASP.NET, Entity Framework).",
    link: "https://www.credly.com/badges/62fde3fb-f043-4e45-80b2-5709e9312183?source=linked_in_profile",
  },
  {
    type: "Certificación",
    title: "SQL Server – Optimización",
    place: "EducaciónIT",
    period: "",
    description: "Optimización de consultas, índices y rendimiento en SQL Server.",
    link: "https://www.educacionit.com/perfil/matias-agustin-ruhl-630115/certificado/75994",
  },
  {
    type: "Certificación",
    title: "Angular 13",
    place: "EducaciónIT",
    period: "",
    description: "Desarrollo de aplicaciones frontend modernas con Angular.",
    link: "https://www.educacionit.com/perfil/matias-agustin-ruhl-630115/certificado/73934",
  },
  {
    type: "Certificación",
    title: "Angular 20",
    place: "Udemy",
    period: "En curso",
    description: "Actualización a las últimas funcionalidades de Angular.",
  },
] as const;

export const experience = [
  {
    company: "AbsaNet",
    role: "Desarrollador de Software",
    period: "Enero 2022 — Presente",
    location: "Provincia de Buenos Aires, Argentina",
    achievements: [
      "Desarrollo y mantenimiento de sistemas ASP.NET MVC sobre múltiples versiones del framework",
      "Diseño de APIs para el uso interno del sistema y la conexión segura con plataformas externas",
      "Gestión de base de datos en SQL Server: Stored procedures, consultas, LINQ y Entity Framework",
      "DevOps e infraestructura: control de versiones, pipelines y releases con Azure DevOps",
      "Soporte y calidad, resolución de incidencias, análisis de logs y corrección de bugs",
      "Refactorización de código constante para asegurar un sistema limpio, escalable y fácil de mantener",
      "Gestión del ciclo de desarrollo: estimación de tareas y planificación bajo metodología Scrum"
    ],
  },
  {
    company: "CardioTotal",
    role: "Desarrollador de Software Freelance",
    period: "Agosto 2025 — Presente",
    location: "Remoto",
    achievements: [
      "Plataforma web y móvil a medida para un centro de entrenamiento de alto rendimiento",
      "App móvil desarrollada en React Native + Expo para Android e iOS",
      "Integración con Firebase y Cloudflare Storage",
    ],
  },
  {
    company: "REactivate",
    role: "Desarrollador de Software Freelance",
    period: "Abril 2026 — Presente",
    location: "Remoto",
    achievements: [
      "Plataforma web para la gestión administrativa de un centro de entrenamiento",
      "Desarrollada con React, Next.js y Supabase",
    ],
  },
] as const;


export type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    title: "CardioTotal",
    role: "Desarrollador de Software Freelance",
    period: "Agosto 2025 — Actualidad",
    description:
      "Plataforma web y móvil a medida para un centro de entrenamiento de alto rendimiento. App para entrenadores y alumnos con planificación por sesión, seguimiento real y video en cada ejercicio. Desarrollada en React Native + Expo para iOS y Android, con Firebase y Cloudflare Storage.",
    tags: ["React Native + Expo", "Firebase", "Cloudflare Storage"],
    images: [
      "/projects/cardiototal/1.jpg",
      "/projects/cardiototal/2.jpg",
      "/projects/cardiototal/3.jpg",
      "/projects/cardiototal/4.jpg",
      "/projects/cardiototal/5.jpg",
      "/projects/cardiototal/6.jpg",
      "/projects/cardiototal/7.jpg",
      "/projects/cardiototal/8.jpg",
    ],
  },
  {
    title: "REactivate",
    role: "Desarrollador de Software Freelance",
    period: "Abril 2026 — Actualidad",
    description:
      "Plataforma web para la gestión administrativa de un centro de entrenamiento: agenda de turnos, evaluaciones físicas, seguimiento de progreso y administración. Desarrollada con React, Next.js y Supabase.",
    tags: ["Next.js", "React", "Supabase"],
    images: [
      "/projects/reactivate/1.jpg",
      "/projects/reactivate/2.jpg",
      "/projects/reactivate/3.jpg",
      "/projects/reactivate/4.jpg",
      "/projects/reactivate/5.jpg",
    ],
  },
];
