# CLAUDE.md — ABC (CrowdVox) AI Research Platform Website

## Project Overview

This is a premium marketing website for ABC/CrowdVox, an AI-powered polling and insight platform. The site should feel like a **next-generation intelligence platform**, not a traditional SaaS marketing site.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4 with CSS custom properties
- **Animations**: Framer Motion (Motion) for UI, GSAP + ScrollTrigger for scroll effects
- **Charts**: Recharts for data visualizations
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings), Inter (body) via `next/font`
- **Deployment**: Vercel

## Brand Colors

```
Primary CTA:     #FF7933  (orange)
Accent:          #591464  (deep purple)
Dark BG:         #0A0A0F
Light BG:        #F8F7F5
Surface Dark:    #141420
Text Dark:       #1A1A2E
Text Light:      #E8E6F0
Text Secondary:  #6B6B80
```

## Design Principles

- Dark + light **hybrid** sections (alternating per section)
- Glassmorphism on cards, frosted glass nav on scroll
- AI intelligence dashboard aesthetic — dot grids, gradient meshes, glow effects
- Typography: Space Grotesk for headings (bold, techy), Inter for body (readable)
- Animations: purposeful, intelligent (not playful). 300-500ms transitions, smooth easing
- Mobile-first responsive design

## File Structure Convention

- Pages in `src/app/` using Next.js App Router
- Components in `src/components/` organized by: `layout/`, `ui/`, `sections/`, `shared/`
- Constants and utilities in `src/lib/`
- Types in `src/types/`
- Global styles in `src/styles/globals.css`

## Key Components

- `ResearchConsole` — Hero visual showing AI query interface with typing animation
- `InsightCard` — Floating card with mini-chart and narrative snippet
- `PollVisualizer` — Animated chart showing simulated poll results
- `GlowOrb` — Ambient AI glow effect using radial gradients
- `ScrollReveal` — Wrapper for scroll-triggered entrance animations

## Logo

Remote logo URL: `https://crowdvox.ai/images/logo.svg`

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # Run ESLint
```

## Implementation Notes

- Use `next/image` for all images with proper width/height
- All pages need metadata exports for SEO
- Use CSS variables for theming (dark/light sections use data attributes)
- Prefer server components; use `"use client"` only when needed for interactivity
- Keep bundle size lean — code-split heavy animation libs
- Target Lighthouse 95+ on all metrics
- WCAG 2.1 AA accessibility compliance

## Reference

See `plan.md` for the full implementation plan, wireframes, and sitemap.
