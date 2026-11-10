// Textos de la página principal v4. Se editan aquí, sin tocar los componentes.
// Fuente: specs/sint-v4/content.md. La oferta (líneas y servicios) solo cambia con el visto bueno de José.
//
// ESTE ARCHIVO ES EL DESTINO FINAL DE app/content/home.ts: la tarea T3 lo mueve ahí con `git mv`.
import {
  BookOpen,
  ChartColumn,
  CodeXml,
  Compass,
  FileCheck,
  FileText,
  Globe,
  GraduationCap,
  Hammer,
  KeyRound,
  LayoutDashboard,
  LifeBuoy,
  Lock,
  MessageCircle,
  Search,
  Sparkles,
  UserCheck,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type Item = { icon: LucideIcon; title: string; text: string };

export const links = {
  agenda: "https://cal.com/jose-latorre/15min",
  whatsapp: "https://wa.me/56956303337",
  email: "jose@sint.cl",
  phone: "+56 9 5630 3337",
  phoneHref: "tel:+56956303337",
  linkedinJose: "https://www.linkedin.com/in/joselatorrem",
};

export const site = {
  url: "https://sint.cl",
  name: "Sint",
  fullName: "Sint. Sistemas Inteligentes",
  // Frase canónica: igual en el pie, el JSON-LD, la primera pregunta frecuente y LinkedIn.
  canon:
    "Sint (Sistemas Inteligentes) es una empresa chilena que ayuda a las organizaciones a que personas y tecnología trabajen mejor juntas, con diagnóstico, formación, agentes de IA y plataformas a medida.",
  title: "Sint. Sistemas Inteligentes · Diagnóstico, formación, agentes IA y plataformas",
  description:
    "Personas y tecnología, trabajando mejor juntas. Diagnóstico organizacional, formación en IA con franquicia SENCE, agentes de IA y plataformas web para organizaciones en Chile.",
  tagline: "Personas y tecnología, trabajando mejor juntas.",
  city: "Santiago, Chile",
  keywords: [
    "diagnóstico organizacional",
    "capacitación en IA para empresas",
    "franquicia tributaria SENCE",
    "agentes de IA",
    "asistente de WhatsApp para empresas",
    "sitios web institucionales",
    "SEO y AEO",
    "plataformas a medida",
    "Santiago, Chile",
  ],
};

export const cta = {
  agenda: "Agenda una conversación",
  whatsapp: "Escríbenos por WhatsApp",
  nav: "Conversemos",
};

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Preguntas", href: "#preguntas" },
];

export const hero = {
  eyebrow: "Sint · Sistemas Inteligentes",
  title: "Personas y tecnología, trabajando mejor juntas.",
  lead: "Diagnóstico, formación, agentes IA y plataformas, a la medida de tu organización.",
  lineasLabel: "Líneas de servicio",
};

export const evidencia = {
  eyebrow: "La IA en las empresas chilenas",
  context: "91% de las empresas en Chile está explorando la IA o la tiene en piloto.",
  main: { value: "Solo 9%", text: "llegó a escala." },
  support: [
    { value: "85%", text: "no tiene un comité formal de gobierno de IA." },
    { value: "79%", text: "no mide el retorno de la IA." },
    { value: "58%", text: "declara que sus equipos no han recibido formación básica en IA." },
  ],
  source: {
    label: "Índice de Transformación Digital en IA 2026 · CCS, Corfo y PMG Chile · agosto 2026 · 740 empresas",
    href: "https://www.df.cl/df-lab/tech-empresas/empresas-en-chile-no-logran-escalar-la-ia-por-falta-de-gobernanza-datos",
  },
};

export type LineaId = "diagnostico" | "formacion" | "agentes" | "plataformas";

export type Linea = {
  id: LineaId;
  name: string;
  /** Frase bajo el nombre, en la sección Servicios. */
  phrase: string;
  /** Versión corta de la frase, para la tarjeta de la portada. */
  short: string;
  services: Item[];
  /** Nota bajo la lista de servicios. */
  note?: string;
  /** Enlace al final de la línea; lleva a la agenda. */
  cta: string;
};

