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
5. Animation in layers: ~~Lenis~~ ✅ (SmoothScroll client component: autoRaf, anchors offset -64, reduced-motion opt-out) → scroll reveals → signature effects (one technique per lesson)
6. Real content: featured projects (eddyson landing, Autohaus Royal/CasAuto-Real, mesa-para-luis, AgnosticFilterChallenge), about, contact
7. Deploy (Vercel) + archive old Portffolio repo

**Git workflow:** public repo at github.com/Lucasle6/LuCas-Portfolio (branch `main`). Commit + push at the end of each lesson — partial pushes are the norm, don't wait for finished sections.

## Featured projects data (for the work section)
- eddyson Partner Landing — Next.js/Prismic/Tailwind v4 — https://eddyson-landing-assessment.vercel.app
- Autohaus Royal (CasAuto-Real) — React/NestJS/MySQL — https://cas-auto-real-web.vercel.app
- Mesa para Luis — Next.js/Framer Motion, multilingual — https://lucasle6.github.io/mesa-para-luis/
- Agnostic Filter Challenge — TypeScript — https://lucasle6.github.io/AgnosticFilterChallenge_Wallr/
