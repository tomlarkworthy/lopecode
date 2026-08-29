# Lopecode Design System — conventions

This library is the input vocabulary of lopecode notebooks: React wrappers over Observable Inputs, styled by notebook-kit theme tokens. The CSS is Observable, Inc.'s, redistributed under ISC: `@observablehq/inputs` (https://github.com/observablehq/inputs) and `@observablehq/notebook-kit` (https://observablehq.com/notebook-kit/). There are no utility classes and no styling props — style with the CSS custom properties below and the `Theme` wrapper.

## Wrap every design in `Theme`

`Theme` sets the theme tokens on its subtree and paints `--theme-background` / `--theme-foreground`. Without it, tokens fall back to `near-midnight` (dark) on an unpainted background — light text on white.

```tsx
import { Theme, TextInput, Range, Toggle, Button, Table } from "@lopecode/design-system";

<Theme name="near-midnight">              {/* air | coffee | cotton | deep-space | glacier | midnight | near-midnight | ocean-floor | parchment | slate | stark | sun-faded */}
  <div style={{ padding: 16, display: "grid", gap: 8, maxWidth: "var(--max-width)" }}>
    <TextInput label="Notebook title" value="Coded landmark tracking" />
    <Range label="Opacity" min={0} max={1} step={0.01} value={0.7} />
    <Toggle label="Autosave" value />
    <Button content="Export" onClick={(n) => console.log(n)} />
  </div>
</Theme>
```

## Styling idiom: tokens only

Your own layout glue (wrappers, panels, headings) uses `var(--…)`. Colors: `--theme-background`, `--theme-background-alt`, `--theme-background-a`, `--theme-background-b`, `--theme-foreground`, `--theme-foreground-alt`, `--theme-foreground-muted`, `--theme-foreground-faint`, `--theme-foreground-fainter`, `--theme-foreground-faintest`, `--theme-foreground-focus` (the accent — blue in most themes, orange in parchment), `--theme-error`. Fonts: `--sans-serif` (Inter Variable, the body font), `--serif` (Source Serif 4 Variable), `--monospace` (Spline Sans Mono Variable). Layout: `--max-width` (the notebook column width). Code colouring: `--syntax-keyword`, `--syntax-string`, `--syntax-comment`, `--syntax-literal`, `--syntax-variable`, `--syntax-definition`, `--syntax-atom`, `--syntax-meta`, `--syntax-link`, `--syntax-invalid`.

Never write hex colours or font names — every theme redefines the tokens, and a hard-coded colour breaks the other eleven.

## Component rules

- Every input takes `label`, `disabled`, `width` and reports through `onChange(value)`; `Button` reports `onClick(count)`.
- `Select`, `Radio`, `Checkbox` take `options` as an array or a `Map` (Map keys are shown, values emitted).
- `Table` and `Search` take `data` as an array of row objects; `Search` emits the filtered rows, feed them to a `Table`.
- `Range.format` and `NumberInput` values are numeric — a `format` that returns non-numeric text (e.g. `"1×"`) blanks the field.
- `Form.fields` builds raw Inputs: `{ name: (I) => I.text({ label: "Name" }) }`.
- Stack inputs vertically with a small gap; each renders as a `label | control` row 360px wide (`TextareaInput` 640px) that shrinks to its container. The component root is `width: 100%`, so put one per row.
- Grid columns holding inputs must be `minmax(0, 1fr)`, not `1fr` — a bare `1fr` track grows to the 640px textarea form and the grid overflows the page. Flex items holding inputs need `minWidth: 0` for the same reason.

## Where the truth lives

Read `styles.css` and `tokens/theme-<name>.css` for the token values per theme, and each `components/general/<Name>/<Name>.prompt.md` for the props and a rendered example.

# LopecodeDS (@lopecode/design-system@0.1.0)

This design system is the published @lopecode/design-system React library, bundled as a single
browser global. All 17 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.LopecodeDS`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.LopecodeDS.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Button } = window.LopecodeDS;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Button />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<Theme name={"near-midnight"} style={{"padding":"16px 20px","minHeight":"80px"}}>{children}</Theme>
```

## Tokens

22 CSS custom properties from @lopecode/design-system-tokens. Names are
preserved verbatim from upstream. See `tokens/` for the full list.

- **other** (22): `--syntax-link`, `--syntax-keyword`, `--syntax-atom`, …

## Components

### general
- `Button` — A push button. Counts clicks onClick receives the running count.
- `Checkbox` — A group of checkboxes for multiple choice.
- `Color` — A color swatch that opens the native color picker.
- `DateInput` — A calendar date picker.
- `DatetimeInput` — A date-and-time picker.
- `FileInput` — A file chooser. onChange receives the selected File(s).
- `Form` — Composes several inputs into one value object.
- `NumberInput` — A numeric text field with optional bounds.
- `Radio` — A group of radio buttons for single choice.
- `Range` — A slider with a paired numeric field.
- `Search` — A full-text filter over tabular data emits the matching rows.
- `Select` — A drop-down menu (or listbox when multiple).
- `Table` — A scrollable, sortable data table with row selection.
- `TextareaInput` — A multi-line text field.
- `TextInput` — A single-line text field.
- `Theme` — Scopes a notebook-kit theme to its subtree: sets the theme's tokens, paints
- `Toggle` — A single on/off checkbox with a label.
