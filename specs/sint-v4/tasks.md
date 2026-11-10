# sint.cl v4 · Tareas

10 de noviembre de 2026 · Fable 5.2. Para Opus 5.5. Leer antes `README.md`, `spec.md`, `plan.md` y `design.md`.

**El trabajo es portar `referencia/index.html` a Next.js.** La maqueta ya tiene el diseño, las clases de Tailwind y los textos finales. No hay que rediseñar: hay que convertirla en componentes limpios, alimentados por `app/content/home.ts`.

## Reglas de trabajo

1. **Branch `sint_v4`**, en `~/Escritorio/SINT/SINT-v4`. Nunca `master`. Nunca tocar `backend/`.
2. **Una tarea, un commit**, en español: `tipo(ámbito): descripción`. Antes de cada commit: `npm run lint` y `npm run build`, ambos limpios.
3. **`git pull` antes de cada push.** Push al final de cada bloque (A, B, C y D). Cada push publica `https://sint-v4.sint-web.pages.dev` en uno o dos minutos.
4. **Copiar, no reinterpretar.** Las clases de la maqueta se copian tal cual. Los textos salen de `home.ts`, no se escriben en los componentes (salvo los indicados como decorativos).
5. **Nada de colores en hexadecimal en `app/`**, salvo en `globals.css`. Nada de `framer-motion`.
6. **No cambiar la oferta ni agregar afirmaciones.** Si algo de la maqueta parece un error de contenido, se anota en "Dudas" al final de este archivo y se sigue.
7. Componentes de servidor por defecto. Solo `Navbar` y `Secuencia` llevan `"use client"`.
8. En la maqueta los íconos son `<i data-lucide="nombre-en-kebab">`. En el sitio son componentes de `lucide-react` (`chart-column` → `ChartColumn`), siempre con `strokeWidth={1.75}` y `aria-hidden="true"`.
9. Entre los bloques A y C la vista previa se verá incompleta. Es esperado.

### Cómo revisar

```bash
export PATH=$HOME/.local/bin:$PATH
npm run lint && npm run build
npx serve out -l 4173          # sitio compilado en http://localhost:4173
```

Capturas (Firefox está instalado; con una ventana muy alta se captura la página completa):

```bash
P="$(mktemp -d)"
echo 'user_pref("ui.prefersReducedMotion", 1);' > "$P/user.js"   # sin esto, los ejemplos salen a medio animar
firefox --headless --no-remote --profile "$P" --window-size=1280,9600 --screenshot /tmp/v4-1280.png http://localhost:4173
firefox --headless --no-remote --profile "$P" --window-size=375,14600 --screenshot /tmp/v4-375.png  http://localhost:4173
firefox --headless --no-remote --profile "$P" --window-size=375,700   --screenshot /tmp/v4-375-inicio.png http://localhost:4173
```

Comparar siempre contra `referencia/capturas/escritorio-1280.png` y `celular-375.png` (son la maqueta completa, sin animaciones).

---

## P0 · Para publicar esta semana

### Bloque A · Base

#### T1 · Retirar `/diagnostico`

- **Objetivo:** que el test en línea deje de existir y su dirección lleve a la página principal.
- **Archivos:** borrar `app/diagnostico/`; crear `public/_redirects`; `package.json`; `app/sitemap.ts`; `app/page.tsx` (comentarios).
- **Pasos:**
  1. `git rm -r app/diagnostico`.
  2. `public/_redirects` con dos líneas: `/diagnostico / 301` y `/diagnostico/* / 301`.
  3. `npm uninstall framer-motion`.
  4. Quitar de `sitemap.ts` y `page.tsx` los comentarios que mencionan `/diagnostico`; `lastModified` del sitemap pasa a `2026-11-10`.
- **Listo cuando:** `out/` no contiene `diagnostico*`; `out/_redirects` existe; `grep -rn "framer-motion\|NEXT_PUBLIC_BACKEND_URL" app package.json` no devuelve nada.
- **Commit:** `chore(diagnostico): retira el test en línea y redirige a la página principal`

#### T2 · Tema, tokens y tipografía

- **Objetivo:** dejar instalado el sistema visual de `design.md` §3 y §4.
- **Archivos:** `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`.
- **Pasos:**
  1. `tailwind.config.ts`: reemplazar por el de `design.md` §3.
  2. `globals.css`: las tres directivas `@tailwind` y luego todo el bloque `<style type="text/tailwindcss">` de la maqueta, sin las líneas `--font-sans` y `--font-mono`. Eliminar lo anterior (`.rise`, la utilidad `text-balance` propia, colores fijos).
  3. `layout.tsx`: fuentes según `design.md` §4 (variables `--font-sans` y `--font-mono`); `themeColor: "#FAF9F6"`; `<body>` sin clases (el estilo base ya está en `globals.css`).
