# SINT - Digital Agency Website

## Project Overview

SINT (Software Intelligence) is a modern digital agency landing page built with Next.js 14 and React. The website showcases the agency's unique approach: transforming organizational diagnostics into custom software solutions. The site features a sophisticated dark-themed UI with smooth animations, terminal-inspired aesthetics, and a strong focus on converting visitors through a diagnostic funnel.

The core value proposition is captured in the tagline: "Primero entendemos tu negocio. Después escribimos el código" (First we understand your business. Then we write the code).

### Key Features

- **Dark Theme UI**: Deep zinc background (`#09090B`) with off-white text and vibrant accent colors
- **Terminal Aesthetic**: JetBrains Mono font for logo and code-like elements
- **Smooth Animations**: Framer Motion for scroll-triggered and entrance animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Diagnostic Funnel**: Primary CTA drives users to `/diagnostico` route
- **Single Page Layout**: Sections include Navbar, Hero, Pipeline, Manifesto, Services, Targets, Diferenciacion, Equipo, and Footer

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first styling |
| Framer Motion | 12.33.0 | Animation library |
| Lucide React | 0.577.0 | Icon library |
| ESLint | 8.x | Code linting |

### Fonts

- **Inter**: Primary font for body text and headings (loaded via `next/font/google`)
- **JetBrains Mono**: Monospace font for logo and terminal-style elements (loaded via `next/font/google`)
- **Geist**: Local font files available in `app/fonts/` (VF.woff variants - not currently used)

## Project Structure

```
SINT/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Logo.tsx         # Animated logo with blinking cursor
│   │   └── WhatsAppFloat.tsx # Floating WhatsApp button (currently disabled)
│   ├── sections/            # Page section components
│   │   ├── Navbar.tsx       # Sticky navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section with CTAs and value proposition
│   │   ├── Pipeline.tsx     # 3-step workflow (Diagnóstico/Estrategia/Implementación)
│   │   ├── Manifesto.tsx    # Company philosophy and mission statement
│   │   ├── Services.tsx     # Service offerings with pricing cards
│   │   ├── Targets.tsx      # Target industries and pain points
│   │   ├── Diferenciacion.tsx # Competitive differentiation section
│   │   ├── Equipo.tsx       # Team member profiles with photos
│   │   └── Footer.tsx       # Footer with navigation and copyright
│   ├── fonts/               # Local font files (GeistVF.woff, GeistMonoVF.woff)
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and font configuration
│   └── page.tsx             # Main page composing all sections
├── public/                  # Static assets
│   ├── Carlos Martínez Sint.png
│   └── José Latorre Sint.png
├── .eslintrc.json          # ESLint configuration (extends Next.js presets)
├── next.config.js          # Next.js configuration (strict mode enabled)
├── tailwind.config.ts      # Tailwind CSS with custom colors
├── tsconfig.json           # TypeScript configuration (strict mode)
├── postcss.config.mjs      # PostCSS configuration for Tailwind
├── package.json            # Dependencies and scripts
└── AGENTS.md               # This file
```

## Build and Development Commands

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
| `accent-cyan-ray` | `#06B6D4` | Cyan accent (defined but minimally used) |
| `ds-amber` | `#F59E0B` | Amber accent (defined but minimally used) |

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
- Duration: 0.5s - 0.6s for most transitions
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

## Section Details

### Navbar (`app/sections/Navbar.tsx`)
- Fixed positioning with blur backdrop on scroll
- Logo (animated) on left with click-to-scroll-to-top
- Navigation links: Pipeline, Servicios, Equipo, Diagnóstico
- CTA button: "Iniciar Diagnóstico →"
- Mobile hamburger menu with full-screen overlay

### Hero (`app/sections/Hero.tsx`)
- Badge: "sint · Software Intelligence"
- H1: "Primero entendemos tu negocio. Después escribimos el código"
- Value proposition with pain point quote
- Two CTAs: Primary (Diagnóstico) and Secondary (Ver cómo funciona)
- Grain texture background overlay

### Pipeline (`app/sections/Pipeline.tsx`)
- 3-step horizontal workflow visualization
- Steps: Diagnóstico → Estrategia → Implementación
- Gradient connectors between steps (green→purple→orange)
- Cards with icons, titles, descriptions, and badges
- First badge links to `/diagnostico`

### Manifesto (`app/sections/Manifesto.tsx`)
- Company philosophy section
- Explains the problem of "fricción operativa" (operational friction)
- Highlighted closing statement with left border accent

### Services (`app/sections/Services.tsx`)
- 3-column grid of service cards
- Services: Diagnóstico Sint, Diagnóstico Sint Full, Implementación Sint
- Each card: icon, title, description, badge, price, CTA
- Top border accent color per service (green/purple/orange)

### Targets (`app/sections/Targets.tsx`)
- Target industries with pain points
- Industries: Servicios Profesionales, Manufactura, Finanzas, Tecnología, Salud
- List format with industry label, role, and pain point quote
- CTA block at bottom

### Diferenciacion (`app/sections/Diferenciacion.tsx`)
- Competitive comparison section
- Contrasts "La fábrica de software", "La consultora", "El status quo"
- Sint value proposition with CTA

### Equipo (`app/sections/Equipo.tsx`)
- Team member profiles
- Photos, names, roles, bios, LinkedIn links
- Circular image containers with fallback initials

### Footer (`app/sections/Footer.tsx`)
- Three-column layout: Logo+tagline, Navigation, CTA
- Smooth scroll navigation to sections
- Copyright and privacy notice

## Component Library

### Logo (`app/components/Logo.tsx`)
- Props: `className?: string`, `animated?: boolean` (default: true)
- Displays "sint_" with blinking cursor in brand orange
- Uses JetBrains Mono font

### WhatsAppFloat (`app/components/WhatsAppFloat.tsx`)
- Currently disabled in page.tsx
- Fixed position floating button
- Links to WhatsApp with pre-filled message

## Navigation Structure

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/diagnostico` | External diagnostic tool (referenced but not implemented in this codebase) |

**Anchor Links:**
- `#inicio` - Hero section
- `#pipeline` - Pipeline section
- `#servicios` - Services section
- `#equipo` - Team section

## Deployment

This is a static Next.js site optimized for deployment on Vercel:

```bash
# Build command
npm run build

# Output: .next/ directory
```

The project can also be exported as static HTML by modifying `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  distDir: 'dist',
}
```

## Testing

**No testing framework** is currently configured. The project relies on:
- TypeScript strict mode for type checking
- ESLint for code quality
- Manual testing during development

To add testing, consider:
- **Jest** with React Testing Library for unit tests
- **Playwright** or **Cypress** for E2E tests

## Development Notes

- **No API routes** - this is a purely static marketing site
- **No state management** - components use local state only
- **No backend** - the `/diagnostico` route is external (not implemented in this codebase)
- **Image optimization**: Uses Next.js Image component for team photos
- **SEO**: Basic metadata configured in `layout.tsx`
- **WhatsApp integration**: Currently disabled (component exists but is commented out)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Considerations

- No sensitive environment variables currently used
- No user authentication or data storage
- No API keys or secrets in the codebase
- External link to `/diagnostico` assumes separate secure implementation
