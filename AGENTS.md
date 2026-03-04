# SINT - Digital Agency Website

## Project Overview

SINT (Software Intelligence) is a modern digital agency landing page built with Next.js 14 and React. The website showcases the agency's services, workflow pipeline, and target industries with a sophisticated dark-themed UI featuring smooth animations and a terminal-inspired aesthetic.

### Key Features

- **Dark Theme UI**: Deep zinc background (`#09090B`) with off-white text and vibrant accent colors
- **Terminal Aesthetic**: JetBrains Mono font for logo and code-like elements
- **Smooth Animations**: Framer Motion for scroll-triggered and entrance animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **WhatsApp Integration**: Direct contact via floating button and CTA buttons
- **Single Page Layout**: Sections include Navbar, Hero, Pipeline, Services, Targets, and Footer

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.35 | React framework with App Router |
| React | 18.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.1 | Utility-first styling |
| Framer Motion | 12.33.0 | Animation library |
| ESLint | 8.x | Code linting |

### Fonts

- **Inter**: Primary font for body text and headings (loaded via `next/font/google`)
- **JetBrains Mono**: Monospace font for logo and terminal-style elements (loaded via `next/font/google`)
- **Geist**: Local font files available in `app/fonts/` (VF.woff variants)

## Project Structure

```
SINT/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Logo.tsx         # Animated logo with blinking cursor
│   │   └── WhatsAppFloat.tsx # Floating WhatsApp contact button
│   ├── sections/            # Page section components
│   │   ├── Navbar.tsx       # Sticky navigation bar
│   │   ├── Hero.tsx         # Hero section with CTA
│   │   ├── Pipeline.tsx     # 3-step workflow (Decode/Architect/Deploy)
│   │   ├── Services.tsx     # Service offerings with pricing
│   │   ├── Targets.tsx      # Target industries grid
│   │   └── Footer.tsx       # Footer with contact and copyright
│   ├── fonts/               # Local font files (GeistVF.woff, GeistMonoVF.woff)
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata and font configuration
│   └── page.tsx             # Main page composing all sections
├── public/                  # Static assets
│   ├── Carlos Martínez Sint.jpeg
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
| `text-cool-grey` | `#8A8F98` | Secondary text |
| `brand-flux-orange` | `#FF6B4A` | Primary accent, CTAs, cursor |
| `accent-terminal-green` | `#2EB886` | Success states, Service 1 |
| `accent-synth-purple` | `#A371F7` | Purple accent, Service 2 |
| `accent-cyan-ray` | `#06B6D4` | Cyan accent, Service 3 |

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
4. **SVG icons**: Inline as functional components with consistent viewBox

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
- **Props interfaces**: PascalCase with `Props` suffix
- **CSS classes**: Tailwind utility classes, kebab-case for custom colors

### Styling Patterns

- Use Tailwind utility classes exclusively
- Custom colors defined in `tailwind.config.ts`
- Responsive breakpoints: `md:` for tablet/desktop
- Glassmorphism: `bg-white/5`, `backdrop-blur-md`, `border-white/10`
- Hover transitions: `hover:border-brand-flux-orange`, `transition-all duration-300`

## Section Details

### Navbar (`app/sections/Navbar.tsx`)
- Sticky positioning with blur backdrop
- Logo (animated) on left
- Navigation links: Pipeline, Servicios, Targets
- CTA button: "Iniciar Sprint"

### Hero (`app/sections/Hero.tsx`)
- Badge: "sint — Software Intelligence"
- H1: "Inteligencia Operativa"
- Subtitle describing value proposition
- WhatsApp CTA button

### Pipeline (`app/sections/Pipeline.tsx`)
- 3-step horizontal workflow visualization
- Steps: Decode → Architect → Deploy
- Gradient connectors between steps
- Cards with icons, titles, and descriptions

### Services (`app/sections/Services.tsx`)
- 3-column grid of service cards
- Services: Operational Software, Research & Insights, Knowledge Assets
- Each card: icon, title, description, badge, price
- Top border accent color per service

### Targets (`app/sections/Targets.tsx`)
- 4-column grid (responsive to 2, then 1)
- Target industries: PropTech, Minería & Industria, Agencias, VC & Family Offices
- Cards show: icon, industry, role, pain point

### Footer (`app/sections/Footer.tsx`)
- Logo, WhatsApp CTA, copyright
- Horizontal layout with flexbox

## WhatsApp Integration

Contact number: `+56 9 8779 1156`

Used in:
- Hero section CTA button
- Footer CTA button
- Floating WhatsApp button (fixed position, bottom-right)

URL format:
```
https://wa.me/56987791156?text=Hola%20sint,%20quiero%20iniciar%20un%20sprint
```

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
- **No state management** - components are stateless
- **No backend** - contact is via WhatsApp link only
- **Image optimization**: Uses Next.js Image component where needed
- **SEO**: Basic metadata configured in `layout.tsx`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Considerations

If extending this project:
1. Add contact form with API route for non-WhatsApp inquiries
2. Implement blog/content sections
3. Add case studies/portfolio showcase
4. Internationalization (i18n) for English version
5. Analytics integration (Google Analytics, Plausible)
6. E2E testing with Playwright or Cypress
7. Add unit tests for components

## Security Considerations

- No sensitive environment variables currently used
- WhatsApp number is hardcoded in components
- No user authentication or data storage
- No API keys or secrets in the codebase
