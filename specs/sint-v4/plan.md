# sint.cl v4 · Plan técnico y límites

Lo que ya existe, lo que no se toca y cómo se divide el trabajo. Fable puede ajustar el plan, pero no los límites marcados como **fijo**.

## 1. Punto de partida: el branch `sint_v4`

Sale de `sint_v3-prototipo`, que ya funciona: lint y build limpios, Lighthouse móvil 95/100/100/100 servido con compresión.

| Pieza | Archivo | Estado para v4 |
| --- | --- | --- |
| Textos | `app/content/home.ts` | Reescribir según `content.md`; agregar `features: { sence: false, alumbra: false }` |
| JSON-LD | `app/content/schema.ts` | Se deriva de `home.ts`; ajustar según [SCHEMA] |
| Secciones | `app/sections/*.tsx` | Rediseñar. Agregar *Por qué Sint* y, apagada, *Alianza* |
| Ejemplos | `app/components/ejemplos/` | Pulir Informe y Conversación. Reemplazar Integración por el ejemplo de buscador con IA y métricas |
| Botones y marcos | `app/components/ui.tsx` | Rediseñar |
| Metadatos | `app/layout.tsx`, `app/page.tsx` | Actualizar textos (ver [META]) |
| Sitemap y robots | `app/sitemap.ts`, `app/robots.ts` | Sin cambios |
| Imagen para redes | `public/og-image.png` | Rehacer con el nuevo estilo (1200 × 630) |
| Fotos | `public/images/equipo/*.webp` | Sin cambios |
| Foto de portada | `public/images/hero-*.webp` | Se elimina si la portada pasa a ser visual de producto |
| Colores | `tailwind.config.ts`, `app/globals.css` | Hoy hay colores fijos en los componentes. Pasarlos a tokens semánticos (`bg`, `surface`, `text`, `muted`, `border`, `accent`, `accent-text`) |

## 2. Límites

**Fijos:**

- **Stack:** Next.js 14.2 con `output: 'export'`, Tailwind 3, lucide-react y framer-motion (ya instalado). Sin CMS, sin backend nuevo y sin migrar a otro framework esta semana.
- **Dependencias:** no agregar dependencias de ejecución. Las fuentes, con `next/font/google`: como máximo dos familias más JetBrains Mono para el logo.
- **No tocar** `backend/`, `app/diagnostico/page.tsx` ni `app/diagnostico/resultado/page.tsx`.
- **`/diagnostico`:** se permite crear `app/diagnostico/layout.tsx` solo para (a) `robots: { index: false }` y (b) un contenedor que conserve su fondo oscuro si el tema claro lo rompe. Verificar que el test siga funcionando de punta a punta en la vista previa.
- **Rendimiento y accesibilidad:** Lighthouse móvil de 90 o más en rendimiento y 100 en accesibilidad y SEO. Sin desplazamiento horizontal a 375 px. Contraste AA. Foco visible, un solo h1, enlace para saltar al contenido y respeto de `prefers-reduced-motion`.
- **Componentes de servidor por defecto.** Componentes de cliente solo para interacción o animación, y lo más pequeños posible.
- **Git:** trabajar solo en `sint_v4`, con commits pequeños, en español y con el formato `tipo(ámbito): descripción`. Nunca hacer push a `master`. El paso a producción es un pull request que José aprueba.

**Flexibles (a criterio de Fable):** orden de las secciones, tipografía, paleta exacta, estilo de los ejemplos, uso de framer-motion y si `ui.tsx` se divide en varios archivos.

## 3. Entorno

- **Equipo:** Linux Mint. Carpeta de trabajo: `~/Escritorio/SINT/SINT-v4`, un worktree de git con el branch `sint_v4`. `node_modules` ya está instalado.
- **Node 22** en `~/.local/bin`. Si `node` no aparece: `export PATH=$HOME/.local/bin:$PATH`.
- **git y gh** autenticados como JoseSebaLM.
- **Revisar:** `npm run lint` · `npm run build` · `npx serve out` o `python3 -m http.server -d out`. Para Lighthouse realista, servir con compresión (`npx serve` la tiene).
- **Vista previa:** cada push a `sint_v4` publica `https://sint-v4.sint-web.pages.dev` en Cloudflare Pages, en uno o dos minutos. José revisa ahí.
- **Las otras carpetas:** `~/Escritorio/SINT` es la copia antigua de `master`, con finales de línea de Windows, y `~/Escritorio/SINT/SINT-v3-prototipo` es el prototipo. No trabajar en ellas.

## 4. División del trabajo

**Fable 5.2 (esfuerzo alto) planifica y no escribe código de la aplicación.** Entrega:

1. `specs/sint-v4/design.md`: el sistema visual en una página. Tokens de color claro (y oscuro, si se mantiene), escala tipográfica, espaciado, radios, sombras, botones, tarjetas, marco de ejemplo, reglas de movimiento y composición de cada sección en celular y escritorio. Debe ser concreto: valores, no adjetivos.
2. `specs/sint-v4/tasks.md`: tareas ordenadas para Opus 5.5, cada una con objetivo, archivos, criterios de aceptación y cómo verificarla. Separar **P0** (necesario para publicar esta semana) de **P1** (después). Cada tarea debe terminar en un commit.
3. Ajustes a `content.md` o a `spec.md` si encuentra algo que no conviene. Lo que cambie la oferta va a "Confirmaciones pendientes" para José; Fable no lo decide solo.

**Opus 5.5 (esfuerzo medio) ejecuta `tasks.md`** en orden, una tarea por commit, verifica lint y build en cada una, hace push al final de cada bloque y deja capturas a 375 y 1280 px.

## 5. Sugerencia de tareas (Fable la reemplaza)

- **P0:**
  1. Tokens y tema.
  2. Textos y `features` en `home.ts` y `schema.ts`.
  3. Encabezado y portada con visual de producto.
  4. Evidencia y *Por dónde partimos*.
  5. Servicios y los tres ejemplos.
  6. Por qué Sint, cómo trabajamos y equipo.
  7. Preguntas, cierre y pie.
  8. `/diagnostico` con `noindex` y fuera del menú.
  9. Imagen para redes y metadatos.
  10. Revisión final: lint, build, Lighthouse, 375 y 1280 px, búsqueda de "Software Intelligence" y de precios.
- **P1:** animaciones más elaboradas de los ejemplos, bloque Alumbra.ai al confirmarse, SENCE al firmarse, `sameAs` de LinkedIn.
