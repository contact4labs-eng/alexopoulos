# Review Checklist — Pre-Launch

## Content Completeness

### Blocking
- [x] Logo provided or text logotype approved ✅ Real logo integrated
- [ ] At least 3 photos (school exterior, instructor, vehicle)
- [x] 8-12 approved student testimonials added to `src/data/testimonials.ts` ✅ 9 real reviews
- [ ] Legal data filled in `src/data/business.ts` and `src/data/legal.ts`:
  - [ ] ΑΦΜ (Tax ID)
  - [ ] Δ.Ο.Υ. (Tax Office)
  - [ ] Full legal business name
  - [ ] Driving school license number
  - [ ] Privacy policy effective date
- [ ] Domain purchased and DNS configured
- [ ] All `[PLACEHOLDER]` markers in `src/data/` files replaced with real data

### Important
- [ ] 5-10 additional FAQ entries added to `src/data/faq.ts`
- [ ] School founding story written for About page
- [ ] Instructor bio written for About page
- [ ] Google Maps embed URL updated with exact business listing
- [x] Favicon replaced with branded icon ✅ SVG monogram
- [x] Open Graph images created ✅ Dynamic PNG via next/og

### Optional
- [ ] English translation (adds scope)
- [ ] Online booking integration
- [ ] Additional service sub-pages (renewal, retraining)

## Technical Readiness

### Environment
- [ ] `NEXT_PUBLIC_GA_ID` set in Vercel
- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain
- [ ] `RESEND_API_KEY` configured for contact form email
- [ ] `CONTACT_EMAIL` set to business email
- [ ] `EMAIL_FROM` set to Resend-verified sender

### Deployment
- [ ] GitHub repository created and code pushed
- [ ] Vercel project created and linked
- [ ] Custom domain configured with SSL
- [ ] DNS propagation confirmed
- [x] Production build succeeds (`npm run build`) ✅

## Quality Assurance

### Functional
- [ ] All navigation links work (no 404s)
- [ ] Contact form submits successfully
- [ ] Phone links trigger dialer on mobile
- [ ] Email links open mail client
- [ ] Google Maps embed loads correctly
- [ ] Cookie consent banner appears on first visit
- [ ] Cookie preference persists after acceptance/decline
- [ ] FAQ accordions expand/collapse

### Responsive
- [ ] iPhone SE (375px) — no overflow, CTAs reachable
- [ ] iPhone 14 (390px) — layout correct
- [ ] iPad (768px) — proper tablet layout
- [ ] Desktop (1280px+) — full layout
- [ ] Mobile menu opens/closes correctly
- [ ] Sticky CTA bar visible on mobile, hidden on desktop

### Accessibility
- [x] Keyboard navigation works for all interactive elements ✅
- [x] Skip-to-content link works ✅
- [x] Form fields have proper labels ✅
- [x] Error messages are announced by screen readers ✅ aria-live
- [ ] Color contrast meets WCAG AA (4.5:1) — verify with tool
- [x] Focus indicators are visible ✅

### Performance
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse SEO > 95
- [ ] No render-blocking resources
- [x] Images optimized ✅ next/image with avif/webp

### SEO
- [x] Every page has unique `<title>` and meta description ✅
- [x] Schema.org JSON-LD present ✅ DrivingSchool + FAQPage
- [x] sitemap.xml accessible at /sitemap.xml ✅
- [x] robots.txt accessible at /robots.txt ✅ (preview-safe)
- [x] Open Graph image generates as PNG ✅ via next/og
- [ ] Google Search Console verified
- [ ] Google Business Profile "website" field updated

## Post-Launch
- [ ] Monitor Google Search Console for indexing issues
- [ ] Verify contact form emails are being received
- [ ] Check analytics data flowing in GA4
- [ ] Submit sitemap in Google Search Console
