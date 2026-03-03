# Sathveek Nalla Official Portfolio — Complete Website Explanation

> This document explains the portfolio website from project structure to current implementation, including the theme system (light/dark), UI architecture, major pages/sections, and the changes made during the most recent enhancement pass.

---

## 1) What this project is

This is a **Next.js** portfolio site (App Router) built with:

- **Next.js 16.1.6**
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (via `@import "tailwindcss"`)
- **next-themes** for theme switching
- **framer-motion** for animations (used in some UI components)

The site includes:

- A multi-page navigation bar
- A detailed home page with multiple sections (hero, projects, services, skills, testimonials, contact)
- Additional pages like `/projects`, `/services`, `/news`, `/contact`, etc.
- Light mode + dark mode
- A downloadable resume file served from `public/`

---

## 2) How to run the site locally

From the `site/` folder:

```bash
npm run dev
```

Then open:

- `http://localhost:3000`

Production build:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

---

## 3) High-level folder structure

Inside `site/`:

- `src/app/`
  - App Router routes (pages) and the global layout
- `src/components/`
  - Reusable components (Navbar, Footer, UI primitives, etc.)
- `src/components/ui/`
  - Shared UI primitives (Card, Section, etc.)
- `src/lib/`
  - Helpers + content utilities
- `public/`
  - Static assets served directly by Next.js (images, resume PDF)

Important files:

- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ThemeProvider.tsx`
- `src/components/ThemeToggle.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Section.tsx`

---

## 4) App entry + global layout

### `src/app/layout.tsx`
This is the App Router root layout. It:

- Loads the Inter font via `next/font/google`
- Wraps all pages with the `ThemeProvider` (from `next-themes`)
- Applies global typography smoothing and base colors

Theme provider settings:

- `attribute="class"` means `next-themes` toggles a `.dark` class on `<html>`
- `defaultTheme="system"` follows the user’s OS preference by default
- `enableSystem` allows system theme switching
- `disableTransitionOnChange` prevents visual “flashing” or transitional blend glitches when toggling theme
- `themes={["light", "dark"]}` keeps theme choices constrained and consistent

---

## 5) Global styling + design tokens (the key to clean UI)

### `src/app/globals.css`
This file defines:

- **CSS variables** (design tokens): background, foreground, muted, card, border, shadows, accents
- **A theme-aware page background** texture/gradient
- Shared utility classes like `.container-page`, `.glass`, and animation helpers

#### 5.1) The theme tokens
The design uses CSS variables like:

- `--background`, `--foreground`
- `--muted` (secondary text)
- `--card`, `--card-muted` (card backgrounds)
- `--border`
- `--accent`, `--accent-2` (primary brand gradient)
- `--ring` (focus outline)
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`

#### 5.2) The main fix: dark mode + light mode background switching
Originally, the page background texture was effectively “light-first”, which caused dark mode to look washed / merged.

The current implementation uses a dedicated variable:

- `--page-bg` in `:root` (light)
- `--page-bg` in `.dark` (dark)

And then:

- `body { background: var(--page-bg); }`

This is the correct pattern because **the entire page texture switches** when theme changes.

#### 5.3) Preventing text blending
Text blending typically happens when:

- muted text is too low contrast
- card backgrounds are too transparent on a textured background
- hover glows add strong overlays that reduce readability

To solve this globally:

- `--muted`, `--card-muted`, and `--border` were tuned for better contrast
- `.glass` blur was slightly increased

#### 5.4) Theme-aware glow overlays
Two variables exist:

- `--glow-1`
- `--glow-2`

These are **different** in light vs dark to keep hover glows attractive but not overpowering.

---

## 6) Navigation + resume download

### `src/components/Navbar.tsx`
Navbar features:

- Desktop navigation with a “More” dropdown
- Mobile drawer menu
- Theme toggle button
- “Download Resume” button

#### Resume download behavior
The download links are:

- `href="/resume.pdf"`
- `download="Sathveek_Nalla_Resume.pdf"`

This ensures:

- The file is served from `public/`
- The browser downloads it with a clean filename

---

## 7) Resume file: where it lives and why

Next.js only serves static files **directly** from:

- `site/public/`

So the canonical resume file must be:

- `site/public/resume.pdf`

A separate top-level folder also exists in the repo:

- `resume/Sathveek_Nalla_officaial Resume.pdf`

During the last update, that resume was copied into:

- `site/public/resume.pdf`

So the Navbar download always serves the correct resume.

---

## 8) Core UI primitives (consistency = professional look)

### `src/components/ui/Card.tsx`
The Card component supports variants:

- `elevated`
- `glass`
- `gradient`
- `outline`

