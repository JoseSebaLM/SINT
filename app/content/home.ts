// Textos de la página principal. Se editan aquí, sin tocar los componentes.
// Fuente: specs/sint-v3/content.md
import {
  Activity,
  BookOpen,
  ChartColumn,
  CodeXml,
  Compass,
  FileCheck,
  FileText,
  GraduationCap,
  Hammer,
  KeyRound,
  LayoutDashboard,
  LifeBuoy,
  Link2,
  ListOrdered,
  Lock,
  MessageCircle,
  RefreshCw,
  Route,
  Search,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Workflow,
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
  canon:
    "Sint (Sistemas Inteligentes) es una empresa chilena que ayuda a las organizaciones a que personas y tecnología trabajen mejor juntas, con diagnóstico, formación, sistemas y agentes de IA a medida.",
  title: "Sint. Sistemas Inteligentes · Diagnóstico, formación y agentes de IA",
  description:
    "Personas y tecnología, trabajando mejor juntas. Diagnóstico organizacional, formación, sistemas y agentes de IA para empresas en Chile.",
  tagline: "Personas y tecnología, trabajando mejor juntas.",
  city: "Santiago, Chile",
};

export const cta = {
  agenda: "Agenda una conversación",
  whatsapp: "Escríbenos por WhatsApp",
  nav: "Conversemos",
};

export const nav = [
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Equipo", href: "#equipo" },
];

export const hero = {
  title: "Personas y tecnología, trabajando mejor juntas.",
  lead: "Diagnóstico, formación, sistemas y agentes de IA, a la medida de tu organización.",
  capabilities: ["Diagnóstico", "Formación", "Sistemas", "Agentes de IA"],
};

