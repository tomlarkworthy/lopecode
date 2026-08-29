Theme from @lopecode/design-system. Use via `window.LopecodeDS.Theme` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<Theme>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ThemeProps {
  /** One of the notebook-kit themes. Default (no wrapper) is near-midnight. */
  name: "air" | "coffee" | "cotton" | "deep-space" | "glacier" | "midnight" | "near-midnight" | "ocean-floor" | "parchment" | "slate" | "stark" | "sun-faded";
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
```

## Examples

### NearMidnight

```jsx
() => <Theme name="near-midnight"><Sample /></Theme>
```

### Air

```jsx
() => <Theme name="air"><Sample /></Theme>
```

### Parchment

```jsx
() => <Theme name="parchment"><Sample /></Theme>
```

### OceanFloor

```jsx
() => <Theme name="ocean-floor"><Sample /></Theme>
```
