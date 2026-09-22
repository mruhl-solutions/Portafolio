export const profile = {
  name: "Matías Agustín Ruhl",
  role: "Desarrollador de Software",
  location: "Buenos Aires, Argentina",
  tagline:
    "Construyo aplicaciones web eficientes y escalables, diseñando interfaces simples e intuitivas que garantizan una excelente experiencia de usuario",
  summary:
    "Desarrollador de Software con 5 años de experiencia construyendo soluciones tecnológicas para el sector seguros, donde combino profundidad técnica con visión de negocio para resolver problemas reales de la industria. Mi especialización está en el ecosistema .NET (C#, ASP.NET, Entity Framework) y SQL Server, donde diseño, desarrollo y optimizo sistemas: integración de servicios, mantenimiento, migración y mejora continua del rendimiento. En paralelo, amplié mi perfil hacia tecnologías frontend y mobile — Angular y React — y hacia Firebase para la gestión de aplicaciones móviles. Fuera del trabajo soy un apasionado del deporte, una pasión que me impulsó a empezar a desarrollar por mi cuenta aplicaciones a medida para el ámbito deportivo — como las que podés ver en la sección de proyectos.",
  email: "matiaskapo45@gmail.com",
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
