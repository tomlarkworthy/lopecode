Range from @lopecode/design-system. Use via `window.LopecodeDS.Range` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface RangeProps {
  min?: number;
  max?: number;
  step?: number | "any";
  value?: number;
  /** Formats the number shown beside the slider. Must return a numeric string — it is written into an `<input type=number>`,  */
  format?: (value: number) => string;
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
() => <Range label="Opacity" min={0} max={1} step={0.01} value={0.7} />
```

### Integer

```jsx
() => <Range label="Iterations" min={1} max={100} step={1} value={30} />
```

### Formatted

```jsx
() => <Range label="Zoom" min={0.25} max={4} step={0.25} value={1} format={(v) => v.toFixed(2)} />
```

### Disabled

```jsx
() => <Range label="Locked" min={0} max={10} value={5} disabled />
```
