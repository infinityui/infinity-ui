# Infinity UI - AI Coding Agent Instructions

## Project Overview

Infinity UI is a headless UI component library built with React 19, TypeScript, Tailwind CSS v4, and Base UI React. The project uses NX monorepo architecture with component libraries in `libs/components/` and a Storybook app for development and documentation.

## Architecture

### Monorepo Structure
```
infinity-ui/
├── apps/
│   └── storybook/          # Main Storybook app (development environment)
│       └── src/styles/
│           └── themes.css  # Tailwind v4 theme definitions
└── libs/
    └── components/         # Single consolidated UI library (@dgstihler/components)
        ├── button/
        │   ├── button.tsx      # Component logic
        │   ├── variants.ts     # Tailwind variants
        │   └── types.ts        # TypeScript interfaces
        ├── checkbox/
        │   ├── checkbox.tsx
        │   ├── variants.ts
        │   └── types.ts
        ├── (other components following same pattern)
        ├── shared/         # Shared utilities
        ├── src/
        │   └── index.ts    # Main barrel export
        ├── package.json    # Single package configuration
        └── project.json    # NX configuration
```

### Component File Structure

Each component follows a consistent structure with separated concerns (3 files per component):

**component.tsx** - Component logic only
```tsx
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './variants'
import type { ButtonProps } from './types'

export function Button({ className, variant, size, ...props }: ButtonProps) {
  // Component implementation
}
```

**variants.ts** - Tailwind variants definitions
```tsx
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: ['...'],
  variants: { ... },
  defaultVariants: { ... }
})
```

**types.ts** - TypeScript interfaces
```tsx
import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { buttonVariants } from './variants'

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {}
```

**NO index.ts in component folders** - Direct imports only (see AGENTS.MD rule)

### Tech Stack
- **React 19** - NO `forwardRef` (native ref support)
- **TypeScript** - Strict mode enabled
- **Tailwind CSS v4** - Using `@theme` directive with CSS variables
- **Base UI React** - Headless primitives (`@base-ui/react`)
- **Tailwind Variants** - Component variant management
- **Tailwind Merge** - Intelligent class merging
- **Lucide React** - Icon library
- **NX** - Monorepo tooling and build system
- **Vite** - Build tool for all packages

## Critical Conventions

### File Naming
- **Always lowercase with hyphens**: `user-card.tsx`, `use-modal.ts`
- Component files: `button.tsx`, not `Button.tsx`
- Hook files: `use-auth.ts`, not `useAuth.ts`

### Exports
- **ALWAYS use named exports**, NEVER default exports
- ❌ `export default Button`
- ✅ `export { Button, buttonVariants, type ButtonProps }`
- **NO barrel files (`index.ts`) in component folders** - only at package root (`libs/components/src/index.ts`)
- Main package export imports directly from component files: `export { Button } from '../button/button'`

### Component Structure Pattern

Every component MUST follow this exact structure:

```tsx
import { tv, type VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'
import type { ComponentProps } from 'react'

// 1. Define variants with tv()
export const componentVariants = tv({
  base: ['base-classes', 'data-attributes', 'focus-visible'],
  variants: {
    variant: { primary: '...', secondary: '...' },
    size: { sm: '...', md: '...', lg: '...' }
  },
  defaultVariants: { variant: 'primary', size: 'md' }
})

// 2. Define props interface extending ComponentProps + VariantProps
export interface ComponentProps
  extends ComponentProps<'element'>,
    VariantProps<typeof componentVariants> {}

// 3. Component with named export
export function Component({ className, variant, size, ...props }: ComponentProps) {
  return (
    <element
      data-slot="component"
      className={twMerge(componentVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

### TypeScript Patterns
```tsx
// ✅ Correct
import type { ComponentProps } from 'react'
export interface ButtonProps extends ComponentProps<'button'> {}

// ❌ Never use
type ButtonProps = React.FC<...>  // No React.FC
props: any                        // No any type
```

### Styling Patterns

#### Always Use Data Attributes for State
```tsx
// In component
data-disabled={disabled ? '' : undefined}
data-selected={selected ? '' : undefined}

// In Tailwind classes
'data-[disabled]:opacity-50'
'data-[selected]:bg-primary'
'data-[state=open]:animate-in'
```

#### Always Use `data-slot` Attribute
```tsx
<button data-slot="button">
<div data-slot="card-header">
```

#### CSS Variable Naming (from themes.css)
```
Backgrounds: bg-surface, bg-surface-raised, bg-primary, bg-secondary, bg-muted, bg-destructive
Text: text-foreground, text-foreground-subtle, text-muted-foreground, text-primary-foreground
Borders: border-border, border-input, border-primary, border-destructive
Focus: ring-ring
```

#### Focus Management
```tsx
'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
```

#### Icon Sizing
```tsx
// In JSX
<Check className="size-4" />

