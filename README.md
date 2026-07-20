# Design Analysis — ns. (NITESH Singh) Portfolio

**Reference:** `https://editor-relic-25929555.figma.site/`
**Type:** Figma Make (React/Preact + Tailwind v4 + Framer Motion bundle, served as static SPA with SSR shell)
**Theme:** Light "paper" / "ink" — completely inverted from the previous dark "Kaito Tanaka" portfolio

The reference is a single-page portfolio for **NITESH Singh** — a full-stack developer and open-source contributor focused on web, mobile, and AI/ML projects. It's aimed at recruiters for internships, new-grad roles, and OSS collaboration.

This document is the consolidated Phases 1-3 (analysis + reverse engineering + feature list) before any code changes.

---

## 1. Color & Type System

### Color tokens (paper / ink palette)
| Token | Value | Role |
|---|---|---|
| `--paper` | `#f4f5f2` | Page background — warm cream |
| `--paper-dim` | `#e8eae4` | Slightly darker paper for nested surfaces |
| `--ink` | `#0c0e10` | Primary text, dark sections, buttons |
| `--ink-2` | `#14171b` | Section surfaces on dark, hover-bg on light |
| `--ink-3` | `#1c2026` | Even deeper ink for dark cards |
| `--amber` | `#14b88a` | Signature accent — emerald-green (NOT orange) |
| `--amber-deep` | `#0e8f6b` | Darker amber for hover/active states |
| `--coral` | `#7c5cff` | Secondary accent — vivid purple |
| `--line` | `#dfe0d8` | 1px hairline borders on light bg |
| `--line-dark` | `#e4f1ed21` | Borders on dark sections (~12% white) |
| `--muted-2` | `#5e615a` | Body-copy secondary text on light |
| `--muted-dark` | `#9aa097` | Secondary text on dark |
| `--gutter` | `clamp(20px, 4vw, 64px)` | Page padding (matches our existing project) |
| `--radius-card` | `24px` | Standard card radius |
| `--radius-pill` | `999px` | Pill / chip radius |

### Typography
- **Display / Headings:** `Clash Display` (Fontshare) — `font-weight: 600/700`, `letter-spacing: -0.02em to -0.04em`, lowercase, very tight line-height (`0.85–0.95`)
- **Body:** `General Sans` (Fontshare) — `400/500/600`
- **Mono:** `JetBrains Mono` (Google Fonts) — used for labels, code, PR IDs, system status, "eyebrow" tags (11-13px, uppercase, `letter-spacing: 0.12–0.16em`)
- **Type scale:** headings use `clamp()` heavily, e.g. `clamp(54px, 9.5vw, 118px)` for the hero h1, `clamp(34px, 5vw, 56px)` for section titles

### Eyebrow / Section labels
Each section starts with a small monospace label like:
- `— ABOUT`
- `01 / LIVE DEMO`
- `02 / OPEN SOURCE`
- `03 / PROJECTS`
- `04 / SKILLS`
- `— HIGHLIGHTS`
- `— THE LAB`
- `05 / INTERESTS`
- `06 / GOALS`
- `07 / CONTACT`

Style: `font-size: 11px`, `letter-spacing: 0.14em`, `text-transform: uppercase`, color `--muted-2` (light sections) or `--muted-dark` (dark sections).

### Radius / Spacing
- Cards: `border-radius: 24px` (`--radius-card`)
- Pills: `999px` (`--radius-pill`)
- Section padding: `120px var(--gutter)` top/bottom
- Section max-width: `1400px`, centered

---

## 2. Page Structure (single page, anchor navigation)

1. **Intro Loader** (full-screen, dark, dismisses on first paint)
   - Brand: `ar.` (top-left), caption `SECURITY · OPEN SOURCE — '26`, "IGNITION" tag (top-right, amber)
   - Center: two concentric SVG circles — outer `spin-slow` ring, inner dial sweep (270° arc, `--amber`) — "KM·H" / "RPM" labels
   - Bottom: "BOOTING SYSTEM" + 3-digit counter `001 → 100` animating from 1→100 over 2.2s, easeOutCubic
   - Slides up with `scaleY: 0` exit, 700ms `cubic-bezier(0.76, 0, 0.24, 1)`
   - Respects `prefers-reduced-motion: reduce` (skips to done in 200ms)

