# Lopecode

<img width="1728" height="996" alt="image" src="https://github.com/user-attachments/assets/af894333-4d1a-4c38-a95f-f31fbb378a84" />

Lopecode is a web-based modable programming environment where a small microkernel core defines minimal features to enable live coding applications to be built.

The kernel has no UI and defines programming mechanisms for
1. reactive dataflow programming model
2. hot code swapping
3. modules

Everything else is implemented in userspace, including code editors and a multi-notebook UI which can be live edited. There is no external source code, instead the runtime itself is decompiled on demand, according to a runtime-is-the-source-of-truth principle.

One userspace module, the Exporter, can self-serialize the entire runtime to a single HTML file, so you can use it offline from the local filesystem. There are no dependencies other than a web browser.

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

### Applications

| Notebook | Description |
|----------|-------------|
| [RISC-V Linux SBC](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_linux-sbc.html) | Browser-based RV32IMA emulator that boots Linux 6.1 with BusyBox shell |
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
| [Exporter 2](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_exporter-2.html) | Single-file serializer — self-exports the runtime to HTML |
| [Editor 5](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_editor-5.html) | Reactive userspace cell editor (CodeMirror-based) |
| [Lopepage](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopepage.html) | Multi-notebook split-pane UI layout |
| [Lopepage URLs](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopepage-urls.html) | URL DSL for lopepage layouts |
| [Module Selection](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_module-selection.html) | Explorer for composing modules into notebooks |
| [Jumpgate](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_jumpgate.html) | Transforms Observable notebooks to lopecode |
| [Local Change History](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_local-change-history.html) | Persistent local change tracking |
| [Secrets](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_secrets.html) | AES-256-GCM encrypted key-value storage in notebook source code |

### Developer Tools

| Notebook | Description |
|----------|-------------|
| [Atlas](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_atlas.html) | Runtime overview visualization |
| [Debugger](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_debugger.html) | Notebook dataflow debugger (ndd) |
| [Cell Map](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_cell-map.html) | Maps reactive variables to notebook cells, grouped by module |
| [Reactive Reflective Testing](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_reactive-reflective-testing.html) | Reactive testing framework for lopebooks |
| [Notebook Semantics](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_notebook-semantics.html) | Test notebook for runtime semantics |
| [Dataflow Templating](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_dataflow-templating.html) | Dynamic dataflow templating — function-like semantics for dataflow |
| [Spectral Layout](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_spectral-layout.html) | Minimize crossings with spectral circular graph layout |

### AI Collaboration

| Notebook | Description |
|----------|-------------|
| [Claude Code Pairing](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_claude-code-pairing.html) | Claude Code notebook collaboration |
| [Roboco-op 2.1](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_robocoop-2.html) | AI notebook collaborator |
| [Roboco-op 3](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_robocoop-3.html) | Agents-as-functions |


### Experiments

| Notebook | Description |
|----------|-------------|
| [Editable Markdown](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_editable-md.html) | Inline editable markdown |
| [Direct Manipulation Plot](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_manipulate.html) | Direct manipulation for plots |
| [My Lopebooks](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_my-lopebooks.html) | Personal lopebooks index |
| [Compile Zig](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_compile-zig.html) | Zig compiler running in-browser via WASM — fully offline |

Feel free to open discussions and bugs in the Github repository
