# sint.cl v4 · Qué queremos lograr

10 de noviembre de 2026. Versión definitiva para 2027. Reemplaza a `specs/sint-v3/`, que queda como historia.

Este documento resume las respuestas de José (Seba) Latorre sobre lo que Sint puede ofrecer de verdad y las decisiones que salen de ellas. Quien desarrolla tiene libertad en el cómo; lo que está en "Decisiones" no se cambia sin consultar a José.

## 1. El punto de partida: quién hace el trabajo

| Persona | Dedicación 2027 | Lo que hace muy bien |
| --- | --- | --- |
| José Latorre (fundador) | 30 h semanales o más | Sociólogo (PUC), certificado en gestión del cambio (Vanderbilt). Investigación cualitativa y cuantitativa (entrevistas, encuestas web), marketing estratégico, consultoría y dirección de proyectos. Trabaja con IA desde GPT-3. Hace clases y se está formando en desarrollo de agentes de IA. Puede ir a terreno. |
| Carlos Martínez (dirección técnica) | 2 a 3 h diarias, solo con proyectos activos | Crea sitios web desde 2004. Desde 2009 en la Universidad de Chile, donde dirige la unidad que hace sus sitios (el más reciente, tv.uchile.cl: catálogo, programación, señal en directo y administrador propio). CMS, Astro, Cloudflare, SEO y AEO. Dirige un equipo y diseña cómo trabaja con agentes de IA. Solo remoto. |
| Equipo por proyecto | Según necesidad | Personas remotas contratadas por proyecto: desarrolladores (compañeros del bootcamp de Skillnest de José, contactos de Carlos) y otros roles reclutados por LinkedIn. |

**Implicancias**

1. **Todo se entrega en remoto**, salvo lo que hace José en persona (entrevistas, talleres, presentaciones). No hay ingenieros en terreno.
2. **El cuello de botella técnico es el tiempo de Carlos**, de unas 10 a 15 horas semanales. Por eso, uno o dos proyectos de desarrollo en paralelo como máximo. Formación y diagnóstico dependen de José y escalan mejor.
3. **Se construye con agentes de código** (Claude Code) sobre especificaciones escritas y con revisión humana. Esto permite tomar proyectos que antes requerían un equipo más grande, pero no proyectos que exijan meses en las oficinas del cliente.
4. **No hay clientes, casos ni testimonios publicables todavía.** La credibilidad sale de la trayectoria del equipo, de la claridad del método, de ejemplos marcados como ejemplos y del propio sitio, que debe ser una muestra de lo que Carlos sabe hacer (velocidad, accesibilidad, SEO y AEO).

## 2. Decisiones

1. **Marca.** "Sint. Sistemas Inteligentes" y el logo `sint_` se mantienen. Propósito: *Personas y tecnología, trabajando mejor juntas.* Se trata al lector de **tú**.
2. **Una sola página**, más `/diagnostico` (ver 8). Más páginas solo si aportan de verdad.
3. **Sin precios publicados.** Cada proyecto termina en una propuesta técnica y económica a medida.
4. **Dos formas de contacto:** agenda (`https://cal.com/jose-latorre/15min`) y WhatsApp (`https://wa.me/56956303337`).
5. **Solo Chile**, sin especializarse en una industria.
6. **No se inventa nada.** Sin logos, cifras ni testimonios de clientes. Los ejemplos dicen "Ejemplo". Las cifras de mercado llevan su fuente. No se afirma experiencia que el equipo no tiene: por ejemplo, de agentes de IA se dice que los construimos, no que llevamos años haciéndolo.
7. **Se publica esta semana.** Lo que no alcance queda como siguiente iteración.
8. **`/diagnostico` (el test en línea) sigue funcionando, pero sale del índice:** fuera del menú y del sitemap, y con `noindex`. Así Google deja de mostrar el posicionamiento antiguo. El backend no se toca.
9. **José aprueba.** Carlos lidera lo técnico. Nada llega a `master` (que publica sint.cl) sin el visto bueno de José sobre la vista previa.

## 3. La oferta v4

Criterio: se queda lo que el equipo ya hace o puede entregar en remoto con un equipo mínimo. Sale lo que exige mucho trabajo en terreno o depender de sistemas antiguos del cliente.

### Punto de partida: Diagnóstico (José)

El diagnóstico no es un paso obligatorio ni un producto cerrado: los clientes anteriores prefirieron pasar rápido a la acción. Se ofrece con profundidad variable:

- **Conversación y propuesta:** una o dos reuniones y una propuesta técnica y económica a medida.
- **Diagnóstico Sint:** entrevistas, encuestas a los equipos y revisión de herramientas y datos. Entrega informe de punto de partida, oportunidades priorizadas, reglas de uso de la IA y plan de acción.

Los **estudios de investigación** de José (encuestas y entrevistas a equipos o clientes) entran aquí como parte del diagnóstico, no como una línea aparte.

### Tres líneas de servicio

| Línea | Servicio | Estado | Quién |
| --- | --- | --- | --- |
| **Formación** | Talleres y cursos de IA | Se puede hacer; SENCE en trámite | José |
| | Academias internas | Se vende hoy | José |
| | Adopción y gestión del cambio | Se puede hacer | José |
| **Agentes de IA** | Atención a clientes (WhatsApp y web) | Se puede hacer | Carlos + equipo |
| | Documentos y reportes automáticos | Se puede hacer | Carlos + equipo |
| | Asistentes de conocimiento interno | Se puede hacer | Carlos + equipo |
| **Web y plataformas** | Sitios web corporativos e institucionales | Fortaleza de Carlos | Carlos + equipo |
| | Posicionamiento en Google y buscadores con IA (SEO y AEO) | Fortaleza de Carlos | Carlos |
| | Plataformas y portales a medida | Se puede hacer | Carlos + equipo |
| | Tableros de datos | Se puede hacer | Equipo |

