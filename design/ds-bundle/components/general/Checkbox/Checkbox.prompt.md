Checkbox from @lopecode/design-system. Use via `window.LopecodeDS.Checkbox` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface CheckboxProps {
  /** The choices. A Map renders keys and yields values. */
  options: readonly Option[] | Map<Option, Option>;
  /** Selected values. */
  value?: Option[];
  /** Formats each option's label. */
  format?: (option: Option, index: number) => string;
  onChange?: (value: Option[]) => void;
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
() => <Checkbox label="Columns" options={columns} value={["Name", "Size"]} />
```

### Mapped

```jsx
() => <Checkbox label="Export" options={new Map([["Cells", "cells"], ["Attachments", "files"], ["History", "history"]])} value={["cells"]} />
```

### Disabled

```jsx
() => <Checkbox label="Locked" options={["Read", "Write"]} value={["Read"]} disabled />
```
