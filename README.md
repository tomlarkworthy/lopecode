# Lopecode

<img width="1728" height="996" alt="image" src="https://github.com/user-attachments/assets/af894333-4d1a-4c38-a95f-f31fbb378a84" />

Lopecode is a web-based modable programming environment where a small microkernel core defines minimal features to enable live coding applications to be built.

The kernel has no UI and defines programming mechanisms for
1. reactive dataflow programming model
2. hot code swapping
3. modules

Everything else is implemented in userspace, including code editors and a multi-notebook UI which can be live edited. There is no external source code, instead the runtime itself is decompiled on demand, according to a runtime-is-the-source-of-truth principle.

One userspace module, the Exporter, can self-serialize the entire runtime to a single HTML file, so you can use it offline from the local filesystem. There are no dependencies other than a web browser.

## Quick start

Open the **[Blank Notebook](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_blank-notebook.html)** and start typing. Nothing to install, no build step, no account. Press `Cmd+K` / `Ctrl+K` for the command palette, and use *Save in place* from the burger menu to write the notebook back to your own disk — the file you save is the whole program.

## Table of Contents

### Gallery

Browse all notebooks at the **[Lopebook Gallery](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_gallery.html)**.

### Getting Started

| Notebook | Description |
|----------|-------------|
| **[Blank Notebook](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_blank-notebook.html)** | **Start here — a fresh notebook with links to guides and resources** |
| [Tour of Lopecode](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-tour.html) | Interactive introduction to lopecode and what you can build |
| [Vision Statement](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-vision.html) | The endgoal explained — itself a hackable lopebook |
| [How the Observable Runtime Works](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_observable-notes.html) | Living documentation on the underlying runtime |
| [Observable Inputs Reference](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_inputs-reference.html) | Live reference for every widget in `@observablehq/inputs` |

### Applications

