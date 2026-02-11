<p align="center">
  <strong>@dgstihler/components</strong>
</p>

<p align="center">
  A compound-first React component library built with React 19, TypeScript, Tailwind CSS v4, and Base UI primitives.
</p>

<p align="center">
  <a href="https://www.figma.com/design/p3mAmoXnY2WrnNI56TyEwF/Infinity-ui?node-id=5190-533">Figma</a> ·
  <a href="#components">Components</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="#api-reference">API Reference</a>
</p>

---

## Quick Start

```bash
npm install @dgstihler/components
```

```tsx
import { Button, Input, Select, Field } from '@dgstihler/components'
```

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 (native ref — no `forwardRef`) |
| Language | TypeScript strict |
| Styling | Tailwind CSS v4 + `@tailwindcss/vite` |
| Primitives | Base UI React (`@base-ui/react`) |
| Variants | Tailwind Variants (`tv`) |
| Class merge | Tailwind Merge (`twMerge`) |
| Icons | Lucide React |
| Monorepo | NX |
| Build | Vite |

---

## Components

| Component | Sub-components | Description |
|-----------|---------------|-------------|
| [`Button`](#button) | `Button.Solid` · `Button.Outline` · `Button.Ghost` · `Button.SolidIcon` · `Button.OutlineIcon` · `Button.GhostIcon` | Buttons with 3 styles and icon-only variants |
| [`Input`](#input) | `Input.Counter` | Text input with optional character counter |
| [`Select`](#select) | `Select.Item` | Dropdown select built on Base UI |
| [`Autocomplete`](#autocomplete) | — | Searchable combobox with filtering |
| [`Checkbox`](#checkbox) | `Checkbox.Group` | Checkbox with group, single-select, strikethrough |
| [`Switch`](#switch) | `Switch.Group` | Toggle switch with group and single-select |
| [`Field`](#field) | `Field.Label` · `Field.Hint` · `Field.Footer` | Universal form field wrapper |
| [`Modal`](#modal) | `Modal.Trigger` · `Modal.Title` · `Modal.Description` · `Modal.Footer` · `Modal.Close` | Dialog with backdrop and animations |
| [`Toast`](#toast) | `Toast.Icon` · `Toast.Label` · `Toast.Close` | Alert notifications with 5 categories |
| [`Badge`](#badge) | `Badge.Icon` · `Badge.Label` · `Badge.Close` | Small labels with 7 categories |

---

## API Reference

### Field

Universal wrapper for form inputs. Provides label, hint (with semantic color), and footer.

```tsx
<Field>
  <Field.Label>Email</Field.Label>
  <Input type="email" placeholder="you@example.com" />
  <Field.Footer>
    <Field.Hint category="danger">Invalid email</Field.Hint>
    <Input.Counter current={12} max={64} />
  </Field.Footer>
</Field>
```

| Sub-component | Props | Description |
|---------------|-------|-------------|
| `Field` | `className` | Flex column container with `gap-1.5` |
| `Field.Label` | `className` | `<label>` element |
| `Field.Hint` | `category`: `default` · `danger` · `warning` · `info` · `success` | Semantic hint text |
| `Field.Footer` | `className` | Flex row for hint + counter |

---

### Button

Three visual styles, each with a text and icon-only variant.

```tsx
<Button.Solid>Save</Button.Solid>
<Button.Outline>Cancel</Button.Outline>
<Button.Ghost>Skip</Button.Ghost>

<Button.SolidIcon aria-label="Settings"><Settings /></Button.SolidIcon>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'small'` · `'medium'` · `'large'` | `'medium'` |
| `rounded` | `boolean` | `false` |
| `disabled` | `boolean` | — |
| `aria-label` | `string` | Required for icon buttons |

---

### Input

The `<input>` element directly — not a wrapper div.

```tsx
<Field className="w-80">
  <Field.Label>Username</Field.Label>
  <Input placeholder="Enter username" />
  <Field.Footer>
    <Field.Hint>3-20 characters</Field.Hint>
    <Input.Counter current={0} max={20} />
  </Field.Footer>
</Field>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'small'` · `'medium'` | `'medium'` |

| Sub-component | Props |
|---------------|-------|
| `Input.Counter` | `current: number`, `max: number` |

---

### Select

Dropdown built on Base UI `Select` primitives.

```tsx
<Field className="w-64">
  <Field.Label>Country</Field.Label>
  <Select placeholder="Select a country">
    <Select.Item value="br">Brazil</Select.Item>
    <Select.Item value="us">United States</Select.Item>
  </Select>
  <Field.Hint>Required</Field.Hint>
</Field>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `'small'` · `'medium'` | `'medium'` |
| `placeholder` | `string` | `'Select...'` |
| `disabled` | `boolean` | — |

---

### Autocomplete

Searchable combobox with built-in filtering. Items are passed as a `string[]`.

```tsx
<Field className="w-80">
  <Field.Label>Fruit</Field.Label>
  <Autocomplete items={['Apple', 'Banana', 'Orange']} placeholder="Search..." />
  <Field.Hint>Type to search</Field.Hint>
</Field>
```

| Prop | Type | Default |
|------|------|---------|
| `items` | `string[]` | Required |
| `size` | `'small'` · `'medium'` | `'medium'` |
| `placeholder` | `string` | `'Search...'` |
| `disabled` | `boolean` | — |

---

### Checkbox

Checkbox with optional group. Group supports single-select (`justOne`), read-only, rounded, and strikethrough.

```tsx
{/* Single */}
<Checkbox>Accept terms</Checkbox>

{/* Group */}
<Field>
  <Field.Label>Interests</Field.Label>
  <Checkbox.Group defaultValue={['design']}>
    <Checkbox value="design">Design</Checkbox>
    <Checkbox value="dev">Development</Checkbox>
    <Checkbox value="marketing">Marketing</Checkbox>
  </Checkbox.Group>
  <Field.Hint>Select all that apply</Field.Hint>
</Field>
```

**Checkbox props:**

| Prop | Type |
|------|------|
| `rounded` | `boolean` |
| `strikethrough` | `boolean` |
| `indeterminate` | `boolean` |
| `value` | `string` (required in Group) |

**Checkbox.Group props:**

| Prop | Type | Default |
|------|------|---------|
| `justOne` | `boolean` | `false` |
| `rounded` | `boolean` | `false` |
| `strikethrough` | `boolean` | `false` |
| `inLine` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `defaultValue` | `string[]` | — |
| `value` / `onValueChange` | controlled | — |

---

### Switch

Toggle switch with optional group. Same group capabilities as Checkbox.

```tsx
{/* Single */}
<Switch>Notifications</Switch>

{/* Group */}
<Field>
  <Field.Label>Preferences</Field.Label>
  <Switch.Group defaultValue={['notifications']}>
    <Switch value="notifications">Notifications</Switch>
    <Switch value="sound">Sound</Switch>
  </Switch.Group>
  <Field.Hint>Manage preferences</Field.Hint>
</Field>
```

**Switch props:**

| Prop | Type | Default |
|------|------|---------|
| `size` | `'small'` · `'medium'` | `'medium'` |
| `value` | `string` (required in Group) | — |

**Switch.Group props:**

| Prop | Type | Default |
|------|------|---------|
| `justOne` | `boolean` | `false` |
| `inLine` | `boolean` | `false` |
| `readOnly` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `size` | `'small'` · `'medium'` | `'medium'` |
| `defaultValue` | `string[]` | — |

---

### Modal

Dialog with backdrop, animated transitions, and compound sub-components.

```tsx
<Modal>
  <Modal.Trigger>Open</Modal.Trigger>
  <Modal.Title>Confirm</Modal.Title>
  <Modal.Description>Are you sure?</Modal.Description>
  <Modal.Footer>
    <Modal.Close>Cancel</Modal.Close>
    <Button.Solid>Confirm</Button.Solid>
  </Modal.Footer>
</Modal>
```

| Prop | Type | Default |
|------|------|---------|
| `dismissible` | `boolean` | `true` |

| Sub-component | Description |
|---------------|-------------|
| `Modal.Trigger` | Button that opens the modal |
| `Modal.Title` | Dialog title |
| `Modal.Description` | Dialog body text |
| `Modal.Footer` | Action buttons row |
| `Modal.Close` | Button that closes the modal |

---

### Toast

Alert notification with semantic categories.

```tsx
<Toast category="success">
  <Toast.Icon />
  <Toast.Label>Changes saved successfully</Toast.Label>
  <Toast.Close onClose={() => {}} />
</Toast>
```

| Prop | Type | Default |
|------|------|---------|
| `category` | `'default'` · `'danger'` · `'warning'` · `'info'` · `'success'` | `'default'` |

---

### Badge

Small labeling element with semantic categories.

```tsx
<Badge category="success">
  <Badge.Icon />
  <Badge.Label>Active</Badge.Label>
  <Badge.Close onClose={() => {}} />
</Badge>
```

| Prop | Type | Default |
|------|------|---------|
| `category` | `'default'` · `'danger'` · `'warning'` · `'info'` · `'success'` · `'purple'` · `'sky'` | `'default'` |

---

## Architecture

### File Structure

Each component follows a **3-file pattern**:

```
component-name/
├── component-name.tsx   # Component implementation
├── types.ts             # TypeScript interfaces
└── variants.ts          # Tailwind Variants definitions
```

### Patterns

- **Compound components** via `Object.assign`: `Button.Solid`, `Checkbox.Group`, etc.
- **`data-slot`** on every rendered element for styling hooks
- **`data-[state]:`** for conditional styling (disabled, checked, etc.)
- **Named exports only** — no default exports
- **`ComponentProps<'element'>` + `VariantProps`** for full type safety
- **`twMerge(variants(), className)`** — always mergeable

### Form Field Pattern

All form inputs use a shared `Field` wrapper — components stay pure:

```tsx
<Field>
  <Field.Label>Label</Field.Label>
  <AnyInput />
  <Field.Footer>
    <Field.Hint category="danger">Error</Field.Hint>
    <Input.Counter current={0} max={32} />
  </Field.Footer>
</Field>
```

---

## Design

> **Figma:** [Infinity UI — Component Library](https://www.figma.com/design/p3mAmoXnY2WrnNI56TyEwF/Infinity-ui?node-id=5190-533)

---

## Development

```bash
# Run Storybook
npx nx storybook storybook

# Build library
npx nx build components

# Lint
npx nx lint components
```

---

## License

MIT

