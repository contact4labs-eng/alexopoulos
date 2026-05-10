# Migration Plan — Multi-page → One-page

> Working document for the multi-page → one-page transformation. Locked architecture from the brief, plus the design + execution decisions I'm committing to. Edit this file if a decision changes during phases 2–4.

---

## 1. Locked architecture (from the brief, do not reorder)

| # | Section | Anchor | Source pages / components folded in |
|---|---------|--------|-------------------------------------|
| 1 | Hero | `#top` *(implicit; no `id` needed)* | `hero.tsx` — **untouched, locked** |
| 2 | Trust strip | `#empistosini` | rewrite of `trust-bar.tsx` |
| 3 | Services / Διπλώματα | `#ypiresies` | `services.ts` + the 3 buried `/ypiresies/*` detail pages |
| 4 | Process / Η Διαδικασία | `#diadikasia` | the 4-step flow currently buried in `/ypiresies/diploma-aftokinitou/page.tsx` |
| 5 | Why us & Instructor | `#i-scholi` | all of `/i-scholi-mas/page.tsx` + the 4 reasons in `why-us.tsx` (de-duplicated) |
| 6 | Testimonials | `#kritikes` | `testimonials.tsx` (showing 6 of 9) |
| 7 | Contact + FAQ + final CTA | `#epikoinonia` | `contact-strip.tsx` + `cta-section.tsx` + `/syxnes-erotiseis/page.tsx` + `/epikoinonia/page.tsx` |

---

## 2. Background cadence

3 dark sections + 4 light sections. Adjacent sections never share the same tone.

| # | Section | Tone | Notes |
|---|---------|------|-------|
| 1 | Hero | **dark** (video) | locked |
| 2 | Trust strip | **white** | slim hairline-bordered band; tonal "punctuation" between hero and services |
| 3 | Services | **light/mist** (`#ECEEF0`) | one dark inset card embedded for the featured service, but the section base is light |
| 4 | Process | **dark** (`#1A1A1A`) | full-bleed editorial moment, the deliberate anti-grid |
| 5 | Why us & Instructor | **white** | with a dark inset (~⅓ width on desktop) reserved for the Μάκης portrait composition |
| 6 | Testimonials | **light/mist** (`#ECEEF0`) | sticky-rail + masonry, a slightly cooler tone than section 5 to mark transition |
| 7 | Contact + FAQ + CTA | **dark** | strong closer, single dense composition |

Cadence string: **dark · white · mist · dark · white · mist · dark**.

---

## 3. Visual primitive per section + one-line divergence argument

Six post-hero sections must use six visually distinct primitives. No two adjacent sections share the same layout vocabulary.

**Section 2 — Trust strip (`#empistosini`)** — *full-bleed slim horizontal strip*
4 stat tiles (4.9★ Google · 251+ Κριτικές · 50+ Χρόνια · Παλαιό Φάληρο · Αιόλου 7) divided by hairline rules, white bg, top + bottom hairline borders, ~80px tall. Numbers are heavy-weight, labels are muted.
- *Diverges from hero by collapsing from a full-screen video composition to a single horizontal sliver.*

**Section 3 — Services / Διπλώματα (`#ypiresies`)** — *asymmetric two-column with sticky left + expandable cards on right*
Left column (sticky on desktop): eyebrow + h2 ("Διπλώματα") + intro line. Right column: a vertical stack of 3 expandable service cards (Β / Α₁₂ / ΓΔ+ΠΕΙ) — collapsed shows title + categories + short description; expanded reveals the full "Τι Περιλαμβάνει" checklist and "Ηλικία & Προϋποθέσεις" copy with the Ν. 4850/2021 reference. Below the 3 primary cards, a single compact horizontal strip lists the 3 secondary services (Ανανέωση / Μετεκπαίδευση / Επέκταση) with a per-item phone chip.
- *Diverges from the trust strip by becoming a tall asymmetric two-column composition with rich expandable content (vs a slim horizontal sliver of stats).*

**Section 4 — Process / Η Διαδικασία (`#diadikasia`)** — *horizontal stepped timeline with connector line, NO cards*
4 numbered steps (01 → 04: Εγγραφή & Δικαιολογητικά / Θεωρητική Εκπαίδευση / Πρακτική Εκπαίδευση / Εξέταση), large outlined numerals, hairline rule connecting them, title in heavy white type, body underneath. Mobile: vertical stack with the connector rule running vertically on the left, numbers and content offset to the right.
- *Diverges from services by going full-dark with a single horizontal flow (vs light, multi-column, card-based).*