- **Listo cuando:** compila. La página se verá rota (secciones antiguas sobre fondo claro): se arregla en T3.
- **Commit:** `feat(tema): tokens de papel y tinta, tipografía y clases base`

#### T3 · Contenido v4 y página en blanco

- **Objetivo:** instalar los textos finales y partir de una página limpia.
- **Archivos:** `app/content/home.ts`, `app/content/schema.ts`, `app/page.tsx`, `app/layout.tsx`, `app/components/ui.tsx`, `app/components/Logo.tsx`; borrados.
- **Pasos:**
  1. `git mv specs/sint-v4/referencia/home.ts app/content/home.ts` (reemplaza al actual) y quitar de su encabezado la nota "ESTE ARCHIVO ES EL DESTINO FINAL…".
  2. Borrar `app/sections/*` (todas), `app/components/ejemplos/*`, `app/components/WhatsAppFloat.tsx` y `public/images/hero-*.webp`.
  3. `ui.tsx`: `WhatsAppIcon` (igual), `AgendaButton` y `WhatsAppButton` con una prop `variant` (`"primary" | "secondary"` y, para el cierre, `"accent" | "night"`) que usan las clases `.btn-*`; `SectionHeader` (`eyebrow`, `title`, `intro?`, con `.eyebrow`, `.h-section`, `.lead`); `Stage` (`label`, `children`: el `<figure class="stage …">` con su `<figcaption>` y la etiqueta `ejemplos.tag`). Todos los enlaces externos con `target="_blank" rel="noopener noreferrer"`.
  4. `Logo.tsx`: `font-mono font-medium tracking-tight`, guion en `text-accent`, prop `animated` que agrega `.logo-cursor`. Sin estilos en línea.
  5. `schema.ts` según `content.md` [SCHEMA]: `knowsAbout` nuevo; `hasOfferCatalog` = las 4 líneas de `servicios.lineas` con sus 12 servicios (se elimina el catálogo aparte del diagnóstico); `FAQPage` desde `faq.items`.
  6. `layout.tsx`: `keywords: site.keywords`.
  7. `page.tsx`: enlace "Saltar al contenido" (clases de la maqueta), `<main id="contenido">` con un `<h1 className="h-display container-page py-20">{hero.title}</h1>` provisional, y el `<script type="application/ld+json">`.
- **Listo cuando:** compila; el JSON-LD de `out/index.html` tiene 4 catálogos y 12 servicios; `grep -rnE "ERP|CRM|Integración|Modernización|Operación continua" app` no devuelve nada.
- **Commit:** `feat(contenido): textos v4, datos estructurados y componentes base`
- **Push del bloque A.**

### Bloque B · Primera pantalla

#### T4 · Encabezado y pie

- **Archivos:** `app/sections/Navbar.tsx` (cliente), `app/sections/Footer.tsx`, `app/page.tsx`.
- **Pasos:**
  1. `Navbar`: estructura y clases de `[NAV]` en la maqueta. Es `sticky`, siempre con fondo translúcido: **ya no escucha el desplazamiento**. Estado solo para el menú de celular (`open`), que se cierra con Escape y al elegir un enlace.
  2. Menú de celular: panel bajo el encabezado, `border-t border-line bg-paper px-5 pb-8 pt-2`, alto `h-[calc(100svh-4rem)]`; enlaces `block border-b border-line py-4 text-lg`; al final un `AgendaButton` a todo el ancho. El botón alterna los íconos `Menu` y `X` y mantiene `aria-expanded` y `aria-controls`.
  3. `Footer`: `[PIE]` de la maqueta, con `site`, `nav`, `links` y `footer`.
- **Listo cuando:** a 375 px se ven logo, "Conversemos" y menú, sin desplazamiento horizontal; el menú abre, cierra y navega; a 1280 px se ven los cuatro enlaces.
- **Commit:** `feat(home): encabezado y pie con el diseño v4`

#### T5 · Portada

- **Archivos:** `app/sections/Hero.tsx`, `app/page.tsx`.
- **Pasos:**
  1. `[HERO]` de la maqueta: antetítulo, `h1.h-display`, bajada, dos botones y la lista de cuatro tarjetas.
  2. Las tarjetas se generan desde `servicios.lineas` (`id`, `name`, `short`, numeración `01`–`04`). Las cuatro viñetas son pequeños componentes dentro de `Hero.tsx` (un mapa `id → viñeta`); su texto es decorativo, va con `aria-hidden` y se queda en el componente.
  3. Sin animación de entrada.
