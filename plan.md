# ABC (CrowdVox) — AI Research Platform Website Plan

## 1. Recommended Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 15 (App Router) | SSR/SSG hybrid, React Server Components, excellent SEO, API routes for future integrations |
| **Language** | TypeScript | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS 4 + CSS Variables | Utility-first, design token support via CSS custom properties, dark/light hybrid |
| **Animations** | Framer Motion (Motion) + GSAP ScrollTrigger | Motion for UI transitions/micro-interactions, GSAP for scroll-driven narrative animations |
| **UI Components** | Custom components (no shadcn — too "dashboard-y") | Bespoke design system matching premium AI aesthetic |
| **Charts/Data Viz** | Recharts + custom SVG | Lightweight, React-native charting for insight visualizations |
| **Icons** | Lucide React | Clean, consistent icon set |
| **Fonts** | Inter (body) + Space Grotesk (headings) | Modern, techy but readable. Loaded via `next/font` |
| **Deployment** | Vercel | Zero-config Next.js hosting, edge functions, analytics |
| **Linting** | ESLint + Prettier | Code consistency |

### Why Next.js over Astro?

This site needs interactive elements (research console demo, polling simulations, dynamic insight cards) that go beyond static content. Next.js provides the full React ecosystem needed for these interactive experiences while still delivering excellent static performance for marketing pages.

---

## 2. File Structure

```
CV_website2/
├── public/
│   ├── images/
│   │   ├── logo.svg              # CrowdVox logo
│   │   ├── hero/                  # Hero section assets
│   │   ├── icons/                 # Custom icons
│   │   └── og/                    # Open Graph images
│   └── fonts/                     # Self-hosted font files (if needed)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (nav + footer)
│   │   ├── page.tsx               # Homepage
│   │   ├── platform/
│   │   │   ├── page.tsx           # Platform overview
│   │   │   ├── insight-engine/
│   │   │   │   └── page.tsx
│   │   │   ├── poll-simulation/
│   │   │   │   └── page.tsx
│   │   │   ├── ai-analysis/
│   │   │   │   └── page.tsx
│   │   │   └── data-intelligence/
│   │   │       └── page.tsx
│   │   ├── solutions/
│   │   │   ├── page.tsx           # Solutions overview
│   │   │   ├── political-campaigns/
│   │   │   │   └── page.tsx
│   │   │   ├── marketing-research/
│   │   │   │   └── page.tsx
│   │   │   ├── higher-education/
│   │   │   │   └── page.tsx
│   │   │   └── public-policy/
│   │   │       └── page.tsx
│   │   ├── methodology/
│   │   │   └── page.tsx
│   │   ├── gen-z/
│   │   │   └── page.tsx           # Gen Z Intelligence
│   │   ├── insights/
│   │   │   ├── page.tsx           # Insights Hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx       # Individual article/report
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx           # Contact / Book Demo
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Container.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── InsightCard.tsx
│   │   │   ├── PollVisualizer.tsx
│   │   │   ├── ResearchConsole.tsx
│   │   │   ├── GlowOrb.tsx        # Ambient AI glow effect
│   │   │   ├── DataGrid.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Differentiators.tsx
│   │   │   ├── InsightDemo.tsx
│   │   │   ├── UseCases.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── TrustBar.tsx
│   │   └── shared/
│   │       ├── SectionHeader.tsx
│   │       ├── GradientText.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── lib/
│   │   ├── constants.ts           # Site-wide constants, nav links
│   │   ├── animations.ts          # Shared animation variants
│   │   └── utils.ts               # Utility functions (cn, etc.)
│   │
│   ├── styles/
│   │   └── globals.css            # Tailwind directives, CSS variables, custom styles
│   │
│   └── types/
│       └── index.ts               # Shared TypeScript types
│
├── .env.local                     # Environment variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── CLAUDE.md
└── plan.md
```

---

## 3. Design Considerations

### Color System

```
Primary CTA:     #FF7933 (warm orange — action, energy)
Accent:          #591464 (deep purple — intelligence, depth)
Background Dark: #0A0A0F (near-black — premium feel)
Background Light:#F8F7F5 (warm off-white)
Surface Dark:    #141420 (card backgrounds in dark sections)
Surface Light:   #FFFFFF
Text Primary:    #1A1A2E (dark mode: #E8E6F0)
Text Secondary:  #6B6B80 (dark mode: #9B99A9)
Success:         #22C55E
Data Blue:       #3B82F6
Data Teal:       #14B8A6
```

### Typography Scale

```
Hero:       72px / 80px  — Space Grotesk Bold
H1:         56px / 64px  — Space Grotesk Bold
H2:         40px / 48px  — Space Grotesk Semibold
H3:         28px / 36px  — Space Grotesk Medium
H4:         20px / 28px  — Inter Semibold
Body:       16px / 26px  — Inter Regular
Body Small: 14px / 22px  — Inter Regular
Caption:    12px / 16px  — Inter Medium (uppercase tracking)
```

