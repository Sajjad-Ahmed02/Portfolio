# Sajjad Ahmed — editorial folio

A single-page portfolio for a software engineer. Warm paper, ink, and one
vermilion accent; Newsreader for display, Poppins for body. CSS-only motion.
Built with **React + Vite + Tailwind CSS (v4)**.

Lighthouse (production build): **100 accessibility · 100 best practices · 100 SEO**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Project structure

```
├── index.html                 # fonts, meta tags, root
├── public/
│   ├── favicon.svg
│   ├── portrait.svg           # hero portrait placeholder — replace with your photo
│   ├── robots.txt
│   └── work/                  # project cover art (replace with screenshots)
│       ├── crowdfunding.svg
│       ├── socialtribe.svg
│       └── codereview.svg
└── src/
    ├── main.jsx               # bootstrap
    ├── App.jsx                # section order + nav items
    ├── styles/global.css      # design tokens (@theme), links, reveal, motion
    ├── data/                  # ← YOUR CONTENT lives here
    │   ├── profile.js         #   name, email, social links, bio, hero facts
    │   ├── projects.js        #   selected work (copy, stack, links, image)
    │   ├── experience.js      #   work history + education
    │   └── skills.js          #   grouped skills + certification
    ├── hooks/useNow.js        # live local clock (footer)
    └── components/
        ├── ui/                # Section, Container, ArrowLink, Reveal, SocialIcons
        ├── layout/            # Nav, Footer
        └── sections/          # Hero, Projects, Experience, About, Skills, Contact
```

## Making it yours

1. **`src/data/profile.js`** — name, email, social links, intro, bio, aside facts.
   The hero portrait is set there too: replace `public/portrait.svg` with your
   photo (4:5 crop works best) and update `portrait.src` / `portrait.alt`.
2. **`src/data/projects.js`** — each project has an ordered `links` array:
   `[{ label: "Live site", url: "https://…" }, { label: "GitHub", url: "https://…" }]`.
   The first link is what the cover image points at. Drop real screenshots into
   `public/work/` (1200×900, JPG/WebP preferred), then update `image` and `alt`.
3. **`src/data/experience.js`** and **`skills.js`** — same idea.
4. **Palette** — `src/styles/global.css` under `@theme`:
   `--color-paper`, `--color-ink`, `--color-muted`, `--color-accent`,
   `--color-quiet` (decorative numerals), `--color-line`.

## Design notes

- **Direction:** editorial folio — oversized serif section numerals in the left
  margin, asymmetric 12-column layout, hairline rules instead of cards.
- **Type:** Newsreader (display, italics for accents) + Poppins (body/UI).
  No monospace, no icon fonts, no emoji.
- **Icons:** inline monochrome SVGs in `src/components/ui/SocialIcons.jsx`
  (GitHub, LinkedIn, mail), inheriting `currentColor`.
- **Motion:** staggered hero reveal, one-time section reveals, underline-draw
  links, image lift + zoom on hover. All transform/opacity, all disabled under
  `prefers-reduced-motion`.
- **No dark mode by design** — the paper palette is the identity.
- **Accessibility:** semantic landmarks, visible focus rings, AA contrast,
  alt text on every image, skip link.

## Deploy

`npm run build` produces a static `dist/` — drag it onto Netlify, or point
Vercel / GitHub Pages at the repo with build command `npm run build`.