- **Listo cuando:** a 1280 × 800 se ven el `h1` en dos líneas y las cuatro tarjetas con sus nombres; a 375 × 700 se ven el `h1`, la bajada, los dos botones y al menos la primera fila de líneas; las cuatro tarjetas llevan a su línea.
- **Commit:** `feat(home): portada con las cuatro líneas`

#### T6 · Evidencia

- **Archivos:** `app/sections/Evidencia.tsx`, `app/page.tsx`.
- **Pasos:** `[EVI]` de la maqueta con los datos de `evidencia`. La barra de 9 de 100 es decorativa (`aria-hidden`). El `h2` contiene "Solo 9%" y "llegó a escala.".
- **Listo cuando:** la fuente es un enlace que abre el artículo; contraste correcto sobre la banda oscura.
- **Commit:** `feat(home): evidencia en banda oscura`
- **Push del bloque B.**

### Bloque C · Contenido

#### T7 · Servicios, con los ejemplos de Diagnóstico y Agentes IA

- **Archivos:** `app/sections/Servicios.tsx`, `app/components/ejemplos/Informe.tsx`, `app/components/ejemplos/Conversacion.tsx`, `app/page.tsx`.
- **Pasos:**
  1. `Servicios`: encabezado y un `<article id={linea.id}>` por línea, según `[SERV]`: `.index`, `h3.h-line`, frase, lista de servicios (`h4`), `note` si existe y enlace `.link-arrow` a la agenda con `linea.cta`. La última línea lleva `border-y`; las demás, `border-t`.
  2. Mapa `id → ejemplo`. Si una línea aún no tiene ejemplo, el texto ocupa las 12 columnas con `max-w-2xl`.
  3. `Informe` y `Conversacion` según la maqueta, con los datos de `ejemplos`. Dejar puestas las clases `seq` y `seq-bar` y sus variables (`style={{ "--i": n } as React.CSSProperties}`): sin `Secuencia` no hacen nada.
- **Listo cuando:** a 1280 px, texto a la izquierda y ejemplo a la derecha, que acompaña el desplazamiento; a 375 px el ejemplo queda bajo el texto, sin desplazamiento horizontal; los 12 servicios están en el HTML.
- **Commit:** `feat(home): cuatro líneas de servicio con informe y conversación`

#### T8 · Ejemplos de Formación y Plataformas

- **Archivos:** `app/components/ejemplos/Programa.tsx`, `app/components/ejemplos/Buscador.tsx`, `app/sections/Servicios.tsx`.
- **Pasos:**
  1. `Programa`: módulos con estado `done` (círculo `ink` con `Check`), `current` (círculo con borde `accent` y su número) y `next` (círculo con borde `line-2` y su número).
  2. `Buscador`: el párrafo de la respuesta se escribe en el componente, igual que en la maqueta: barras `aria-hidden` y, para lectores de pantalla, los textos `sr-only` ("sus servicios", "sus clientes", "sus canales"). Los anillos, según `design.md` §8.
- **Listo cuando:** las cuatro líneas tienen ejemplo y etiqueta "Ejemplo"; a 375 px los indicadores van en 2 × 2.
- **Commit:** `feat(home): ejemplos de programa de taller y de respuesta de un asistente`

#### T9 · Por qué Sint, Cómo trabajamos y Equipo

- **Archivos:** `app/sections/PorQue.tsx`, `Metodo.tsx`, `Equipo.tsx`, `app/page.tsx`.
- **Pasos:** `[POR]`, `[MET]` y `[EQ]` de la maqueta. En `Equipo`, `next/image` con `width={160} height={160}`, `loading="lazy"` y `alt="Fotografía de …"`; el enlace de LinkedIn solo si la persona lo tiene; al final, `equipo.note`.
- **Listo cuando:** `#como-trabajamos` y `#equipo` responden a los enlaces del encabezado sin quedar tapados por él.
- **Commit:** `feat(home): por qué Sint, cómo trabajamos y equipo`

#### T10 · Preguntas y Cierre

- **Archivos:** `app/sections/Faq.tsx`, `Cierre.tsx`, `app/page.tsx`.
- **Pasos:** `[FAQ]` con `<details>` (la primera, `open`) y `[CIE]` con `AgendaButton variant="accent"` y `WhatsAppButton variant="night"`. Las bandas oscuras llevan la clase `night` (color del foco).
- **Listo cuando:** las siete preguntas están en el HTML aunque estén plegadas; todos los botones de la página llevan a la agenda o a WhatsApp.
- **Commit:** `feat(home): preguntas frecuentes y cierre`
- **Push del bloque C.**

### Bloque D · Terminaciones

