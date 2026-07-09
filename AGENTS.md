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
- **Palette:** light theme. White base, deep navy `#020073` as the hero accent, soft blue gradients, pale mint section tints (`#F5FFF8`, `#F6F9F7`), soft grays. Warm, approachable, professional.
- **Animations:** Lenis smooth scroll, scroll-driven reveals, huge two-line statement typography (second line in gray), glowing vertical timeline with nodes, uppercase mono tech tags, drifting project cards on scroll, sticky rotating accent shape, big italic-accent contact headline. Take the *techniques*, recolor them navy — not lime/dark.
- Distinctive bet: most animated portfolios are dark; this one is light with fine-grained motion.

## Build plan (agreed with the user)
1. ~~GitHub hygiene~~ ✅ (profile README, descriptions, pins, git identity fixed)
2. ~~Scaffold~~ ✅ (this repo: Next.js 16.2.10, TS, Tailwind, App Router, src/, npm)
3. ~~Design tokens~~ ✅ (navy/mint palette + Sora/Fira Sans/Geist Mono as `@theme` tokens in globals.css; token showcase in page.tsx until the Hero replaces it)
4. ~~Static layout + Hero first~~ ✅ (Navbar/Footer in layout.tsx, Hero + placeholder sections in page.tsx, anchor nav with scroll-mt; still no animation)
5. Animation in layers: ~~Lenis~~ ✅ (SmoothScroll client component: autoRaf, anchors offset -64, reduced-motion opt-out) → ~~scroll reveals~~ ✅ (Reveal client component: motion/react whileInView fade+rise, once:true, stagger via delay prop, reduced-motion fallback) → ~~signature effects~~ ✅ all three: drifting work cards (DriftCard: useScroll+useTransform parallax, per-card speed), glowing timeline (Timeline: spring-driven scaleY fill + whileInView node ignition), rotating accent shape (RotatingAccent: page-scroll-bound SVG asterisk in contact)
6. ~~Real content~~ ✅: featured projects (WorkSection + `lib/projects.ts`), about (AboutSection: sticky bio + `lib/timeline.ts` — **grounded in the CV since 2026-07-06**: Mechatronics at Tec → Flex 2017 → Bosch 2018–2023 → M.Sc. Berlin → Karl Storz 2024–2026 → open to next; bio says 7+ years, Guadalajara→Berlin), contact (ContactSection: "Say hola." with Fraunces italic accent + mailto CTA)

**Tech section (added 2026-07-06, effect inherited from the old Portffolio repo's Technologies.jsx):** `#tech` between Work and About, bg-sage. 14 CV skills as brand-colored react-icons (Simple Icons — note: no Playwright icon exists, Cypress used instead). TechBadge client component: staggered slide-in from the left (curtain, index*0.07s delay) + grayscale→color on arrival + infinite desynced bobbing (old repo's iconVariants pattern). CV lives at `public/jose-luis-castaneda-leon-cv.pdf`; source of truth for career data.

