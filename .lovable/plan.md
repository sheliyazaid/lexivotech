# LEXIVO TECH — Premium Agency Website Plan

Aapke brand ke liye ek award-worthy, cinematic agency website banaunga. Yeh sirf website nahi, ek **digital experience** hoga.

## 🎨 Design Foundation

- **Colors:** `#d9d7d4` (warm off-white background) + `#000000` (deep black) — luxury monochrome palette with subtle warm undertones
- **Typography:**
  - `Anton` — logo icon ("L" mark)
  - `Norwester` — brand name "LEXIVO TECH" (custom font, will load via CDN/local)
  - `Roboto Condensed` — tagline & body
- **Aesthetic:** Editorial minimalism + brutalist type + cinematic motion. Think Awwwards SOTD meets Tesla launch page.

## 🎬 Cinematic Intro Animation (full-screen, runs once per session)

Sequence built with Framer Motion + custom orchestration:

1. **Logo icon "L"** (Anton, huge) fades in from blur+scale, holds center stage
2. Icon glides to slight left-of-center (not edge — balanced spacing)
3. **"LEXIVO TECH"** (Norwester) reveals letter-by-letter with stagger + clip-path slide
4. **"WE BUILD DIGITAL SOLUTIONS"** (Roboto Condensed) fades up with subtle tracking expansion
5. Entire logo system smoothly **morphs into the navbar position** (FLIP animation)
   - Desktop: icon + brand name + tagline all visible in navbar
   - Mobile: only icon remains, rest fades out elegantly

Background stays minimal `#d9d7d4` with a faint animated grain/grid.

## 🧭 Floating Glassmorphism Navbar

- Floats with backdrop-blur, subtle border, rounded
- Links: Home · Services · Projects · About · Process · Contact
- Magnetic hover effect on links, animated underline
- WhatsApp CTA button (pill, black, with subtle pulse)
- Social icons (Instagram, LinkedIn, X, Behance)
- Mobile: animated hamburger → full-screen overlay menu with staggered link reveal

## 📄 Pages / Routes

Multi-route architecture (TanStack Start, SSR-friendly, SEO-optimized):

- `/` — **Home** (hero + condensed sections + CTAs)
- `/services` — full services detail
- `/projects` — cinematic horizontal-scroll showcase
- `/about` — agency story, vision, mission
- `/process` — interactive timeline
- `/contact` — form + WhatsApp + socials

Each route gets unique SEO meta.

## 🏠 Home Page Sections

1. **Hero** — oversized split typography "WE BUILD / DIGITAL / SOLUTIONS" with mouse-parallax floating chips ("Web", "Branding", "Automation"), custom cursor, magnetic CTA buttons, animated marquee strip below
2. **Services Preview** — 8 cards with hover depth + image reveal
3. **Why Choose Us** — bold numbered statements with scroll-triggered reveals
4. **Featured Projects** — horizontal scroll-jacked showcase with hover image previews
5. **Process Timeline** — interactive step-by-step with progress bar
6. **About Strip** — large editorial type with marquee philosophy quotes
7. **Client Trust + Logo Marquee**
8. **Testimonials** — card stack with smooth swap
9. **Tech Stack** — animated logo grid (React, Next, Node, Figma, etc.)
10. **Social Showcase** — Instagram-style grid
11. **Contact CTA** — full-bleed black section with massive type
12. **Footer** — multi-column with sitemap, socials, WhatsApp, big animated brand name

## ✨ Motion & Interaction Stack

- **Framer Motion** — component animations, layout transitions, intro
- **Lenis** — buttery smooth scroll
- **GSAP + ScrollTrigger** — horizontal project scroll, scroll-pinned sections
- **Custom magnetic cursor** — desktop only
- **Magnetic buttons** — pull toward cursor on hover
- **Scroll-triggered reveals** — text splits, masks, fades throughout
- **Page transitions** — curtain wipe between routes

## 📱 Responsive Strategy

- Mobile: simplified motion (no cursor, lighter parallax), but still cinematic
- Tablet: hybrid layouts
- Desktop / ultra-wide: full experience with constrained max-width on text blocks

## 🛠 Technical Notes

- Custom fonts loaded via `@font-face` (Norwester from CDN/self-hosted) + Google Fonts (Anton, Roboto Condensed)
- Design tokens defined as semantic CSS variables in `src/styles.css` (oklch)
- Reusable components: `MagneticButton`, `SplitText`, `CursorFollower`, `MarqueeStrip`, `ProjectCard`, `ServiceCard`, `IntroSequence`, `FloatingNav`
- All pages SSR with unique `head()` metadata
- `sitemap.xml` + `robots.txt` set up at the end

## ⏱ Build Approach

Given scope, I'll build in this order:
1. Design system + fonts + tokens
2. Intro animation + navbar (the showpiece)
3. Home page with all sections
4. Sub-routes (services, projects, about, process, contact)
5. Polish pass + sitemap/SEO

Yeh ek bada build hai — first version mein home page + intro + navbar production-perfect honge, baaki routes solid foundation ke saath. Phir aap iterate kar sakte ho.

**Approve karein toh start karun?**
