<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project context: LuCas Portfolio

Personal portfolio of **José Luis Castañeda León** (GitHub: Lucasle6, LinkedIn: luisleon6, email j.cleon695@gmail.com). Replaces the old `Portffolio` repo (archive it once this ships).

## Working mode (important)
**Step-by-step teaching mode.** The user is learning while building: explain each concept and decision before/while implementing, one phase at a time. Conversation language: Spanish. Don't build ahead of the lesson.

## Design direction
Mix of two references — colors from one, animation techniques from the other:
- **Palette (from briceclain.com):** light theme. White base, deep navy `#020073` as the hero accent, soft blue gradients, pale mint section tints (`#F5FFF8`, `#F6F9F7`), soft grays. Warm, approachable, professional.
- **Animations (from jocaibe.com):** Lenis smooth scroll, scroll-driven reveals, huge two-line statement typography (second line in gray), glowing vertical timeline with nodes, uppercase mono tech tags, drifting project cards on scroll, sticky rotating accent shape, big italic-accent contact headline. Take the *techniques*, recolor them navy — not lime/dark.
- Distinctive bet: most animated portfolios are dark; this one is light with fine-grained motion.

## Build plan (agreed with the user)
1. ~~GitHub hygiene~~ ✅ (profile README, descriptions, pins, git identity fixed)
2. ~~Scaffold~~ ✅ (this repo: Next.js 16.2.10, TS, Tailwind, App Router, src/, npm)
3. ~~Design tokens~~ ✅ (navy/mint palette + Sora/Fira Sans/Geist Mono as `@theme` tokens in globals.css; token showcase in page.tsx until the Hero replaces it)
4. ~~Static layout + Hero first~~ ✅ (Navbar/Footer in layout.tsx, Hero + placeholder sections in page.tsx, anchor nav with scroll-mt; still no animation)
5. Animation in layers: ~~Lenis~~ ✅ (SmoothScroll client component: autoRaf, anchors offset -64, reduced-motion opt-out) → ~~scroll reveals~~ ✅ (Reveal client component: motion/react whileInView fade+rise, once:true, stagger via delay prop, reduced-motion fallback) → ~~signature effects~~ ✅ all three: drifting work cards (DriftCard: useScroll+useTransform parallax, per-card speed), glowing timeline (Timeline: spring-driven scaleY fill + whileInView node ignition), rotating accent shape (RotatingAccent: page-scroll-bound SVG asterisk in contact)
6. ~~Real content~~ ✅: featured projects (WorkSection + `lib/projects.ts`), about (AboutSection: sticky bio + `lib/timeline.ts` — **grounded in the CV since 2026-07-06**: Mechatronics at Tec → Flex 2017 → Bosch 2018–2023 → M.Sc. Berlin → Karl Storz 2024–2026 → open to next; bio says 7+ years, Guadalajara→Berlin), contact (ContactSection: "Say hola." with Fraunces italic accent + mailto CTA)

**Tech section (added 2026-07-06, effect inherited from the old Portffolio repo's Technologies.jsx):** `#tech` between Work and About, bg-sage. 14 CV skills as brand-colored react-icons (Simple Icons — note: no Playwright icon exists, Cypress used instead). TechBadge client component: staggered slide-in from the left (curtain, index*0.07s delay) + grayscale→color on arrival + infinite desynced bobbing (old repo's iconVariants pattern). CV lives at `public/jose-luis-castaneda-leon-cv.pdf`; source of truth for career data.

**Hero name effects (jocaibe parity, added 2026-07-06):** the H1 is now the full name (statement moved into the paragraph). MagneticLetters: per-letter gaussian proximity scale (dock effect, max 1.22 under cursor, 90px radius; also on the navbar logo at radius 36). DotGrid: navy dot matrix revealed through a spring-trailed radial mask around the cursor, self-attaches listeners to its parent section. Both no-op under reduced motion.