// In variant classes
'[&_svg]:size-3.5'
```

### Base UI Integration

When wrapping Base UI components:

```tsx
import * as Primitive from '@base-ui/react/component'

export interface Props extends Omit<ComponentProps<typeof Primitive.Root>, 'className'> {
  className?: string
}

export function Component({ className, ...props }: Props) {
  return (
    <Primitive.Root
      data-slot="component"
      className={twMerge(variants(), className)}
      {...props}
    />
  )
}
```

Common Base UI patterns:
- Dialog: `<Dialog.Root><Dialog.Portal><Dialog.Backdrop /><Dialog.Popup /></Dialog.Portal></Dialog.Root>`
- Select: `<Select.Root><Select.Trigger /><Select.Portal><Select.Popup><Select.Item /></Select.Popup></Select.Portal></Select.Root>`
- Tabs: `<Tabs.Root><Tabs.List><Tabs.Tab /></Tabs.List><Tabs.Panel /></Tabs.Root>`

## Theme System

Two themes defined in `apps/storybook/src/styles/themes.css`:

1. **Default Theme** - Subtle, professional SaaS design (less rounded)
2. **Paper Theme** - Based on provided Figma designs (more rounded)

Both themes support light and dark modes via `prefers-color-scheme`.

Switch themes using Tailwind's `@theme` directive - NO hardcoded colors in components.

## NX Workflows

### Initial Project Setup (Reference)

Commands used to create this project from scratch:

```bash
# 1. Create NX workspace
npx create-nx-workspace@latest infinity-ui --preset=apps --pm=npm --nxCloud=skip

cd infinity-ui

# 2. Install NX plugins
npm install -D @nx/react @nx/storybook @nx/js typescript @types/react @types/react-dom

# 3. Install project dependencies
npm install react@19 react-dom@19 tailwindcss@next @base-ui/react tailwind-variants tailwind-merge lucide-react

# 4. Create Storybook app
npx nx g @nx/react:app storybook \
  --directory=apps/storybook \
  --bundler=vite \
  --style=css \
  --routing=false \
  --unitTestRunner=none \
  --e2eTestRunner=none

# 5. Create consolidated components library
npx nx g @nx/react:library components \
  --directory=libs/components \
  --bundler=vite \
  --style=css \
  --unitTestRunner=none \
  --publishable \
  --importPath=@dgstihler/components
```

### Add New Component

To add a new component to the library:

```bash
# 1. Create component directory
mkdir libs/components/new-component

# 2. Create component files (3 files required)
touch libs/components/new-component/new-component.tsx
touch libs/components/new-component/variants.ts
touch libs/components/new-component/types.ts

# 3. Add exports to libs/components/src/index.ts (direct imports, no barrel files)
export { NewComponent } from '../new-component/new-component'
export { newComponentVariants } from '../new-component/variants'
export type { NewComponentProps } from '../new-component/types'
```

### Build Commands
```bash
nx build components                # Build the components library
nx serve storybook                # Run Storybook dev server
nx lint components                # Lint components library
```

## Development Checklist

When creating or editing components:

- [ ] Filename is lowercase-with-hyphens
- [ ] Uses named exports only
- [ ] Extends `ComponentProps<'element'>` + `VariantProps`
- [ ] Uses `tv()` for variants, `twMerge()` for className merging
- [ ] Includes `data-slot` attribute
- [ ] Uses `data-[state]:` for conditional styling
- [ ] Uses theme CSS variables (no hardcoded colors)
- [ ] Includes `focus-visible:` styles on interactive elements
- [ ] Icon buttons have `aria-label`
- [ ] Props spread with `{...props}` at end
- [ ] Each file exports its own items (no index.ts barrel in component folder)
- [ ] Main src/index.ts imports directly from component files

## Anti-Patterns

❌ Default exports
❌ Barrel files (index.ts) in component folders (only at package root)
❌ `React.FC` type
❌ `forwardRef` (React 19 has native ref support)
❌ Hardcoded colors (use CSS variables)
❌ CamelCase filenames
❌ Manual file creation in monorepo (use NX CLI)

## Key Files

- `AGENTS.MD` - Complete design system specification (source of truth)
- `apps/storybook/src/styles/themes.css` - Theme definitions
- `libs/components/src/index.ts` - Main package exports (barrel file)
- `libs/components/*/component-name.tsx` - Individual component implementations
- `libs/components/package.json` - Single package configuration for all components
- `libs/components/shared/` - Shared utilities and helpers
