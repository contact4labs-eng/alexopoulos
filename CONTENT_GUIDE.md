# Content Guide — Σχολή Οδηγών Αλεξόπουλος

## How to Add/Update Content

All content is stored in TypeScript data files under `src/data/`. Edit these files directly — no CMS needed.

### Business Information
**File:** `src/data/business.ts`
- Edit business name, address, phones, email, hours, social links
- Update Google rating/review count periodically
- Fill in legal placeholders (marked with `[brackets]`) before launch

### Services
**File:** `src/data/services.ts`
- Each service has: slug, title, shortDescription, icon, categories, href
- First 3 services (`mainServices`) have dedicated pages
- Additional services link to the contact page
- To add a new service with its own page, also create `src/app/ypiresies/[slug]/page.tsx`

### Testimonials
**File:** `src/data/testimonials.ts`
- Currently empty — website shows Google rating summary as fallback
- To add testimonials, push objects to the `testimonials` array:
  ```ts
  {
    quote: 'Actual student quote here',
    authorName: 'Γιάννης',     // First name only
    rating: 5,
    source: 'direct',          // 'direct' = collected from student
    serviceType: 'Δίπλωμα Β', // Optional
  }
  ```
- **Important:** Only use quotes you have explicit permission to publish
- Do NOT copy-paste Google reviews without verifying terms compliance

### FAQ
**File:** `src/data/faq.ts`
- Add new Q&A objects to the `faqItems` array
- Each item needs: question, answer, category ('general' | 'licenses' | 'process')
- Only add answers you can verify as factually correct

### Navigation
**File:** `src/data/navigation.ts`
- Edit labels, hrefs, and nested children
- Ensure every href has a corresponding page file in `src/app/`

### Legal Content
**File:** `src/data/legal.ts`
- Privacy policy, cookie policy, terms of use
- **Placeholders to fill before launch:**
  - `[ΗΜΕΡΟΜΗΝΙΑ]` → effective date
  - `[ΠΛΗΡΗΣ ΕΠΩΝΥΜΙΑ ΕΠΙΧΕΙΡΗΣΗΣ]` → full legal business name
  - `[ΑΦΜ]` → tax identification number
  - `[Δ.Ο.Υ.]` → tax office

## Placeholder Markers

All placeholder content in the codebase uses `[SQUARE BRACKETS]` in Greek.
Search for `[` across `src/data/` to find all items needing replacement.

## Image Assets

Place images in `public/images/` organized by purpose:
```
public/images/
├── hero/        # Hero section backgrounds/photos
├── team/        # Instructor and staff photos
├── school/      # School exterior, interior, vehicles
├── services/    # Service-specific imagery
└── og/          # Open Graph images (1200×630px)
```

Supported formats: JPG, PNG, WebP. Use Next.js `<Image>` component for automatic optimization.
