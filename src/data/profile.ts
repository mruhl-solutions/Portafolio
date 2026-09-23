export const profile = {
  name: "Matías Agustín Ruhl",
  role: "Desarrollador de Software",
  location: "Buenos Aires, Argentina",
  tagline:
    "Construyo aplicaciones web eficientes y escalables, diseñando interfaces simples e intuitivas que garantizan una excelente experiencia de usuario",
  summary:
    "Desarrollador de Software con 5 años de experiencia en el sector seguros, especializado en el ecosistema .NET (C#, ASP.NET MVC, Entity Framework) y SQL Server. Diseño, desarrollo y mantengo sistemas críticos de negocio, con foco en migraciones de versión, integración de APIs y optimización de rendimiento. En paralelo, amplié mi perfil hacia el frontend y mobile — Angular, React y Firebase — para desarrollar proyectos de punta a punta. Fuera del trabajo soy un apasionado del deporte, lo que me impulsó a desarrollar por mi cuenta aplicaciones a medida para ese ámbito, como las que podés ver en la sección de proyectos.",
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
] as const;

export const experience = [
  {
    company: "AbsaNet",
    role: "Desarrollador de Software",
    period: "Enero 2022 — Presente",
    location: "Provincia de Buenos Aires, Argentina",
    achievements: [
      "Desarrollo y mantenimiento de sistemas ASP.NET MVC sobre múltiples versiones del framework (.NET 3.5, 4.5 y .NET 7, 8 y 9) para el sector seguros, incluyendo migraciones entre versiones de .NET.",
      "Diseño y desarrollo de APIs REST para consultas externas e integración con sistemas de terceros.",
      "Trabajo con SQL Server: stored procedures, optimización de consultas y acceso a datos con LINQ y Entity Framework.",
      "Desarrollos nuevos en Angular y React, además del mantenimiento evolutivo de aplicaciones existentes.",
      "Integración e implementación de procesos propios de compañías aseguradoras dentro del sistema, adaptando la lógica de negocio a los requerimientos de cada una.",
    ],
  },
] as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  images: string[];
};

export const projects: Project[] = [
  {
    title: "CardioTotal",
    description:
      "App de entrenamiento para entrenadores y alumnos: planificación por sesión, seguimiento real y video en cada ejercicio. Disponible en iOS y Android.",
    tags: ["React Native", "Expo", "Firebase"],
    images: [
      "/projects/cardiototal/1.jpg",
      "/projects/cardiototal/2.jpg",
      "/projects/cardiototal/3.jpg",
      "/projects/cardiototal/4.jpg"

    ],
  },
  {
    title: "REactivate",
    description:
      "Sistema a medida para un centro de rendimiento deportivo: agenda de turnos, evaluaciones físicas, seguimiento de progreso y administración.",
    tags: ["Next.js", "React", "Supabase"],
    images: [
      "/projects/reactivate/1.png",
      "/projects/reactivate/2.png",
      "/projects/reactivate/3.png",
      "/projects/reactivate/4.png",
      "/projects/reactivate/5.png",
    ],
  },
];
