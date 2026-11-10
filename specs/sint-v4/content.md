# sint.cl v4 · Contenido propuesto

Texto sugerido para cada sección. Fable puede ajustar la redacción, el orden y la extensión. Si quiere agregar o quitar servicios, cifras o afirmaciones de experiencia, lo consulta con José (ver `spec.md` §2).

Hoy los textos viven en `app/content/home.ts`, con la estructura de v3. Hay que actualizarlos con este documento.

> **Actualizado por Fable el 10 de noviembre de 2026.** Los cambios de redacción están marcados con *(Fable)* y resumidos en `design.md` §12. La versión lista para el código es `referencia/home.ts`.

Enlaces:

- Agenda: `https://cal.com/jose-latorre/15min`
- WhatsApp: `https://wa.me/56956303337` · +56 9 5630 3337
- Correo: `jose@sint.cl`
- LinkedIn de José: `https://www.linkedin.com/in/joselatorrem`
- LinkedIn de Carlos: `https://www.linkedin.com/in/chuchurexm/`
- LinkedIn de Sint: `https://www.linkedin.com/company/sint-cl/`

---

## [CANON] Frase canónica

> Sint (Sistemas Inteligentes) es una empresa chilena que ayuda a las organizaciones a que personas y tecnología trabajen mejor juntas, con diagnóstico, formación, agentes de IA y plataformas a medida.

Se usa igual en el pie, en el JSON-LD, en la primera pregunta frecuente y en el "Acerca de" de LinkedIn.

## [META] Metadatos

| Campo | Texto |
| --- | --- |
| Título de la pestaña | Sint. Sistemas Inteligentes · Diagnóstico, formación, agentes IA y plataformas |
| Descripción | Personas y tecnología, trabajando mejor juntas. Diagnóstico organizacional, formación en IA con franquicia SENCE, agentes de IA y plataformas web para organizaciones en Chile. |
| Título para redes | Sint. Sistemas Inteligentes |
| Descripción para redes | Personas y tecnología, trabajando mejor juntas. |
| Imagen para redes | `public/og-image.png` (1200 × 630), ya rehecha. Su fuente es `referencia/og.html` |

## [NAV] Encabezado

- Logo `sint_`.
- Enlaces: Servicios · Cómo trabajamos · Equipo · Preguntas. Las cuatro líneas se enlazan desde las tarjetas de la portada. *(Fable)*
- Botón: **Conversemos** → agenda

## [HERO] Portada

- Antetítulo: Sint · Sistemas Inteligentes
- Titular: **Personas y tecnología, trabajando mejor juntas.**
- Bajada: Diagnóstico, formación, agentes IA y plataformas, a la medida de tu organización.
- Las cuatro líneas, visibles: Diagnóstico · Formación · Agentes IA · Plataformas
- Botón principal: **Agenda una conversación** → agenda
- Botón secundario: **Escríbenos por WhatsApp** → WhatsApp
- Visual: sin foto de banco. Las cuatro líneas son cuatro tarjetas que llevan a su sección, cada una con una viñeta de producto (niveles del informe, módulos de un taller, una conversación, indicadores de un sitio). En celular, solo número y nombre. *(Fable)*
- Frase corta de cada tarjeta *(Fable)*: Entender antes de proponer. / Equipos que usan la IA en su trabajo diario. / IA conectada a tus herramientas. / Sitios y herramientas fáciles de encontrar.

## [EVI] Evidencia

Se mantiene de v3, con su fuente:

- Antetítulo: La IA en las empresas chilenas *(Fable)*
- Antecedente: 91% de las empresas en Chile está explorando la IA o la tiene en piloto.
- Cifra principal: **Solo 9%** llegó a escala.
- Cifras de apoyo: **85%** no tiene un comité formal de gobierno de IA · **79%** no mide el retorno de la IA · **58%** declara que sus equipos no han recibido formación básica en IA.
- Fuente: Índice de Transformación Digital en IA 2026 · CCS, Corfo y PMG Chile · agosto 2026 · 740 empresas — `https://www.df.cl/df-lab/tech-empresas/empresas-en-chile-no-logran-escalar-la-ia-por-falta-de-gobernanza-datos`
- Verificado el 10 de noviembre de 2026: 85%, 79%, 58% y 740 empresas aparecen tal cual en el artículo. 91% suma pilotaje (66%) y exploración (25%); 9% suma escalamiento (8%) y liderazgo (1%). *(Fable)*

## [SERV] Servicios

- Etiqueta: Servicios
- Título: **Cuatro formas de que tu gente y tu tecnología trabajen mejor juntas.**
- Introducción: Puedes partir por cualquiera. Recomendamos empezar por un diagnóstico, del tamaño que necesites.
- Cada línea termina con un enlace a la agenda *(Fable)*: Conversemos sobre un diagnóstico / Conversemos sobre formación / Conversemos sobre un agente / Conversemos sobre tu sitio o plataforma.

### Diagnóstico

Frase: Entender antes de proponer.

