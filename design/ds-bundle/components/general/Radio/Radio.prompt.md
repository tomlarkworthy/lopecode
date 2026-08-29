Radio from @lopecode/design-system. Use via `window.LopecodeDS.Radio` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface RadioProps {
  options: readonly Option[] | Map<Option, Option>;
  /** Selected value. */
  value?: string | number | boolean | object | Date;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option) => void;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Disables the control. */
  disabled?: boolean;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Default

```jsx
() => <Radio label="Theme" options={["air", "near-midnight", "parchment"]} value="near-midnight" />
```

### Mapped

```jsx
() => <Radio label="Layout" options={new Map([["Single pane", 1], ["Split", 2], ["Grid", 4]])} value={2} />
```

### Disabled

```jsx
() => <Radio label="Runtime" options={["v5", "v6"]} value="v6" disabled />
```
