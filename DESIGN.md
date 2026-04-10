# Editorial Sanctuary Design System

_A warm, dark editorial design system for a dev blog built with Astro, daisyUI, and Tailwind._

---

## 1. North Star

**Editorial Sanctuary** — a dark, warm reading environment for technical writing and project logs. The goal is to feel calm, warm, and precise: not a sterile SaaS dashboard, not a "hacker" terminal aesthetic.

**Core principles:**
- **Readable first** — articles, navigation, metadata, and code must be easy to scan at all times
- **Warm, not muddy** — soft and grounded, never low-contrast or hazy
- **Accents, not ornament** — serif display type, gradients, and asymmetry are used selectively
- **Accessible by default** — contrast, focus states, reduced motion, and link clarity are requirements
- **Simple to implement** — map cleanly to daisyUI tokens and Tailwind utilities; avoid large custom layers

---

## 2. Color System

### Palette

| Token | Value | Role |
|---|---|---|
| `base-100` | `oklch(15% 0.012 55)` | Page background (darkest) |
| `base-200` | `oklch(19.5% 0.012 55)` | Cards, sections (lifted) |
| `base-300` | `oklch(24% 0.012 55)` | Code wells, inputs (accent surface) |
| `base-content` | `oklch(80% 0.018 60)` | Primary text — warm off-white |
| `primary` | `oklch(76% 0.14 70)` | Warm amber — brand/action color |
| `primary-content` | `oklch(15% 0.012 55)` | Text on amber |
| `secondary` | `oklch(58% 0.07 150)` | Muted sage — used sparingly |
| `accent` | `oklch(72% 0.13 65)` | Deeper amber — gradient endpoint |
| `neutral` | `oklch(17% 0.01 55)` | Utility (sticky header tint) |

### Surface hierarchy rule

`base-100` is the **darkest** (page background). Surfaces lift as they go up:

```
base-100 → page
base-200 → cards, sections (tonal lift creates structure)
base-300 → code wells, inputs (recessed accent)
```

Never place `bg-base-100` cards on a `bg-base-100` or `bg-base-200` page — this was the main cause of invisible borders in early iterations.

### Guidance

- Primary text (`base-content`) is warm off-white — **never pure white**, which causes harshness and eye strain on dark surfaces
- Use warm amber as the main brand/action tone; keep secondary and accent usage restrained
- Visual hierarchy comes first from spacing, then tonal surface contrast, then borders, then shadow
- Gradients only for primary CTAs; never behind body text or code

---

## 3. Typography

### Font roles

| Font | Use |
|---|---|
| **Newsreader** (serif) | Display headings: hero, article titles, large section headers |
| **Manrope** (sans-serif) | Everything else: nav, body, metadata, buttons, labels, cards |
| **JetBrains Mono** | Code blocks, inline code, filenames |

### Rules

- Use Newsreader for hero and article titles only — not in dense UI, forms, or archives
- Minimum body size: `16px`; article `line-height: 1.65–1.75`; code `line-height: 1.5`
- Ideal reading measure: `65–75ch` (use `max-w-3xl` for article columns)
- Metadata (dates, tags) should be muted but still legible — aim for ~55–65% opacity on `base-content`
- Avoid excessively thin weights on dark surfaces

### Semantic class

```css
.font-display { font-family: 'Newsreader', Georgia, serif; }
```

---

## 4. Layout

- **One strong reading column** for long-form posts (`max-w-3xl`, centered)
- **Wider container** for home/archive (`max-w-6xl`)
- Use asymmetry selectively: homepage hero and featured highlights are good candidates; article body, forms, and archives should be stable columns
- Generous vertical spacing between sections (`gap-16` between major sections)
- Sticky header with mild `backdrop-blur-sm` — no hard border; use `shadow-sm` for separation

---

## 5. Surface and Separation

**Preferred separation order:** spacing → background shift → border → shadow

### Cards and sections

Cards and sections use `bg-base-200` (lifted) on a `bg-base-100` (darkest) page. The tonal contrast alone provides structure. A border (`border-base-300`) adds explicit framing when needed.

```html
<!-- Standard card -->
<article class="rounded-box border border-base-300 bg-base-200 p-6">
```

