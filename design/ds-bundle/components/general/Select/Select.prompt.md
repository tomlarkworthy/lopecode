Select from @lopecode/design-system. Use via `window.LopecodeDS.Select` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface SelectProps {
  options: readonly Option[] | Map<Option, Option>;
  value?: string | number | boolean | object | Date | Option[];
  /** Allow selecting several options (renders a listbox). */
  multiple?: boolean;
  /** Visible rows when `multiple`. */
  size?: number;
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option | Option[]) => void;
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
() => <Select label="Module" options={modules} value={modules[0]} />
```

### Multiple

```jsx
() => <Select label="Boot modules" options={modules} value={[modules[1], modules[2]]} multiple size={4} />
```

### Disabled

```jsx
() => <Select label="Runtime" options={["@observablehq/runtime@6.0.0"]} disabled />
```