### Dark + Light Hybrid Strategy

The homepage uses a **section-based** dark/light approach:
- **Hero**: Dark background (deep navy/black) with glowing elements
- **How It Works**: Light background for clarity
- **Research Console Demo**: Dark (feels like a real console)
- **Use Cases**: Light
- **CTA**: Dark with gradient accents
- Inner pages default to light with dark sections for emphasis

### Key Visual Elements

1. **AI Research Console** — A mock terminal/console UI showing a user typing a question and receiving a structured insight response with polling data. This is the hero visual.

2. **Insight Cards** — Floating cards with mini-charts, sentiment indicators, and narrative snippets. They appear as if "generated" by the AI.

3. **Glowing Orb / Pulse** — Subtle ambient animation representing AI processing. Uses radial gradients with the orange/purple brand colors.

4. **Data Flow Lines** — Thin animated lines connecting data points, suggesting the flow of information through the platform.

5. **Poll Visualization** — Custom donut/bar charts with animated fill, showing simulated polling results.

### Responsive Strategy

- **Desktop** (1280px+): Full layout, side-by-side sections, research console at full width
- **Tablet** (768-1279px): Stacked layouts, console scaled down
- **Mobile** (< 768px): Single column, simplified console, hamburger nav

---

## 4. Step-by-Step Implementation Plan

### Phase 1: Project Setup & Foundation (Steps 1-3)

