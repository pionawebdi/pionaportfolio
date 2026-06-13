## Jack — 3D Creator Portfolio Landing Page

A single-page, scroll-driven dark portfolio built to the spec, on the existing TanStack Start + Tailwind v4 stack.

### Stack notes (kept tight to project conventions)
- Tailwind v4 is already configured via `src/styles.css` (`@import "tailwindcss"`). I will NOT add `tailwind.config.js`. Custom values like `clamp()` font sizes will live as inline `style={{ fontSize: 'clamp(...)' }}` since arbitrary `text-[clamp(...)]` is awkward in v4.
- Kanit font loaded via `<link>` tags in `src/routes/__root.tsx` head (per Tailwind v4 remote-font rule — never `@import` a URL in CSS). Font family applied through a `--font-kanit` token in `@theme` and a base `body` rule.
- Framer Motion already installed? I'll add `framer-motion` via `bun add` if missing. `lucide-react` is already standard in shadcn projects but I'll verify.
- All page content lives in `src/routes/index.tsx` (replaces the placeholder), with components under `src/components/portfolio/`.

### File plan

```text
src/
  routes/
    __root.tsx               (edit: add Kanit <link> + update default title/meta)
    index.tsx                (replace placeholder; render the 5 sections)
  styles.css                 (edit: add .hero-heading gradient class, body bg #0C0C0C, Kanit token)
  components/portfolio/
    ContactButton.tsx
    LiveProjectButton.tsx
    FadeIn.tsx
    Magnet.tsx
    AnimatedText.tsx
    HeroSection.tsx
    MarqueeSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
    data.ts                  (marquee URLs, services list, projects list)
```

### Section build order
1. **Global styles + fonts**: add Kanit preconnect/stylesheet links, set `html/body/#root` bg `#0C0C0C`, define `.hero-heading` gradient utility, set `overflow-x: clip` on the main wrapper.
2. **Reusable components**:
   - `FadeIn` — `motion.div` with `whileInView`, easing `[0.25,0.1,0.25,1]`, props `delay/duration/x/y`.
   - `Magnet` — mouse-tracking transform on a wrapper div, padding/strength/transition props.
   - `AnimatedText` — per-character opacity tied to `useScroll` progress (`['start 0.8','end 0.2']`).
   - `ContactButton`, `LiveProjectButton` — pill buttons with exact gradients/outlines.
3. **HeroSection** — h-screen flex column: navbar, massive gradient heading "Hi, i'm jack", bottom bar (tagline + Contact button), absolutely-positioned Magnet-wrapped portrait. All FadeIn delays per spec.
4. **MarqueeSection** — two horizontally-scrolling rows (11 + 10 images, each tripled) tied to `window.scrollY` via a passive listener; opposite directions; 420×270 rounded tiles.
5. **AboutSection** — 4 corner decorative images with FadeIn x-offsets, gradient "About me" heading, `AnimatedText` paragraph, Contact button.
6. **ServicesSection** — white rounded-top panel, "Services" heading, 5 numbered rows with borders and staggered FadeIn.
7. **ProjectsSection** — dark rounded-top panel pulled up `-mt-10/-12/-14`, 3 sticky-stacking cards using `useScroll` + `useTransform` for scale `1 - (n-1-i)*0.03`, each with the 2+1 image grid and Live Project button.

### Technical details
- **Scroll-driven marquee**: single `useEffect` adding a passive `scroll` listener; computes `offset = (scrollY - sectionTop + innerHeight) * 0.3` and writes `translateX` via refs (no React re-render per frame).
- **Sticky card stacking**: each card wrapped in `h-[85vh]` container, card itself `sticky top-24 md:top-32`, scale driven by `useScroll({ target: containerRef, offset: ['start end','start start'] })` mapped to `[1, targetScale]`.
- **Character animation**: `AnimatedText` splits text into chars; each char's opacity = `useTransform(scrollYProgress, [i/total, (i+1)/total], [0.2, 1])`.
- **Magnet**: `mousemove` on `window`, check bounding rect ± padding, set transform `translate3d(dx/strength, dy/strength, 0)`, swap `transition` between active/inactive strings.
- **Images**: external URLs used as-is with `loading="lazy"`; no asset imports needed.
- **Meta/SEO**: `index.tsx` head sets title "Jack — 3D Creator" and matching description/OG tags.

### Out of scope
- No backend, no forms wiring (Contact button is visual only — clicking does nothing unless you want a `mailto:` or anchor target).
- No dark/light toggle; page is always dark.
- No routing beyond `/`.

### Open question
The Contact button has no specified action. Default: render as a plain `<button>` with no handler. If you'd prefer `mailto:` or a scroll-to anchor, say which and I'll wire it during build.