2. **Header (sticky)** — fixed, `z-9000`, transparent → frosted when scrolled > 24px
   - `ar.` wordmark (left)
   - 7 anchor links (desktop only, `hidden lg:block`): Home · About · Demo · Open Source · Projects · Skills · Contact
   - "MADE IN INDIA" pill (right, with green dot)
   - Mobile: MENU / CLOSE toggle button → collapsible nav

3. **Hero / Home** — 2-column grid `1.15fr / 0.85fr` on desktop, single column on mobile
   - Eyebrow: `— security researcher — open source contributor` (with 28×1 black line)
   - H1: `chaos & order` (3 words, "order" amber-accented), animated word reveal
   - SVG underline that draws on (pathLength 0→1, 1s, easeInOut, delay 0.6s)
   - Bio paragraph (max-width 520ch)
   - Education + batch line
   - 4 round social chips: gh, in, lc, @ (44×44, hover inverts to ink/paper)
   - 2 CTAs: `RESUME` (filled, ink) + `SEE THE WORK →` (outline, gap expands on hover)
   - 3-stat row: `10+ projects (shipped) · 5+ OSS PRs (merged) · 3 stacks (web · mobile · ai)`
   - Right column: terminal card — 4×5 aspect, coral offset card behind, traffic-light dots, `nitesh@arch: ~/whoami` prompt, `whoami` / `cat role.txt` output, gradient-mask portrait image

4. **About** — `— ABOUT` eyebrow
   - 25-word word-reveal headline: "i'm a full-stack developer who loves to design, ship, and open source — working across the mern stack, mobile apps, and build things with ai."
   - Horizontal marquee: 14 skill chips duplicated, grayscale → color on hover
   - Pull-quote: "student by day. **contributor** by night. **arch linux**, always." (`<blockquote>`, display font, 60px)

5. **Live Demo** — `01 / LIVE DEMO`, dark section (`--ink` bg, `--paper` text)
   - Title: "chaos, on **purpose**."
   - Right: small mono caption
   - Terminal card (16/9 aspect, `--ink-2` bg, `--line-dark` border):
     - Top bar: blinking red REC dot · "SHIP — LIVE DEMO" · "WEB / CLI"
     - Play button (left) / Replay button (after play)
     - 6 staged script lines, fade in 700ms apart:
       - `nitesh@arch:~/work$ git clone https://github.com/NETIZEN-11/project && cd project`
       - `[*] injecting chaos · terminating target pods ...`
       - `[+] cerberus health check OK · connection pool reused`
       - `[!] script-injection guard active in CI workflow`
       - `nitesh@arch:~/work$ npm run dev -- --host`
       - `[✓] 16 issues flagged · 10+ PRs merged upstream`

6. **Open Source** — `02 / OPEN SOURCE`
   - 3 contribution cards (your-org-here / your-org-here-2 / your-org-here-3) each with:
     - Header strip: org name (display 26px), project subtitle, context pill (border), merge-count pill (amber bg)
     - PR table rows: code id (amber-deep, mono 12px) · description · category tag (color-coded: Reliability, Performance, Security, Bug Fix, Quality, Input Safety, Networking)

7. **Projects** — `03 / PROJECTS`, dark section
   - 2-card grid: `CloudVault` (Full-Stack, OJT, 2025–Present) + `GitHub Stats API` (Personal, 2024)
   - Each card: title + year chip, type label, 3→ highlights with `→` arrow, deployment line, credits, stack chips, "repo / live link: [DATA REQUIRED]" placeholder or `VIEW PROJECT ↗` link

