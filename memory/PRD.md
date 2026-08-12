# HELIXA — Biotech Animated Landing Page

## Original Problem Statement
Task 01 — Design and develop a premium, animation-driven biotechnology landing page (Awwwards Site-of-the-Day level). Original visual identity, not a template. Sections: Hero, About/Innovation, Technology/Research, Capabilities/Services, Statistics/Impact, Final CTA. Requirements: smooth scroll, micro-interactions, scroll-based animations, interactive scientific visual, modern typography, fully responsive, accessible.

## Art Direction — "The Obsidian Lab"
- Dark cinematic theme (#050505) with Fluorescent Lime (#D4FF00) + Bioluminescence Cyan (#00F0FF) accents.
- Typography: Syne (headings), Manrope (body), Space Mono (overlines/mono).
- Sharp-edged (rounded-none) technical grid aesthetic, 1px hairline borders, grain overlay, generous spacing.

## Architecture
- Frontend: React 19 + CRACO + Tailwind. framer-motion (reveals/micro-interactions), lenis (momentum smooth scroll), react-fast-marquee (editorial marquee), custom Canvas 2D animated DNA double-helix (interactive, mouse parallax).
- Backend: FastAPI + MongoDB (default template untouched — frontend-only showcase).
- Components in `/app/frontend/src/components/landing/`: SmoothScroll, DNAHelix, Navbar, Hero, Manifesto, Technology, EditorialMarquee, Capabilities, Impact, FinalCTA, Footer.

## Implemented (2026-06)
- Kinetic Hero: masked line-by-line headline reveal, live rotating DNA-helix canvas with depth shading + glowing nodes + mouse parallax, dual CTAs.
- Glassmorphism sticky nav with mobile menu; anchor links wired to Lenis smoothScroll.
- Manifesto (About/Innovation): numbered chapters (01/02/03) + sticky clipped scientist portrait.
- Technology: asymmetric bento grid with macro imagery + hover treatments.
- Editorial marquee (outlined + solid alternating giant text).
- Capabilities: 6-service technical grid with icon micro-interactions.
- Impact: 4 count-up statistics on scroll-into-view.
- Final CTA with glow + gradient; Footer.
- Accessibility: prefers-reduced-motion disables Lenis/canvas motion & count-ups; data-testid on all interactive/section elements; lazy-loaded images.
- Fully responsive (mobile/tablet/desktop) via Tailwind breakpoints.

## Verification
- Frontend compiles cleanly, no runtime/console errors.
- All remote images return HTTP 200.
- Hero verified via screenshot (all effects rendering). Lower sections verified via clean compile + error-free logs (screenshot tool only returns nav-frame, could not visually capture scrolled sections).

## Backlog
- P1: Working contact/newsletter form with backend persistence.
- P1: Real 3D (react-three-fiber) hero upgrade if heavier visual desired.
- P2: Blog/newsroom, careers page, case studies.
- P2: Section scroll-progress indicator, cursor follower.
