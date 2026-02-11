<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Base_UI-1.1-black" alt="Base UI" />
  <img src="https://img.shields.io/badge/NX-monorepo-143055" alt="NX" />
</p>

# Infinity UI

A compound-first React component library with 10 production-ready components, built with React 19, TypeScript, Tailwind CSS v4, and Base UI primitives.

> **Design:** [Figma — Infinity UI](https://www.figma.com/design/p3mAmoXnY2WrnNI56TyEwF/Infinity-ui?node-id=5190-533)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run Storybook
npx nx storybook storybook
```

---

## Stack

| Layer | Technology | Role |
|-------|-----------|------|
| **Framework** | React 19 | Native ref support — no `forwardRef` |
| **Language** | TypeScript strict | Full type safety with `ComponentProps` + `VariantProps` |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/vite` plugin + `@source` for monorepo scanning |
| **Primitives** | Base UI React | Headless accessible components (Select, Combobox, Checkbox, Switch, Dialog) |
| **Variants** | Tailwind Variants (`tv`) | Variant definitions with compound support |
| **Class Merge** | Tailwind Merge (`twMerge`) | Intelligent className overrides |
| **Icons** | Lucide React | Consistent icon set |
| **Monorepo** | NX | Project graph, caching, task orchestration |
| **Build** | Vite 7 | Fast dev server and builds |
| **Docs** | Storybook 10 | Interactive component playground |

---

## Project Structure

```
infinity-ui/
├── apps/
│   └── storybook/                    # Storybook dev app
│       ├── .storybook/               # Storybook config
│       └── src/
│           ├── stories/              # Component stories
│           └── styles/
│               └── themes.css        # Tailwind v4 theme + @source
│
└── libs/
    └── components/                   # @dgstihler/components
        ├── index.ts                  # Public API exports
        ├── shared/                   # Field (universal form wrapper)
        │   ├── field.tsx
        │   ├── field-types.ts
        │   └── field-variants.ts
        ├── button/                   # Each component follows
        │   ├── button.tsx            #   3-file pattern:
        │   ├── types.ts              #   component + types + variants
        │   └── variants.ts
        ├── input/
        ├── select/
        ├── autocomplete/
        ├── checkbox/
        ├── switch/
        ├── modal/
        ├── toast/
        └── badge/
```

---

## Components

| Component | Compound Pattern | Key Features |
|-----------|-----------------|--------------|
| **Button** | `Solid` · `Outline` · `Ghost` · `SolidIcon` · `OutlineIcon` · `GhostIcon` | 3 sizes, rounded option |
| **Input** | `Counter` | Direct `<input>` element, 2 sizes |
| **Select** | `Item` | Base UI dropdown, 2 sizes, disabled items |
| **Autocomplete** | — | Searchable combobox with `items: string[]` |
| **Checkbox** | `Group` | Indeterminate, single-select, rounded, strikethrough |
| **Switch** | `Group` | 2 sizes, single-select, read-only |
| **Field** | `Label` · `Hint` · `Footer` | Universal form wrapper, 5 hint categories |
| **Modal** | `Trigger` · `Title` · `Description` · `Footer` · `Close` | Base UI Dialog with animations |
| **Toast** | `Icon` · `Label` · `Close` | 5 semantic categories |
| **Badge** | `Icon` · `Label` · `Close` | 7 categories |

---

## Architecture Decisions

### Compound Components via `Object.assign`

```tsx
// Definition
const Button = Object.assign(ButtonRoot, {
  Solid: ButtonSolid,
  Outline: ButtonOutline,
  // ...
})

// Usage
<Button.Solid size="large">Save</Button.Solid>
```

### Universal Field Wrapper

Form inputs don't own their label/hint — a shared `Field` component wraps them all:

```tsx
<Field>
  <Field.Label>Email</Field.Label>
  <Input type="email" placeholder="you@example.com" />
  <Field.Footer>
    <Field.Hint category="danger">Invalid email address</Field.Hint>
    <Input.Counter current={25} max={64} />
  </Field.Footer>
</Field>
```

### 3-File Component Pattern

```
component/
├── component.tsx    # Implementation + Object.assign exports
├── types.ts         # Props interfaces (ComponentProps + VariantProps)
└── variants.ts      # tv() variant definitions
```

### Key Conventions

- **Named exports only** — no default exports
- **`data-slot`** on every rendered element
- **`data-[state]:`** for conditional styles (disabled, checked, etc.)
- **`twMerge(variants(), className)`** — all components accept className overrides
- **Lowercase with hyphens** — `user-card.tsx`, not `UserCard.tsx`

---

## Tailwind CSS v4 Setup

The monorepo requires `@source` to scan classes from `libs/`:

```css
/* apps/storybook/src/styles/themes.css */
@import 'tailwindcss';
@source "../../../../libs/components/**/*.{ts,tsx}";
```

The `@tailwindcss/vite` plugin is **required** in `vite.config.mts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react(), nxViteTsPaths(), nxCopyAssetsPlugin(['*.md'])],
})
```

---

## Commands

```bash
# Development
npx nx storybook storybook        # Run Storybook

# Build
npx nx build components           # Build component library
npx nx run-many -t build          # Build all projects

# Quality
npx nx lint components            # Lint library
npx nx lint storybook             # Lint Storybook

# NX
npx nx graph                      # Visualize project graph
npx nx show projects              # List all projects
```

---

## Design

| Resource | Link |
|----------|------|
| Figma | [Infinity UI — Component Library](https://www.figma.com/design/p3mAmoXnY2WrnNI56TyEwF/Infinity-ui?node-id=5190-533) |
| Components | [`libs/components/README.md`](libs/components/README.md) |

---

## License

MIT
