TextInput from @lopecode/design-system. Use via `window.LopecodeDS.TextInput` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface TextInputProps {
  value?: string;
  placeholder?: string;
  /** Input type; email/tel/url/password get native validation and masking. */
  type?: "text" | "email" | "tel" | "url" | "password";
  pattern?: string;
  minlength?: number;
  maxlength?: number;
  required?: boolean;
  /** Only emit on Enter / submit button instead of every keystroke. */
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
() => <TextInput label="Notebook title" value="Coded landmark tracking" placeholder="Untitled" />
```

### Email

```jsx
() => <TextInput label="Email" type="email" value="tom@example.org" />
```

### Password

```jsx
() => <TextInput label="App password" type="password" value="hunter2hunter2" />
```

### Submit

```jsx
() => <TextInput label="Search cells" placeholder="cell name…" submit />
```

### Disabled

```jsx
() => <TextInput label="Module id" value="@tomlarkworthy/exporter-3" disabled />
```