**LC monogram (redesigned 2026-07-06):** the logo encodes the brand — Sora Bold "L" + Fraunces Italic "C" (the site's typographic duality), the signature asterisk sparking off the C in #8fa4ff, on a navy→#2743e3 gradient tile with the dot-grid texture masked into the lower-right corner. Favicon via App Router convention: `src/app/icon.png` (512px, transparent corners; default favicon.ico removed) — regenerate with scratchpad logo.html + puppeteer if the brand changes. A ghost version (text with the same mixed letterforms, text-navy/[0.06], blur-sm = 8px in Tailwind v4, 24rem, lg+ only) sits in the hero between the gradient blob and the DotGrid, so the cursor reveals dots on top of it.

**Hero name effects (parity, added 2026-07-06):** the H1 is now the full name (statement moved into the paragraph). MagneticLetters: per-letter gaussian proximity scale (dock effect, max 1.22 under cursor, 90px radius; also on the navbar logo at radius 36). DotGrid: navy dot matrix revealed through a spring-trailed radial mask around the cursor, self-attaches listeners to its parent section. Both no-op under reduced motion.

**Contact FAB + form (floating companion, redesigned 2026-07-06):** ContactFab in the root layout — fixed TOP-right (top-20 right-6, below the navbar), icon-only asterisk button, always visible. Hover: a "Say hola" bubble unfolds leftward (width 0→auto, right-anchored) and the asterisk spins continuously (inner svg, 1.1s linear loop). Scroll: unbounded rotation, scrollY×0.25° through a spring (outer span) — inner and outer transforms compose. Opens a modal dialog (AnimatePresence, Escape/backdrop close, data-lenis-prevent, html overflow lock). Inputs keep cursor:text under the custom cursor; cursor z-index (10001/10002) sits above the dialog overlay (10000).

**Real email sending (working in prod since 2026-07-06):** POST `/api/contact` route handler + Resend SDK (`from onboarding@resend.dev`, `to j.cleon695@gmail.com`, `replyTo` = visitor — camelCase; the runtime silently ignores snake_case `reply_to` and only the prod typecheck catches it). Hidden "company" honeypot field → fake 200 on bots. `RESEND_API_KEY` lives in `.env.local` (gitignored) and in Vercel project env (Production, Sensitive). Resend account is registered with j.cleon695@gmail.com (required for keyless-domain delivery, 100/day free).

**Gotcha (piping secrets to `vercel env add` on Windows):** PowerShell's pipe appends CRLF and the CLI only strips the LF — the stored value keeps a trailing `\r`, and the Resend Authorization header then crashes the function with `TypeError: Cannot convert argument...` (500). Add env vars via `cmd /c "npx vercel env add NAME production < file"` where the file has no trailing newline ([IO.File]::WriteAllText).

**Custom cursor (added 2026-07-06):** CustomCursor in the root layout — navy dot glued to the pointer + spring-trailing ring. Context variants via document-level pointerover: links/buttons grow the ring to 56px with an action glyph (↓ download, @ mailto, ↗ target=_blank), the hero h1 turns it into a 100px navy wash (dot hides). Native cursor hidden via html.has-custom-cursor (class added only when mounted: fine pointers, no reduced motion — touch/AT keep defaults).

**Card hover physics (beyond the original plan, user asked to go big):** TiltCard client component wraps each work card inside DriftCard — pointer-tracked 3D tilt (±5° through springs, 900px perspective), cursor-following navy spotlight (useMotionTemplate radial-gradient), -8px lift on hover, 0.98 squash on tap; plus CSS micro-interactions (arrow nudge on links via named groups, navy shift on number/title, tag pills fill navy). All collapse under reduced motion.

**CV:** `public/jose-luis-castaneda-leon-cv.pdf`, download links in hero CTA row + contact. To update, overwrite that file (source was Downloads/CV_Developer_JLCL.pdf).

**Project preview images:** real screenshots in `public/projects/*.png` (1280x800, headless Chrome). Static sites: `chrome --headless=new --screenshot --virtual-time-budget=9000`. SPA/animated sites (CasAuto-Real) need real waits: puppeteer-core script pointing at installed Chrome, `networkidle2` + ~6s sleep. Profile photo = user's GitHub avatar at `public/profile.png`. To refresh a preview, recapture and overwrite.

**Gotcha (Turbopack persistent cache):** if a newly added `@theme` token in globals.css doesn't generate its utility (even after restarting the dev server), wipe `.next` and restart — the persistent cache can serve stale compiled CSS.
7. ~~Deploy (Vercel) + archive old Portffolio repo~~ ✅ **PLAN COMPLETE** (2026-07-06)

## i18n (added 2026-07-06)
Route-based EN/ES/DE/TR (German + Turkish added 2026-07-06; TR fits the Mesa-para-Luis es/en/tr/de skill set): `src/app/[locale]/{layout,page}.tsx` (no plain root layout — html/body live in [locale]/layout with `lang`), both locales prerendered via generateStaticParams. All UI strings in `src/lib/dictionary.ts` (`es` is typed against `en`, so a missing translation is a build error); projects/timeline data carry per-locale text. Locale detection in **`src/proxy.ts`** — Next 16 renamed the middleware convention to `proxy` (export `proxy`, not `middleware`); it redirects locale-less paths by Accept-Language (es* → /es, else /en), matcher skips api/_next/files. Toggle in the navbar maps over `locales` (add a locale → link appears automatically), aria-current on the active one. proxy.ts walks the Accept-Language list and picks the first tag matching a locale, else en. Brand wink: EN "Say *hola*", ES "Di *hello*", DE "Sag *hola*". Adding a locale = add it to `locales` + one dict block; TS then forces `de` keys in projects.ts descriptions and timeline.ts (build fails until complete). German uses the plain latin subset (umlauts covered). **Turkish needs `latin-ext`** (ı, İ, ş, ğ aren't in latin) — added to Sora/Fira Sans/Geist Mono in [locale]/layout.tsx. Known nuance: with `lang="tr"`, CSS `text-transform: uppercase` applies Turkish i-casing, so the hardcoded-English tech tags render "TYPESCRİPT/TAİLWİND" (dotted İ) on /tr; cosmetic, brand names — fix later with lang="en" on that list if wanted.

## Deymar de-fork (2026-07-06)
`Lucasle6/Deymar` was a fork of `luisleon6/Deymar` (user's lost original account). De-forked into a standalone repo: bare-cloned (291 MB — full-res architecture photos across history), renamed old fork → `Deymar-fork-old` (re-archived as backup), created fresh non-fork `Lucasle6/Deymar`, `git push --mirror` (23 commits), set default branch `master`, re-enabled legacy Pages → live again at same URL https://lucasle6.github.io/Deymar/. Now the first Work card (replaced Agnostic Filter, whose demo stayed down). Screenshot: `public/projects/deymar.png`.

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
