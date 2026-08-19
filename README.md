# saadshaikh.vercel.app

Personal portfolio for **Saad Shaikh** — Full Stack Developer (React · TypeScript · Node.js).

Next.js 15 App Router, Tailwind, TypeScript. No UI framework, no client-side state
library, no animation library — every page is server-rendered and ships almost no
JavaScript.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Design language

Brutalist: flat colour blocks, hard rules, oversized display type, no rounded
corners and no shadows anywhere. These are enforced in `app/globals.css` via a
global `border-radius: 0; box-shadow: none` reset — if something needs to be
round, it opts in with the `.dot` class.

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#0A0A0A` | Page background |
| `paper` | `#FFFFFF` | Text, 3px section rules, inverted blocks |
| `flood` | `#7C3AED` | Accent blocks — punctuation, not decoration |
| `rule` | `#2E2E2E` | 1px internal dividers |
| `muted` / `dim` | `#A3A3A3` / `#6B6B6B` | Secondary and tertiary text |
| `signal` | `#16A34A` | Availability dot only |

Type is three faces, all self-hosted through `next/font/google` (no external
requests, no layout shift):

- **Archivo Black** — display, always uppercase (`font-disp`)
- **Archivo** — body copy (`font-body`)
- **Space Mono** — labels, metadata, data (`font-mono`, uppercase, wide tracking)

Structural rules: sections divide with 3px rules and cells with 1px; blocks run
full-bleed rather than sitting in a centred container; gutters are 32px desktop /
20px mobile; icons are inline SVG only — never emoji; touch targets clear 44px.

## Layout

```
app/
  layout.tsx        Fonts, metadata, JSON-LD, header/footer/mobile nav
  page.tsx          Home — hero, metric band, statement, featured work
  about/            Summary, skills, experience, education
  portfolio/        Featured projects + earlier work
  contact/          Email slab, details, resume
  og/route.tsx      Generated 1200x630 share card (edge runtime)
  sitemap.ts        Sitemap on the canonical domain
  robots.ts         robots.txt
components/         Presentational components; Primitives.tsx holds icons,
                    buttons, tags and labels
utils/
  data.ts           Every fact on the site — mirrors the resume
  site.ts           Canonical URL, resume path, per-page metadata builder
  emphasis.tsx      Renders **bold** inside data strings
```

## Editing content

`utils/data.ts` is the single source of truth for every claim on the site, and it
mirrors `public/resume/Saad_Shaikh_Resume.pdf`. **Keep the two in sync** — if a
number changes in the resume, change it here too, and vice versa.

Experience bullets support `**bold**` for emphasis, rendered by
`utils/emphasis.tsx`. There is no markdown dependency.

## Adding a project screenshot

Projects render a landscape screenshot from `Project.image`. Set it to `null` and
the project falls back to a hatched "screenshot pending" placeholder — currently
the case for **Brandlock** and **E-Trucking Soft**.

Drop a wide (roughly 16:10) capture into `public/projects-ss/` and point `image`
at it. Use a real product screen, not a logo.

## Deployment

Deploys to Vercel at the canonical domain `https://saadshaikh.vercel.app`, set in
`utils/site.ts`. Change it there and the sitemap, canonical tags, Open Graph URLs
and JSON-LD all follow.
