Toggle from @lopecode/design-system. Use via `window.LopecodeDS.Toggle` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ToggleProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
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

### Off

```jsx
() => <Toggle label="Show gridlines" value={false} />
```

### On

```jsx
() => <Toggle label="Autosave" value={true} />
```

### Disabled

```jsx
() => <Toggle label="Headless export" value={true} disabled />
```