export const evidencia = {
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

export const diagnostico = {
  eyebrow: "Por dónde partimos",
  title: "Diagnóstico Sint",
  intro: "Medimos cómo usa tu organización su tecnología y dónde la IA puede aportar más.",
  stagesTitle: "Etapas",
  stages: [
    { icon: Search, title: "Investigamos", text: "Entrevistas a líderes y mapa del trabajo que se repite en cada área." },
    { icon: ChartColumn, title: "Medimos", text: "Encuesta a los equipos sobre uso, confianza y necesidades, y revisión de sus herramientas y datos." },
    { icon: ListOrdered, title: "Priorizamos", text: "Presentación a la gerencia: qué hacer primero, con qué reglas y cómo medirlo." },
  ] satisfies Item[],
  deliverablesTitle: "Qué recibes",
  deliverables: [
    { icon: FileText, title: "Informe de punto de partida", text: "Uso real de la tecnología y brechas de gobierno, datos y formación." },
    { icon: Target, title: "Oportunidades priorizadas", text: "Ordenadas por impacto y facilidad." },
    { icon: ShieldCheck, title: "Reglas de uso", text: "Qué hace la IA sola, qué revisa una persona y qué no se hace." },
    { icon: Route, title: "Plan de acción", text: "Responsables, metas e indicadores para pasar del piloto a la operación." },
  ] satisfies Item[],
  example: {
    title: "Informe de punto de partida",
    dimensions: [
      { name: "Gobierno", level: "Inicial" },
      { name: "Datos", level: "En desarrollo" },
      { name: "Medición", level: "Inicial" },
      { name: "Formación", level: "En desarrollo" },
    ],
    opportunities: [
      "Respuestas a clientes por WhatsApp",
      "Cotizaciones preparadas con los datos del ERP",
      "Formación práctica para el equipo comercial",
    ],
  },
};

export type Linea = {
  id: string;
  name: string;
  phrase: string;
  services: Item[];
};

export const servicios = {
  eyebrow: "Servicios",
  title: "Formamos equipos y construimos la tecnología que necesitan.",
  lineas: [
    {
      id: "formacion",
      name: "Formación",
      phrase: "Equipos que saben usar la tecnología que tienen.",
      services: [
        { icon: GraduationCap, title: "Academias internas", text: "Programas, rutas por cargo e inducción para la academia o universidad corporativa de tu empresa." },
        { icon: Users, title: "Capacitación", text: "Cursos y talleres con tus propios casos, presenciales o en línea. Acceso a franquicia tributaria SENCE mediante OTEC asociado." },
        { icon: Compass, title: "Gestión del cambio", text: "Liderazgo, comunicación y seguimiento para que lo aprendido se use en el trabajo diario." },
      ],
    },
    {
      id: "sistemas",
      name: "Sistemas",
      phrase: "Procesos y datos en orden.",
      services: [
        { icon: Link2, title: "Integración", text: "Conectamos tu ERP, CRM, planillas y plataformas para que cada dato se ingrese una sola vez." },
        { icon: LayoutDashboard, title: "Datos y tableros", text: "Reunimos tu información en un solo lugar y la convertimos en tableros para decidir." },
        { icon: CodeXml, title: "Desarrollo a medida", text: "Plataformas internas y portales para clientes, construidos sobre una especificación que apruebas." },
        { icon: RefreshCw, title: "Modernización", text: "Renovamos software antiguo sin detener la operación." },
      ],
    },
    {
      id: "agentes",
      name: "Agentes de IA",
      phrase: "IA conectada a tus sistemas, al servicio de tu equipo.",
      services: [
        { icon: MessageCircle, title: "Atención a clientes", text: "Asistentes que responden, califican y derivan consultas por WhatsApp y web, a toda hora." },
        { icon: Workflow, title: "Automatización de procesos", text: "Agentes que preparan cotizaciones, documentos y reportes con los datos de tus sistemas." },
        { icon: BookOpen, title: "Conocimiento interno", text: "Asistentes que responden con tus manuales, contratos y políticas vigentes." },
        { icon: Activity, title: "Operación continua", text: "Monitoreo, control de costos y mejoras mensuales de cada agente." },
      ],
    },
  ] satisfies Linea[],
  integracion: {
    sources: ["ERP", "CRM", "Planillas"],
    hub: "Integración",
    target: "Tablero de gestión",
  },
  conversacion: {
    header: "Asistente de ventas",
    messages: [
      { from: "cliente", text: "Hola, ¿me pueden cotizar 40 sillas de oficina para el 20 de diciembre?" },
      { from: "asistente", text: "Claro. Revisé el inventario y tenemos 40 unidades disponibles. Te envío la cotización en PDF." },
      { from: "asistente", attachment: "Cotización · Sillas de oficina.pdf" },
      { from: "asistente", text: "¿Quieres que una ejecutiva te llame para coordinar la entrega?" },
    ] as { from: "cliente" | "asistente"; text?: string; attachment?: string }[],
  },
};

export const metodo = {
  eyebrow: "Cómo trabajamos",
  title: "Del diagnóstico a la operación.",
  steps: [
    { icon: Search, title: "Diagnosticamos", text: "Entendemos procesos, personas y sistemas antes de proponer." },
    { icon: FileCheck, title: "Especificamos", text: "Acordamos por escrito el alcance y los criterios de aceptación." },
    { icon: Hammer, title: "Construimos o formamos", text: "Ejecutamos lo acordado y revisamos cada entrega contra la especificación." },
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
      bio: "Certificado en gestión del cambio (Vanderbilt University). Trabajó en consultoría, research y marketing estratégico. En Sint dirige los diagnósticos y la formación.",
      photo: "/images/equipo/jose-latorre.webp",
      linkedin: links.linkedinJose,
    },
    {
      name: "Carlos Martínez",
      role: "Dirección técnica",
      education: "Sistemas de Información · U. de Chile",
      bio: "Lleva 27 años construyendo sitios y plataformas web, con foco en accesibilidad y estándares. Hoy diseña cómo trabajan los equipos con agentes de IA. En Sint dirige la parte técnica de cada proyecto.",
      photo: "/images/equipo/carlos-martinez.webp",
    },
  ] as { name: string; role: string; education: string; bio: string; photo: string; linkedin?: string }[],
};

export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que más nos preguntan.",
  items: [
    { q: "¿Qué es Sint?", a: site.canon },
    {
      q: "¿Qué es el Diagnóstico Sint?",
      a: "Un estudio de tu organización en tres etapas: investigamos, medimos y priorizamos. Entrega un informe de punto de partida, oportunidades priorizadas, reglas de uso de la IA y un plan de acción.",
    },
    {
      q: "¿Hay que partir con el diagnóstico?",
      a: "Es el punto de partida que recomendamos, pero también puedes contratar directamente formación, sistemas o agentes de IA.",
    },
    {
      q: "¿Las capacitaciones pueden usar franquicia tributaria SENCE?",
      a: "Sí. Los cursos pueden acceder a franquicia tributaria SENCE mediante nuestro OTEC asociado.",
    },
    {
      q: "¿Qué agentes de IA construyen?",
      a: "Asistentes de atención a clientes por WhatsApp y web, agentes que preparan cotizaciones, documentos y reportes, y asistentes que responden con el conocimiento interno de tu empresa.",
    },
    {
      q: "¿Con qué herramientas trabajan?",
      a: "Con las que tu empresa ya usa: su ERP, CRM, Google Workspace o Microsoft 365, y el modelo de IA que prefiera.",
    },
  ],
};

export const cierre = {
  title: "Conversemos sobre tu organización.",
  text: "Cuéntanos qué está pasando y te decimos por dónde partiríamos.",
};
