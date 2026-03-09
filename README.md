# SINT — Agencia Digital + Diagnóstico Operativo

**Stack:** Next.js 14 + FastAPI + Claude AI + Resend + Google Sheets
**URL:** https://sint.cl

## Arquitectura de Producción

```
┌─────────────────────────────────────┐
│  Frontend: Cloudflare Pages         │
│  URL: https://sint.cl               │
│  Build: Static export (out/)        │
└──────────────┬──────────────────────┘
               │ POST /diagnostico
               ▼
┌─────────────────────────────────────┐
│  Backend: Fly.io                    │
│  URL: https://sint-backend.fly.dev  │
│  Región: gru (São Paulo)            │
│  Runtime: Docker + Python 3.11      │
└─────────────────────────────────────┘
```

## Desarrollo Local

### Frontend
```bash
npm install
npm run dev          # http://localhost:3000
```

### Backend
```bash
cd backend
python3 -m venv venv && source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload   # http://localhost:8000
```

### Variables de Entorno

**Frontend** — archivo `.env` en la raíz:
```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000   # producción: https://sint-backend.fly.dev
```

**Backend** — archivo `backend/.env` (ver `.env.example`):
```bash
FRONTEND_URL=http://localhost:3000
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
GOOGLE_SHEETS_ID=...
GOOGLE_CREDENTIALS_JSON={...}
CAL_LINK=https://cal.com/...
INTERNAL_EMAIL=hola@sint.cl
```

## Deploy a Producción

### Frontend (Cloudflare Pages)
```bash
NEXT_PUBLIC_BACKEND_URL=https://sint-backend.fly.dev npm run build
CLOUDFLARE_API_TOKEN="<token>" npx wrangler pages deploy out/ --project-name sint --branch main
```

### Backend (Fly.io)
```bash
cd backend
fly deploy                    # Desplegar
fly logs                      # Ver logs
fly secrets set KEY=value     # Configurar secrets
curl https://sint-backend.fly.dev/health   # Verificar
```

**Secrets en Fly.io:** `ANTHROPIC_API_KEY`, `RESEND_API_KEY`, `GOOGLE_SHEETS_ID`, `GOOGLE_CREDENTIALS_JSON`, `CAL_LINK`, `INTERNAL_EMAIL`, `FRONTEND_URL`

## Flujo del Diagnóstico

1. Usuario completa wizard de 11 pasos (3 perfil + 1 email + 8 diagnóstico)
2. Backend calcula SFS (Sint Friction Score) con pesos por dimensión
3. Claude AI genera reporte HTML ejecutivo personalizado
4. Reporte se envía por email (Resend) y se registra en Google Sheets
5. Usuario ve página de confirmación

## Testing

```bash
cd backend
python3 test_scoring.py    # Unit tests del scoring
python3 qa_test.py         # Tests E2E (requiere backend corriendo)
```

## Estructura del Proyecto

```
├── app/                        # Frontend Next.js (App Router)
│   ├── components/             # Logo, WhatsAppFloat
│   ├── sections/               # Navbar, Hero, Pipeline, Services, Equipo, etc.
│   ├── diagnostico/            # Wizard + página resultado
│   ├── layout.tsx              # Layout raíz
│   └── page.tsx                # Landing page
├── backend/                    # API Python/FastAPI
│   ├── main.py                 # App + endpoints + CORS
│   ├── scoring.py              # Algoritmo SFS + arquetipos
│   ├── report_generator.py     # Integración Claude AI
│   ├── email_sender.py         # Envío con Resend
│   ├── sheets_logger.py        # Log en Google Sheets
│   ├── Dockerfile              # Imagen de producción
│   ├── fly.toml                # Config Fly.io
│   └── requirements.txt        # Dependencias Python
├── next.config.js              # Config Next.js (static export)
├── tailwind.config.ts          # Colores custom
└── .gitignore                  # Protege .env y archivos sensibles
```
