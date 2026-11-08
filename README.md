# Sajjad Ahmed — Portfolio

Live site: **https://sajjad-ahmed02.github.io/Portfolio/**

A single-page portfolio for a software engineer. Warm paper, ink, and one
vermilion accent; Newsreader for display, Poppins for body. CSS-only motion.
Built with **React + Vite + Tailwind CSS (v4)**.

Lighthouse (production build): **100 accessibility · 100 best practices · 100 SEO**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build at http://localhost:4173
```

## Project structure

```
├── index.html                 # fonts, meta tags, root
├── vite.config.js             # relative base for GitHub Pages builds
├── .github/
│   └── workflows/
│       └── deploy.yml         # build + deploy to GitHub Pages
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
    ├── lib/asset.js           # resolves public/ files against the Vite base
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
   Wrap new image paths with `asset("work/your-image.jpg")` so they resolve
   correctly under the GitHub Pages project path.
3. **`src/data/experience.js`** and **`skills.js`** — same idea.
4. **Palette** — `src/styles/global.css` under `@theme`:
   `--color-paper`, `--color-ink`, `--color-muted`, `--color-accent`,
   `--color-quiet` (decorative numerals), `--color-line`.

## Deploying to GitHub Pages

The repository deploys automatically through GitHub Actions on every push to
`main`.

**One-time setup:**

1. Open **Settings → Pages** for
   [Sajjad-Ahmed02/Portfolio](https://github.com/Sajjad-Ahmed02/Portfolio/settings/pages).
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run the **Deploy to GitHub Pages** workflow manually from
   the Actions tab.

The workflow installs dependencies with `npm ci`, builds the site, and publishes
`dist/` as the Pages artifact.

### Why the base path is relative

`vite.config.js` sets `base: "./"` for production builds, and
`src/lib/asset.js` prefixes files from `public/` with `import.meta.env.BASE_URL`.
That keeps assets working under `/Portfolio/` without hardcoding the repository
name. If the repository is renamed, update the canonical URL and `og:url` in
`index.html`, plus the live URL in this README.

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