**Section 5 — Why us & Instructor (`#i-scholi`)** — *editorial asymmetric split with a dark portrait inset*
Left column (~⅔ on desktop): heritage statement using "Η Προσέγγισή μας" verbatim, plus 4 values rendered as a horizontal pillar row (icon · word · one-line) — no cards, just typography and a vertical divider rhythm. Right column (~⅓): a dark inset — the Μάκης Αλεξόπουλος "card" with name, role, and bio sentence, treated as a hero-within-section. Mobile: stacks, with the instructor block first (face-card prominence on small screens).
- *Diverges from the dark process timeline by inverting the tone (light section with dark inset) and switching from linear flow to editorial composition.*

**Section 6 — Testimonials (`#kritikes`)** — *sticky proof rail + masonry of varied-height cards*
Left rail on desktop (sticky): 4.9 rating block + 251+ count + Google reviews CTA + section eyebrow/heading. Right: 6 quote cards in a 2-column masonry (varied heights from quote length). Mobile: rating block on top, then quotes in a single column.
- *Diverges from the why-us section by replacing the editorial portrait moment with high-density social proof distributed across many small surfaces.*

**Section 7 — Contact + FAQ + final CTA (`#epikoinonia`)** — *dense single-section closer with two-column desktop, vertical mobile*
Desktop two-column inside one dark `<section>`: left column = FAQ accordion (5 entries verbatim from `faq.ts`) with a quiet "Δεν βρήκατε αυτό που ψάχνετε; Καλέστε μας" footer link to phone. Right column = a single coherent stack: phone CTA hero → contact-info strip (phone / email / address / hours) → contact form (lifted as-is from `epikoinonia/contact-form.tsx`) → `<MapEmbed>` → final phone CTA button. Mobile: re-orders to phone CTA / contact info / form / map / FAQ at the bottom.
- *Diverges from testimonials by going dark again, collapsing the sticky-rail-plus-masonry into a single dense two-column closer with the user's terminal action (call/email/submit) in the spotlight.*

---

## 4. Interaction pattern for section 3 — chosen: **in-card expand (accordion-style)**

**Considered:**
- *Tabs.* Forces horizontal selection, mobile wraps awkwardly, and presents the 3 services as alternatives ("pick one") rather than parallel options ("here is each one").
- *Slide-over panel.* Too modal for browsing, breaks scroll context, asks the user to "leave" the page.
- *In-card expand.* Each card is a row in the column. Tap to expand → "Τι Περιλαμβάνει" + age/legal copy slides open underneath in the same card. Other cards remain visible above and below.

**Why in-card expand wins:**
- Preserves the parallel "all three are valid" hierarchy.
- Works identically at 375px and 1280px — same vertical-stack model, just narrower.
- Lets the user open multiple cards (e.g. compare Β vs Α). Tabs/panels would force a single choice.
- Preserves scroll position naturally — the surrounding page doesn't re-flow around a modal.
- Keyboard accessible (`<button>` toggles, `aria-expanded`, optional `aria-controls`).

The existing `accordion.tsx` UI primitive is single-select; for services I want **multi-select** (multiple cards open at once). Decision: write the services accordion inline in `services.tsx` rather than reuse the FAQ-style `accordion.tsx`. That also keeps the visual treatments distinct between the two (services = rich expandable cards with checklists; FAQ = quieter Q&A list).

---

## 5. File-by-file action list

### Delete (route directories)

- `src/app/i-scholi-mas/` (entire directory)
- `src/app/ypiresies/` (entire directory — index page + all 3 sub-routes)
- `src/app/syxnes-erotiseis/` (entire directory)
- `src/app/kritikes/` (entire directory)
- `src/app/epikoinonia/page.tsx` (delete; the directory itself goes once `contact-form.tsx` has been moved)

### Delete (sections / components no longer needed)

