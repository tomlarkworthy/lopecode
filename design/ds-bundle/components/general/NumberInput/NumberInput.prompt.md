NumberInput from @lopecode/design-system. Use via `window.LopecodeDS.NumberInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface NumberInputProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number | "any";
  placeholder?: string;
  required?: boolean;
  submit?: string | boolean;
  onChange?: (value: number) => void;
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
() => <NumberInput label="Rows" value={25} min={1} max={500} />
```

### Step

```jsx
() => <NumberInput label="Threshold" value={0.5} min={0} max={1} step={0.05} />
```

### Disabled

```jsx
() => <NumberInput label="Frame budget (ms)" value={16} disabled />
```