export const servicios = {
  eyebrow: "Servicios",
  title: "Cuatro formas de que tu gente y tu tecnología trabajen mejor juntas.",
  intro: "Puedes partir por cualquiera. Recomendamos empezar por un diagnóstico, del tamaño que necesites.",
  lineas: [
    {
      id: "diagnostico",
      name: "Diagnóstico",
      phrase: "Entender antes de proponer.",
      short: "Entender antes de proponer.",
      services: [
        {
          icon: Search,
          title: "Diagnóstico Sint",
          text: "Entrevistas a líderes, encuestas a los equipos y revisión de herramientas y datos. Entrega un informe de punto de partida, oportunidades priorizadas, reglas de uso de la IA y un plan de acción. Su profundidad se ajusta a lo que necesitas.",
        },
        {
          icon: ChartColumn,
          title: "Estudios con encuestas y entrevistas",
          text: "Investigación cualitativa y cuantitativa con tus equipos o tus clientes, para decidir con datos.",
        },
      ],
      cta: "Conversemos sobre un diagnóstico",
    },
    {
      id: "formacion",
      name: "Formación",
      phrase: "Equipos que saben usar la IA en su trabajo diario.",
      short: "Equipos que usan la IA en su trabajo diario.",
      services: [
        {
          icon: Users,
          title: "Talleres y cursos de IA",
          text: "Cursos prácticos con los casos de tu empresa, presenciales o en línea, con franquicia tributaria SENCE mediante OTEC asociado.",
        },
        {
          icon: GraduationCap,
          title: "Academias internas",
          text: "Programas, rutas por cargo e inducción para la academia o universidad corporativa de tu organización.",
        },
        {
          icon: Compass,
          title: "Adopción y gestión del cambio",
          text: "Liderazgo, comunicación y seguimiento para que lo aprendido se use en el trabajo diario.",
        },
      ],
      cta: "Conversemos sobre formación",
    },
    {
      id: "agentes",
      name: "Agentes IA",
      phrase: "IA conectada a tus herramientas, al servicio de tu equipo.",
      short: "IA conectada a tus herramientas.",
      services: [
        {
          icon: MessageCircle,
          title: "Atención a clientes",
          text: "Asistentes que responden, califican y derivan consultas por WhatsApp y web, a toda hora, y pasan a una persona lo que no deben resolver solos.",
        },
        {
          icon: FileText,
          title: "Documentos y reportes automáticos",
          text: "Agentes que preparan cotizaciones, informes y reportes con los datos de tus planillas y sistemas en la nube.",
        },
        {
          icon: BookOpen,
          title: "Conocimiento interno",
          text: "Asistentes que responden con tus manuales, contratos y políticas vigentes, y citan la fuente.",
        },
      ],
      note: "Cada agente se entrega con un periodo de acompañamiento y, si quieres, sigue con mantención mensual.",
      cta: "Conversemos sobre un agente",
    },
    {
      id: "plataformas",
      name: "Plataformas",
      phrase: "Sitios y herramientas rápidos, accesibles y fáciles de encontrar.",
      short: "Sitios y herramientas fáciles de encontrar.",
      services: [
        {
          icon: Globe,
          title: "Sitios web corporativos e institucionales",
          text: "Diseño, desarrollo y un administrador de contenidos para que tu equipo publique sin depender de nadie.",
        },
        {
          icon: Sparkles,
          title: "Posicionamiento en Google y buscadores con IA",
          text: "SEO y AEO: que Google y los asistentes de IA encuentren tu sitio y describan bien a tu organización.",
        },
        {
          icon: CodeXml,
          title: "Plataformas y portales a medida",
          text: "Herramientas internas y portales para clientes, construidos sobre una especificación que apruebas.",
        },
        {
          icon: LayoutDashboard,
          title: "Tableros de datos",
          text: "Reunimos tu información en un solo lugar y la convertimos en tableros para decidir.",
        },
      ],
      cta: "Conversemos sobre tu sitio o plataforma",
    },
  ] satisfies Linea[],
};