- `src/components/sections/trust-bar.tsx` (replaced by new `trust-strip.tsx`)
- `src/components/sections/contact-strip.tsx` (folded into section 7)
- `src/components/sections/cta-section.tsx` (folded into section 7)
- `src/components/sections/services-grid.tsx` (replaced by new `services.tsx`)
- `src/components/sections/why-us.tsx` (replaced by new `about.tsx`)
- `src/components/ui/page-header.tsx` (was only used by the deleted sub-pages)

### Move

- `src/app/epikoinonia/contact-form.tsx` → `src/components/sections/contact-form.tsx` (update its import of `submitContactForm` only if relative; absolute `@/lib/contact-action` stays the same. The server action at `src/lib/contact-action.ts` does **not** move.)

### Create

- `src/components/sections/trust-strip.tsx` (section 2)
- `src/components/sections/services.tsx` (section 3 — with the in-card expand interaction)
- `src/components/sections/process.tsx` (section 4)
- `src/components/sections/about.tsx` (section 5)
- `src/components/sections/contact.tsx` (section 7 — orchestrates contact info + form + map + FAQ + final CTA inside one `<section>`)

### Rewrite (existing file, structural edits)

- `src/app/page.tsx` — recompose to render the 7 locked sections in order
- `src/app/sitemap.ts` — reduce to `/` and `/oroi-xrisis` only
- `src/app/layout.tsx` — fold the FAQ JSON-LD schema in (currently injected only on `/syxnes-erotiseis`); the `LocalBusiness` JSON-LD already lives here and stays
- `next.config.ts` — add the 308 permanent redirects per the brief
- `src/data/navigation.ts` — replace nested route nav with flat anchor list (5 items per the brief)
- `src/components/layout/header.tsx` — keep visual treatment, but: (a) drop the dropdown logic for `Υπηρεσίες`, (b) drop the "Αρχική" link (we're already on it), (c) for any `href` starting with `/#`, smooth-scroll to the anchor on click, (d) close the mobile menu on any nav click. The new logo work is **not** touched.
- `src/components/layout/footer.tsx` — keep visual treatment, but: (a) the "Σελίδες" column now uses anchor hrefs from `navigation.ts`, (b) add an "Όροι Χρήσης" link in the legal/bottom row alongside the existing "Όροι & Απόρρητο" (or rename it — `oroi-xrisis` covers both terms and privacy in this codebase), (c) keep "Made by 4Labs" and Facebook unchanged.
- `src/components/sections/testimonials.tsx` — minor refinement: render exactly 6 curated testimonials. The data file keeps all 9; selection happens in this component (chosen 6: indices `[0, 1, 2, 5, 6, 8]` = Ελένη ¹ / Γιώργος / Αλεξάνδρα / Νίκος / Ρέα / Τάσος — different first names, different praise angles: calm-and-patient, transmissibility, trustworthy, kind-staff, experienced, top-tier). The duplicate Ελένη ², plus Βάσω and Αγγελική, drop off the rendered list but stay in the data file.

### Leave untouched

- `src/components/sections/hero.tsx` (locked, hard constraint)
- `src/components/ui/accordion.tsx`, `badge.tsx`, `button.tsx`, `card.tsx`, `icon-box.tsx`, `map-embed.tsx`, `reveal.tsx`, `section.tsx`, `star-rating.tsx` — primitives still in use
- `src/components/analytics.tsx`, `cookie-consent.tsx`
- `src/components/layout/sticky-cta.tsx` (works as-is, conversion-critical)
- `src/lib/contact-action.ts` (server action stays put; only the form component moves)
- `src/lib/metadata.ts`, `src/lib/schema.ts`
- `src/data/business.ts`, `src/data/services.ts`, `src/data/faq.ts`, `src/data/testimonials.ts`, `src/data/legal.ts`
- `src/app/oroi-xrisis/page.tsx` (legal, kept)
- `src/app/globals.css`
- `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/opengraph-image.tsx`, `src/app/robots.ts`
- `public/**`

---

## 6. Open questions

None that block phase 2. Decisions I considered raising as questions and instead committed to (documented above) so the work doesn't stall:

- **Testimonials selection** — committed to indices `[0, 1, 2, 5, 6, 8]` for max name and angle variety. Easy to swap if the reviewer disagrees.
- **Section 3 interaction** — committed to in-card expand (multi-select, parallel options preserved). Reasoning above.
- **Footer "Pages" column** — kept the column in the brief's wording, repointed to anchors. Could be argued either way; minimal change keeps reviewer cost low.
