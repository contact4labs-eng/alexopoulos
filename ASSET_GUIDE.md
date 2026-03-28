# Asset Guide — Required Files Before Launch

## Logo
- **Format:** SVG preferred (scales perfectly), PNG acceptable (min 400px wide)
- **Variants needed:** Light version (for dark backgrounds), dark version (for light backgrounds)
- **Current fallback:** Text logotype "Αλεξόπουλος" — looks intentional, not broken
- **Where it goes:** Replace text in `src/components/layout/header.tsx` and `src/components/layout/footer.tsx`

## Photography

### Must-Have (3 photos minimum)
| Photo | Purpose | Specs |
|-------|---------|-------|
| School exterior | Hero, About page, Contact page | Landscape, min 1600×900px, daytime, clean |
| Makis (instructor) | About page, trust signals | Portrait or candid teaching shot, min 800×800px |
| Training vehicle | Services pages, trust signals | Clean car, well-lit, min 1200×800px |

### Nice-to-Have
| Photo | Purpose | Specs |
|-------|---------|-------|
| Interior/classroom | About page | Well-lit, organized space |
| Street view / Palaio Faliro | Local connection | Neighborhood landmark |
| Student success moment | Reviews page | With permission, candid |

### Photography Guidelines
- Natural light preferred
- No heavy filters
- Real people, not stock
- Car should be clean and modern
- School exterior should look inviting

## Open Graph Images
- Create 1200×630px images for social sharing
- Place in `public/images/og/`
- Default: `og-default.png` (used site-wide)
- Per-page: `og-home.png`, `og-services.png`, etc.

## Favicon
- Current: Next.js default favicon
- Replace `src/app/favicon.ico` with school's branded icon
- Also add `src/app/icon.png` (180×180px) for Apple touch icon
