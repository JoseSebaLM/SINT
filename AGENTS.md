# SINT - Digital Agency Website

## Project Overview

SINT (Software Intelligence) is a modern digital agency landing page with an integrated diagnostic tool. The project consists of a Next.js 14 frontend with a Python/FastAPI backend for processing diagnostic assessments.

The core value proposition is captured in the tagline: "Primero entendemos tu negocio. Después escribimos el código" (First we understand your business. Then we write the code).

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                │
│                     Next.js 14 (React)                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │   Landing    │  │  Diagnóstico │  │  Resultado (static)  │  │
│  │    Page      │  │   (wizard)   │  │      (success)       │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼ POST /diagnostico
┌─────────────────────────────────────────────────────────────────┐
│                         BACKEND                                 │
│                     Python/FastAPI                              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  • Scoring algorithm (SFS - Sint Friction Score)        │   │
│  │  • Archetype classification (6 types)                   │   │
│  │  • Priority focus identification                        │   │
│  │  • Email reporting (Resend)                             │   │
│  │  • Google Sheets integration                            │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first styling |
| Framer Motion | 12.33.0 | Animation library |
| Lucide React | 0.577.0 | Icon library |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Python | 3.11+ | Runtime |
| FastAPI | 0.111.0 | Web framework |
| Uvicorn | 0.29.0 | ASGI server |
| Pydantic | 2.7.1 | Data validation |
| python-dotenv | 1.0.1 | Environment variables |

### Optional Backend Integrations

| Service | Library | Purpose |
|---------|---------|---------|
| Anthropic Claude | anthropic==0.28.0 | AI-generated diagnostic reports |
| Resend | resend==2.0.0 | Email delivery |
| Google Sheets | gspread==6.1.2 | Data storage |
| Google Auth | google-auth==2.29.0 | Sheets authentication |

### Fonts

- **Inter**: Primary font for body text and headings (loaded via `next/font/google`)
- **JetBrains Mono**: Monospace font for logo and terminal-style elements (loaded via `next/font/google`)
- **Geist**: Local font files available in `app/fonts/` (not currently used)

## Project Structure

```
SINT/
├── app/                           # Next.js App Router
│   ├── components/                # Reusable UI components
│   │   ├── Logo.tsx               # Animated logo with blinking cursor
│   │   └── WhatsAppFloat.tsx      # Floating WhatsApp button (disabled)
│   ├── sections/                  # Page section components
│   │   ├── Navbar.tsx             # Sticky navigation with mobile menu
│   │   ├── Hero.tsx               # Hero section with CTAs
│   │   ├── Pipeline.tsx           # 3-step workflow visualization
│   │   ├── Manifesto.tsx          # Company philosophy
│   │   ├── Services.tsx           # Service offerings with pricing
│   │   ├── Targets.tsx            # Target industries
│   │   ├── Diferenciacion.tsx     # Competitive differentiation
│   │   ├── Equipo.tsx             # Team member profiles
│   │   └── Footer.tsx             # Footer with navigation
│   ├── diagnostico/               # Diagnostic tool routes
│   │   ├── page.tsx               # Multi-step diagnostic wizard
│   │   └── resultado/
│   │       └── page.tsx           # Success/confirmation page
│   ├── fonts/                     # Local font files
│   ├── globals.css                # Global styles and Tailwind imports
│   ├── layout.tsx                 # Root layout with metadata
│   └── page.tsx                   # Main landing page
├── backend/                       # Python FastAPI backend
│   ├── main.py                    # FastAPI application entry point
│   ├── scoring.py                 # SFS scoring algorithm
│   ├── requirements.txt           # Python dependencies
│   └── .env.example               # Environment variable template
├── public/                        # Static assets
│   ├── Carlos Martínez Sint.png
│   └── José Latorre Sint.png
├── .eslintrc.json                # ESLint configuration
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS with custom colors
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Node.js dependencies
```

## Build and Development Commands

