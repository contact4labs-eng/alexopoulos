# Σχολή Οδηγών Αλεξόπουλος — Website

Premium website for Alexopoulos Driving School, Palaio Faliro, Athens.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Forms:** Server Actions + Zod validation
- **Deployment:** Vercel

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Documentation

- [Content Guide](CONTENT_GUIDE.md) — How to update site content
- [Asset Guide](ASSET_GUIDE.md) — Required images and media
- [Environment Setup](ENV_SETUP.md) — Environment variables reference
- [Review Checklist](REVIEW_CHECKLIST.md) — Pre-launch QA checklist

## Project Structure

```
src/
├── app/          # Routes and pages
├── components/   # Reusable UI and section components
├── data/         # Content data files (single source of truth)
└── lib/          # Utilities (metadata, schema, form actions)
```

## Key Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
| `npm start` | Start production server |

## Content Management

All content is managed through TypeScript files in `src/data/`. See [Content Guide](CONTENT_GUIDE.md) for details.

## Deployment

Push to a connected GitHub repo. Vercel auto-deploys on push to `main`. See [Environment Setup](ENV_SETUP.md) for required variables.