8. **Skills** — `04 / SKILLS`
   - 2-column grid of 6 categories: Languages / Cloud Native & DevOps / Security / Web & Backend / Data & AI/ML / OS & Tools
   - Each category: amber-deep uppercase label, hairline top border, wrap of mono pill chips that invert on hover

9. **Highlights** — dark section, `— HIGHLIGHTS`
   - 4 numbered cards (01-04) on dark `--ink-2` background with `--line-dark` border:
     - "10+ shipped projects — web, mobile, AI"
     - "5+ OSS PRs merged across multiple repos"
     - "3 stacks: MERN, mobile, AI/ML"

10. **Gallery / The Lab** — `— THE LAB`
    - 6-image grid (2 cols mobile, 3 cols desktop, 220px auto-rows) with first image spanning 2×2
    - Images: dev workstation / terminal session / circuit board / network cabling / mech keyboard / source code (all Unsplash)
    - Hover: `scale(1.05)` 700ms
    - Overlay: huge "systems" text (clamp 72-280px) with `mix-blend-mode: overlay`

11. **Interests + Goals** — 2-col grid on desktop
    - Left: `05 / INTERESTS` — "what **drives** me"
      - Focus areas pill cluster (6 topics)
      - "In my free time" bullet list (5 items, `›` arrow)
      - `os of choice: Arch Linux 🐧` (black pill with white text)
    - Right: `06 / GOALS` — "where i'm **headed**"
      - 3 horizon cards with amber left-border: Short term / Medium term / Long term

12. **Marquee (dark)** — `let's build · open source · ship fixes · stay curious` (4×, display font, amber dot separators, reverse direction)

13. **Contact** — `07 / CONTACT`, dark section
    - Title: "let's **build** something."
    - Left col (0.8fr): intro paragraph, big amber email link, mono phone link, 4 round social chips
    - Right col (1.2fr): contact form
      - Name + Email (2-col on sm+)
      - "What's it about?" — 4 topic pill chips (Internship / Open Source / Security Research / Collaboration) with selected state
      - Message textarea (3 rows, floating label)
      - `SEND IT →` amber button (gap expands 2→4 on hover)
      - Inline "✓ opens your mail client" confirmation toast for 3s after submit
      - Footnote: "form backend not yet wired — connect Supabase or an email service to receive submissions."

14. **Footer (dark)** — centered
    - `ar.` wordmark
    - 7-link nav
    - Giant display text "break things, / ship fixes." (with amber `.`), `clamp(44px, 12vw, 170px)`, second line `-webkit-text-stroke: 1.5px` outline style
    - `© 2026 NITESH SINGH · BUILT WITH CARE — SHIPPED IN PUBLIC · EMAIL`

15. **Back-to-top button** — appears after `window.scrollY > 800`, fixed bottom-right, scrolls to top smoothly

---

## 3. Animations & Interactions

| Animation | Trigger | Effect |
|---|---|---|
| Intro loader exit | `done` state | `scaleY: 0` (transform-origin: top), 700ms `cubic-bezier(0.76, 0, 0.24, 1)` |
| Word reveal (hero h1, section titles) | `whileInView` | Each word: `y: 110%` → `0%` with `staggerChildren: 0.07` over 700ms `cubic-bezier(0.16, 1, 0.3, 1)` |
| Hero SVG underline | `whileInView` (delay 0.6s) | `pathLength: 0 → 1`, 1s easeInOut |
| Generic section reveal (`M` component) | `whileInView` | `opacity: 0→1`, `y: 24→0`, 700ms same easing, once, `-10% 0px` margin |
| Stats card reveal | delay `t * 0.05` | Same M component |
| Project card reveal | delay `t * 0.08` | Same M component |
| Highlight card reveal | delay `t * 0.06` | Same M component |
| Gallery image reveal | delay `t * 0.05` | Same M component |
| Demo terminal script lines | setInterval 700ms | `opacity: 0→1, x: -8→0`, 300ms |
| Social chip hover | mouseenter | bg + text invert (ink ↔ paper), `transition: 200ms` |
| Social chip hover micro | mouseenter | `transform: translateY(-0.5)` |
| CTA hover | mouseenter | For outline button: `gap: 2 → 4` 300ms |
| Skill chip hover | mouseenter | bg + text invert (ink/paper) |
| Gallery image hover | mouseenter | `transform: scale(1.05)` 700ms |
| Marquee scroll | always on | 40s linear infinite, `--paper-dim` / dark / amber variants |
| Header backdrop | `scrollY > 24` | bg `rgba(248,247,243,0.82)` + `backdrop-filter: blur(10px)` + bottom border |
| Back-to-top button | `scrollY > 800` | opacity toggle |
| Contact form submit | click SEND IT | `e.preventDefault()`, sets `submitted: true` for 3s, builds a `mailto:` URL with form data (note: original just shows toast — not actually wired) |
| Rec dot blink | always | `cursor-blink` 1s ease-in-out infinite |

