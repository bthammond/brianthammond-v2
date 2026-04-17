# brianthammond.com

Personal site for Brian T. Hammond — family business advisor and entrepreneur
mentor. Built on Next.js 16 + React 19 + Tailwind 4.

## Running locally

```bash
npm install
npm run dev
```

Opens on http://localhost:3000 (or the next free port).

## Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT` — Formspree form endpoint. Get yours at
  https://formspree.io — create a new form, then paste the URL (looks like
  `https://formspree.io/f/xxxxxxxx`).

Without the endpoint set, forms fall back to a success-simulation so you can
test the UI. Real submissions require a real endpoint.

## Key pages

- `/` — Home
- `/family-framework` — Overview of the FAMILY Framework (public-facing, does
  not expose the methodology)
- `/diagnostic` — 10-minute scored self-assessment across the six FAMILY
  pillars, with per-pillar breakdown and optional email capture
- `/how-i-help` — Services: FAMILY Framework engagement (flagship), Strategy &
  Succession consults, Coaching
- `/who-i-help` — Ideal client profile: 2nd-gen family businesses $2M–$50M
- `/about` — Bio and positioning
- `/insights` — Blog (three seed posts)
- `/contact` — Lead form with optional diagnostic pass-through (`?score=X&weak=F,L`)

## Architecture

- `src/app/` — App Router pages
- `src/components/` — Shared components (Header, Footer, LeadForm, AnimateOnScroll)
- `src/lib/` — Data modules (diagnostic scoring, insights content)
- Tailwind tokens in `src/app/globals.css` (deep navy primary, gold secondary,
  cool cream background)

## Deploying to Vercel

1. Push this repo to GitHub
2. Visit https://vercel.com/new and import the repo
3. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to the environment variables
4. Deploy — Vercel auto-detects Next.js, no extra config needed
5. Point the brianthammond.com DNS to Vercel when ready