| Notebook | Description |
|----------|-------------|
| [DAW](https://tomlarkworthy.github.io/lopebooks/notebooks/tomlarkworthy_daw.html) | A digital audio workstation that is nothing but a notebook — knob positions, drum patterns and rack layout all live in cell source |
| [SVG Lens](https://tomlarkworthy.github.io/lopebooks/notebooks/tomlarkworthy_svg-lens.html) | Bidirectional SVG editor — the drawing syncs to the code and the code to the drawing, without parsing away animation or template holes |
| [Knowledge Wiki](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_markdown-wiki.html) | Browsable markdown knowledge base where every document is a content block an agent can read directly |
| [RISC-V Linux SBC](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_linux-sbc.html) | Browser-based RV32IMA emulator that boots Linux 6.1 with BusyBox shell |
| [Linux Emulator (64-bit)](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_linux-emu.html) | RISC-V 64-bit Linux 6.1 to a BusyBox shell, based on Bellard's TinyEMU |
| [ATProto Comments](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_atproto-comments.html) | Read-only Bluesky comments widget — fetches and displays AT Protocol post threads |
| [Notes](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_notes.html) | Offline notetaking app using Dexie.js, with detailed technical design |
| [Audio Sequencer](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_sequencer.html) | Non-trivial application with persistent runtime state |
| [Circular Barcode Simulator](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_circular-barcode-simulator.html) | Simplifying pose estimation with circular barcodes |
| [Fast 1D Circular Barcode Matching](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_fast-1d-circular-barcode-matching.html) | Barcode matching via the Mobius transform |
| [SARS-CoV-2 Analytics](https://tomlarkworthy.github.io/lopebooks/notebooks/@spond_revised-sars-cov-2-analytics-page.html) | Natural selection analysis of SARS-CoV-2 |
| [Unaggregating CloudWatch Metrics](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_unaggregating-cloudwatch-metrics.html) | AWS CloudWatch metric unaggregation |

### Platform Modules

| Notebook | Description |
|----------|-------------|
| [Exporter 3](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_exporter-3.html) | Single-file serializer — self-exports the runtime to HTML |
| [Editor 5](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_editor-5.html) | Reactive userspace cell editor (CodeMirror-based) |
| [Lopepage-2](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopepage-2.html) | Multi-notebook layout: resizable splits and tabbed stacks, serialized to the URL hash, with scroll preserved across layout changes |
| [Lopepage URLs](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopepage-urls.html) | URL DSL for lopepage layouts |
| [Command Palette](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_command-palette.html) | `Cmd+K` palette; providers register commands, and cell search matches names and source across loaded modules |
| [Visualizer](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_visualizer.html) | Cell renderer — how a module's cells become DOM |
| [Modules](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_modules.html) | Streaming module-discovery API — yields module records as they resolve, instead of blocking on a full scan |
| [Module Selection](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_module-selection.html) | Explorer for composing modules into notebooks |
| [Save in place](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_save-in-place.html) | Menu plugin that writes the notebook back to its own file via the File System Access API |
| [Plugin Registry](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_plugin-registry.html) | Decoupled reactive plugin wiring — providers and consumers meet by name, with no direct references |
| [Themes](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_themes.html) | Theming sourced from Observable notebook-kit CSS custom properties |
| [Jumpgate](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_jumpgate.html) | Transforms Observable notebooks to lopecode |
| [Local Change History](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_local-change-history.html) | Persistent local change tracking |
| [Secrets](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_secrets.html) | AES-256-GCM encrypted key-value storage in notebook source code |
| [ATProto](https://tomlarkworthy.github.io/lopecode/notebooks/atproto.html) | Publish, discover and download lopecode files on the atmosphere |

### Developer Tools

| Notebook | Description |
|----------|-------------|
| [Debugger 2](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_debugger-2.html) | Timeline of every variable's lifecycle — blocked on deps, computing, resolved or errored |
| [Code Metrics](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_code-metrics.html) | Per-cell code health — complexity, nesting, fan-in/out, maintainability index |
| [Cell Map](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_cell-map.html) | Maps reactive variables to notebook cells, grouped by module |
| [Reactive Reflective Testing](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_reactive-reflective-testing.html) | Reactive testing framework for lopebooks |
| [Notebook Semantics](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_notebook-semantics.html) | Test notebook for runtime semantics |
| [Dataflow Templating](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_dataflow-templating.html) | Dynamic dataflow templating — function-like semantics for dataflow |
| [Spectral Layout](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_spectral-layout.html) | Minimize crossings with spectral circular graph layout |

### AI Collaboration

| Notebook | Description |
|----------|-------------|
| [Claude Code Pairing](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_claude-code-pairing.html) | Live channel between Claude Code and a running notebook — define cells, read values, watch variables |
| [Roboco-op 5](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_robocoop-5.html) | In-notebook coding agent whose tools act on cell source rather than a shell |
| [justbash](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_justbash.html) | Sandboxed bash environment inside a notebook — two shells share one in-memory filesystem, one for you and one for an agent |
| [Roboco-op 3](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_robocoop-3.html) | Agents-as-functions (earlier generation) |

### Writing

| Notebook | Description |
|----------|-------------|
| [Source-last programming](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_lopecode-live-2026.html) | On sharing a program with people who cannot install one |
| [The Claude Code Virtual Monorepo Pattern](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_virtual-monorepo.html) | Assembling a dozen repositories into one filesystem a coding agent can see |
| [Tuning a coding harness](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_coding_harness_tuning_blog.html) | Benchmark-driven iteration on an in-notebook agent |
| [Newsletter 001](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_lopecode-newsletter-001.html) | Project newsletter |

### Experiments

| Notebook | Description |
|----------|-------------|
| [Editable Markdown](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_editable-md.html) | Inline editable markdown |
| [Grid Container](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_grid-container.html) | Widget builder — named cells become rearrangeable atoms on a snap-to-grid surface, editable in place |
| [Infinite Canvas](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_infinite-canvas.html) | Renders a module as draggable cards with dependency edges derived live from the runtime graph |
| [Living SVG Templates](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_parametric-svg.html) | Hand-coded SVG that stays editable by mouse |
| [Sticky](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_sticky.html) | Make any view remember its value by rewriting its own source |
| [Direct Manipulation Plot](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_manipulate.html) | Direct manipulation for plots |
| [p5.js Sandbox](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_p5-sandbox.html) | Live p5.js sketching |
| [My Lopebooks](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_my-lopebooks.html) | Personal lopebooks index |
| [Compile Zig](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_compile-zig.html) | Zig compiler running in-browser via WASM — fully offline |

Feel free to open discussions and bugs in the Github repository
