# SINT — Sint. Sistemas Inteligentes
**Stack:** Next.js 14 (exportación estática) + Tailwind 3 + lucide-react, en Cloudflare Pages
**URL producción:** https://sint.cl
**Última actualización:** 10 de noviembre de 2026. La página principal v4 está lista en el branch `sint_v4`, a la espera del visto bueno de José para pasar a `master`.

> **sint.cl v4.** Antes de tocar la página principal, lee `specs/sint-v4/README.md`.
> Ahí están la oferta vigente, las decisiones de José y las reglas de trabajo. Donde este archivo
> contradiga a `specs/sint-v4/`, manda `specs/sint-v4/`.
> El sitio es una sola página: todos los botones llevan a la agenda o a WhatsApp.
> **Ya no hay test en línea:** `/diagnostico` redirige a `/` (`public/_redirects`).
> **El backend no está en uso:** `backend/` y la app de Fly.io quedan sin uso hasta que José y
> Carlos decidan qué hacer con ellos; las secciones de abajo sobre backend son solo historia.

---

## Arquitectura de Producción

```
Frontend: Cloudflare Pages (sint-web)
URL: https://sint.cl
Repo: github.com/JoseSebaLM/SINT (branch: master)
Auto-deploy: activado — cada push a master despliega automáticamente
Build command: npm run build
Output directory: out
Env var: NEXT_PUBLIC_BACKEND_URL=https://sint-backend.fly.dev

Backend: Fly.io
URL: https://sint-backend.fly.dev
Runtime: Docker + Python 3.11
Config: backend/fly.toml
```

---

## Desarrollo Local

### Frontend
```bash
npm install
npm run dev        # http://localhost:3000
```

### Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload  # http://localhost:8000
```

### Variables de entorno

Frontend — archivo `.env.local` en la raíz:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000  # desarrollo
# producción: https://sint-backend.fly.dev
```

Backend — archivo `backend/.env` (ver `backend/.env.example`):
```
FRONTEND_URL=http://localhost:3000
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
GOOGLE_SHEETS_ID=...
GOOGLE_CREDENTIALS_JSON={...}
CAL_LINK=https://cal.com/jose-latorre/15min
INTERNAL_EMAIL=jose@sint.cl
```

---

## Deploy a Producción

### Frontend (Cloudflare Pages — automático)
Cada `git push origin master` dispara un build automático en Cloudflare Pages.
No se requiere ningún comando adicional.

### Backend (Fly.io — manual)
```bash
cd backend
fly deploy
fly logs          # ver logs
fly secrets set KEY=value  # configurar secrets
curl https://sint-backend.fly.dev/health  # verificar
```

Secrets configurados en Fly.io:
`ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `GOOGLE_SHEETS_ID`,
`GOOGLE_CREDENTIALS_JSON`, `CAL_LINK`, `INTERNAL_EMAIL`, `FRONTEND_URL`

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

## Flujo del Diagnóstico Sint (DS)

1. Usuario ve pantalla introductoria en `/diagnostico`
2. Completa wizard de 12 pasos (3 perfil + email + 8 diagnóstico)
3. Backend calcula SFS (Score de Fricción Sociotécnica) con pesos por dimensión
4. Claude claude-sonnet-4-6 genera reporte HTML ejecutivo personalizado
5. Reporte se envía por email vía Resend desde `diagnostico@sint.cl`
6. Datos se registran en Google Sheets
7. Usuario ve página de confirmación en `/diagnostico/resultado`

---

## Modelo Claude

**Modelo en uso:** `claude-sonnet-4-6`
**Archivo:** `backend/report_generator.py`
**Parámetros:** temperature=0.4, max_tokens=1500

> ⚠️ No cambiar el modelo sin autorización explícita de Seba Latorre.
> Este modelo fue validado en producción y es la fuente de verdad.

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
backend/                    sin uso (ver arriba)
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

## Estado de Desarrollo — Sint v2

### ✅ Completado (9 marzo 2026)
- Metadata y SEO: title, description, OpenGraph, Twitter card
- Cloudflare Pages vinculado a GitHub — auto-deploy activo
- Dominio sint.cl apuntando al proyecto sint-web
- Fix botones de agendar en Services.tsx → cal.com/jose-latorre/15min
- WhatsAppFloat activo con número correcto
- Íconos de contacto en footer (tel, WhatsApp, email)
- Pantalla introductoria en /diagnostico antes del formulario
- Sección Diferenciacion rediseñada: tabla comparativa responsive
  - Desktop: 5 columnas (Fábrica · Consultora · Status quo · Sint)
  - Mobile: 3 columnas (etiqueta · Los demás · Sint)
- Modelo claude-sonnet-4-6 confirmado en report_generator.py

### ⏳ Pendiente
- Foto hero: imagen horizontal 1920px+ para background del Hero
  Ruta esperada: public/images/hero-bg.jpg
  Overlay: #09090B al 65% de opacidad

---

## Testing

Página principal: `npm run lint` y `npm run build` limpios antes de cada commit (ver `specs/sint-v4/tasks.md`).

Backend (sin uso, solo historia):

```bash
cd backend
python test_scoring.py   # Unit tests scoring (esperado: ✅ Todos los tests pasaron)
python qa_test.py        # Tests E2E — requiere backend corriendo en localhost:8000
                         # Esperado: 3/3 perfiles OK
