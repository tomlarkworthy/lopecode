DateInput from @lopecode/design-system. Use via `window.LopecodeDS.DateInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface DateInputProps {
  /** ISO date string (YYYY-MM-DD) or Date. */
  value?: string | Date;
  min?: string | Date;
  max?: string | Date;
  required?: boolean;
  submit?: string | boolean;
  onChange?: (value: Date | null) => void;
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
() => <DateInput label="Published" value="2026-08-25" />
```

### Bounded

```jsx
() => <DateInput label="Snapshot" value="2026-06-03" min="2026-01-01" max="2026-12-31" />
```

### Disabled

```jsx
() => <DateInput label="Created" value="2026-05-20" disabled />
```
