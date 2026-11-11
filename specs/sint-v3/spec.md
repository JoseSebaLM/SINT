# sint.cl v3 · Qué queremos lograr

Noviembre de 2026. Documento de dirección: explica el objetivo y las decisiones de negocio; el cómo queda a criterio de quien desarrolla.

## 1. El cambio

Sint deja de presentarse como una fábrica de software con diagnóstico previo y pasa a presentarse como una empresa con un propósito y cuatro capacidades.

- **Marca.** Reemplazamos el concepto "Sint · Software Intelligence" por **Sint. Sistemas Inteligentes**. Conviene eliminar "Software Intelligence" en todo el sitio, incluidos los metadatos y `/diagnostico`.
- **Propósito.** Personas y tecnología, trabajando mejor juntas.
- **Capacidades.** Diagnóstico, formación, sistemas y agentes de IA, a la medida de cada organización.
- **Diagnóstico.** Es el punto de partida recomendado, no un paso obligatorio: cada línea de servicio es también una puerta de entrada directa.

## 2. Libertad de desarrollo

Carlos tiene plena libertad creativa y técnica sobre la página: diseño, paleta de colores, estructura, textos, ejemplos, tecnología y método. El texto de `content.md` y el plan de `plan.md` son propuestas.

Se conversa antes con José solo un tipo de cambio: **cambios importantes en la oferta de servicios** (agregar, quitar o redefinir servicios).

## 3. Decisiones de negocio vigentes

1. **Sin precios ni plazos publicados.** Todo es a medida; precios y plazos se entregan en cada propuesta técnica y económica.
2. **Oferta completa.** Formación, Sistemas y Agentes de IA con sus 11 servicios (ver `content.md`), más el Diagnóstico Sint.
3. **Cifras con fuente.** Si la página muestra datos, que se puedan verificar.
4. **Ejemplos honestos.** Si se muestran ejemplos de trabajo, que digan que son ejemplos y no usen nombres de clientes sin permiso.
5. **Dos formas de contacto.** Agenda (`https://cal.com/jose-latorre/15min`) y WhatsApp (`https://wa.me/56956303337`).

## 4. Objetivos

| Objetivo | Señal de que se cumple |
| --- | --- |
| Se entiende en 5 segundos qué hace Sint | La portada muestra propósito y capacidades sin desplazarse, en celular y en escritorio |
| Cada necesidad encuentra su servicio | Los servicios se ven sin abrir desplegables |
| Toda acción lleva a una conversación | Cada botón lleva a la agenda o a WhatsApp |
| La oferta se ve concreta y creíble | Ejemplos de trabajo y datos locales con fuente |
| Carga rápido en un celular | Lighthouse móvil de 90 o más |
| Google y los buscadores con IA describen bien a Sint | Ver sección 6 |

## 5. Lecciones de referentes en San Francisco

Revisión de texto y estructura de las páginas de Sierra, Decagon, Distyl, Ode, Linear, Vercel, Stripe y Anthropic (4 de noviembre de 2026). El estilo visual no se revisó en esa sesión.

| Lección | Quién lo hace | Idea para Sint |
| --- | --- | --- |
| Mostrar el trabajo en vez de describirlo | Decagon muestra en portada a un agente resolviendo pedidos; Linear y Sierra, su producto funcionando | Ejemplos visuales hechos en código: un informe de diagnóstico, una integración, una conversación con un agente |
| Prueba justo después de la portada | Sierra, Decagon y Stripe ponen logos y cifras de clientes bajo el titular | El dato chileno del índice CCS, con fuente; clientes cuando haya permiso |
| Oferta agrupada por necesidad | Stripe ordena decenas de productos según lo que el cliente necesita hacer | Tres líneas con nombre simple y frase de beneficio |
| Un método visible | Decagon (construir, optimizar, escalar), Distyl (ingenieros dentro del cliente), Ode (de la hoja de ruta al despliegue) | "Cómo trabajamos" en pocos pasos concretos |
| Confianza explícita | Sierra y Distyl muestran certificaciones de seguridad | Garantías concretas: lo construido es del cliente, reglas de acceso a datos por escrito, una persona a cargo de lo sensible |
| Un solo llamado, repetido | Todos repiten el mismo botón en portada y cierre | "Agenda una conversación", con WhatsApp como alternativa |

Lo que no conviene copiar: titulares abstractos que se sostienen con 30 logos, cifras sin fuente y jerga en inglés.

## 6. Posicionamiento en Google y búsqueda con IA

### Diagnóstico (5 de noviembre de 2026)

El modo IA de Google, ante "Sint en Chile", describe a Sint como una "agencia tecnológica chilena" de "software corporativo a medida, bajo el concepto Software Intelligence", que cobra "en función de la fricción operativa resuelta" y ofrece un test en línea. Arma esa respuesta con tres fuentes, y las tres tienen el posicionamiento antiguo:

1. La página principal de sint.cl.
2. La página de Sint en LinkedIn ("Transformamos el diagnóstico organizacional en software a medida").
3. `/diagnostico`, que Google indexa como "Diagnóstico Sint - Software Intelligence".

Cambiar solo la página principal no basta: hay que actualizar las tres fuentes.

### Recomendaciones, por prioridad

Basadas en prácticas conocidas de SEO y de optimización para buscadores con IA; no se verificaron en esta sesión.

1. **Actualizar las tres fuentes.** Página principal (v3); `/diagnostico` con título y descripción propios, o fuera del índice si no se seguirá usando (decisión de Carlos y José); descripción, eslogan y publicación fijada de LinkedIn (José).
2. **Una frase canónica, idéntica en todas partes.** La frase de [CANON] en `content.md`, repetida en el pie de la página, en los datos estructurados y en el "Acerca de" de LinkedIn. Los buscadores con IA tienden a citar frases definitorias que se repiten en varias fuentes.
3. **Datos estructurados (JSON-LD).** `Organization` o `ProfessionalService` con nombre, nombre alternativo, descripción, ciudad, país, fundadores, LinkedIn y catálogo de servicios; `FAQPage` para las preguntas frecuentes. Datos en [SCHEMA] de `content.md`.
4. **Preguntas frecuentes visibles.** Respuestas breves a lo que un cliente pregunta (ver [FAQ]). Es el formato que más citan los buscadores con IA. Pueden ir plegadas para no cargar la página de texto.
5. **Las palabras que usa el cliente.** "Capacitación en IA para empresas", "franquicia tributaria SENCE", "agentes de IA", "asistente de WhatsApp", "desarrollo de software a medida", "integración de sistemas", "Santiago, Chile". Que aparezcan de forma natural en títulos y textos.
6. **Después de publicar.** Verificar el dominio en Google Search Console, enviar el sitemap y pedir reindexación de `/` y `/diagnostico`. Hacer lo mismo en Bing Webmaster Tools, que alimenta a otros buscadores con IA.
7. **A mediano plazo.** Menciones de Sint en sitios de terceros (aliados, OTEC, prensa, directorios), que los buscadores con IA usan para confirmar quién es una empresa.

## 7. Lista sugerida antes de publicar

- [ ] No quedan menciones a "Software Intelligence", "fricción resuelta" ni precios.
- [ ] Los botones llevan a la agenda o a WhatsApp.
- [ ] Se ve bien en un celular de 375 px, sin desplazamiento horizontal.
- [ ] Ortografía y acentuación completas.
- [ ] Título, descripción, vista previa para redes y datos estructurados actualizados.
- [ ] Lighthouse móvil de 90 o más.