// Ejemplos visuales: uno por línea. Todos llevan la etiqueta "Ejemplo" y ninguno muestra clientes ni cifras reales.
export const ejemplos = {
  tag: "Ejemplo",
  informe: {
    label: "Informe de punto de partida",
    title: "Informe de punto de partida",
    subtitle: "Tu organización · Diagnóstico Sint",
    dimensionsTitle: "Nivel por dimensión",
    // El nivel se dice en palabras; los tramos (1 de 3, 2 de 3) solo lo refuerzan.
    dimensions: [
      { name: "Gobierno", level: "Inicial", steps: 1 },
      { name: "Datos", level: "En desarrollo", steps: 2 },
      { name: "Medición", level: "Inicial", steps: 1 },
      { name: "Formación", level: "En desarrollo", steps: 2 },
    ],
    opportunitiesTitle: "Oportunidades priorizadas",
    opportunities: [
      "Respuestas a clientes por WhatsApp",
      "Cotizaciones preparadas con los datos de tus planillas",
      "Formación práctica para el equipo comercial",
    ],
  },
  programa: {
    label: "Programa de un taller",
    kind: "Taller",
    title: "IA para el equipo comercial",
    badge: "Franquicia SENCE",
    modules: [
      { title: "Fundamentos y uso responsable", text: "Qué puede y qué no debe hacer la IA en tu trabajo", state: "done" },
      { title: "Casos de tu área", text: "Cotizaciones, seguimiento y respuestas a clientes", state: "done" },
      { title: "Práctica con tus propios datos", text: "Cada persona resuelve una tarea real de su semana", state: "current" },
      { title: "Plan de adopción", text: "Acuerdos con las jefaturas para sostener el uso", state: "next" },
    ] as { title: string; text: string; state: "done" | "current" | "next" }[],
    tags: ["Presencial o en línea", "Con los casos de tu empresa"],
  },
  conversacion: {
    label: "Conversación con un agente",
    header: "Asistente de ventas",
    status: "en línea",
    messages: [
      { from: "cliente", text: "Hola, ¿me pueden cotizar 40 sillas de oficina para el 20 de diciembre?" },
      { from: "asistente", text: "Claro. Revisé el inventario y tenemos 40 unidades disponibles. Te envío la cotización en PDF." },
      { from: "asistente", attachment: "Cotización · Sillas de oficina.pdf" },
      { from: "asistente", text: "¿Quieres que una ejecutiva te llame para coordinar la entrega?" },
    ] as { from: "cliente" | "asistente"; text?: string; attachment?: string }[],
    placeholder: "Escribe un mensaje",
  },
  buscador: {
    label: "Tu sitio, bien descrito por un asistente de IA",
    organization: "Tu organización",
    answerTitle: "Respuesta del asistente",
    // El texto de la respuesta vive en el componente: intercala barras que representan los datos de cada organización.
    source: "tusitio.cl",
    scoresTitle: "Indicadores de calidad del sitio",
    scores: [
      { label: "Rendimiento", value: 98 },
      { label: "Accesibilidad", value: 100 },
      { label: "Buenas prácticas", value: 100 },
      { label: "SEO", value: 100 },
    ],
  },
};

export const porQue = {
  title: "Por qué Sint",
  items: [
    { icon: UserCheck, title: "Hablas con quienes hacen el trabajo", text: "Un equipo pequeño y senior, sin intermediarios." },
    {
      icon: Users,
      title: "Personas y tecnología en el mismo equipo",
      text: "Ciencias sociales para entender a tu organización, ingeniería para construir lo que necesita.",
    },
    {
      icon: Zap,
      title: "Remoto y ágil",
      text: "Construimos con agentes de IA y especificaciones escritas, y vamos a terreno cuando hace falta.",
    },
  ] satisfies Item[],
};

