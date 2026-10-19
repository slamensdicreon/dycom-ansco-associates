# Ansco & Associates website (Next.js)

One-for-one rebuild of https://anscollc.com on **Next.js App Router + TypeScript** (server components, small client islands).

## Scripts
- `pnpm --filter @workspace/ansco dev` – dev server on `0.0.0.0:$PORT` (default 3000)
- `pnpm --filter @workspace/ansco build` – `next build`
- `pnpm --filter @workspace/ansco serve` – production server on `0.0.0.0:$PORT`
- `pnpm --filter @workspace/ansco typecheck`

## Where to edit content
| What | File |
| --- | --- |
| Menu, footer links, phone, address, social, external URLs | `src/content/site.ts` |
| Home, About, Safety, Quality, Subcontractors | `src/content/corporate.ts` |
| Careers, Opportunities (featured jobs), Benefits, Life@Ansco | `src/content/careers.ts` |
| FAQ (English) | `src/content/faq.tsx` |
| FAQ (Spanish, /faq-es/) | `src/content/faq-es.tsx` |
| Subcontractor request form labels/choices | `src/content/subcontractor-request.ts` |
| Office locations, contact form request types, HQ map | `src/content/contact.ts` |
| Privacy policy text | `src/content/privacy.ts` |
| Benefits carousels (one per group) | items in `src/content/careers.ts` -> `benefits.groups` |
| Brand colors / fonts / spacing tokens | `src/app/globals.css` (`:root`) |

Images live in `public/assets/` (originals from the live site) and are referenced by path in the content files.

## Structure
```
src/app/layout.tsx              root html, fonts, fixed header
src/app/(corporate)/...         home, about, safety, quality, subcontractors, faq, faq-es, subcontractor-request, contact, contact/locations, privacy-policy (standard footer)
src/app/(careers)/...           careers, opportunities, benefits, life (careers footer)
src/components/                 Banner, Blocks (Panel, FancyBox, VideoEmbed, CTA), Interactive (Counter, Accordion, ReadMore, JobSearchForm),
                                ContactForm, SiteHeader, SiteFooter, LocationsGrid
src/lib/metadata.ts             per-page title/description/OG helper
```

## Integrations
- Contact form posts JSON to `POST /api/contact` (workspace API server). Submissions are stored; no email is sent until delivery is configured.
- Job search, "Apply Now", "Connect with us!" go to the live Dycom SAP SuccessFactors career site.
- Subcontractor request form posts JSON to `POST /api/subcontractor-request` (workspace API server). Submissions are stored; no email is sent.
- Locations: filterable list synced to a Google Maps address embed of the selected office (the original plugin's coordinates are not in the page source, so none are used).
- Vimeo (home background, careers, quality, FAQ) and Google Maps (contact) use the original embeds.
- Not copied: WordPress scripts, Termly consent blocker, analytics/tracking, reCAPTCHA.