It also supports:

- `interactive` hover lift + shadow
- `glow` shadow

#### Important improvement
The hover overlay and glow shadow now use:

- `var(--glow-1)` and `var(--glow-2)`

instead of hardcoded RGBA values.

This makes cards look consistent and readable across themes.

### `src/components/ui/Section.tsx`
This standardizes section spacing and tones:

- Responsive padding: `py-16 sm:py-20 lg:py-24`
- `tone="muted"` and `tone="accent"` add subtle background and border dividers

---

## 9) Footer

### `src/components/Footer.tsx`
Footer includes:

- Branding
- Quick links
- Social links

Internal navigation links were converted from `<a href="...">` to Next.js `<Link>` to satisfy Next lint rules and improve client-side navigation.

---

## 10) Theme switching implementation

### `src/components/ThemeProvider.tsx`
Simple wrapper around `next-themes`.

### `src/components/ThemeToggle.tsx`
Theme toggle:

- Uses `useTheme()` from `next-themes`
- Computes `isDark` from `resolvedTheme`
- On click, calls `setTheme(isDark ? "light" : "dark")`

Hydration safety:

- The icon span uses `suppressHydrationWarning` to avoid hydration mismatch warnings.

Lint correctness:

- Removed `setState` inside `useEffect` pattern that triggered `react-hooks/set-state-in-effect`.

---

## 11) Home page: key sections and content

### `src/app/page.tsx`
The home page is a long multi-section layout including:

- **Hero** (intro, headline, CTA)
- **Impact** metrics cards
- **About** section with image and bullet lists
- **Projects** grid
- **Services** feature rows
- **Highlight** gradient block with stats
- **Skills** grid + ticker
- **Testimonials**
- **Contact** split layout with contact info + form

### Newly added: “How I Work” section
A new professional section was added:

- Clear 4-step process
- Improves credibility and “agency” feel
- Includes CTA to services/contact

Also fixed a readability issue:

- A paragraph in the contact sidebar card used `text-white/80` on a light background; changed to `text-[var(--muted)]`.

---

## 12) Quality fixes and error cleanup

### ESLint
`npm run lint` was run and fixed until it passed.

Fixed categories:

- **Next.js lint rule:** internal navigation should use `<Link />` instead of `<a href>`
- **React hook lint:** removed `setState` called synchronously inside an effect for mounted state
- **Unused vars warnings:** removed unused imports/variables in blog components

Current status:

- `npm run lint` passes

---

## 13) Responsiveness and UI clarity rules used

To keep the UI professional and readable:

- Prefer token-driven colors: `text-[var(--muted)]`, `bg-[var(--card)]`, `border-[var(--border)]`
- Keep section spacing consistent (via `Section` or consistent `py-20` usage)
- Avoid overly transparent cards on textured backgrounds
- Keep hover glows subtle and theme-aware
- Ensure light mode never uses “white text” unless the background is actually dark

---

## 14) What you can customize easily

### Change resume
Replace:

- `site/public/resume.pdf`

### Social links
Update in:

- `src/components/Footer.tsx`
- `src/app/page.tsx` (contact buttons)

### Navbar items
Update in:

- `src/components/Navbar.tsx`

### Home page content
Update in:

- `src/app/page.tsx` arrays like `projects`, `services`, `skills`, `testimonials`, and `process`.

---

## 15) Suggested next upgrades (optional)

If you want the portfolio to look even more “top-tier”, the next best additions are:

- Case studies page per project (problem → approach → architecture diagram → results)
- Experience timeline page
- Certifications / awards section
- A “Toolbox / Uses” page
- Better SEO (structured data, metadata per page)

---

## 16) Quick verification checklist

- Theme toggle switches background + text clearly
- Cards are readable in both light and dark
- No white text on light backgrounds
- Resume downloads from Navbar (desktop + mobile)
- `npm run lint` passes
- `npm run dev` runs with no runtime errors

---

## 17) Summary of the latest enhancement pass (what was done)

- Implemented theme-aware page background (`--page-bg`) for correct dark/light appearance
- Improved contrast tokens to prevent text blending
- Made Card hover glows theme-aware (`--glow-1`, `--glow-2`)
- Improved theme toggle reliability and removed lint violations
- Wired resume download correctly using `public/resume.pdf` and clean download filename
- Added “How I Work” professional section
- Fixed internal navigation lint issues (`<Link>` instead of `<a>`) and removed unused vars

---

If you want, I can also generate a second markdown file that is a **page-by-page** and **component-by-component** reference (like internal documentation), but this file already covers the full system overview and the exact implementation decisions that make the UI clean and professional.