### Frontend

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Backend

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run development server (http://localhost:8000)
uvicorn main:app --reload

# Run production server
uvicorn main:app --host 0.0.0.0 --port 8000
```

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `deep-zinc` | `#09090B` | Background |
| `text-off-white` | `#E5E6EB` | Primary text |
| `text-cool-grey` | `#8A8F98` | Secondary text, eyebrows |
| `brand-flux-orange` | `#FF6B4A` | Primary accent, CTAs, cursor, highlights |
| `accent-terminal-green` | `#2EB886` | Success states, Service 1, Diagnóstico step |
| `accent-synth-purple` | `#A371F7` | Purple accent, Service 2, Estrategia step |
| `accent-cyan-ray` | `#06B6D4` | Cyan accent (defined, minimal use) |
| `ds-amber` | `#F59E0B` | Amber accent (defined, minimal use) |

### Animation Specifications

**Logo Cursor Blink:**
```css
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.2; }
}
/* Duration: 1.2s, infinite */
```

**Framer Motion Patterns:**
- Entrance animations: `initial={{ opacity: 0, y: 20/30 }}` → `animate={{ opacity: 1, y: 0 }}`
- Scroll-triggered: `whileInView` with `viewport={{ once: true }}`
- Stagger delays: `delay: index * 0.1/0.15/0.2`
- Duration: 0.4s - 0.6s for most transitions
- Hover effects: `whileHover={{ scale: 1.05/1.1 }}`

## Code Style Guidelines

### Component Structure

1. **"use client" directive**: Required for components using Framer Motion or browser APIs
2. **TypeScript interfaces**: Define props with explicit types
3. **Return type**: Use `JSX.Element` for function components
4. **SVG icons**: Inline as functional components or from Lucide React

Example pattern:
```tsx
"use client";

import { motion } from "framer-motion";

interface Props {
  // prop definitions
}

export default function ComponentName({ prop }: Props): JSX.Element {
  return (
    // JSX
  );
}
```

### Naming Conventions

- **Files**: PascalCase for components (e.g., `Navbar.tsx`)
- **Components**: PascalCase function names
- **Props interfaces**: PascalCase with `Props` suffix or descriptive names
- **CSS classes**: Tailwind utility classes, kebab-case for custom colors
- **Spanish language**: UI text and content is in Spanish

### Styling Patterns

- Use Tailwind utility classes exclusively
- Custom colors defined in `tailwind.config.ts`
- Responsive breakpoints: `md:` for tablet/desktop
- Glassmorphism: `bg-white/5`, `backdrop-blur-md`, `border-white/10`
- Hover transitions: `hover:scale-105`, `transition-all duration-300`
- Grain texture overlay used in Hero section

## Diagnostic Tool (SFS - Sint Friction Score)

### Assessment Structure

The diagnostic tool collects:
- **Profile questions (P1-P3)**: Role, company size, industry
- **Email capture**: For delivering results
- **Diagnostic questions (D1-D8)**: 8 dimensions of operational friction

### Scoring Algorithm

**Response Values:**
- A = 0 points (optimal)
- B = 1 point (moderate friction)
- C = 3 points (critical friction)

**Dimension Weights:**
| Dimension | Weight | Description |
|-----------|--------|-------------|
| D1 | 1.2 | Resiliencia de infraestructura |
| D2 | 1.2 | Experiencia operativa del equipo |
| D3 | 1.0 | Autonomía operativa |
| D4 | 1.4 | Gobernanza tecnológica |
| D5 | 0.8 | Cultura de mejora continua |
| D6 | 1.6 | Alineación sistema-proceso |
| D7 | 1.6 | Dependencia de soluciones alternativas |
| D8 | 1.6 | Visibilidad operativa de gerencia |

**SFS Levels:**
- **Verde** (< 10): Operación con fricciones residuales
- **Ámbar** (10-19): Desalineación operativa activa
- **Rojo** (≥ 20): Fricción sistémica con impacto en resultados

**Archetypes (6 types):**
- ARQ-0: Fricción distribuida
- ARQ-1: Operación en modo manual
- ARQ-2: Decisiones con información parcial
- ARQ-3: Infraestructura con exposición operativa
- ARQ-4: Sistema con resistencia de adopción
- ARQ-5: Gobernanza tecnológica difusa

## Navigation Structure

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/diagnostico` | Diagnostic wizard (11 steps) |
| `/diagnostico/resultado` | Success confirmation page |

**Anchor Links:**
- `#inicio` - Hero section
- `#pipeline` - Pipeline section
- `#servicios` - Services section
- `#equipo` - Team section

## Environment Configuration

### Backend (.env)

```bash
# Required
FRONTEND_URL=http://localhost:3000

# Optional - for enhanced functionality
ANTHROPIC_API_KEY=sk-ant-...
RESEND_API_KEY=re_...
GOOGLE_SHEETS_ID=...
GOOGLE_CREDENTIALS_JSON={"type":"service_account",...}
```

## Testing

**No testing framework** is currently configured. The project relies on:
- TypeScript strict mode for type checking
- ESLint for code quality
- Pydantic for runtime data validation (backend)
- Manual testing during development

To add testing, consider:
- **Jest** with React Testing Library for frontend unit tests
- **Playwright** or **Cypress** for E2E tests
- **pytest** for backend tests

## Deployment

### Frontend

Optimized for deployment on Vercel:

```bash
# Build command
npm run build

# Output: .next/ directory
```

Static export (optional):
```js
// next.config.js
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
```

### Backend

Deploy to any ASGI-compatible platform:

```bash
# Example: Railway, Render, or VPS
uvicorn main:app --host 0.0.0.0 --port $PORT
```

## Security Considerations

- **CORS**: Backend configured to accept requests only from `FRONTEND_URL`
- **Input validation**: Pydantic models validate all incoming data
- **Email validation**: Uses EmailStr for proper email format validation
- **No secrets in frontend**: All API keys and sensitive config are backend-only
- **Environment variables**: Never commit `.env` files (see `.env.example` for templates)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Notes

- **WhatsApp integration**: Currently disabled (component exists but is commented out in page.tsx)
- **Backend integrations**: Email (Resend), AI (Anthropic), and Sheets (Google) are optional
- **Diagnostic payload**: Currently logged to console in frontend; should connect to backend API
- **No database**: Backend is stateless; data persistence through Google Sheets or external storage
