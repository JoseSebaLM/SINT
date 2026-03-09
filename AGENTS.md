# SINT — Agencia Digital + Diagnóstico Operativo
**Stack:** Next.js 14 + FastAPI + Claude AI + Resend + Google Sheets
**URL producción:** https://sint.cl
**Última actualización:** 9 de marzo de 2026 — AGENTS.md sincronizado, producción estable

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

PowerShell no acepta `&&`. Usar `;` entre comandos.

Secuencia estándar para cada cambio:
```bash
cd "c:\Users\josel\OneDrive\Desktop\SINT"; git pull origin master; git add [archivos]; git commit -m "[tipo]: [descripción]"; git push origin master
```

**Regla crítica:** Siempre `git pull` antes de cualquier push.
Después de cada pull, verificar `git diff HEAD` para auditar cambios no autorizados antes de continuar.

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

## Sistema de Diseño (invariable)

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
SINT/
├── app/
│   ├── components/
│   │   ├── Logo.tsx                  # Logo animado con cursor parpadeante
│   │   └── WhatsAppFloat.tsx         # Botón flotante WhatsApp (activo)
│   ├── sections/                     # Secciones de la landing page
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx                  # Hero con grain texture
│   │   ├── Pipeline.tsx              # 3 fases: Diagnóstico · Estrategia · Implementación
│   │   ├── Manifesto.tsx
│   │   ├── Services.tsx              # 3 líneas de servicio — CTAs apuntan a cal.com
│   │   ├── Targets.tsx
│   │   ├── Diferenciacion.tsx        # Tabla comparativa responsive (mobile-first)
│   │   ├── Equipo.tsx
│   │   └── Footer.tsx                # Íconos de contacto: tel, WhatsApp, email
│   ├── diagnostico/
│   │   ├── page.tsx                  # Pantalla intro + wizard 12 pasos
│   │   └── resultado/
│   │       └── page.tsx              # Confirmación post-envío
│   ├── globals.css
│   ├── layout.tsx                    # Metadata, SEO, OpenGraph configurados
│   └── page.tsx                      # Landing page principal
├── backend/
│   ├── main.py                       # FastAPI app, CORS, endpoints
│   ├── scoring.py                    # Motor SFS — 8 dimensiones, 6 arquetipos
│   ├── report_generator.py           # Integración Claude API
│   ├── email_sender.py               # Envío vía Resend + template HTML
│   ├── sheets_logger.py              # Log a Google Sheets
│   ├── test_scoring.py               # Unit tests del scoring
│   ├── qa_test.py                    # Tests E2E (requiere backend corriendo)
│   ├── QA_CHECKLIST.md               # Checklist pre-deploy
│   ├── Dockerfile                    # Imagen de producción
│   ├── fly.toml                      # Config Fly.io
│   └── requirements.txt
├── public/
│   ├── Carlos Martínez Sint.png
│   └── José Latorre Sint.png
│   └── images/                       # ⏳ Pendiente: hero-bg.jpg (foto hero)
├── .env.local                        # Frontend env vars (no commitear)
├── next.config.js                    # output: 'export', unoptimized: true
├── tailwind.config.ts                # Colores custom del sistema de diseño
└── package.json
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
