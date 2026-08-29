FileInput from @lopecode/design-system. Use via `window.LopecodeDS.FileInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface FileInputProps {
  /** Accepted MIME types or extensions, e.g. ".csv,.json". */
  accept?: string;
  multiple?: boolean;
  required?: boolean;
  onChange?: (file: File | File[] | null) => void;
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
() => <FileInput label="Attachment" accept=".csv,.json" />
```

### Multiple

```jsx
() => <FileInput label="Stills" accept="image/*" multiple />
```

### Disabled

```jsx
() => <FileInput label="Locked" disabled />
```
