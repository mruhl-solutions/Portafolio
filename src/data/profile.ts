export const profile = {
  name: "Matías Agustín Ruhl",
  role: "Desarrollador de Software",
  location: "Buenos Aires, Argentina",
  tagline:
    "Construyo soluciones tecnológicas robustas para el sector seguros, combinando el ecosistema .NET con tecnologías frontend y mobile modernas.",
  summary:
    "Desarrollador de Software con 5 años de experiencia construyendo soluciones tecnológicas para el sector seguros, donde combino profundidad técnica con visión de negocio para resolver problemas reales de la industria. Mi especialización está en el ecosistema .NET (C#, ASP.NET, Entity Framework) y SQL Server, donde diseño, desarrollo y optimizo sistemas: integración de servicios, mantenimiento, migración y mejora continua del rendimiento. En paralelo, amplié mi perfil hacia tecnologías frontend y mobile — Angular y React — y hacia Firebase para la gestión de aplicaciones móviles.",
  email: "matiaskapo45@gmail.com",
  phone: "011 6043-3616",
  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/matias-agustin-ruhl/",
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
    "Desarrollo Mobile",
  ],
} as const;

export const education = [
  {
    type: "Educación",
    title: "Ingeniería Informática",
    place: "Universidad Nacional Arturo Jauretche",
    period: "2019",
    description:
      "Formación en ingeniería informática con foco en desarrollo de software, bases de datos y arquitectura de sistemas.",
  },
  {
    type: "Certificación",
    title: "React Native + Expo",
    place: "Certificación profesional",
    period: "",
    description: "Desarrollo de aplicaciones móviles multiplataforma con React Native y Expo.",
  },
  {
    type: "Certificación",
    title: "Bootcamp Desarrollador Back End .NET",
    place: "Certificación profesional",
    period: "",
    description: "Especialización backend en el ecosistema .NET (C#, ASP.NET, Entity Framework).",
  },
  {
    type: "Certificación",
    title: "SQL Server – Optimización",
    place: "Certificación profesional",
    period: "",
    description: "Optimización de consultas, índices y rendimiento en SQL Server.",
  },
  {
    type: "Certificación",
    title: "Angular 17",
    place: "Certificación profesional",
    period: "",
    description: "Desarrollo de aplicaciones frontend modernas con Angular 17.",
  },
] as const;

export const experience = [
  {
    company: "AbsaNet",
    role: "Desarrollador de Software",
    period: "Enero 2022 — Presente",
    location: "Provincia de Buenos Aires, Argentina",
    achievements: [
      "Diseño, desarrollo y optimización de sistemas para el sector seguros sobre el ecosistema .NET (C#, ASP.NET, Entity Framework) y SQL Server.",
      "Integración de servicios y mantenimiento de aplicaciones críticas para el negocio.",
      "Migración y mejora continua del rendimiento de sistemas existentes.",
      "Ampliación del stack hacia Angular, React y Firebase para el desarrollo de nuevas soluciones frontend y mobile.",
    ],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Proyecto Demo 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aplicación de ejemplo construida para mostrar el flujo de trabajo full-stack, desde la UI hasta la persistencia de datos.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Proyecto Demo 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. API REST con autenticación e integración con base de datos SQL Server.",
    tags: [".NET", "ASP.NET", "SQL Server"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    title: "Proyecto Demo 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aplicación móvil multiplataforma con notificaciones push y sincronización en tiempo real.",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
];
