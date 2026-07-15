# Afaq Noor — Premium Portfolio

A production-ready, premium developer portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Dark-mode-first, glassmorphism UI with neon blue/purple accents, inspired by Apple, Linear, and Vercel.

## ✨ Features

- Hero with animated typing effect, particle canvas background, floating tech badges
- About with icon info cards + animated counting stats
- Skills with categorized, animated progress bars
- Experience timeline
- Projects grid with **live category filtering** (Android / Web / All)
- Services grid, "Why Choose Me" grid
- Auto-rotating testimonials carousel
- Contact section with form (client-side; wire to your own API/email service)
- Footer with socials + back-to-top
- Global: loading screen, scroll progress bar, custom cursor, mouse glow effect, dark/light theme toggle, scroll-spy responsive navbar
- SEO: metadata API, Open Graph + Twitter cards, JSON-LD `Person` structured data, `sitemap.ts`, `robots.ts`
- Fully responsive, keyboard-accessible interactive elements, semantic HTML

## 🧱 Tech Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Framer Motion · lucide-react · next-themes

> Note: Shadcn UI primitives were intentionally reimplemented as lightweight, dependency-free components (`components/ui/Button.tsx`, `components/ui/Section.tsx`) so the project has zero extra CLI setup. You can run `npx shadcn@latest init` and swap these in if you want the full Shadcn component library.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Production build:

```bash
npm run build
npm run start
```

This project **builds cleanly with zero TypeScript/ESLint errors** (verified with `npm run build`).

## ✏️ Customization Checklist

1. **Profile photo** — replace the placeholder avatar block in `components/sections/Hero.tsx` with a real `<Image />` of yourself. Drop your photo in `public/images/`.
2. **Resume** — add your real PDF at `public/resume/AfaqNoor-1.pdf` (referenced by `siteConfig.resumeUrl` in `lib/data.ts`).
3. **Content** — all text (name, bio, skills, projects, testimonials, services, links) lives in **`lib/data.ts`**. Edit that one file to update the entire site.
4. **Project images** — currently using royalty-free Unsplash URLs as placeholders. Swap in real app screenshots (place them in `public/images/projects/` and update `projects[].image` in `lib/data.ts`).
5. **Contact form** — the form in `components/sections/Contact.tsx` currently simulates sending. Wire it to an API route, or a service like Resend/Formspree/EmailJS.
6. **Fonts** — this build uses a system font stack (`--font-sans` / `--font-display` in `app/globals.css`) so it builds without network access. Once you have network access at build time, you can switch back to `next/font/google` (Inter + Space Grotesk) — see comment in `app/globals.css`.
7. **Domain** — update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.
8. **OG image** — add `public/images/og-cover.png` (1200×630) for social share previews.
9. **Favicon** — add `public/favicon.ico`.

## 📁 Project Structure

```
app/
  layout.tsx        # Root layout, metadata, JSON-LD
  page.tsx          # Assembles all sections
  globals.css        # Design system: glass, neon, gradients, cursor, scrollbar
  sitemap.ts / robots.ts
components/
  Navbar.tsx, Footer.tsx
  AnimatedBackground.tsx, ParticleBackground.tsx, MouseGlow.tsx, CustomCursor.tsx
  ScrollProgress.tsx, LoadingScreen.tsx, ThemeToggle.tsx, ThemeProvider.tsx
  ui/Button.tsx, ui/Section.tsx
  sections/Hero.tsx, About.tsx, Skills.tsx, Experience.tsx, Projects.tsx,
            Services.tsx, WhyChooseMe.tsx, Testimonials.tsx, Contact.tsx
lib/
  data.ts           # All content — single source of truth
  utils.ts          # `cn` classnames helper
```

## ⚡ Performance & Accessibility Notes

- All images use `next/image` with `sizes` for responsive loading.
- Motion respects `viewport={{ once: true }}` so animations don't re-trigger unnecessarily.
- Custom cursor auto-disables on touch devices (`pointer: coarse` media query).
- Color contrast tuned for dark background with light text (WCAG AA range).
- To push Lighthouse Performance/Accessibility above 95: compress/replace the Unsplash placeholder images with optimized local WebP assets, add a real favicon + OG image, and run `next build && next start` (not `next dev`) when auditing.

## 📦 Deploy

Optimized for **Vercel**: push to GitHub, import into Vercel, done. Works equally well on any Node.js host.