export const metodo = {
  eyebrow: "Cómo trabajamos",
  title: "De la primera conversación a la operación.",
  steps: [
    { icon: Search, title: "Entendemos", text: "Conocemos procesos, personas y herramientas antes de proponer." },
    { icon: FileCheck, title: "Especificamos", text: "Acordamos por escrito el alcance y los criterios de aceptación." },
    {
      icon: Hammer,
      title: "Construimos o formamos",
      text: "Ejecutamos lo acordado y te mostramos avances con una vista previa en cada entrega.",
    },
    { icon: LifeBuoy, title: "Acompañamos", text: "Medimos el uso real, damos soporte y ajustamos." },
  ] satisfies Item[],
  guaranteesTitle: "Nuestras garantías",
  guarantees: [
    { icon: KeyRound, text: "La especificación, el código y los contenidos son tuyos." },
    { icon: Lock, text: "Las reglas de acceso a tus datos se acuerdan por escrito antes de empezar." },
    { icon: UserCheck, text: "Las decisiones sensibles quedan en manos de una persona de tu organización." },
  ],
};

export const equipo = {
  eyebrow: "Quiénes somos",
  title: "Un equipo que une personas y tecnología.",
  members: [
    {
      name: "José Latorre",
      role: "Fundador",
      education: "Sociólogo · PUC",
      bio: "Certificado en gestión del cambio (Vanderbilt University). Ha dirigido proyectos de consultoría, investigación cualitativa y cuantitativa, y marketing estratégico para empresas de distintos tamaños e industrias. Trabaja con IA desde GPT-3. En Sint dirige los diagnósticos y la formación.",
      photo: "/images/equipo/jose-latorre.webp",
      linkedin: links.linkedinJose,
    },
    {
      name: "Carlos Martínez",
      role: "Dirección técnica",
      education: "Sistemas de Información · U. de Chile",
      // La mención a la U. de Chile y a tv.uchile.cl la confirma Carlos (spec.md §8).
      bio: "Crea sitios web desde 2004. Desde 2009 trabaja en la Universidad de Chile, donde dirige la unidad que desarrolla sus sitios, como tv.uchile.cl. Experto en CMS, rendimiento, SEO y AEO. Hoy diseña cómo trabajan los equipos con agentes de IA. En Sint dirige la parte técnica de cada proyecto.",
      photo: "/images/equipo/carlos-martinez.webp",
    },
  ] as { name: string; role: string; education: string; bio: string; photo: string; linkedin?: string }[],
  note: "Según el proyecto, sumamos desarrolladores y especialistas que trabajan en remoto con nosotros.",
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que más nos preguntan.",
  items: [
    { q: "¿Qué es Sint?", a: site.canon },
    {
      q: "¿Hay que partir con un diagnóstico?",
      a: "No. Es el punto de partida que recomendamos, pero también puedes contratar directamente formación, agentes IA o plataformas. Siempre partimos con una conversación.",
    },
    {
      q: "¿Las capacitaciones tienen franquicia SENCE?",
      a: "Sí. Los cursos pueden acceder a franquicia tributaria SENCE mediante nuestro OTEC asociado.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Depende del alcance. Después de la primera conversación te enviamos una propuesta técnica y económica a medida.",
    },
    {
      q: "¿Trabajan en terreno o en remoto?",
      a: "Desarrollamos en remoto y vamos a terreno para entrevistas, talleres y presentaciones.",
    },
    {
      q: "¿Qué agentes de IA construyen?",
      a: "Asistentes de atención a clientes por WhatsApp y web, agentes que preparan documentos y reportes, y asistentes que responden con el conocimiento interno de tu organización.",
    },
    {
      q: "¿Con qué herramientas trabajan?",
      a: "Con las que tu organización ya usa: planillas, Google Workspace o Microsoft 365, tu sitio web y el modelo de IA que prefieras.",
    },
  ],
};

export const cierre = {
  title: "Conversemos sobre tu organización.",
  text: "Cuéntanos qué quieres resolver y te decimos por dónde partiríamos.",
  contact: {
    email: `Correo · ${links.email}`,
    whatsapp: `WhatsApp · ${links.phone}`,
  },
};

export const footer = {
  sectionsTitle: "Secciones",
  contactTitle: "Contacto",
  copyright: "© 2026 Sint.",
};
