# HELIXA — Biotech Animated Landing Page

A premium, animation-driven biotechnology landing page for a fictional synthetic-biology company, **HELIXA**. Built as an Awwwards-caliber marketing site with a cinematic dark art direction ("The Obsidian Lab"), an interactive 3D DNA helix, momentum smooth-scrolling, and scroll-based motion throughout.

![Stack](https://img.shields.io/badge/React-19-61dafb) ![Stack](https://img.shields.io/badge/FastAPI-backend-009688) ![Stack](https://img.shields.io/badge/MongoDB-database-47A248) ![Stack](https://img.shields.io/badge/Three.js-3D-black)

---

## ✨ Features

- **Kinetic Hero** — signature on-load masked, line-by-line headline reveal.
- **Interactive 3D DNA Helix** — real Three.js / `@react-three/fiber` double helix with glowing lime/cyan nodes and bonds. Auto-spins with inertia and can be **dragged to rotate**.
- **Momentum Smooth Scroll** — powered by [Lenis](https://github.com/darkroomengineering/lenis).
- **Scroll Progress Bar** — slim glowing indicator fixed to the top of the viewport.
- **Active-Section Nav** — IntersectionObserver-driven highlighting with an animated underline.
- **Full Section Set** — Hero, About/Manifesto (numbered chapters), Technology (bento grid), Editorial Marquee, Capabilities, Case Studies / Breakthroughs, Impact (count-up stats), Final CTA, Footer.
- **Working Contact Form** — submissions persist to MongoDB via the backend API.
- **Motion & Micro-interactions** — Framer Motion staggered scroll reveals + hover states.
- **Fully Responsive** — desktop, tablet, and mobile layouts.
- **Accessible** — respects `prefers-reduced-motion`; `data-testid` coverage on interactive/section elements; lazy-loaded imagery.

---

## 🎨 Design System — "The Obsidian Lab"

| Token        | Value        | Usage                                   |
|--------------|--------------|-----------------------------------------|
| Background   | `#050505`    | Primary obsidian black surface          |
| Accent 1     | `#D4FF00`    | Fluorescent lime (CTAs, key data)       |
| Accent 2     | `#00F0FF`    | Bioluminescence cyan (glows, 3D light)  |
| Headings     | `Syne`       | Bold display typography                 |
| Body         | `Manrope`    | Readable body copy                      |
| Mono         | `Space Mono` | Overlines / technical labels            |

Sharp-edged (no border-radius) "technical grid" aesthetic, 1px hairline borders, subtle grain overlay, and generous spacing.

---

## 🧱 Tech Stack

**Frontend**
- React 19 + CRACO
- Tailwind CSS + shadcn/ui primitives
- Framer Motion (reveals & micro-interactions)
- Lenis (smooth scroll)
- Three.js + @react-three/fiber (3D helix)
- react-fast-marquee (editorial marquee)
- axios

**Backend**
- FastAPI (Python)
- MongoDB (via Motor async driver)

---

## 📁 Project Structure

```
/app
├── backend/
│   ├── server.py            # FastAPI app + routes
│   ├── requirements.txt
│   └── .env                 # MONGO_URL, DB_NAME, CORS_ORIGINS
├── frontend/
│   ├── src/
│   │   ├── App.js           # Page composition
│   │   ├── index.css        # Fonts, theme tokens, utilities
│   │   ├── lib/motion.js    # Shared Framer Motion variants
│   │   ├── components/landing/
│   │   │   ├── SmoothScroll.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── DNAHelix3D.jsx     # Interactive 3D helix
│   │   │   ├── Manifesto.jsx
│   │   │   ├── Technology.jsx
│   │   │   ├── EditorialMarquee.jsx
│   │   │   ├── Capabilities.jsx
│   │   │   ├── CaseStudies.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── FinalCTA.jsx       # Contact form
│   │   │   └── Footer.jsx
│   │   └── constants/testIds/    # Central data-testid registry
│   ├── package.json
│   └── .env                 # REACT_APP_BACKEND_URL
└── README.md
```

---

## 🚀 Getting Started

Services are managed by **supervisor** and run automatically. Frontend and backend both support hot reload.

### Environment variables

`backend/.env`
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

`frontend/.env`
```
REACT_APP_BACKEND_URL=<public preview URL>
```

> All backend routes are prefixed with `/api` and the frontend must call the API via `REACT_APP_BACKEND_URL`.

### Install & run (local/dev)

```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd frontend
yarn install
yarn start        # dev server on :3000
```

### Restart services (supervisor)

```bash
sudo supervisorctl restart backend
sudo supervisorctl restart frontend
```

---

## 🔌 API Reference

Base URL: `${REACT_APP_BACKEND_URL}/api`

| Method | Endpoint     | Description                          |
|--------|--------------|--------------------------------------|
| GET    | `/`          | Health check                         |
| POST   | `/contact`   | Create a contact / access request    |
| GET    | `/contact`   | List all submissions (newest first)  |

**POST `/api/contact`**
```json
{
  "name": "Ada Lovelace",
  "email": "ada@lab.org",
  "organization": "Analytical Engine Co",
  "message": "Interested in your CRISPR suite."
}
```

Returns the created record with `id` and `created_at`.

```bash
curl -X POST "$REACT_APP_BACKEND_URL/api/contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Ada","email":"ada@lab.org","message":"Hello"}'
```

---

## ♿ Accessibility & Performance

- `prefers-reduced-motion` disables Lenis, 3D auto-rotation, and count-up animations.
- Canvas rendering capped at DPR 1.6 for performance.
- Images are lazy-loaded.
- All interactive elements expose `data-testid` for automated testing.

---

## 📄 License

This is a demonstration project. Brand name "HELIXA" and all content are fictional.
