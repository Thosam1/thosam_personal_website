# Design System

This file documents the design tokens, typography, and spacing standards for the personal website. All tokens are defined as CSS custom properties in `src/app/globals.css` and registered with Tailwind v4 via `@theme`, so they generate utility classes automatically.

---

## Color System

### How It Works

Colors are defined as **semantic tokens** using CSS custom properties. Light and dark values are set in `:root` and `.dark` respectively. Tailwind picks them up via `@theme` and generates classes like `text-text-primary`, `bg-bg-base`, etc. — no `dark:` prefix needed.

```
:root       → light mode values
.dark       → dark mode values (auto-applied by next-themes)
@theme      → registers as Tailwind color utilities
```

### Semantic Color Tokens

| Token | Tailwind Class | Light | Dark | Usage |
|-------|---------------|-------|------|-------|
| `--bg-base` | `bg-bg-base` | `#FFFFFF` | `#121212` | Page background |
| `--bg-elevated` | `bg-bg-elevated` | `#FFFFFF` | `#181818` | Cards, modals, navbar |
| `--bg-highlight` | `bg-bg-highlight` | `#F3F4F6` | `#282828` | Hover states, active items |
| `--text-primary` | `text-text-primary` | `#1F2937` | `#FFFFFF` | Headings, primary content |
| `--text-secondary` | `text-text-secondary` | `#4B5563` | `#B3B3B3` | Body text, descriptions |
| `--text-subdued` | `text-text-subdued` | `#6B7280` | `#6A6A6A` | Timestamps, captions, metadata |
| `--border-default` | `border-border-default` | `#E5E7EB` | `#282828` | Borders, dividers |
| `--accent` | `text-accent` | `#2563EB` | `#3B82F6` | Links, interactive elements |
| `--accent-hover` | `bg-accent-hover` | `#1D4ED8` | `#60A5FA` | Hovered accent elements |

### Primitive Colors (Reference Only)

These are the raw color values behind the tokens. Do not use these directly in components — always use the semantic tokens above.

**Light Mode Primitives:**
- White: `#FFFFFF`
- Gray-100: `#F3F4F6` (highlight)
- Gray-200: `#E5E7EB` (borders)
- Gray-500: `#6B7280` (subdued text)
- Gray-600: `#4B5563` (secondary text)
- Gray-800: `#1F2937` (primary text)
- Blue-600: `#2563EB` (accent)
- Blue-700: `#1D4ED8` (accent hover)

**Dark Mode Primitives (Spotify-inspired):**
- Base Black: `#121212`
- Elevated: `#181818`
- Highlight: `#282828`
- Subdued Text: `#6A6A6A`
- Secondary Text: `#B3B3B3`
- Primary Text: `#FFFFFF`
- Blue-500: `#3B82F6` (accent)
- Blue-400: `#60A5FA` (accent hover)

### Special Colors (Not Tokenized)

These colors are used in specific contexts and don't need theme switching:

| Color | Usage | Notes |
|-------|-------|-------|
| `border-l-green-300` | CS course cards | CourseType accent |
| `border-l-blue-300` | COM course cards | CourseType accent |
| `border-l-purple-300` | MATH/MGT course cards | CourseType accent |
| `border-l-yellow-300` | PHYS course cards | CourseType accent |
| `border-l-teal-300` | BIO course cards | CourseType accent |
| `border-l-pink-300` | CH course cards | CourseType accent |
| `border-l-red-300` | HUM course cards | CourseType accent |
| `bg-blue-950` | ScrollToTopButton, primary action | Always dark-styled |
| `border-red-500`, `text-red-500` | Error states | Works in both modes |
| `bg-blue-500` | Newsletter subscribe button | Primary CTA |

---

## Typography

### Scale

| Level | Classes | Usage |
|-------|---------|-------|
| Display | `text-4xl font-bold` | Hero headings (desktop) |
| H1 | `text-3xl font-bold` or `text-4xl font-semibold` | Page/section titles |
| H2 | `text-2xl font-semibold` or `text-2xl font-bold` | Card titles, sub-sections |
| H3 | `text-xl font-semibold` | Semester headings, modal titles |
| Body | `text-base font-light leading-loose` | Paragraphs, descriptions |
| Small | `text-sm` | Dates, metadata, button text |
| Caption | `text-xs` | Validation messages, labels |

### Weights

| Weight | Class | Usage |
|--------|-------|-------|
| Light | `font-light` | Body text, descriptions |
| Medium | `font-medium` | Buttons, navigation links |
| Semibold | `font-semibold` | Section headings, card names |
| Bold | `font-bold` | Hero headings, primary card titles |

### Line Heights

| Class | Usage |
|-------|-------|
| `leading-loose` | Body paragraphs |
| `leading-relaxed` | Profile bios |
| `leading-10` | Markdown/prose content |

---

## Spacing

### Page Layout

| Context | Value | Notes |
|---------|-------|-------|
| Max content width | `max-w-300` | Main layout container |
| Page horizontal padding | `px-8` | Consistent across pages |
| Hero top padding | `pt-36` | Push below navbar |
| Section vertical padding | `py-6` or `py-16` | Standard section spacing |

### Component Spacing

| Context | Value |
|---------|-------|
| Card content padding | `px-6 py-4` |
| Button padding | `py-2 px-2` or `py-2 px-4` |
| Grid gaps | `gap-6` (cards), `gap-12` (nav), `gap-16` (sections) |
| Stack spacing | `space-y-6` (content blocks) |

---

## Conventions

### Adding New Components

1. Use semantic color classes (`text-text-primary`, `bg-bg-elevated`, etc.) — never hardcode gray/slate values
2. For hover states, use `hover:bg-bg-highlight`
3. For borders, use `border-border-default`
4. For links, use `text-accent`
5. Use `font-light` for body text, `font-semibold` for headings

### Theme Toggle

- Managed by `next-themes` with `attribute="class"` strategy
- `ThemeProvider` wraps the app in `src/app/layout.tsx`
- Toggle button in `Navbar.tsx` uses `useTheme()` from `next-themes`
- Default theme: `system` (respects OS preference)

### Dark Mode One-Offs

For the rare case where a component needs different behavior beyond the semantic tokens (e.g., SVG inversion), use `dark:` prefix with the `@custom-variant dark` defined in globals.css:
```tsx
<Image className="dark:invert" ... />
```
