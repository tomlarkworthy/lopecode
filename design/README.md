# @lopecode/design-system

React wrappers over [Observable Inputs](https://github.com/observablehq/inputs), themed with the twelve [Observable Notebook Kit](https://observablehq.com/notebook-kit/) themes. Built for syncing lopecode's input vocabulary to claude.ai/design; the wrappers mount the real Inputs DOM, they do not reimplement it.

`npm run build` writes `dist/index.js`, `dist/styles.css` (Notebook Kit global styles + Inputs CSS + the default theme) and `tokens/theme-<name>.css` (each theme scoped to `[data-lc-theme="<name>"]`) from the style sources vendored in `vendor/notebook-kit/`.

## Sync it to claude.ai/design

This directory is a ready `/design-sync` source. Everything the sync needs is checked in: the package, `.design-sync/config.json` (shape, build command, token and font locations, preview overrides), `.design-sync/conventions.md` (the header the design agent reads) and 17 authored previews in `.design-sync/previews/`.

```
git clone https://github.com/tomlarkworthy/lopecode
cd lopecode/design
npm ci && npm run build
claude          # then: /design-sync
```

The config carries no `projectId`, so the first run creates a Claude Design project you own and pins it in your copy of `config.json`. Later runs re-sync only what changed.

`ds-bundle/` is the last verified converter output (the exact files uploaded to the canonical Lopecode Design System project). A reader without the toolchain can upload it as-is; `/design-sync` regenerates it.

What the components are: React wrappers that mount the real Observable Inputs DOM and report through `onChange`. `Theme` sets `data-lc-theme` on its subtree and paints the page tokens. Styling is by `var(--theme-…)` tokens only; see `.design-sync/conventions.md`.

## Attribution

The CSS is Observable, Inc.'s work, redistributed under its ISC license:

- `@observablehq/inputs` — ISC, Copyright 2021–2024 Observable, Inc.
- `@observablehq/notebook-kit` — ISC, Copyright 2025 Observable, Inc.

Full texts in [LICENSE-THIRD-PARTY.md](LICENSE-THIRD-PARTY.md). The wrapper code in `src/` is ISC as well.
