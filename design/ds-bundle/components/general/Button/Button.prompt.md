Button from @lopecode/design-system. Use via `window.LopecodeDS.Button` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ButtonProps {
  /** Button text. */
  content?: string;
  /** Called on each click with the click count. */
  onClick?: (count: number) => void;
  disabled?: boolean;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Default

```jsx
() => <Button content="Run query" onClick={() => {}} />
```

### Labeled

```jsx
() => <Button content="Export notebook" label="Actions" />
```

### Disabled

```jsx
() => <Button content="Publish" disabled />
```

### Wide

```jsx
() => <Button content="Recompute all cells" width={320} />
```