### Easing
- Word reveal / section reveal: `[0.16, 1, 0.3, 1]` (expo out)
- Loader exit: `[0.76, 0, 0.24, 1]`
- Most transitions: 200-300ms with default Tailwind easing

### `prefers-reduced-motion`
- Loader skipped (200ms timeout to done)
- Word reveals become instant
- CSS already has a `*` rule overriding animation/transition durations to `0.01ms`

---

## 4. State Management (vanilla equivalent)

Since we are converting from React/Framer Motion to vanilla, the state map is:

| State | Owner | Purpose |
|---|---|---|
| `loaderDone` | `app.js` (module) | One-shot boolean; once true, removes `.intro` element and triggers `body.classList.add('loaded')` |
| `headerScrolled` | `app.js` (module) | Toggles `.is-scrolled` on `<header>` |
| `backToTopVisible` | `app.js` (module) | Toggles `.is-visible` on `.back-to-top` |
| `demoPlaying` | `app.js` (module) | Per-section: true while typing, false at end |
| `demoLineCount` | `app.js` (per-section) | Current line index 0..5 |
| `contactTopic` | `app.js` (module) | One of `'Internship' \| 'Open Source' \| 'Security Research' \| 'Collaboration'` |
| `contactSent` | `app.js` (module) | Boolean, auto-resets after 3000ms |
| `marqueePaused` | `app.js` (per marquee) | Hover pauses animation |
| `mobileMenuOpen` | `app.js` (module) | Toggles drawer |

All managed with `let` variables and DOM updates. No framework needed.

---

## 5. Component Inventory

Reusable components we will need:

1. **Eyebrow** — small uppercase mono label, variant `light` | `dark`
2. **Section header** — eyebrow + animated word-reveal h2 + optional right-aligned caption
3. **Stat tile** — large value + label + sub
4. **Social chip** — round 44×44 link with hover inversion, variant `light` | `dark`
5. **Skill pill** — `<span>` chip that inverts on hover
6. **Pill / chip** (generic) — selectable, used for OSS context pills, project topic chips, contact topic chips
7. **Marquee** — duplicated content, CSS animation, pause-on-hover, variants `light` | `dark` | `amber`
8. **Word-reveal heading** — splits words, animates each on intersect
9. **Terminal card** — used in hero (portrait) and demo (script)
10. **PR row** — code · description · category tag
11. **Project card** — dark variant
12. **OSS contribution card** — light variant
13. **Highlight card** — dark, numbered
14. **Gallery tile** — image with hover scale
15. **Contact form** — topic chips, floating-label inputs, submit button, mailto toast
16. **Drawer** — mobile menu
17. **Intro loader** — full-screen dial + counter
18. **Back-to-top button**

---

## 6. Folder Plan

We will keep the existing flat structure (`app.js` / `index.html` / `styles.css`) since the project has been maintained this way. The `app.js` will be re-organized into clearly named sections matching the page order, but remain a single file. We will add a `data.js` that holds all the content (extracted from the Figma bundle) so the data can be edited without touching markup.

