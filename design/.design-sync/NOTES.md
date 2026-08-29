# design-sync notes

- `buildCmd` is `npm run build` run in this directory; run `/design-sync` with this directory as the working directory.
- `tokensGlob` resolves relative to the tokens package (`node_modules/@lopecode/design-system-tokens`, a `file:` link to `./tokens`), not to this directory.
- Seven components need `cardMode: column` (config `overrides`) or their cards overflow the grid.
- The `Host` wrapper is `width:100%; min-width:0`; without it a column-flex `align-items:flex-start` panel lets Inputs forms overflow.
- `styles.css` order is shared notebook-kit CSS, then Inputs CSS, then `stdlib/inputs.css`, then the theme. Reversed, `global.css` fixes `input[type=range]` at 240px and Range rows overflow.
- The driver keys re-grading on component source; a wrapper-style-only change needs `package-validate.mjs ds-bundle --render-sample 0` run by hand.
- The converter needs `--entry dist/index.js`.