Hover state: transition border toward amber (`hover:border-primary/30`) — subtle, not defining.

### Borders

Borders are permitted and encouraged when they improve clarity — especially for cards, inputs, dropdowns, and dense lists. Do not ban them globally. The `border-base-300` color is clearly lighter than `base-100` and `base-200`, making it naturally visible.

### Shadows

Reserve stronger shadows for floating elements: dropdowns, modals, popovers. Static content uses `shadow-sm` at most.

---

## 6. Components

### Primary button

Amber gradient, high-contrast dark text:

```css
.btn-primary {
  background: linear-gradient(135deg, oklch(76% 0.14 70), oklch(72% 0.13 65));
  color: oklch(15% 0.012 55);
  border: none;
  font-weight: 600;
}
```

Minimum tap target: `44px`. Hover should lighten the gradient slightly.

### Secondary button

Use `btn-outline` for supporting actions — inherits border and text color from the theme. Works well on dark surfaces.

### Links in prose

Underlined by default. Use amber (`primary`) color. Visited state may be distinguished in long-form reading contexts.

### Cards

- Generous padding (`p-6`)
- Rounded with `rounded-box` (1rem)
- Must look structured when not hovered — hover is an enhancement, not the only visual cue
- Do not rely on hover-only borders

### Code blocks

Code is first-class content.

- Use `base-300` as the code surface (slightly lifted from page)
- Moderate padding, `0.75rem` radius, horizontal scroll allowed
- Inline code: `bg-base-300`, `0.25rem` radius, `0.15em 0.4em` padding — distinct but not badge-like
- Syntax highlighting should be readable and restrained; comments should stay legible

### Inputs

Filled style preferred (use `bg-base-300`). Focus state: shift background slightly, add a low-opacity amber border (`border-primary/40`). Labels must always be visible — placeholders are not labels.

---

## 7. Elevation

- **Static UI**: tonal contrast first, no shadow
- **Sticky header**: `bg-base-100/90 backdrop-blur-sm shadow-sm`
- **Floating UI** (dropdowns, modals): `shadow-lg` + clear surface definition

Avoid glassmorphism on regular cards or as a site-wide rule. A lightly translucent sticky header is the one accepted blur use-case.

---

## 8. Accessibility

**Required:**
- Visible focus ring on all interactive elements: `outline: 2px solid primary; outline-offset: 2px`
- WCAG AA contrast for body text and controls
- `prefers-reduced-motion` support — disable transitions/animations when requested
- No information conveyed by hover or color alone
- Semantic heading structure (`h1` → `h2` → `h3`)
- Sufficient tap/click targets (`44px` minimum)

**Dark theme cautions:**
- Muted text degrades quickly — keep metadata at ≥55% opacity on `base-content`
- Warm amber loses contrast on dark surfaces; verify primary color meets AA at actual usage sizes
- Syntax highlighting needs independent contrast checks

---

## 9. Motion

Use motion for hover feedback, focus transitions, and menu entry/exit. Keep easing calm and short.

**Avoid:** parallax, excessive spring animations, long easing on repeated interactions, any background animation behind reading content.

Always honor `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Implementation

### daisyUI theme setup

Define a custom `[data-theme="editorial"]` block with CSS custom properties. Add `data-theme="editorial"` to every `<html>` element. Use `themes: false` in the plugin config to disable built-in themes.

### Suggested semantic classes

```
.font-display      Newsreader — display/editorial headings
.text-muted        ~55% opacity on base-content
```

### Tailwind strategy

Use a small number of reusable patterns rather than composing everything ad hoc. Prefer editing existing component classes over adding new utility chains.

---

## 11. Do and Don't

| Do | Don't |
|---|---|
| Use tonal surface contrast for hierarchy | Invert the surface hierarchy (cards darker than page) |
| Use borders when they improve clarity | Ban borders globally |
| Use Newsreader for hero and article titles | Use serif in dense UI, forms, or archives |
| Keep muted text ≥55% opacity | Push metadata text below legibility |
| Make focus states obvious | Use hover as the only interaction cue |
| Use amber gradient on primary CTAs only | Use gradients behind body text or code |
| Keep motion calm and short | Add parallax or background animation near content |
| Verify contrast independently for syntax highlighting | Assume UI contrast checks cover code themes |