```

---

## Equipo

| Rol | Nombre | GitHub |
|-----|--------|--------|
| Founder / Operador | José (Seba) Latorre | JoseSebaLM |
| Tech Lead | Carlos Martínez | chuchurex |
| Orquestador IA | Claude (Anthropic) | — |

---

## Changelog — Sesión de Deploy a Producción (2026-03-09)

Cambios realizados por **Claude Code (Opus 4.6)** para llevar el proyecto a producción.

### Bugs Críticos Corregidos

1. **Modelo Claude inválido** — `report_generator.py:185`
   - Antes: `model="claude-sonnet-4-6"` (no existe en la API)
   - Después: `model="claude-sonnet-4-5-20250929"` (modelo válido)
   - Sin esto, todo el endpoint `/diagnostico` fallaba con error 400

2. **f-string anidado incompatible con Python 3.11** — `report_generator.py:130`
   - Antes: f-string con `"""` dentro de otro f-string con `"""` (SyntaxError en Python 3.11)
   - Después: Sección de alerta extraída a variable `seccion_alerta` antes del f-string
   - Sin esto, el backend no arrancaba

3. **`useRouter` incompatible con static export** — `diagnostico/page.tsx`
   - Antes: `import { useRouter } from "next/navigation"` + `router.push("/diagnostico/resultado")`
   - Después: Import eliminado, reemplazado por `window.location.href = "/diagnostico/resultado"`
   - `useRouter` no funciona con `output: 'export'` porque no hay servidor

4. **`next/image` sin `unoptimized` en static export** — `next.config.js`
   - Antes: Sin config de images
   - Después: `images: { unoptimized: true }`
   - Las imágenes con `fill` en `Equipo.tsx` fallarían sin esta config

### Configuración de Producción

5. **Static export habilitado** — `next.config.js`
   - Agregado: `output: 'export'`
   - Genera directorio `out/` con HTML estático para Cloudflare Pages

6. **CORS actualizado para producción** — `main.py`
   - Antes: Solo aceptaba `FRONTEND_URL` (una sola URL)
   - Después: Acepta `FRONTEND_URL` + `https://sint.cl` + `https://www.sint.cl`

7. **`.gitignore` reescrito** — `.gitignore`
   - La sección backend estaba corrupta (codificada en UTF-16 con bytes nulos)
   - Se reescribió completo. Se agregó `.env` a la raíz (antes solo `.env*.local`)

### Archivos Nuevos (Deploy)

8. **`backend/Dockerfile`** — Imagen de producción
9. **`backend/.dockerignore`** — Exclusiones del build
10. **`backend/fly.toml`** — Configuración Fly.io (gru, 512MB, auto-stop)
