# SINT — Sint. Sistemas Inteligentes
**Stack:** Next.js 14 (exportación estática) + Tailwind 3 + lucide-react, en Cloudflare Pages
**URL producción:** https://sint.cl
**Última actualización:** 11 de noviembre de 2026. La página principal v4 está en producción.

> **sint.cl v4.** Antes de tocar la página principal, lee `specs/sint-v4/README.md`.
> Ahí están la oferta vigente, las decisiones de José y las reglas de trabajo. Donde este archivo
> contradiga a `specs/sint-v4/`, manda `specs/sint-v4/`.
> El sitio es una sola página estática: todos los botones llevan a la agenda o a WhatsApp.
> **Ya no hay test en línea:** `/diagnostico` redirige a `/` (`public/_redirects`).

---

## Arquitectura de Producción

```
Cloudflare Pages (proyecto sint-web)
URL: https://sint.cl
Repo: github.com/JoseSebaLM/SINT (branch de producción: master)
Auto-deploy: cada push a master publica sint.cl; cada push a otro branch publica una vista previa
Build command: npm run build
Output directory: out
```

No hay backend ni variables de entorno.

---

## Desarrollo Local

```bash
export PATH=$HOME/.local/bin:$PATH   # si node no aparece
npm install
npm run dev        # http://localhost:3000
npm run lint && npm run build   # ambos limpios antes de cada commit
npx serve out -l 4173           # sitio compilado
```

---

## Protocolo Git (obligatorio)

El equipo de José usa Linux (bash) desde noviembre de 2026; `git` y `gh` están autenticados.

- **`master` es producción:** cada push publica sint.cl. Nunca trabajar ni hacer push directo a `master`.
- Trabajar en un branch (hoy, `sint_v4`), con commits pequeños: `tipo(ámbito): descripción`, en español.
- Cada push a un branch publica una vista previa en Cloudflare Pages: `https://<branch con guiones>.sint-web.pages.dev` (por ejemplo, `sint-v4.sint-web.pages.dev`).
- El paso a `master` es un pull request que José aprueba sobre la vista previa.
- Siempre `git pull` antes de hacer push, y revisar `git diff HEAD` después de cada pull para detectar cambios no autorizados.

Carpetas en el equipo de José: `~/Escritorio/SINT/SINT-v4` (worktree del branch `sint_v4`). `~/Escritorio/SINT` es una copia antigua de `master` con finales de línea de Windows: no usarla para trabajar.

---

## Sistema de Diseño

> **El sistema visual vigente es el de `specs/sint-v4/design.md`** (tema claro; desde el 11 de noviembre de 2026, paleta C "blanco y verde"):
> tokens como variables CSS en `app/globals.css`, expuestos en `tailwind.config.ts`. En los
> componentes no se escriben colores en hexadecimal. La tabla de abajo es la paleta v2, solo historia.

| Token | Hex | Uso |
|-------|-----|-----|
| `deep-zinc` | `#09090B` | Fondo principal |
| `brand-flux-orange` | `#FF6B4A` | Acento primario, CTAs |
| `accent-terminal-green` | `#2EB886` | Estados de éxito, nivel verde DS |
| `accent-synth-purple` | `#A371F7` | Acento secundario |
| `text-off-white` | `#E5E6EB` | Texto primario |
| `text-cool-grey` | `#8A8F98` | Texto secundario |
| `ds-amber` | `#F59E0B` | Nivel ámbar DS |

Fuentes: Inter (cuerpo) · JetBrains Mono (logo, código)

---

## Estructura del Proyecto

```
app/
├── layout.tsx              fuentes, metadatos, themeColor #FFFFFF
├── page.tsx                orden de las secciones + JSON-LD
├── globals.css             tokens y clases de la maqueta
├── icon.svg · favicon.ico · apple-icon.png
├── content/home.ts         textos (se editan aquí, sin tocar los componentes)
├── content/schema.ts       JSON-LD derivado de home.ts
├── components/
│   ├── Logo.tsx
│   ├── ui.tsx              WhatsAppIcon, AgendaButton, WhatsAppButton, SectionHeader, Stage
│   ├── Secuencia.tsx       cliente: activa las animaciones al entrar en pantalla
│   └── ejemplos/           Informe · Programa · Conversacion · Buscador
└── sections/               Navbar · Hero · Evidencia · Servicios · PorQue · Metodo · Equipo · Faq · Cierre · Footer
public/
├── _redirects              /diagnostico → /
├── og-image.png
└── images/equipo/*.webp
specs/sint-v4/              misión, oferta, diseño, tareas y maqueta de referencia
```

---

## Contacto y CTAs

| Canal | Valor |
|-------|-------|
| WhatsApp | https://wa.me/56956303337 |
| Teléfono | tel:+56956303337 |
| Email | jose@sint.cl |
| Cal.com | https://cal.com/jose-latorre/15min |

---

## Backend retirado

Hasta noviembre de 2026 existía un backend (FastAPI en Fly.io, app `sint-backend`) que atendía el
test en línea `/diagnostico`: calculaba un puntaje, generaba un informe con Claude, lo enviaba con
Resend y lo registraba en Google Sheets. Con la v4 el test se retiró y el 11 de noviembre de 2026
José aprobó retirar el backend completo:

- El código salió del repositorio. Sigue en el historial de git: `git show e02d364:backend/main.py`.
- La app de Fly.io, sus claves (Anthropic, Resend) y la variable `NEXT_PUBLIC_BACKEND_URL` de
  Cloudflare se eliminan desde los paneles de cada servicio.
- La planilla de Google Sheets con las respuestas del test se conserva como historia.

---

## Equipo

| Rol | Nombre | GitHub |
|-----|--------|--------|
| Founder / Operador | José (Seba) Latorre | JoseSebaLM |
| Tech Lead | Carlos Martínez | chuchurex |
| Orquestador IA | Claude (Anthropic) | — |

---
