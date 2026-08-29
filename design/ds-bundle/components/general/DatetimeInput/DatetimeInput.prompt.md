DatetimeInput from @lopecode/design-system. Use via `window.LopecodeDS.DatetimeInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface DatetimeInputProps {
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
() => <DatetimeInput label="Run at" value="2026-08-25T07:25" />
```

### Disabled

```jsx
() => <DatetimeInput label="Last export" value="2026-08-25T07:08" disabled />
```