#### T11 · Movimiento

- **Archivos:** `app/components/Secuencia.tsx`, `app/components/ui.tsx` (`Stage`).
- **Pasos:**
  1. `Secuencia` (cliente): equivale al script del final de la maqueta. En `useEffect`: si no hay `IntersectionObserver` o hay `prefers-reduced-motion: reduce`, no hace nada. Si no, pone `data-seq="wait"`, observa con umbral 0,35 y, al entrar, pone `data-seq="run"` y deja de observar.
  2. `Stage` envuelve su contenido con `Secuencia` (el `<figure>` es el elemento observado).
- **Listo cuando:** cada ejemplo se anima una vez al entrar en pantalla; con JavaScript desactivado o con movimiento reducido, todo se ve completo desde el inicio; no hay saltos de contenido.
- **Commit:** `feat(home): secuencias de los ejemplos al entrar en pantalla`

#### T12 · Metadatos

- **Archivos:** `app/layout.tsx`, `app/page.tsx`.
- **Pasos:** revisar que título, descripción, Open Graph y Twitter salgan de `site` (`content.md` [META]). `public/og-image.png`, `app/icon.svg`, `app/favicon.ico` y `app/apple-icon.png` **ya están actualizados**: no regenerarlos. Quitar de `layout.tsx` la entrada manual `icons` (Next toma los archivos de `app/`).
- **Listo cuando:** `out/index.html` tiene el título y la descripción nuevos, `og:image` apunta a `/og-image.png` y hay un solo `h1`.
- **Commit:** `feat(seo): metadatos e íconos de la versión v4`

#### T13 · Revisión final

- **Pasos:**
  1. `npm run lint && npm run build`.
  2. Búsquedas que no deben devolver nada:
     - `grep -rnE "Software Intelligence|Alumbra|ERP|CRM|Modernización|Operación continua|precio|\$ ?[0-9]|UF ?[0-9]" app`
     - `grep -rnE "#[0-9A-Fa-f]{6}" app --include=*.tsx` (solo `layout.tsx` puede tener el `themeColor`)
  3. Capturas a 375 y 1280 px y comparación, sección por sección, con `referencia/capturas/`. Corregir diferencias.
  4. Teclado: recorrer la página con Tab; el foco siempre se ve; el menú de celular se cierra con Escape.
  5. Push. En la vista previa: `curl -sI https://sint-v4.sint-web.pages.dev/diagnostico` responde `301` con `location: /`.
  6. Lighthouse móvil de la vista previa en `https://pagespeed.web.dev` (desde el navegador; la API sin clave está agotada). Meta: 90 o más en rendimiento; 100 en accesibilidad, buenas prácticas y SEO. Corregir lo que falte.
  7. Actualizar `AGENTS.md`: encabezado (ya no hay test ni backend en uso), "Sistema de Diseño" (apuntar a `specs/sint-v4/design.md`) y "Estructura del Proyecto" (la de `design.md` §11).
- **Entrega a José:** enlace de la vista previa, capturas a 375 y 1280 px, puntajes de Lighthouse y la lista de "Dudas".
- **Commit:** `docs(agents): estado del proyecto tras la versión v4` (más los `fix` que hagan falta, uno por corrección).
- **Push del bloque D.** No abrir el pull request a `master`: lo pide José.

---

## P1 · Después de publicar

| Tarea | Detalle |
| --- | --- |
| LinkedIn de Sint | Agregar `sameAs` en `schema.ts` cuando José entregue la URL |
| LinkedIn de Carlos | Agregar el enlace en `equipo.members` si Carlos quiere |
| Página 404 | `app/not-found.tsx` con el estilo nuevo y un botón al inicio |
| `llms.txt` | `public/llms.txt` con la frase canónica, las cuatro líneas y el contacto, para asistentes de IA |
| Medición | Activar Cloudflare Web Analytics (sin cookies) y contar los clics en agenda y WhatsApp. Requiere acceso a la cuenta de Cloudflare: lo decide José |
| Portada con movimiento | Una secuencia breve en las viñetas de las tarjetas, al cargar |
| Limpieza | Archivar `specs/sint-v3/` y `referencia/` cuando el sitio esté publicado |

## Pendientes de José y Carlos (no son código)

- Carlos confirma la mención a la U. de Chile y a tv.uchile.cl.
- José actualiza el "Acerca de" de LinkedIn con la frase canónica.
- Después de publicar: Google Search Console y Bing Webmaster Tools (sitemap y reindexar `/`).
- Decidir qué pasa con la app de Fly.io y con `backend/`.

## Dudas

*(Opus anota aquí lo que encuentre, con fecha. Fable o José responden.)*
