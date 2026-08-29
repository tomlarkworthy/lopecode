// Builds dist/index.js (esbuild) and assembles the stylesheet set from real
// sources: @observablehq/inputs' own CSS + notebook-kit's shared styles +
// the twelve notebook-kit themes (vendor/notebook-kit/src/styles — the same
// files @tomlarkworthy/themes fetches at runtime, pinned at commit 6c2ec69).
//
// dist/styles.css        inputs css + shared css + default theme on :root
// tokens/theme-*.css      every theme scoped to [data-lc-theme="<name>"]
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";

const LICENSE_HEADER = `/*!
 * Lopecode Design System styles. Derived from:
 *   @observablehq/inputs (ISC, Copyright 2021-2024 Observable, Inc.) https://github.com/observablehq/inputs
 *   @observablehq/notebook-kit (ISC, Copyright 2025 Observable, Inc.) https://observablehq.com/notebook-kit/
 * See LICENSE-THIRD-PARTY.md.
 */`;
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const NK = join(here, "vendor", "notebook-kit", "styles");
const DIST = join(here, "dist");
const DEFAULT_THEME = "near-midnight"; // @tomlarkworthy/themes' fallback

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
const TOKENS = join(here, "tokens"); // local package @lopecode/design-system-tokens

await build({
  entryPoints: [join(here, "src", "index.tsx")],
  outfile: join(DIST, "index.js"),
  bundle: true,
  format: "esm",
  target: "es2020",
  jsx: "automatic",
  external: ["react", "react-dom", "react/jsx-runtime"],
  logLevel: "warning",
});

const read = (f) => readFileSync(join(NK, f), "utf8");
const stripImports = (css) => css.replace(/^@import[^\n]*\n/gm, "");

const shared = ["global.css", "inspector.css", "highlight.css", "plot.css", "index.css"]
  .map((f) => `/* notebook-kit ${f} */\n${stripImports(read(f))}`)
  .join("\n");

const THEMES = ["air", "coffee", "cotton", "deep-space", "glacier", "midnight",
  "near-midnight", "ocean-floor", "parchment", "slate", "stark", "sun-faded"];

// Inline a file's @import chain (theme → abstract-* → syntax-*, or theme →
// syntax-* directly for deep-space/stark) so each theme is self-contained.
function inlineImports(file, seen = new Set()) {
  if (seen.has(file)) return "";
  seen.add(file);
  const css = read(file);
  const imports = [...css.matchAll(/^@import url\("\.\/([^"]+)"\);\s*$/gm)].map((m) => m[1]);
  return [
    ...imports.map((f) => inlineImports(f, seen)),
    `/* notebook-kit ${file} */`, stripImports(css),
  ].join("\n");
}

const themeCss = (name) => inlineImports(`theme-${name}.css`);

const scoped = (css, name) => css.replace(/:root\b/g, `[data-lc-theme="${name}"]`);

for (const name of THEMES) {
  writeFileSync(join(TOKENS, `theme-${name}.css`), LICENSE_HEADER + "\n" + scoped(themeCss(name), name));
}

const inputsCss = readFileSync(join(here, "node_modules", "@observablehq", "inputs", "dist", "index.css"), "utf8");

// notebook-kit loads Inputs CSS via stdlib/inputs.css with the runtime, i.e.
// after global.css. Order matters: global.css sets input[type=range|number]
// {width:240px} at the same specificity as Inputs' width:inherit; the later
// rule wins, and with the fixed width the range row cannot shrink to fit.
const stdlibInputsCss = readFileSync(join(NK, "..", "stdlib", "inputs.css"), "utf8")
  .replace(/@import url\("https:[^"]*inputs\/dist\/index.css"\);\n?/, "");

writeFileSync(join(DIST, "styles.css"), [
  LICENSE_HEADER,
  shared,
  "/* @observablehq/inputs dist/index.css */", inputsCss,
  "/* notebook-kit runtime/stdlib/inputs.css */", stdlibInputsCss,
  `/* default theme: ${DEFAULT_THEME} */`, themeCss(DEFAULT_THEME),
].join("\n"));

console.log(`built dist/index.js, dist/styles.css, ${THEMES.length} scoped themes`);