| Ícono (lucide) | Servicio | Texto |
| --- | --- | --- |
| `Search` | Diagnóstico Sint | Entrevistas a líderes, encuestas a los equipos y revisión de herramientas y datos. Entrega un informe de punto de partida, oportunidades priorizadas, reglas de uso de la IA y un plan de acción. Su profundidad se ajusta a lo que necesitas. |
| `ChartColumn` | Estudios con encuestas y entrevistas | Investigación cualitativa y cuantitativa con tus equipos o tus clientes, para decidir con datos. |

Ejemplo visual: informe de punto de partida (se mantiene de v3).

- Dimensiones con nivel en palabras: Gobierno · Inicial / Datos · En desarrollo / Medición · Inicial / Formación · En desarrollo.
- Oportunidades priorizadas: Respuestas a clientes por WhatsApp / Cotizaciones preparadas con los datos de tus planillas / Formación práctica para el equipo comercial.

### Formación

Frase: Equipos que saben usar la IA en su trabajo diario.

| Ícono | Servicio | Texto |
| --- | --- | --- |
| `Users` | Talleres y cursos de IA | Cursos prácticos con los casos de tu empresa, presenciales o en línea, con franquicia tributaria SENCE mediante OTEC asociado. |
| `GraduationCap` | Academias internas | Programas, rutas por cargo e inducción para la academia o universidad corporativa de tu organización. |
| `Compass` | Adopción y gestión del cambio | Liderazgo, comunicación y seguimiento para que lo aprendido se use en el trabajo diario. |

Ejemplo visual nuevo *(Fable; José lo confirma sobre la vista previa)*: programa de un taller.

- Taller: IA para el equipo comercial · etiqueta "Franquicia SENCE".
- Módulos: Fundamentos y uso responsable (Qué puede y qué no debe hacer la IA en tu trabajo) / Casos de tu área (Cotizaciones, seguimiento y respuestas a clientes) / Práctica con tus propios datos (Cada persona resuelve una tarea real de su semana) / Plan de adopción (Acuerdos con las jefaturas para sostener el uso).
- Al pie: Presencial o en línea · Con los casos de tu empresa.
- Sin horas, fechas ni precios.

### Agentes IA

Frase: IA conectada a tus herramientas, al servicio de tu equipo.

| Ícono | Servicio | Texto |
| --- | --- | --- |
| `MessageCircle` | Atención a clientes | Asistentes que responden, califican y derivan consultas por WhatsApp y web, a toda hora, y pasan a una persona lo que no deben resolver solos. |
| `FileText` | Documentos y reportes automáticos | Agentes que preparan cotizaciones, informes y reportes con los datos de tus planillas y sistemas en la nube. |
| `BookOpen` | Conocimiento interno | Asistentes que responden con tus manuales, contratos y políticas vigentes, y citan la fuente. |

Nota bajo la línea: Cada agente se entrega con un periodo de acompañamiento y, si quieres, sigue con mantención mensual.

Ejemplo visual: conversación (se mantiene de v3).

1. Cliente: Hola, ¿me pueden cotizar 40 sillas de oficina para el 20 de diciembre?
2. Asistente: Claro. Revisé el inventario y tenemos 40 unidades disponibles. Te envío la cotización en PDF.
3. Asistente (adjunto): Cotización · Sillas de oficina.pdf
4. Asistente: ¿Quieres que una ejecutiva te llame para coordinar la entrega?

### Plataformas

Frase: Sitios y herramientas rápidos, accesibles y fáciles de encontrar.

| Ícono | Servicio | Texto |
| --- | --- | --- |
| `Globe` | Sitios web corporativos e institucionales | Diseño, desarrollo y un administrador de contenidos para que tu equipo publique sin depender de nadie. |
| `Sparkles` | Posicionamiento en Google y buscadores con IA | SEO y AEO: que Google y los asistentes de IA encuentren tu sitio y describan bien a tu organización. |
| `CodeXml` | Plataformas y portales a medida | Herramientas internas y portales para clientes, construidos sobre una especificación que apruebas. |
| `LayoutDashboard` | Tableros de datos | Reunimos tu información en un solo lugar y la convertimos en tableros para decidir. |

Ejemplo visual nuevo, que reemplaza al de integración y muestra lo que Carlos sabe hacer:

- Una tarjeta de respuesta de un asistente de IA a la pregunta "¿Qué hace Tu organización?", con una respuesta clara que cita "tusitio.cl". La respuesta usa barras grises donde irían los datos de cada cliente: "Tu organización es una empresa chilena que ofrece ▬▬ a ▬▬ en todo el país. Atiende por ▬▬ y mantiene su información al día." *(Fable)*
- Junto a ella, cuatro indicadores de calidad: Rendimiento 98 · Accesibilidad 100 · Buenas prácticas 100 · SEO 100.
- Etiqueta "Ejemplo". No imitar la interfaz de un buscador real como si fuera una captura.

## [POR] Por qué Sint

Bloque breve, sin cifras:

