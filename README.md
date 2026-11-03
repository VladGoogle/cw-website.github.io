# cw-website — Vladyslav Huhlia · CV

One-page CV website of **Vladyslav Huhlia**, Software Engineer (Node.js).

The site is static, built with [Astro](https://astro.build), and deploys to **GitHub Pages**, **AWS S3**
or any other static host. The layout is a dark, two-column page with a sticky sidebar, inspired by
[Brittany Chiang’s portfolio](https://brittanychiang.com) (as featured on One Page Love).

## Features

- **Sections:** About · Experience · Skills · Education & Languages · Certifications · Bookshelf.
- **Skills** are grouped. Each one has its own icon and links to the technology’s official
  documentation.
- **Certifications** show the official badge images and link to the public Credly verification
  pages.
- **Bookshelf** groups books into Read, Currently reading and Up next. Each book card shows the cover and links
  to the publisher page.
- **Clickable elements** (links, chips, cards, contacts, nav) share one smooth hover/focus effect:
  a soft glow and a slight scale.
- **Motion** stays minimal: fade-in on scroll, active-section nav indicator, and a subtle cursor
  spotlight on desktop. All of it is disabled for `prefers-reduced-motion`, and the content stays
  visible without JavaScript.
- **Performance and SEO:** zero framework JS (about 1.4 kB of inlined vanilla TS), images optimized to WebP
  at build time, self-hosted fonts, Open Graph tags, `schema.org/Person` JSON-LD and a custom 404
  page.

## Tech stack

| Concern   | Choice                                                                                                               |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| Framework | Astro 7 (static output), TypeScript (strict)                                                                         |
| Styling   | Plain CSS with design tokens (`src/styles/tokens.css`) and component-scoped styles                                   |
| Icons     | [astro-icon](https://github.com/natemoo-re/astro-icon) with Simple Icons and Tabler, plus local SVGs in `src/icons/` |
| Images    | `astro:assets` + sharp (responsive WebP)                                                                             |
| Fonts     | Inter and JetBrains Mono via Fontsource (self-hosted)                                                                |
| Quality   | `astro check`, ESLint (flat config), Prettier                                                                        |

## Requirements

- **Node.js ≥ 22.22**. The repo includes `.nvmrc`, so with nvm you can just run `nvm use`.
- npm 10+

> `astro` is pinned to **7.4.1** because later 7.4.x releases require Node ≥ 22.23.4. After you
> upgrade Node you can move to the latest version with `npm i astro@latest`.

## Run it locally

```bash
cd ~/Documents/cw-website
npm install        # first time only
npm run dev        # dev server with hot reload → http://localhost:4321
```

To check the exact production output:

```bash
npm run build      # type-check + build into ./dist
npm run preview    # serve ./dist → http://localhost:4321
```

### Scripts

| Command                | What it does                                                      |
| ---------------------- | ----------------------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload                              |
| `npm run build`        | Type-check (`astro check`), then build the static site to `dist/` |
| `npm run preview`      | Serve the production build locally                                |
| `npm run check`        | Type-check `.astro` and `.ts` files                               |
| `npm run lint`         | Lint with ESLint                                                  |
| `npm run format`       | Format everything with Prettier                                   |
| `npm run format:check` | Check formatting without writing changes                          |
| `npm run deploy:s3`    | Build and upload to S3 (see below)                                |

## Project structure

```text
cw-website/
├── .github/workflows/deploy.yml   # CI: lint, build, publish to GitHub Pages
├── public/                        # Copied as-is: favicon, robots.txt, downloadable CV (PDF)
├── scripts/deploy-s3.sh           # S3 upload with sensible cache headers
├── src/
│   ├── assets/images/             # Profile photo, book covers, certification badges (optimized at build)
│   ├── components/
│   │   ├── cards/                 # ProjectCard, CertificationCard, BookCard
│   │   ├── layout/                # BaseHead (SEO), Sidebar, Footer, Spotlight
│   │   ├── sections/              # One component per page section
│   │   └── ui/                    # Section, ExternalLink, SkillChip, Tag
│   ├── data/                      # ✏️  All CV content lives here (typed)
│   ├── icons/                     # Local SVG logos missing from the icon sets
│   ├── layouts/BaseLayout.astro   # <html> shell, global styles, fonts
│   ├── pages/                     # index.astro (the CV) and 404.astro
│   ├── scripts/                   # Client-side enhancements: reveal, scroll-spy, spotlight
│   ├── styles/                    # tokens.css, base.css, utilities.css (glow/scale, reveal)
│   ├── types/cv.ts                # Content model
│   └── utils/                     # URL and formatting helpers
├── astro.config.mjs
└── package.json
```

## Editing content

All text lives in `src/data/`. You don’t need to touch the components to change content.

| File                | Content                                        |
| ------------------- | ---------------------------------------------- |
| `profile.ts`        | Name, role, tagline, About, contacts, CV file  |
| `experience.ts`     | Positions and projects                         |
| `skills.ts`         | Skill groups, icons and documentation links    |
| `education.ts`      | Degree, focus areas and languages              |
| `certifications.ts` | Certifications, badge images and Credly links  |
| `books.ts`          | Books, covers, publisher links and read status |
| `navigation.ts`     | Section ids and labels used by the sidebar nav |

- **Add a skill:** add `{ name, icon, url }` to a group in `skills.ts`. The `icon` is either an
  Iconify name such as `simple-icons:redis`
  ([Simple Icons](https://icon-sets.iconify.design/simple-icons/) or
  [Tabler](https://icon-sets.iconify.design/tabler/)), or the file name of an SVG you drop into
  `src/icons/` (use `fill="currentColor"`).
- **Add a book:** put the cover in `src/assets/images/books/`, import it in `books.ts`, and add an
  entry with `status: 'read' | 'reading' | 'planned'`.
- **Replace the CV PDF:** overwrite the file in `public/`, keeping the name or updating
  `profile.cvFile`.

## Deployment

The build output in `dist/` is plain static files: `index.html`, `404.html`, `_astro/` hashed
assets, the favicon and the PDF. Two settings control the URLs. Both are optional; copy
`.env.example` to `.env` to set them locally.

| Variable    | Purpose                                                           |
| ----------- | ----------------------------------------------------------------- |
| `SITE_URL`  | Public origin, used for canonical and Open Graph URLs             |
| `BASE_PATH` | Sub-path the site is served from: `/` (default) or `/<repo-name>` |

### GitHub Pages

1. Push the project to a GitHub repository (the default branch must be `main`).
2. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`. The workflow sets `SITE_URL` and
   `BASE_PATH` automatically, so the site works both at `https://<user>.github.io/<repo>/` and at
   `https://<user>.github.io/`.

### AWS S3 (static website hosting)

1. Create a bucket and enable **Static website hosting** with index document `index.html` and
   error document `404.html`.
2. Allow public reads with a bucket policy (`s3:GetObject` on `arn:aws:s3:::<bucket>/*`), or put
   CloudFront with Origin Access Control in front of the bucket.
3. Set `SITE_URL` in `.env` to the final URL, for example
   `http://<bucket>.s3-website-<region>.amazonaws.com` or your custom domain. Then run:

   ```bash
   S3_BUCKET=<bucket> npm run deploy:s3
   # with CloudFront: S3_BUCKET=<bucket> CLOUDFRONT_DISTRIBUTION_ID=<id> npm run deploy:s3
   ```

   The script uploads `_astro/*` with long-lived immutable caching and everything else with
   `must-revalidate`.

## Credits

- The layout is inspired by [Brittany Chiang](https://brittanychiang.com).
- Book covers belong to their publishers. They link to the official O’Reilly pages.
- AWS certification badges belong to Amazon Web Services and are served via
  [Credly](https://www.credly.com).
- Icons come from [Simple Icons](https://simpleicons.org) (CC0), [Tabler Icons](https://tabler.io/icons)
  (MIT) and the IconMind gRPC glyph (MIT, via Iconify). Pinecone, LangSmith, WebSocket, CASL, BullMQ
  and Late logos are adapted from their official assets. All trademarks belong to their respective
  owners.
