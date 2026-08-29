TextareaInput from @lopecode/design-system. Use via `window.LopecodeDS.TextareaInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface TextareaInputProps {
  rows?: number;
  cols?: number;
  /** Allow the user to resize the area (default true). */
  resize?: boolean;
  spellcheck?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** Visible label, rendered to the left of the control. */
  label?: React.ReactNode;
  /** Control width in px (default 240 for text-like inputs). */
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  placeholder?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  /** Only emit on Enter / submit button instead of every keystroke. */
  submit?: string | boolean;
  onChange?: (value: string) => void;
}
```

## Examples

### Default

```jsx
() => <TextareaInput label="Description" value="A reactive notebook that re-exports itself as a single HTML file." rows={3} />
```

### Placeholder

```jsx
() => <TextareaInput label="Commit message" placeholder="What changed?" rows={4} />
```

### Disabled

```jsx
() => <TextareaInput label="License" value="MIT" rows={2} disabled />
```