Son 10 servicios más el Diagnóstico.

**Qué cambió respecto de v3**

- **Salen** *Integración de sistemas* (ERP y CRM) y *Modernización de software antiguo*. Requieren externos y acceso profundo a sistemas del cliente. Las conexiones livianas (planillas, Google Workspace o Microsoft 365, APIs en la nube) quedan dentro de los agentes.
- ***Operación continua* deja de ser un servicio aparte.** Pasa a ser parte de la entrega de cada agente: un periodo de acompañamiento y, si el cliente quiere, mantención mensual.
- **La línea "Sistemas" se convierte en "Web y plataformas"**, que es donde está la experiencia real de Carlos.
- **SENCE solo se menciona cuando el acuerdo con la OTEC esté firmado** (hoy está en trámite con la OTEC Iantar). En el código queda como un interruptor.

### Alianza: Alumbra.ai

Sint también ofrece los servicios de Alumbra.ai: operación de drones (seguridad industrial, agricultura) y visión computacional. Se muestra como un bloque breve de alianza, sin mezclarla con las líneas de Sint. **Pendiente de José:** enlace, texto y permiso para nombrarla. Mientras no se confirme, el bloque queda apagado con un interruptor.

## 4. A quién le habla la página

- **Quién llega:** sobre todo, contactos a los que José escribe directamente y gente que viene desde LinkedIn. La página debe confirmar en un minuto que Sint es serio y que vale la pena agendar.
- **Quién compra:** empresas medianas y grandes, e instituciones públicas y educativas en Chile, con un desafío concreto y presupuesto para resolverlo.
- **A quién conviene filtrar sin decirlo con dureza:** microempresas u organizaciones sin presupuesto, que en el pasado pidieron mucho y no pagaron. El filtro va en el tono (proyectos a medida, propuesta técnica y económica), en una pregunta frecuente y, fuera del sitio, en las preguntas de la agenda (ver 7).

## 5. Dirección de diseño

José ve el prototipo v3 "bonito, pero no profesional": animaciones y gráficas básicas, imágenes pobres y una distancia grande con los sitios que admira. Sus referentes son **Decagon** (decagon.ai) y **Sierra** (sierra.ai), y en segundo lugar Linear (linear.app).

Se toman sus **principios**, no sus textos, imágenes ni maquetas:

- **Claro y cálido en vez de muy oscuro.** Ambos referentes usan fondos claros. Recomendación: pasar a tema claro. Si el cambio pone en riesgo publicar esta semana, se mantiene oscuro y se aplica el resto.
- **Tipografía grande y segura**, mucho aire, pocos elementos por pantalla.
- **El producto como imagen:** interfaces cuidadas (conversación con un agente, informe, resultado en un buscador) en lugar de fotos de banco. No hay fotos reales del equipo trabajando ni presupuesto para una sesión.
- **Movimiento con intención:** secuencias breves que muestran algo funcionando, como mensajes que aparecen o un informe que se completa. Nada de adornos constantes. Siempre se respeta `prefers-reduced-motion`.
- **Paleta sobria:** el naranja `#FF6B4A` se mantiene como acento de marca (botones y detalles), con un tono más oscuro para texto sobre fondo claro por contraste. El morado y el verde se usan solo dentro de los ejemplos.

## 6. Objetivos

| Objetivo | Señal de que se cumple |
| --- | --- |
| Se ve profesional | José lo aprueba en la vista previa, comparándolo con sus referentes |
| Se entiende en 5 segundos qué hace Sint | Propósito y líneas visibles sin desplazarse, en celular y en escritorio |
| La oferta es creíble | Todo lo que se ofrece está en la tabla de la sección 3; nada inventado |
| Toda acción lleva a una conversación | Cada botón lleva a la agenda o a WhatsApp |
| Carga rápido | Lighthouse móvil de 90 o más en rendimiento; 100 en accesibilidad y SEO |
| Buscadores y asistentes de IA describen bien a Sint | Frase canónica en el pie y en el JSON-LD, preguntas frecuentes visibles, `/diagnostico` fuera del índice |

## 7. Fuera del sitio (tareas de José)

- **Preguntas de la agenda en cal.com:** empresa, cargo, tamaño del equipo y qué quieren resolver. Sirven para filtrar antes de la reunión.
- **LinkedIn:** actualizar el "Acerca de" con la frase canónica de `content.md` y pasar la URL de la página de Sint para el JSON-LD.
- **Después de publicar:** Google Search Console y Bing Webmaster Tools (enviar el sitemap y pedir que reindexen `/`).
- **Definir internamente un proyecto mínimo:** no se publica, pero ayuda a decir que no a tiempo.

## 8. Confirmaciones pendientes

Se trabaja con los valores por defecto y José confirma sobre la vista previa.

| Tema | Valor por defecto |
| --- | --- |
| Franquicia SENCE | Apagada hasta que el acuerdo con la OTEC esté firmado |
| Bloque Alumbra.ai | Apagado hasta tener enlace, texto y permiso |
| Mencionar la U. de Chile y tv.uchile.cl en la biografía de Carlos | Se usa el texto de su LinkedIn; Carlos confirma |
| Tema claro | Sí, salvo que arriesgue publicar esta semana |
| URL de la página de Sint en LinkedIn | Fuera del JSON-LD hasta tenerla |