**Step 1: Initialize Project**
- `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- Install dependencies: `framer-motion`, `gsap`, `recharts`, `lucide-react`
- Configure `next.config.ts`, `tailwind.config.ts` with custom theme
- Set up fonts with `next/font`
- Create CSS variables in `globals.css`

**Step 2: Design Tokens & Base Styles**
- Define color palette, spacing, typography in Tailwind config
- Create `globals.css` with dark/light section variables
- Build utility classes for gradients, glows, glassmorphism

**Step 3: Core Layout Components**
- `Navbar` — Sticky, glassmorphic on scroll, mega-menu for Platform/Solutions
- `Footer` — Multi-column with newsletter signup
- `Container` — Max-width wrapper with responsive padding
- `MobileMenu` — Slide-out drawer with animations
- Shared components: `Button`, `Badge`, `SectionHeader`, `GradientText`

### Phase 2: Homepage (Steps 4-8)

**Step 4: Hero Section**
- Dark background with subtle grid pattern
- Animated headline with `GradientText`
- "Ask ABC" research console mock-up (typing animation)
- CTA button with hover glow effect
- Floating insight card previews

**Step 5: How It Works**
- Three-step flow: Ask → Simulate Poll → Get Insights
- Each step has an icon, title, description
- Animated connection lines between steps
- Light background section

**Step 6: Key Differentiators + Insight Demo**
- Side-by-side: text left, interactive demo right
- Live-updating poll visualization (animated)
- Narrative insight text appearing as if AI-generated
- Differentiator cards with icons

**Step 7: Use Cases Grid**
- 4 industry cards (Political, Marketing, Education, Policy)
- Each card: icon, title, brief description, "Learn more" link
- Hover: subtle lift + border glow in brand color
- Light background

**Step 8: CTA + Trust Bar**
- Dark gradient section with strong CTA
- "Run your first poll simulation" button
- Trust logos / partner badges
- Social proof metrics (animated counters)

### Phase 3: Inner Pages (Steps 9-14)

**Step 9: Platform Pages**
- Platform overview with feature grid
- Individual pages for: Insight Engine, Poll Simulation, AI Analysis, Data Intelligence
- Each page: hero, feature breakdown, demo visual, CTA

**Step 10: Solutions Pages**
- Industry-specific landing pages
- Tailored messaging and use case examples
- Relevant insight card examples per industry

**Step 11: Methodology Page**
- Academic credibility section
- Three pillars: Behavioral Neuroscience, Academic Standards, AI+Polling Hybrid
- Visual timeline of methodology process
- Trust indicators (university partnerships, publications)

**Step 12: Gen Z Intelligence Page**
- Trend-focused design, slightly more dynamic
- Data visualizations for Gen Z trends
- Cultural insight cards
- Behavioral analysis sections

**Step 13: Insights Hub**
- Grid of articles/reports/case studies
- Filter by type (Report, Case Study, Poll Analysis, Article)
- Each card: thumbnail, category badge, title, excerpt, date
- Placeholder for dynamic content

**Step 14: About, Pricing, Contact**
- About: Mission, team grid, story timeline
- Pricing: 3-tier card layout with feature comparison
- Contact: Form + "Book a Demo" CTA with calendar embed placeholder

### Phase 4: Polish & Optimization (Steps 15-17)

**Step 15: Animations & Interactions**
- GSAP ScrollTrigger for scroll-based reveals
- Framer Motion for component transitions
- Typing animation for research console
- Number counting animations for metrics
- Hover states on all interactive elements

**Step 16: SEO & Performance**
- Metadata for all pages (title, description, OG images)
- Structured data (JSON-LD) for organization
- Image optimization with `next/image`
- Lazy loading for below-fold sections
- Lighthouse audit — target 95+ on all metrics

**Step 17: Final QA**
- Cross-browser testing (Chrome, Safari, Firefox, Edge)
- Responsive testing at all breakpoints
- Accessibility audit (WCAG 2.1 AA)
- Link verification
- Form validation testing

---

## 5. Sitemap

```
/                           Homepage
├── /platform               Platform Overview
│   ├── /insight-engine      Insight Engine
│   ├── /poll-simulation     Poll Simulation
│   ├── /ai-analysis         AI Analysis
│   └── /data-intelligence   Data Intelligence
├── /solutions              Solutions Overview
│   ├── /political-campaigns Political Campaigns
│   ├── /marketing-research  Marketing & Brand Research
│   ├── /higher-education    Higher Education
│   └── /public-policy       Public Policy & Advocacy
├── /methodology            Methodology
├── /gen-z                  Gen Z Intelligence
├── /insights               Insights Hub
│   └── /[slug]             Individual Article/Report
├── /about                  About Us
├── /pricing                Pricing
└── /contact                Contact / Book Demo
```

---

## 6. Homepage Wireframe Structure

```
┌─────────────────────────────────────────────────────┐
│  NAVBAR  [Logo]  Platform  Solutions  Methodology   │
│          Gen Z   Insights  About     [Book Demo]    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ████████████████████████████████  ┌──────────────┐ │
│  ██ AI-Powered Polling         ██  │ ╔══════════╗ │ │
│  ██ Insights in Seconds        ██  │ ║ Ask ABC  ║ │ │
│  ██                            ██  │ ║ > What do║ │ │
│  ██ [Run a Poll Simulation]    ██  │ ║ Americans║ │ │
│  ████████████████████████████████  │ ║ think... ║ │ │
│                                    │ ╚══════════╝ │ │
│          HERO (dark bg)            └──────────────┘ │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│         HOW IT WORKS (light bg)                     │
│                                                     │
│   ┌─────────┐    ┌─────────┐    ┌─────────┐        │
│   │  1. Ask  │───▶│2.Simulate───▶│3.Insights│       │
│   │ Question │    │  Poll   │    │  Report  │       │
│   └─────────┘    └─────────┘    └─────────┘        │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  DIFFERENTIATORS + INSIGHT DEMO (dark bg)           │
│                                                     │
│  ┌─────────────────┐  ┌──────────────────────┐     │
│  │ Why ABC?         │  │ [Live Insight Demo]  │     │
│  │ • Real-time AI   │  │  ┌────────────────┐  │     │
│  │ • Story-driven   │  │  │ 67% Support ██ │  │     │
│  │ • Science-backed │  │  │ 23% Oppose  ██ │  │     │
│  │ • Instant results│  │  │ 10% Unsure  █  │  │     │
│  └─────────────────┘  │  └────────────────┘  │     │
│                        └──────────────────────┘     │
├─────────────────────────────────────────────────────┤
│                                                     │
│         USE CASES (light bg)                        │
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐ │
│  │Political │ │Marketing │ │Education │ │ Policy │ │
│  │Campaigns │ │Research  │ │          │ │        │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────┘ │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  CTA + TRUST (dark gradient bg)                     │
│                                                     │
│     Ready to understand public opinion?              │
│     [Run Your First Poll Simulation]                │
│                                                     │
│     Used by 500+ organizations worldwide            │
│     [logo] [logo] [logo] [logo] [logo]              │
│                                                     │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
│  [Logo]  Platform | Solutions | Resources | Company │
│          Newsletter signup    | Social links        │
└─────────────────────────────────────────────────────┘
```

---

## 7. Design Direction for Visuals & Interactions

### Visual Language
- **Glassmorphism** on cards and surfaces (frosted glass, subtle borders)
- **Gradient meshes** as background elements (orange ↔ purple)
- **Dot grid patterns** on dark backgrounds (suggests data/precision)
- **Soft shadows** with colored tints (not plain gray)
- **Rounded corners** (12-16px) on cards and buttons

### Interaction Patterns
- **Scroll-triggered reveals** — Sections fade up + slide in as they enter viewport
- **Typing animation** — Research console shows query being typed character-by-character
- **Counter animations** — Numbers count up when metrics enter viewport
- **Hover parallax** — Cards tilt slightly on mouse move (subtle 3D)
- **Magnetic buttons** — CTA buttons subtly follow cursor on hover
- **Progress indicators** — As user scrolls, a subtle progress line shows page position

### Motion Principles
- Animations should feel **intelligent and purposeful**, not playful
- Timing: 300-500ms for UI transitions, 800-1200ms for reveals
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for most animations (smooth deceleration)
- Stagger children by 50-100ms for list/grid reveals
- Never animate purely for decoration — every motion should guide attention
