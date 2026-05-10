# Σχολή Οδηγών Αλεξόπουλος — One-Page Transformation Plan

> Architect's plan, no production code. The Hero (`src/components/sections/hero.tsx`) stays exactly as-is. Stack stays Next.js 16 + TS strict + Tailwind v4 + Lucide. Greek stays. Brand palette stays.

---

## 1. CONTENT INVENTORY

### `src/app/`

| File | Unique content / UI | Verdict | Notes |
|------|--------------------|---------|-------|
| `page.tsx` | Composes Hero + TrustBar + ServicesGrid(mainServices) + WhyUs + Testimonials(6) + ContactStrip + CTASection. | **KEEP** (rewrite composition) | Becomes the only content route. |
| `layout.tsx` | Root layout, Inter font (latin+greek), JSON-LD, Header/Footer/StickyCTA/CookieConsent/Analytics. | **KEEP** | Untouched. |
| `globals.css` | Tailwind v4 `@theme inline` brand tokens, smooth-scroll, focus ring, reveal anim, mobile sticky-CTA padding. | **KEEP** | Already correct for one-page (smooth-scroll already enabled). |
| `not-found.tsx` | 404 with link back to `/` and to `/epikoinonia`. | **KEEP-AS-LEGAL-PAGE** | Update the second link to `/#epikoinonia`. |
| `oroi-xrisis/page.tsx` | Renders Privacy + Cookies + Terms from `data/legal.ts`. Has `noIndex: true`. | **KEEP-AS-LEGAL-PAGE** | Stays as standalone route (legal pages should not be one-pager anchors — they're rarely visited and want their own URL for direct linking). |
| `sitemap.ts` | Lists 9 routes. | **KEEP** (rewrite) | Reduce to `/` and `/oroi-xrisis`. |
| `robots.ts` | Standard robots; preview-safe. | **KEEP** | Untouched. |
| `opengraph-image.tsx` | Edge-rendered 1200×630 OG card with logo + brand. | **KEEP** | Untouched. |
| `icon.png`, `apple-icon.png` | Favicons. | **KEEP** | Untouched. |
| `i-scholi-mas/page.tsx` | **Unique copy** to harvest: (a) "Η Προσέγγισή μας" — two paragraphs about non-exam-only philosophy and self-paced personalised teaching; (b) Instructor card with Μάκης Αλεξόπουλος, "Ιδιοκτήτης & Επικεφαλής Εκπαιδευτής" + bio line; (c) Four values (Υπομονή / Αξιοπιστία / Τοπική Παρουσία / Προσωπική Φροντίδα) with descriptions. | **FOLD INTO HOME** | → `#i-scholi-mas` (combined "Η Σχολή / Εκπαιδευτής" section). All three blocks survive. |
| `ypiresies/page.tsx` | Unique copy: "Πώς Λειτουργεί" 4-step process (Επικοινωνία → Θεωρητική → Πρακτική → Εξέταση & Δίπλωμα) with one-liners; full services grid (all 6). | **FOLD INTO HOME** | Steps → new `#diadikasia` section. Full services list → `#ypiresies`. The page-level filler header is dropped. |
| `ypiresies/diploma-aftokinitou/page.tsx` | Unique copy: 6-item "Τι Περιλαμβάνει" list, 4-step process (with longer descriptions than the index), **Ν. 4850/2021** legal reference for 17yo + provisional license + 18yo full license. | **FOLD INTO HOME** | The 6-item list condenses into a single "What every license includes" line in `#ypiresies`. The Ν. 4850/2021 specifics are preserved in `#syxnes-erotiseis` (FAQ) — it's the only place a real fact lives that's worth keeping. The detailed process replaces the thinner one in `/ypiresies` for the new `#diadikasia`. |
| `ypiresies/diploma-motosikletas/page.tsx` | Unique facts: cc/kW/age specs for **A1 (≤125cc, ≤11 kW, 18yo)**, **A2 (≤35 kW, 20yo)**, **A (no limit, 24yo or 22 with 2y A2)**; what's-included list; mention of progressive access (A1→A2→A). | **FOLD INTO HOME** | Specs preserved as a compact category card row inside `#ypiresies`. Progressive-access note → FAQ. |
| `ypiresies/epaggelmatiko-diploma/page.tsx` | Unique facts: **Γ (>3.5t)**, **Δ (>8 passenger seats)**, **ΠΕΙ** (initial issuance + periodic 5-year renewal). What's-included list. | **FOLD INTO HOME** | Same treatment — compact category card inside `#ypiresies`. ΠΕΙ 5-year renewal cadence → FAQ. |
| `syxnes-erotiseis/page.tsx` | Renders 5 FAQ entries from `data/faq.ts` + `generateFAQSchema()` JSON-LD. | **FOLD INTO HOME** | New `#syxnes-erotiseis` section. JSON-LD moves to root layout (FAQPage schema next to LocalBusiness schema). |
| `kritikes/page.tsx` | Big rating block (4.9/5, 251+) + Testimonials grid + "reviews come from real students" disclosure. | **FOLD INTO HOME** | Already largely covered by `#kritikes` Testimonials section. The disclosure copy is fine to drop (it's filler — the testimonials data file already documents source). |
| `epikoinonia/page.tsx` | Contact info block + ContactForm + Map embed + "Πού Βρισκόμαστε" header. | **FOLD INTO HOME** | All content goes into `#epikoinonia` (contact + map + form merged into one section). |
| `epikoinonia/contact-form.tsx` | Server-action wired form (name/phone/email/service/message + honeypot + Zod). | **FOLD INTO HOME** | Component moves to `src/components/sections/contact.tsx` or stays adjacent — the form itself is preserved verbatim. |

### `src/components/sections/`

| File | What it is | Verdict |
|------|-----------|---------|
| `hero.tsx` | Locked. Dark video bg + asymmetric proof dashboard. | **KEEP** (untouched, per constraint) |
| `trust-bar.tsx` | 4-stat horizontal strip (4.9★ / 251+ / 50+ / Π. Φάληρο · Αιόλου 7). | **DELETE** | The hero's right-side proof dashboard already shows 4.9 + 251+ + 50+. On a one-pager scrolled-through experience, repeating these numbers in a slim strip immediately under the hero is the "generic Tailwind site" tell. **No unique content lost** — every datum is in the hero. |
| `services-grid.tsx` | Bento: 1 dark featured card + N stacked light cards. Receives `services` prop. | **KEEP — REFACTOR** | Geometry is good (already non-uniform). Refactor to be the homepage section directly, drop the prop variants, render the 3 primary + an inline "Επίσης" tail for renewal/retraining/extension. |
| `why-us.tsx` | Dark section, 4 generic feature cards (50+ Χρόνια / Ανθρώπινη Προσέγγιση / 4.9★ Google / Ευέλικτο Πρόγραμμα). | **REWRITE** | This is the section that most needs to escape "rounded-2xl card grid". Becomes the new `#i-scholi-mas` "Η Σχολή / Ο Εκπαιδευτής" — editorial layout with portrait, values strip, and a dedicated heritage callout. The four reasons survive but as a horizontal pillar list, not as cards. |
| `testimonials.tsx` | Sticky-rail rating block + masonry quote cards. | **KEEP** | This is the strongest section after the hero. Keep verbatim, just give it the `id="kritikes"` and drop the limit on the home so the masonry can breathe. |
| `contact-strip.tsx` | 4 contact tiles + dark side card with phone CTA + "Φόρμα Επικοινωνίας" link. | **DELETE / FOLD** | Replaced by a richer combined `#epikoinonia` (info column + form + map). The dark side card duplicates the final CTA. |
| `cta-section.tsx` | Dark closing band, phone + form-link. | **FOLD** | Merge into the final `#epikoinonia` closer or keep as a slim closing band — but **only one** closing CTA, not the current pair. |

### `src/data/`

| File | Contents | Verdict |
|------|----------|---------|
| `business.ts` | Name, owner, address, contact, hours, social, stats (rating/reviews/years/award="Χρυσή Εταιρεία"), legal placeholders. | **KEEP** | Source of truth for facts. The `award` field is currently consumed nowhere on the site — surfacing it is a content gap (§5). |
| `services.ts` | 6 services with slug/title/shortDescription/icon/categories/href. `mainServices` = first 3, `additionalServices` = last 3. | **KEEP** | The `href` field becomes irrelevant for additional services on a one-pager (they no longer link out). Likely simplify after migration but not part of this plan. |
| `faq.ts` | 5 thin Q&A entries. | **KEEP — EXPAND** | Already light. The Ν. 4850/2021 (17yo) note, A1→A2→A progressive access, and ΠΕΙ 5-year renewal are real factual content rescued from sub-pages and should land here. |
| `testimonials.ts` | 9 verified Google reviews. | **KEEP** | Untouched. |
| `navigation.ts` | Multi-route nav (Αρχική / Υπηρεσίες w/ children / Η Σχολή Μας / Κριτικές / Συχνές Ερωτήσεις / Επικοινωνία). | **REWRITE** | Becomes anchor list. |
| `legal.ts` | Privacy + Cookies + Terms. | **KEEP** | Powers `/oroi-xrisis`. Has placeholders (§5). |

---

## 2. PROPOSED ONE-PAGE SECTION ORDER

Argument for the order: the visitor is almost always a first-time license seeker (Cat B) or a parent of one. Their decision arc is **What → How → Who → Proof → Doubts → Where**. Hero hooks. Services answers "do you do what I need". Process answers "what am I signing up for" — placing it before "Why Us" is deliberate: anxious first-timers care about the path before they evaluate us as people. About+Instructor lands after they've seen the path, so the human face has narrative weight. Testimonials follow once we've earned the right to brag. FAQ catches stragglers. Contact closes.

| # | Section (Greek + slug) | Anchor id | One-line purpose | Content sources | Visual concept · how it diverges from neighbours | Existing component? |
|---|------------------------|-----------|------------------|-----------------|-------------------------------------------------|---------------------|
| 1 | Hero — `hero` | `top` (or none) | Hook + immediate trust + primary CTA. | Hero (locked). | Dark video bg + asymmetric proof dashboard. **Locked.** | `hero.tsx` — **reuse as-is.** |
| 2 | Υπηρεσίες — `ypiresies` | `#ypiresies` | The "what we do" — 3 primary licenses + tail of secondary services. | `services-grid.tsx`, plus the cc/kW/age category facts harvested from the three sub-pages. | **Light/white.** Bento: 1 large dark featured card (Cat B as the most-asked) + 2 stacked light cards (Cat A·, Cat Γ/Δ/ΠΕΙ) with category specs inline (e.g. "A1 — ≤125cc, 18yo"). A slim italic "Επίσης: Ανανέωση · Μετεκπαίδευση · Επέκταση" line below the bento. **Diverges** from hero by being light + grid-asymmetric (mass on the left). | `services-grid.tsx` — **refactor.** |
| 3 | Διαδικασία — `diadikasia` | `#diadikasia` | The 4-step path from phone call to license. | `/ypiresies` 4-step list + the longer descriptions from `/ypiresies/diploma-aftokinitou`. | **Mist (#ECEEF0).** A horizontal numbered timeline — large outlined numerals (01–04), connecting hairline rule, step title in heavy type, body copy under. **No cards.** **Diverges** from §2 by replacing the bento mass with a thin horizontal rhythm; from §4 by being light-mid (mist) before the dark §4. | **New file** `process.tsx`. |
| 4 | Η Σχολή / Ο Εκπαιδευτής — `i-scholi-mas` | `#i-scholi-mas` | Heritage + values + the human face (Μάκης). | `/i-scholi-mas` "Προσέγγιση" copy + Instructor block + 4 values; merged with the `why-us.tsx` four reasons. | **Dark (#1A1A1A).** Two-thirds editorial composition: left = oversized heritage statement ("Από το [έτος] στο Παλαιό Φάληρο" — pending §7 Q1) with the four values rendered as a single horizontal pillar row (icon · word, no card chrome); right = portrait of Μάκης (or a typographic portrait fallback if no photo, see §5) with name, role, signature line of bio underneath. Award badge ("Χρυσή Εταιρεία") sits as a small chip near the heritage statement. **Diverges** from §3 by going full dark and editorial — no grid here, this is the section where rhythm slows and the brand voice speaks. | `why-us.tsx` — **rewrite.** |
| 5 | Κριτικές — `kritikes` | `#kritikes` | Volume proof from real students. | `testimonials.tsx`, all 9 entries, no `limit`. | **Mist.** Sticky left rail (rating + Google CTA) + masonry quote column on the right. **Diverges** from §4 by going light again and shifting to a vertical reading rhythm; the masonry breaks any grid expectation. | `testimonials.tsx` — **reuse as-is**, drop `limit` prop on home invocation. |
| 6 | Συχνές Ερωτήσεις — `syxnes-erotiseis` | `#syxnes-erotiseis` | Objection handling, also picks up the legal/regulatory specifics rescued from sub-pages (Ν. 4850/2021, A1→A2→A progressive access, ΠΕΙ 5-year periodic). | `data/faq.ts` (expanded) + `Accordion`. | **White.** Two-column: left = a large, sober "Συχνές Ερωτήσεις" headline + a small "Δεν βρήκατε αυτό που ψάχνετε; Καλέστε μας" link to phone; right = the accordion stack, full width of its column. **No cards** — accordion items are bordered rules, not pill-cards. **Diverges** from §5 by going single-color white and from §7 by reading much "quieter". | `accordion.tsx` (UI) — **reuse**; new wrapping section file `faq.tsx`. |
| 7 | Επικοινωνία & Μάς Βρίσκετε — `epikoinonia` | `#epikoinonia` | Where + how to reach. Includes the inline contact form. | `contact-strip.tsx` info tiles + `epikoinonia/page.tsx` form + `MapEmbed`. | **Dark with a recessed light panel.** Full-bleed map iframe as the section base with a dark overlay; inside that, an offset light-panel "card" containing the address/phone/email/hours block side-by-side with the inline contact form. Phone CTA pinned, email + form coexist. **Diverges** from §6 by being dramatically darker + visually denser (the map adds depth no other section has); also the only section where the user is asked to do something other than scroll. | `contact-strip.tsx` + `MapEmbed` + `contact-form.tsx` — **rewrite as `contact.tsx`**, keep form server action verbatim. |
| 8 | Τελευταίο CTA — `cta` | (no id needed) | Slim closing band — phone + reassurance. | `cta-section.tsx`. | **Dark, slim** (≤120px tall on desktop). Single-line: "Έτοιμοι;" + phone CTA. **Diverges** from §7 by being deliberately small — a quiet sign-off, not another full section. The visual analogue of a footer hairline above the actual footer. | `cta-section.tsx` — **slim down** (current implementation is too tall and re-litigates trust signals already shown). |

**Sections explicitly omitted vs. current site:**
- TrustBar (between hero and services) — **deleted**, see §1 inventory.
- A second mid-page CTA between Why-Us and Testimonials — none. The hero CTA, the in-section phone link, and the §7+§8 closer cover this.

---

## 3. NAVIGATION & ROUTING CHANGES

### Header (`src/components/layout/header.tsx`)

Replace the multi-route + dropdown nav with a flat anchor list. Smooth-scroll is already enabled in `globals.css`.

Desktop nav links (left of CTA):

| Label | Anchor |
|-------|--------|
| Υπηρεσίες | `#ypiresies` |
| Διαδικασία | `#diadikasia` |
| Η Σχολή | `#i-scholi-mas` |
| Κριτικές | `#kritikes` |
| Ερωτήσεις | `#syxnes-erotiseis` |
| Επικοινωνία | `#epikoinonia` |

Phone CTA (`tel:+302109814083`, "Κλείσε Μάθημα") **stays.**

Drop the dropdown logic (`item.children`) — no longer needed. Drop the "Αρχική" link (you're already on it).

### Mobile menu

Same six anchor links + the phone CTA at the bottom. Drop the nested-services list.

### Footer (`src/components/layout/footer.tsx`)

Slim it. Today's footer is 4 columns (Brand / Pages / Contact / Hours). On a one-pager the "Pages" column duplicates the header anchors and adds visual weight without value.

Proposed footer:
- Logo + one-line tagline + "Από το [έτος]" (pending §7 Q1).
- Contact block (phone, mobile, email, address) — stays.
- Hours block — stays.
- Bottom row: copyright · "Όροι & Απόρρητο" link · Facebook · "Made by 4Labs" attribution.

The "Pages" column is **deleted** (the header carries it; users on a one-pager don't need it twice).

### Sticky CTA (`src/components/layout/sticky-cta.tsx`)

Keep on mobile. Audit copy: current is "Τηλεφωνήστε μας" + "Κινητό". Both are phone calls — the second adds confusion. Recommend "Κλείσε Μάθημα" (primary, → landline) + "WhatsApp" or "Κινητό" with a clear secondary verb. Final wording is a small content call, not a structural one.

### Routes — verdict per file

| Route | Verdict | Action |
|-------|---------|--------|
| `/` | Keep | Recompose. |
| `/oroi-xrisis` | Keep | Untouched (legal, `noIndex`). |
| `/i-scholi-mas` | Delete | Redirect → `/#i-scholi-mas`. |
| `/ypiresies` | Delete | Redirect → `/#ypiresies`. |
| `/ypiresies/diploma-aftokinitou` | Delete | Redirect → `/#ypiresies`. |
| `/ypiresies/diploma-motosikletas` | Delete | Redirect → `/#ypiresies`. |
| `/ypiresies/epaggelmatiko-diploma` | Delete | Redirect → `/#ypiresies`. |
| `/syxnes-erotiseis` | Delete | Redirect → `/#syxnes-erotiseis`. |
| `/kritikes` | Delete | Redirect → `/#kritikes`. |
| `/epikoinonia` | Delete | Redirect → `/#epikoinonia`. |
| `/sitemap.xml` (`sitemap.ts`) | Keep | Reduce to `/` and `/oroi-xrisis`. |
| `/robots.txt` (`robots.ts`) | Keep | Untouched. |
| `/opengraph-image` | Keep | Untouched. |
| `/icon.png`, `/apple-icon.png` | Keep | Untouched. |
| `/not-found` | Keep | Update the secondary link to `/#epikoinonia`. |

### 301 redirect strategy

In `next.config.ts`, add an async `redirects()` block — Next emits real 308 redirects (treated equivalently to 301 by search engines for `permanent: true`):

```ts
async redirects() {
  return [
    { source: '/i-scholi-mas',                       destination: '/#i-scholi-mas',     permanent: true },
    { source: '/ypiresies',                          destination: '/#ypiresies',        permanent: true },
    { source: '/ypiresies/diploma-aftokinitou',      destination: '/#ypiresies',        permanent: true },
    { source: '/ypiresies/diploma-motosikletas',     destination: '/#ypiresies',        permanent: true },
    { source: '/ypiresies/epaggelmatiko-diploma',    destination: '/#ypiresies',        permanent: true },
    { source: '/syxnes-erotiseis',                   destination: '/#syxnes-erotiseis', permanent: true },
    { source: '/kritikes',                           destination: '/#kritikes',         permanent: true },
    { source: '/epikoinonia',                        destination: '/#epikoinonia',      permanent: true },
  ];
}
```

Caveat to flag during phase 2: browsers strip the fragment (`#xxx`) from the original request before sending it, then re-attach it after redirect resolution — Next's redirects do propagate fragments correctly when written this way. Verify in dev with `curl -I` after wiring up.

---

## 4. FILE-BY-FILE EXECUTION LIST

### Files to **delete** (after migration is verified working)

| File | Why |
|------|-----|
| `src/app/i-scholi-mas/page.tsx` | Folded → `#i-scholi-mas`. |
| `src/app/ypiresies/page.tsx` | Folded → `#ypiresies` + `#diadikasia`. |
| `src/app/ypiresies/diploma-aftokinitou/page.tsx` | Folded; specifics moved to FAQ. |
| `src/app/ypiresies/diploma-motosikletas/page.tsx` | Same. |
| `src/app/ypiresies/epaggelmatiko-diploma/page.tsx` | Same. |
| `src/app/ypiresies/` (empty dir) | Cleanup. |
| `src/app/syxnes-erotiseis/page.tsx` | Folded → `#syxnes-erotiseis`. |
| `src/app/kritikes/page.tsx` | Folded → `#kritikes`. |
| `src/app/epikoinonia/page.tsx` | Folded → `#epikoinonia`. |
| `src/app/epikoinonia/contact-form.tsx` | Move under `src/components/sections/contact-form.tsx` (or co-locate inside `contact.tsx`). |
| `src/app/epikoinonia/` (empty dir) | Cleanup. |
| `src/components/sections/trust-bar.tsx` | Duplicates hero proof; on a one-pager the back-to-back repetition reads template-y. No unique content lost. |
| `src/components/sections/contact-strip.tsx` | Replaced by richer combined `contact.tsx`. |
| `src/components/ui/page-header.tsx` | Only used by the deleted sub-pages. |

### Files to **create**

| File | Purpose |
|------|---------|
| `src/components/sections/process.tsx` | New `#diadikasia` section — horizontal numbered timeline. |
| `src/components/sections/about.tsx` (or `i-scholi-mas.tsx`) | New combined `#i-scholi-mas` — heritage + values + Μάκης. Replaces what `why-us.tsx` was doing. |
| `src/components/sections/faq.tsx` | New `#syxnes-erotiseis` section wrapping `Accordion` + a short heading column. |
| `src/components/sections/contact.tsx` | New `#epikoinonia` — map + info + form merged. |

### Files to **substantially rewrite**

| File | Rewrite scope |
|------|---------------|
| `src/app/page.tsx` | Full recompose: Hero → Services → Process → About → Testimonials → FAQ → Contact → CTA. Add anchor IDs. |
| `src/app/layout.tsx` | Add `generateFAQSchema(faqItems)` JSON-LD next to the existing LocalBusiness schema (FAQ schema previously lived only on `/syxnes-erotiseis`). |
| `src/components/layout/header.tsx` | Strip dropdowns; render anchor list; drop "Αρχική". |
| `src/components/layout/footer.tsx` | Drop the Pages column; switch any internal navigation to anchors. |
| `src/components/layout/sticky-cta.tsx` | Audit secondary button copy. |
| `src/components/sections/services-grid.tsx` | Refactor to be the homepage section directly; drop `services` prop variants; render the 3 primary + inline tail of secondary. Add `id="ypiresies"` on the section. |
| `src/components/sections/why-us.tsx` | Either rewrite in place into `about.tsx` or delete after extracting the four pillar values. The current 4-card-on-dark layout does **not** survive. |
| `src/components/sections/testimonials.tsx` | Tiny: add `id="kritikes"` to the section element. |
| `src/components/sections/cta-section.tsx` | Slim it (≤120px). Drop the duplicate "Φόρμα Επικοινωνίας" link (the form is now in `#epikoinonia` directly above). |
| `src/data/navigation.ts` | Replace `NavItem[]` with anchor schema (`{ label, anchor }`). |
| `src/data/faq.ts` | Add ≥3 entries: Ν. 4850/2021 / 17yo provisional, A1→A2→A progressive access, ΠΕΙ 5-year periodic. |
| `src/app/sitemap.ts` | Reduce to `/` and `/oroi-xrisis`. |
| `next.config.ts` | Add the `redirects()` block from §3. |
| `src/lib/schema.ts` | No code change required, but `generateFAQSchema` is now consumed in `layout.tsx`, not in a dedicated FAQ page. |
| `src/app/not-found.tsx` | Change secondary CTA from `/epikoinonia` to `/#epikoinonia`. |

### Files to **leave untouched**

| File | Why |
|------|-----|
| `src/components/sections/hero.tsx` | Hard constraint. |
| `src/components/ui/accordion.tsx` | Reused by the new FAQ section. |
| `src/components/ui/badge.tsx`, `button.tsx`, `card.tsx`, `icon-box.tsx`, `star-rating.tsx`, `section.tsx`, `reveal.tsx`, `map-embed.tsx` | Still useful primitives. (Some may go unused after migration; clean up at the end of phase 2 only if confirmed dead.) |
| `src/components/analytics.tsx`, `cookie-consent.tsx` | Unrelated to layout change. |
| `src/lib/contact-action.ts` | Server action stays as-is. |
| `src/lib/metadata.ts` | One-pager only needs the root metadata; `createMetadata` may end up unused after sub-pages are deleted, but harmless to leave. |
| `src/app/oroi-xrisis/page.tsx` | Legal, kept. |
| `src/app/globals.css` | Smooth-scroll already configured; brand tokens already correct. |
| `src/data/business.ts`, `services.ts`, `testimonials.ts`, `legal.ts` | Data layer untouched in this migration. |
| `public/**` | All assets stay. |

---

## 5. CONTENT GAPS / RISKS

Real content gaps the new one-pager will expose:

1. **Instructor portrait of Μάκης Αλεξόπουλος.** The §4 About / Instructor section is the single most important place a real photograph elevates the page from template to bespoke. Currently no photo of the owner exists in the repo. Without it, the section will need a typographic-portrait fallback (large signature + name as a wordmark on the dark background) — workable, not as strong. Flagged in `REVIEW_CHECKLIST.md` Blocking.
2. **School exterior + training-vehicle photography.** Same source flags these as "Must-Have". They affect the visual richness of §4 and §7. Without them, the contact section relies on the map iframe as its only visual.
3. **Founding year.** "50+ χρόνια" is a soft claim throughout the site. A specific year ("Από το 1972 στο Παλαιό Φάληρο") is dramatically stronger as the §4 heritage statement, and is the kind of detail a $50K editorial brief would lead with. Currently unknown — open question §7 Q1.
4. **"Χρυσή Εταιρεία" award asset.** `business.ts` records `award: 'Χρυσή Εταιρεία'` with a comment that it's verified against `xrysietairia.eu` and `top100ofgreece.eu`. **This award is currently displayed nowhere on the site.** It's the highest-trust signal Alexopoulos has after the Google rating. The new §4 should surface it as a verifiable badge with link.
5. **Map embed quality.** `MapEmbed` uses the keyless `google.com/maps?q=…&output=embed` form. It works but renders a basic iframe. For a $50K feel, consider either (a) the official Maps Embed API (requires an API key + billing) or (b) a static styled map image with the address pinned. Not blocking — flagging as a polish opportunity.
6. **Inline contact form on a one-pager.** The form takes a non-trivial chunk of vertical real estate. Whether to keep it vs. go phone-first (§7 Q5).
7. **FAQ thinness.** Only 5 entries. The new `#syxnes-erotiseis` will absorb 3 more (Ν. 4850/2021, progressive A access, ΠΕΙ 5-year) for a total of 8. `REVIEW_CHECKLIST.md` calls for 5-10. Should be enough; a couple more on pricing-without-quoting-numbers and "πόσος χρόνος μέχρι το δίπλωμα" would round it out.
8. **Trust badges.** No third-party badges anywhere on site (e.g., the Greek Ministry of Transport license, "Verified by Google", Facebook page rating). The Greek SME audience responds well to officialism.

`[ΑΠΑΙΤΕΙΤΑΙ]` placeholders — **must be filled before launch**, all flagged in `REVIEW_CHECKLIST.md` already:

- `business.ts` → `legal.afm`, `legal.doy`, `legal.gemi`, `legal.licenseNumber` (all four placeholders).
- `legal.ts` → `privacyPolicy.lastUpdated`, `privacyPolicy.controller.name`, and inline placeholders inside several section bodies (`[ΠΛΗΡΗΣ ΕΠΩΝΥΜΙΑ ΕΠΙΧΕΙΡΗΣΗΣ]`, `[ΑΦΜ]`, `[Δ.Ο.Υ.]`).
- The amber-banner warning on `/oroi-xrisis` is correct as-is and should stay until the placeholders are real.

I am **not** inventing values for any of these.

---

## 6. DESIGN DIRECTION

The new one-pager is the dark, asymmetric confidence of the existing hero, **carried through as a rhythm rather than copied as a layout** — sections alternate between deep `#1A1A1A` editorial panels (where the brand voice speaks: heritage, instructor, closing) and quiet light frames (where information is delivered: services, process, FAQ), with red `#E31E24` reserved as a scarce accent — never as a background colour, never as a card fill — so that when it appears it always means "act here". The composition logic is editorial, not template: each section uses a different layout primitive (bento, numbered timeline, two-thirds editorial, sticky-rail masonry, single-column accordion, full-bleed map with offset panel, slim sign-off band) so the eye never sees the same shape twice. The result should feel like a confident 50-year-old institution that quietly knows what it's worth — the visual analogue of Μάκης himself: calm, exact, no ornament.

---

## 7. OPEN QUESTIONS FOR THE PRODUCT OWNER

1. **Founding year.** "50+ χρόνια" is everywhere; do we know the exact year (e.g., "Από το 1972")? It is the strongest single line for the §4 heritage statement, and would also let us swap the soft `50+ χρόνια` claim for a hard `from-year → today` calc that ages itself.
2. **"Χρυσή Εταιρεία" award.** Confirmed in `business.ts` comments as verified by `xrysietairia.eu` + `top100ofgreece.eu`, but currently invisible on the site. OK to surface as a badge in §4 with a link to the verifying page? Year of award would also help.
3. **Photography commitment.** Will we have, before launch, (a) a portrait of Μάκης, (b) a school-exterior shot, (c) a training-vehicle shot? If yes, §4 and §7 land properly. If no, I'll design a typographic fallback for §4 — but you should know that's the call before I commit to a layout.
4. **Secondary services treatment.** The 6 services include 3 with category specs (Β, Α, Γ-Δ-ΠΕΙ) and 3 administrative ones (Ανανέωση, Μετεκπαίδευση, Επέκταση) that today link to `/epikoinonia`. On the one-pager, my recommendation is the editorial treatment — feature the 3 primary in the bento + a single italic line "Επίσης: Ανανέωση · Μετεκπαίδευση · Επέκταση — καλέστε μας". Confirm, or do you want all 6 displayed as equal cards?
5. **Contact form vs. phone-first.** The 5-field Resend-backed form is wired and works. On a one-pager for an older Greek SMB audience, a phone-first (with WhatsApp click-through as secondary) often converts better and frees ~half a section of vertical real estate. Keep the form, or switch §7 to phone-first with form as a "γράψτε μας" disclosure under the hours?
