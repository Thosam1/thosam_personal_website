# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server with Turbopack
- `npm run build` — Production build (automatically runs `next-sitemap` postbuild)
- `npm run lint` — ESLint with Next.js core web vitals rules

No test framework is configured.

## Architecture

Next.js 16 App Router personal portfolio/blog site using TypeScript and React 19.

### Routing (src/app/)

Two route groups provide different layouts:
- `(main)/` — Pages with Navbar, Footer, Newsletter, and ScrollToTopButton (home, portfolio, blog, sports)
- `(standalone)/` — Minimal layout for standalone pages (links)

Blog posts use dynamic routing: `(main)/blog/[slug]/page.tsx`

### Data Layer

All content is file-based with no external CMS:
- **Blog posts** — Markdown files in `data/blog/` with YAML frontmatter (title, publishedAt, summary, tags, seo). Parsed by `gray-matter` in `src/utils/blog/utils.ts`.
- **Portfolio data** — TypeScript files in `data/portfolio/` (work experience, skills, projects by category, courses by semester BA1–BA6/MA1–MA4)
- **Sports data** — TypeScript file in `data/sports/workoutsList.ts`

### Key Utilities

- `src/utils/blog/utils.ts` — `getAllPostsMetadata()`, `getPostMetadata(slug)`, `getPostContent(slug)`
- `src/utils/interfaces.ts` — Shared TypeScript interfaces (`IBlogPostMetadata`)
- `src/constants/index.ts` — Navigation links, social links, personal info
- `src/animations/animations.ts` — Reusable Framer Motion `fadeUpVariant(delayTime)`

## Styling

- **Tailwind CSS v4** as primary styling (via `@tailwindcss/postcss`)
- **CSS Modules** used for Navbar scoped styles (`Navbar/navbar.module.css`)
- **Framer Motion** for entrance animations on most components
- All interactive components use the `'use client'` directive

## Conventions

- Path alias: `@/*` maps to `src/*`
- SEO: Pages export `generateMetadata()` for dynamic Open Graph/Twitter meta
- Blog markdown rendered with `react-markdown` + `remark-gfm`, code blocks via `react-syntax-highlighter`
- Environment variable `WEBSITE_URL` used for sitemap generation

## Code Review

- **CodeRabbit** — AI code review via GitHub App, configured in `.coderabbit.yaml`
  - Automatically reviews all non-draft PRs (including Dependabot updates)
  - Uses "chill" profile; ESLint, markdownlint, and Gitleaks tools enabled
  - Skips static assets, blog content, and binary files
- **CodeRabbit CLI** — Available locally via `coderabbit` for on-demand reviews before pushing
