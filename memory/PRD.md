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
- Kinetic Hero: masked line-by-line headline reveal, **real interactive 3D DNA double-helix (Three.js / react-three-fiber) that visitors can drag to rotate** with auto-spin + inertia, glowing lime/cyan spheres and bonds, dual CTAs.
- Glassmorphism sticky nav with mobile menu; **active-section highlighting (IntersectionObserver + animated underline)**; Cases link added; anchor links wired to Lenis smoothScroll.
- **Fixed top scroll-progress bar** (framer-motion useScroll + spring).
- Manifesto (About/Innovation): numbered chapters + sticky clipped scientist portrait.
- Technology: asymmetric bento grid with macro imagery.
- Editorial marquee; Capabilities 6-service grid.
- **Case Studies / Breakthroughs section**: 3 program cards with imagery, tags, and headline metrics.
- Impact: 4 count-up statistics on scroll-into-view.
- **Working Contact form** in Final CTA: name/email/organization/message → POST `/api/contact` (MongoDB `contacts` collection), loading + success + validation states. GET `/api/contact` lists submissions.
- Accessibility: prefers-reduced-motion disables Lenis/3D auto-motion & count-ups; data-testid on all interactive/section elements; lazy-loaded images.
- Fully responsive across mobile/tablet/desktop.

## Backend
- FastAPI + MongoDB. Endpoints: `GET /api/`, `POST/GET /api/status`, `POST/GET /api/contact`.
- Contact model: id, name, email, organization?, message, created_at (ISO).

## Verification
- Frontend compiles cleanly, no runtime/console errors (only benign WebGL perf warnings).
- Contact API verified end-to-end via curl: POST creates records, GET lists them.
- Hero + 3D helix rendering confirmed via screenshot.
- NOTE: the screenshot tool in this environment only navigates + captures (it does not execute scripted scroll/fill interactions), so lower sections + the form's browser click-flow were verified via clean compile + verified backend rather than an automated UI click-through.

## Backlog
- P1: Working contact/newsletter form with backend persistence.
- P1: Real 3D (react-three-fiber) hero upgrade if heavier visual desired.
- P2: Blog/newsroom, careers page, case studies.
- P2: Section scroll-progress indicator, cursor follower.
