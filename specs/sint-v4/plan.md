# sint.cl v4 · Plan técnico

Lo que ya existe, lo que hay que cuidar y una propuesta de cómo dividir el trabajo. **Fable manda en la partida:** puede cambiar este plan, la tecnología y la forma de trabajo si lo justifica. Solo las reglas de §2 se consultan antes con José.

## 1. Punto de partida: el branch `sint_v4`

Sale de `sint_v3-prototipo`, que ya funciona: lint y build limpios, Lighthouse móvil 95/100/100/100 servido con compresión. Vista previa del prototipo: `https://sint-v3-prototipo.sint-web.pages.dev`.

| Pieza | Archivo | Qué hay que hacer en v4 |
| --- | --- | --- |
| Textos | `app/content/home.ts` | Reescribir según `content.md`: 4 líneas, 12 servicios, SENCE activo |
| JSON-LD | `app/content/schema.ts` | Se deriva de `home.ts`; ajustar según [SCHEMA] |
| Secciones | `app/sections/*.tsx` | Rediseñar. Agregar *Por qué Sint*. *Por dónde partimos* se integra en la línea Diagnóstico |
| Ejemplos | `app/components/ejemplos/` | Pulir Informe y Conversación. Reemplazar Integración por el ejemplo de buscador con IA y métricas |
| Botones y marcos | `app/components/ui.tsx` | Rediseñar |
| Metadatos | `app/layout.tsx`, `app/page.tsx` | Actualizar textos (ver [META]) |
| Sitemap y robots | `app/sitemap.ts`, `app/robots.ts` | Sin cambios |
| Imagen para redes | `public/og-image.png` | Rehacer con el nuevo estilo (1200 × 630) |
| Fotos del equipo | `public/images/equipo/*.webp` | Sin cambios |
| Foto de portada | `public/images/hero-*.webp` | Eliminar si la portada pasa a ser visual de producto |
| Colores | `tailwind.config.ts`, `app/globals.css` | Hoy hay colores fijos en los componentes. Pasarlos a tokens semánticos, decida Fable tema claro u oscuro |
| `/diagnostico` | `app/diagnostico/` | **Retirar** (ver §3) |

## 2. Reglas que se consultan con José

1. **Producción:** nunca hacer push a `master`, que publica sint.cl. El paso a producción es un pull request que José aprueba sobre la vista previa.
2. **Oferta:** agregar, quitar o redefinir servicios, o afirmar experiencia, clientes o cifras que no estén en `spec.md`.
3. **Infraestructura con costo o datos:** apagar la app de Fly.io, borrar `backend/` o cambiar el dominio y la cuenta de Cloudflare.

Todo lo demás es decisión de Fable: diseño, tema claro u oscuro, estructura, textos, dependencias, tecnología y orden de trabajo.

**Recomendaciones** (Fable puede descartarlas):

- Mantener Next.js 14 con exportación estática para publicar esta semana. Carlos conoce Astro, pero migrar ahora retrasa el lanzamiento.
- Componentes de servidor por defecto, y de cliente solo para interacción o animación.
- Lighthouse móvil de 90 o más en rendimiento y 100 en accesibilidad y SEO. Sin desplazamiento horizontal a 375 px. Contraste AA, foco visible, un solo h1, enlace para saltar al contenido y respeto de `prefers-reduced-motion`.
- Commits pequeños, en español, con el formato `tipo(ámbito): descripción`.

## 3. Retirar `/diagnostico`

- Borrar `app/diagnostico/` (página y resultado).
- Crear `public/_redirects` con una redirección 301 de `/diagnostico` y `/diagnostico/*` a `/`. Cloudflare Pages lo lee desde `out/`.
- Quitar dependencias que queden sin uso (probablemente `framer-motion`) y referencias a `NEXT_PUBLIC_BACKEND_URL` en el frontend.
- **No tocar `backend/`.** Queda sin uso hasta que José y Carlos decidan (ver `spec.md` §7).

## 4. Entorno

- **Equipo:** Linux Mint. Carpeta de trabajo: `~/Escritorio/SINT/SINT-v4`, un worktree de git con el branch `sint_v4`. `node_modules` ya está instalado.
- **Node 22** en `~/.local/bin`. Si `node` no aparece: `export PATH=$HOME/.local/bin:$PATH`.
- **git y gh** autenticados como JoseSebaLM.
- **Revisar:** `npm run lint` · `npm run build` · `npx serve out`. Para un Lighthouse realista, servir con compresión (`npx serve` la tiene).
- **Vista previa:** cada push a `sint_v4` publica `https://sint-v4.sint-web.pages.dev` en Cloudflare Pages, en uno o dos minutos. José revisa ahí.
- **Las otras carpetas:** `~/Escritorio/SINT` es la copia antigua de `master`, con finales de línea de Windows, y `~/Escritorio/SINT/SINT-v3-prototipo` es el prototipo. No trabajar en ellas. Como esta carpeta está dentro de `SINT/`, `.eslintrc.json` lleva `"root": true` para no heredar la configuración de arriba.

## 5. División del trabajo sugerida

Fable decide si la usa. La propuesta de José es:

- **Fable 5.2 (esfuerzo alto)** investiga, diagnostica y planifica. Entrega:
  - `specs/sint-v4/design.md`: el sistema visual en valores concretos (tokens, escala tipográfica, espaciado, radios, sombras, componentes, movimiento y composición de cada sección en celular y escritorio).
  - `specs/sint-v4/tasks.md`: tareas ordenadas, cada una con objetivo, archivos, criterios de aceptación y forma de verificarla. Separadas en **P0** (para publicar esta semana) y **P1** (después).

  Puede escribir código cuando le resulte más eficiente que describirlo, por ejemplo los tokens o un componente de referencia.
- **Opus 5.5 (esfuerzo medio)** ejecuta `tasks.md`: una tarea por commit, lint y build limpios en cada una, push al final de cada bloque y capturas a 375 y 1280 px.

## 6. Ejemplo de tareas (Fable lo reemplaza)

- **P0:**
  1. Tema y tokens.
  2. Textos en `home.ts` y `schema.ts`.
  3. Retirar `/diagnostico`.
  4. Encabezado y portada.
  5. Evidencia.
  6. Las 4 líneas de servicio con sus ejemplos.
  7. Por qué Sint, cómo trabajamos y equipo.
  8. Preguntas, cierre y pie.
  9. Imagen para redes y metadatos.
  10. Revisión final: lint, build, Lighthouse, 375 y 1280 px, y búsqueda de "Software Intelligence", "Alumbra" y precios.
- **P1:** animaciones más elaboradas de los ejemplos y `sameAs` de LinkedIn.