```
sadasdas/
├── index.html       # Markup for all sections
├── styles.css       # Design tokens + all section styles + responsive
├── app.js           # All vanilla JS: loader, header, reveals, form, etc.
├── data.js          # Content data (NITESH's profile, projects, skills, etc.)
└── README.md        # This document
```

---

## 7. Implementation Plan

1. **Phase 4a — Data layer**
   - `data.js` exporting all content: `profile`, `navLinks`, `socials`, `stats`, `gallery`, `ossContribs`, `projects`, `skillGroups`, `highlights`, `focusAreas`, `freeTime`, `osOfChoice`, `goals`, `contactTopics`, `marqueeItems`, `demoScript`, `heroPullquote`.

2. **Phase 4b — Markup**
   - `<header>` with sticky nav, wordmark, socials, mobile menu
   - `<main>` with sections in order: home, about, demo, open-source, projects, skills, highlights, gallery, interests, contact
   - `<footer>` with giant "break things, ship fixes." display
   - `.intro` loader overlay
   - `.back-to-top` button
   - All CDN fonts and libraries loaded (Clash Display, General Sans, JetBrains Mono)

3. **Phase 4c — Styles**
   - Token block at `:root`
   - Typography + reset
   - Header (with scroll state)
   - Intro loader
   - Hero (2-col grid, terminal card, stats row)
   - About (word-reveal + marquee + pull-quote)
   - Live demo (terminal + REC dot + line animation)
   - Open source (3 cards with PR tables)
   - Projects (2 cards, dark)
   - Skills (6 categories, chip grid)
   - Highlights (4 numbered cards, dark)
   - Gallery (3×2 grid with first spanning 2×2, big "systems" overlay)
   - Interests + goals (2-col)
   - Marquee (dark variant)
   - Contact (form + topic chips + floating labels)
   - Footer (giant display text with stroke)
   - Back-to-top
   - Mobile responsive at 1100px, 760px, 480px
   - `prefers-reduced-motion` overrides

4. **Phase 4d — JS**
   - No external libraries except the existing Three.js (we keep it for the user since they like it; it can sit behind the new design as a subtle bg layer or be removed for a cleaner look)
   - Loader: counter RAF + exit transition
   - Header: scroll listener for backdrop
   - Word reveal: IntersectionObserver splits each `.reveal-words` heading into word spans, animates them on view
   - Section reveal: IntersectionObserver adds `.is-in` for opacity/y transitions (CSS handles the animation)
   - Magnetic: kept as `data-magnetic` (no visual change), uses CSS custom properties
   - Demo player: play/replay button + interval typing
   - Contact form: topic chip selection, mailto URL build, toast
   - Back-to-top: scroll listener
   - Mobile menu: toggle + a11y
   - Marquee pause on hover

5. **Phase 4e — Polish & A11y**
   - All images have `alt`
   - Form labels are real `<label>`s
   - Focus states on all interactive elements
   - `prefers-reduced-motion` honored
   - Skip-to-content link
   - Skip animation for users with reduced motion
   - ARIA on dialog/menu buttons

---

## 8. Open Decisions

- **Three.js hero?** — The original Three.js icosahedron doesn't fit the paper/ink theme. We'll **hide it by default** in the new design and let it be re-enabled via a query param or removed entirely. For Phase 4 we'll hide it.
- **External images** — Unsplash is allowed. We'll keep them and add lazy loading.
- **Form backend** — The original is unwired. We will build a real `mailto:` URL on submit that opens the user's mail client pre-filled with the topic, name, and message.

---

## 9. Build / Test Plan

- `node --check app.js` for syntax
- Manual test in headless / browser preview:
  - Loader plays and exits
  - Each section reveals on scroll
  - Word reveal works
  - Marquee scrolls
  - Demo terminal types out
  - Contact topic chips select
  - Mailto opens
  - Mobile menu works
  - Reduced motion skips animations
  - Responsive at 1100 / 760 / 480px
