# sint.cl v3 · Plan técnico sugerido

Punto de partida para Carlos y Claude Code. Todo es ajustable o reemplazable.

## Lo que hay hoy en el repositorio

- **Stack:** Next.js 14 con exportación estática, Tailwind, framer-motion y lucide-react, desplegado en Cloudflare Pages desde `master`.
- **Secciones actuales** en `app/sections/`: Pipeline, Manifesto, Services, Targets y Diferenciación, que corresponden al posicionamiento anterior.
- **`/diagnostico`** y el backend en Fly.io siguen funcionando. Google indexa `/diagnostico` con el nombre antiguo.
- **Imágenes pesadas:** la foto de portada pesa 7,9 MB, la de José 7,9 MB y la de Carlos 1,6 MB.

## Ideas para la construcción

1. **Texto en un archivo de datos.** Por ejemplo, `app/content/home.ts`, separado de los componentes, para editar textos sin tocar el diseño.
2. **Componentes de servidor por defecto.** Dejar como cliente solo lo interactivo (menú móvil, animaciones), para cargar menos JavaScript.
3. **Ejemplos visuales en código.** Informe, integración y conversación (ver `content.md`), con HTML, CSS o SVG en vez de imágenes.
4. **Imágenes livianas.** WebP o AVIF: unos 250 KB para la portada y 60 KB por foto del equipo.
5. **Accesibilidad.** Idioma `es-CL`, un solo h1, foco visible, enlace para saltar al contenido y respeto de `prefers-reduced-motion`.
6. **SEO técnico.** Metadatos nuevos, JSON-LD (`Organization` y `FAQPage`), `sitemap.ts` y `robots.ts`, y una imagen de 1200 × 630 para redes. Ver `spec.md` §6.

## Probado

- `app/sitemap.ts` y `app/robots.ts` con `export const dynamic = "force-static"` generan `out/sitemap.xml` y `out/robots.txt` con Next 14.2.35 y `output: 'export'` (4 de noviembre de 2026).

## Detalles del repositorio a considerar

- `AGENTS.md` describe un protocolo que publica directo en `master`.
- `backend/__pycache__/` y `desktop.ini` están versionados.
- `app/fonts/` contiene fuentes Geist que el layout actual no usa.
- `/diagnostico` hereda los metadatos del layout raíz. Si se mantiene, conviene darle título y descripción propios.
