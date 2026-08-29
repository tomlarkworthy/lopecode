Table from @lopecode/design-system. Use via `window.LopecodeDS.Table` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface TableProps {
  data: readonly Record<string, unknown>[];
  /** Columns to show, in order (default: all keys of the first row). */
  columns?: string[];
  /** Column header labels. */
  header?: Record<string, string>;
  /** Per-column formatters. */
  format?: Record<string, (value: any, index: number, row: any) => React.ReactNode | string>;
  /** Column to sort by. */
  sort?: string;
  reverse?: boolean;
  /** Visible rows before scrolling (default 11.5). */
  rows?: number;
  width?: string | number | Record<string, string | number>;
  height?: number;
  /** Show row-selection checkboxes (default true). */
  select?: boolean;
  multiple?: boolean;
  /** Initially selected rows. */
  value?: Record<string, unknown>[];
  onChange?: (rows: Record<string, unknown>[]) => void;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Default

```jsx
() => <Table data={rows} />
```

### Sorted

```jsx
() => <Table data={rows} sort="modules" reverse columns={["notebook", "modules", "updated"]} />
```

### Selection

```jsx
() => <Table data={rows} value={[rows[0], rows[4]]} rows={4} />
```

### NoSelect

```jsx
() => <Table data={rows} select={false} header={{ notebook: "Notebook", modules: "Modules", size: "Size", updated: "Updated", published: "Live" }} />
```
