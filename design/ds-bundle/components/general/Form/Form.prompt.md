Form from @lopecode/design-system. Use via `window.LopecodeDS.Form` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface FormProps {
  /** Field builders keyed by name. Each receives the Inputs namespace and returns an input element, e.g. `{ name: (I) => I.te */
  fields: Record<string, (I: typeof Inputs) => HTMLElement>;
  /** Emits the whole form value `{[name]: value}` on any field change. */
  onChange?: (value: Record<string, unknown>) => void;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

### Default

```jsx
() => (
  <Form fields={{
    title: (I) => I.text({ label: "Title", value: "Flat trace" }),
    theme: (I) => I.select(["air", "near-midnight", "parchment"], { label: "Theme", value: "near-midnight" }),
    headless: (I) => I.toggle({ label: "Headless", value: false }),
  }} />
)
```

### Publish

```jsx
() => (
  <Form fields={{
    rkey: (I) => I.text({ label: "Record key", value: "tomlarkworthy-virtual-monorepo" }),
    description: (I) => I.textarea({ label: "Description", rows: 2, value: "Meta-repo of submodules with worktrees for patches." }),
    notify: (I) => I.toggle({ label: "Notify feed", value: true }),
  }} />
)
```
