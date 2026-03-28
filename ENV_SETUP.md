# Environment Variables Setup

## Required for Development

Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

## Variable Reference

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| `NEXT_PUBLIC_GA_ID` | No | (empty) | Google Analytics 4 Measurement ID. Site works without it. |
| `NEXT_PUBLIC_SITE_URL` | No | `https://alexopoulos-odigoi.gr` | Used for canonical URLs, sitemap, Open Graph. Set to `http://localhost:3000` in dev. |
| `RESEND_API_KEY` | No | (empty) | Resend.com API key for contact form email delivery. Without it, form submissions log to console. |
| `CONTACT_EMAIL` | No | `makisalexo@yahoo.gr` | Email address receiving contact form submissions. |
| `EMAIL_FROM` | No | `onboarding@resend.dev` | Sender address for form emails. Must match a verified domain in Resend. |

## Setup Steps

### 1. Google Analytics 4
1. Create a GA4 property at https://analytics.google.com
2. Get the Measurement ID (format: `G-XXXXXXXXXX`)
3. Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in `.env.local`
4. Analytics loads only after user consents to cookies (GDPR compliant)

### 2. Resend (Contact Form Email)
1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Add and verify your sending domain
3. Create an API key
4. Set `RESEND_API_KEY=re_xxxxx` in `.env.local`
5. Set `CONTACT_EMAIL=your-email@domain.gr` in `.env.local`
6. Update the `from` address in `src/lib/contact-action.ts` to match your verified domain

### 3. Production Deployment (Vercel)
1. Create a GitHub repository and push the code
2. Go to https://vercel.com/new and import the repository
3. Vercel auto-detects Next.js — no build settings changes needed
4. Set environment variables in Vercel dashboard → Settings → Environment Variables:
   - `NEXT_PUBLIC_GA_ID` (production)
   - `NEXT_PUBLIC_SITE_URL` (production — set to your real domain, e.g., `https://alexopoulos-odigoi.gr`)
   - `RESEND_API_KEY` (production)
   - `CONTACT_EMAIL` (production)
   - `EMAIL_FROM` (production — must match Resend verified domain)
5. Configure custom domain: Vercel dashboard → Settings → Domains
6. SSL is automatic via Vercel
7. Every push to `main` triggers auto-deployment
8. Preview deployments are created automatically for pull requests

## Without Any Environment Variables
The site works fully in development mode:
- Analytics: disabled (no tracking)
- Contact form: logs submissions to server console
- URLs: defaults to placeholder domain
