Color from @lopecode/design-system. Use via `window.LopecodeDS.Color` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ColorProps {
  /** Hex color, e.g. "#4269d0". */
  value?: string;
  submit?: string | boolean;
  onChange?: (value: string) => void;
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
() => <Color label="Accent" value="#4269d0" />
```

### Swatches

```jsx
() => (
  <div style={{ display: "grid", gap: 8 }}>
    <Color label="Foreground" value="#dfdfd6" />
    <Color label="Background" value="#161616" />
    <Color label="Error" value="#e7040f" />
  </div>
)
```

### Disabled

```jsx
() => <Color label="Locked" value="#888888" disabled />
```