| Ícono | Título | Texto |
| --- | --- | --- |
| `UserCheck` | Hablas con quienes hacen el trabajo | Un equipo pequeño y senior, sin intermediarios. |
| `Users` | Personas y tecnología en el mismo equipo | Ciencias sociales para entender a tu organización, ingeniería para construir lo que necesita. |
| `Zap` | Remoto y ágil | Construimos con agentes de IA y especificaciones escritas, y vamos a terreno cuando hace falta. |

## [MET] Cómo trabajamos

- Título: **De la primera conversación a la operación.** *(Fable: antes "Del diagnóstico a la operación."; el diagnóstico ya no es obligatorio.)*

| Ícono | Paso | Texto |
| --- | --- | --- |
| `Search` | Entendemos | Conocemos procesos, personas y herramientas antes de proponer. |
| `FileCheck` | Especificamos | Acordamos por escrito el alcance y los criterios de aceptación. |
| `Hammer` | Construimos o formamos | Ejecutamos lo acordado y te mostramos avances con una vista previa en cada entrega. |
| `LifeBuoy` | Acompañamos | Medimos el uso real, damos soporte y ajustamos. |

**Nuestras garantías** (se mantienen de v3):

- `KeyRound` La especificación, el código y los contenidos son tuyos.
- `Lock` Las reglas de acceso a tus datos se acuerdan por escrito antes de empezar.
- `UserCheck` Las decisiones sensibles quedan en manos de una persona de tu organización.

## [EQ] Equipo

- Etiqueta: Quiénes somos
- Título: **Un equipo que une personas y tecnología.**

| Nombre | Cargo | Formación | Biografía |
| --- | --- | --- | --- |
| José Latorre | Fundador | Sociólogo · PUC | Certificado en gestión del cambio (Vanderbilt University). Ha dirigido proyectos de consultoría, investigación cualitativa y cuantitativa, y marketing estratégico para empresas de distintos tamaños e industrias. Trabaja con IA desde GPT-3. En Sint dirige los diagnósticos y la formación. |
| Carlos Martínez | Dirección técnica | Sistemas de Información · U. de Chile | Crea sitios web desde 2004. Desde 2009 trabaja en la Universidad de Chile, donde dirige la unidad que desarrolla sus sitios, como tv.uchile.cl. Experto en CMS, rendimiento, SEO y AEO. Hoy diseña cómo trabajan los equipos con agentes de IA. En Sint dirige la parte técnica de cada proyecto. |

- La descripción de Carlos está confirmada (José, 10 de noviembre de 2026). Ambos llevan enlace a su LinkedIn.
- Fotos: `public/images/equipo/*.webp` (ya optimizadas).
- **Sin nota sobre el equipo por proyecto.** José la descartó: la página no explica que se suman personas por encargo o en remoto; debe dar seguridad.

## [FAQ] Preguntas frecuentes

**¿Qué es Sint?**
[CANON]

**¿Hay que partir con un diagnóstico?**
No. Es el punto de partida que recomendamos, pero también puedes contratar directamente formación, agentes IA o plataformas. Siempre partimos con una conversación.

**¿Las capacitaciones tienen franquicia SENCE?**
Sí. Los cursos pueden acceder a franquicia tributaria SENCE mediante nuestro OTEC asociado.

**¿Cuánto cuesta?**
Depende del alcance. Después de la primera conversación te enviamos una propuesta técnica y económica a medida.

**¿Trabajan en terreno o en remoto?**
Desarrollamos en remoto y vamos a terreno para entrevistas, talleres y presentaciones.

**¿Qué agentes de IA construyen?**
Asistentes de atención a clientes por WhatsApp y web, agentes que preparan documentos y reportes, y asistentes que responden con el conocimiento interno de tu organización.

**¿Con qué herramientas trabajan?**
Con las que tu organización ya usa: planillas, Google Workspace o Microsoft 365, tu sitio web y el modelo de IA que prefieras.

## [CIE] Cierre

- Título: **Conversemos sobre tu organización.**
- Texto: Cuéntanos qué quieres resolver y te decimos por dónde partiríamos.
- Botones: **Agenda una conversación** · **Escríbenos por WhatsApp**
- Contacto: Correo · jose@sint.cl / WhatsApp · +56 9 5630 3337

## [PIE] Pie

- Logo `sint_` y "Sint. Sistemas Inteligentes"
- Propósito: Personas y tecnología, trabajando mejor juntas.
- [CANON]
- Santiago, Chile
- Enlaces a las secciones y de contacto, incluido el LinkedIn de Sint; "© 2026 Sint."

## [SCHEMA] Datos estructurados

Igual que en v3 (`app/content/schema.ts`), con estos cambios:

- `description`: el nuevo [CANON]. `slogan`: el propósito.
- `knowsAbout`: Diagnóstico organizacional · Investigación social · Gestión del cambio · Capacitación en IA · Franquicia SENCE · Agentes de IA · Desarrollo web · SEO y AEO.
- `hasOfferCatalog`: las 4 líneas con sus 12 servicios, derivados automáticamente de `home.ts`.
- `FAQPage`: con las preguntas visibles.
- `sameAs` de la organización: `https://www.linkedin.com/company/sint-cl/`.