**Contact FAB + form (added 2026-07-06, jocaibe's floating companion):** ContactFab in the root layout — fixed bottom-right "Say hola" pill (with a mini RotatingAccent that spins with scroll). Appears after 500px of scroll, hides while #contact is in view. Opens a modal dialog (AnimatePresence, Escape/backdrop close, data-lenis-prevent, html overflow lock). Inputs keep cursor:text under the custom cursor.

**Real email sending (added 2026-07-06):** POST `/api/contact` route handler + Resend SDK (`from onboarding@resend.dev`, `to j.cleon695@gmail.com`, `reply_to` = visitor; note the installed resend@6 types use snake_case `reply_to`). Hidden "company" honeypot field → fake 200 on bots. Requires `RESEND_API_KEY` in `.env.local` AND in Vercel project env (the account must be registered with j.cleon695@gmail.com for keyless-domain delivery). Without the key the route returns 503 and the dialog shows a direct-email fallback. **Do not deploy contact-form changes to prod until the key is configured in Vercel.**

**Custom cursor (added 2026-07-06):** CustomCursor in the root layout — navy dot glued to the pointer + spring-trailing ring. Context variants via document-level pointerover: links/buttons grow the ring to 56px with an action glyph (↓ download, @ mailto, ↗ target=_blank), the hero h1 turns it into a 100px navy wash (dot hides). Native cursor hidden via html.has-custom-cursor (class added only when mounted: fine pointers, no reduced motion — touch/AT keep defaults).

**Card hover physics (beyond the original plan, user asked to go big):** TiltCard client component wraps each work card inside DriftCard — pointer-tracked 3D tilt (±5° through springs, 900px perspective), cursor-following navy spotlight (useMotionTemplate radial-gradient), -8px lift on hover, 0.98 squash on tap; plus CSS micro-interactions (arrow nudge on links via named groups, navy shift on number/title, tag pills fill navy). All collapse under reduced motion.

**CV:** `public/jose-luis-castaneda-leon-cv.pdf`, download links in hero CTA row + contact. To update, overwrite that file (source was Downloads/CV_Developer_JLCL.pdf).

**Project preview images:** real screenshots in `public/projects/*.png` (1280x800, headless Chrome). Static sites: `chrome --headless=new --screenshot --virtual-time-budget=9000`. SPA/animated sites (CasAuto-Real) need real waits: puppeteer-core script pointing at installed Chrome, `networkidle2` + ~6s sleep. Profile photo = user's GitHub avatar at `public/profile.png`. To refresh a preview, recapture and overwrite.

**Gotcha (Turbopack persistent cache):** if a newly added `@theme` token in globals.css doesn't generate its utility (even after restarting the dev server), wipe `.next` and restart — the persistent cache can serve stale compiled CSS.
7. ~~Deploy (Vercel) + archive old Portffolio repo~~ ✅ **PLAN COMPLETE** (2026-07-06)

## Deployment
- **Live:** https://lucas-portfolio-puce-ten.vercel.app (Vercel project `lucasles-projects/lucas-portfolio`, fully static prerender)
- Deploy from CLI: `npx vercel deploy --prod --yes` (logged in as lucasle6). `.vercel/` and `.env.local` (OIDC token) are local-only.
- **Auto-deploy on push is NOT wired yet:** `vercel git connect` fails because the Vercel GitHub App lacks access to this repo. To enable: Vercel dashboard → lucas-portfolio → Settings → Git → Connect, or grant repo access at github.com/settings/installations. Until then, push does not deploy — run the CLI command.
- Old `Portffolio` repo archived on GitHub (its separate portffolio-psi.vercel.app deployment still exists under the user's Vercel account).

**Git workflow:** public repo at github.com/Lucasle6/LuCas-Portfolio (branch `main`). Commit + push at the end of each lesson — partial pushes are the norm, don't wait for finished sections.

## Featured projects data (for the work section)
- eddyson Partner Landing — Next.js/Prismic/Tailwind v4 — https://eddyson-landing-assessment.vercel.app
- Autohaus Royal (CasAuto-Real) — React/NestJS/MySQL — https://cas-auto-real-web.vercel.app
- Mesa para Luis — Next.js/Framer Motion, multilingual — https://mesa-para-luis.vercel.app (github.io URL is the stale static export)
- Agnostic Filter Challenge — TypeScript — demo https://lucasle6.github.io/AgnosticFilterChallenge_Wallr/ is 404 (Pages deploy inactive despite green workflow); card links repo only until fixed
