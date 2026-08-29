Search from @lopecode/design-system. Use via `window.LopecodeDS.Search` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface SearchProps {
  /** Rows to filter. */
  data: readonly Record<string, unknown>[];
  placeholder?: string;
  /** Columns to search (default all). */
  columns?: string[];
  /** Initial query. */
  query?: string;
  /** Called with the filtered rows. */
  onChange?: (rows: Record<string, unknown>[]) => void;
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
() => <Search data={notebooks} placeholder="Search notebooks…" />
```

### Labeled

```jsx
() => <Search label="Filter" data={notebooks} columns={["name"]} query="lope" />
```
