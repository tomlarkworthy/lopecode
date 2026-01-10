# Lopecode

Lopecode is a web-based modable programming environment where a small microkernal core defines minimal features to enable live coding applications to be built.

The kernel has no UI and defines programming mechanisms for
1. reactive dataflow programming model
2. hot code swapping
3. modules

Everything else is implemented in userspace, including an editor and a UI which can be live edited. There is no external source code, instead the runtime itself is decompiled on demand, according to a runtime-is-the-source-of-truth principle.

One userspace module, the Exporter, can self-serializes the entire runtime to a single HTML file, so you can use it offline from the local filesystem. There are no dependancies other than a web browser.

The ["Tour of Lopecode"](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-tour.html) is an interactive introduction to some of the things you can build in Lopebooks

["Notes"](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_notes.html) is a small offline notetaking application, using [Dexie.js](https://dexie.org/), with detailed explaination of its technical design, meant for learning over being useful.

The ["vision statement"](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-vision.html) explains the endgoal in more detail and is itself a lopebook you can hack around with.

The ["audio sequencer"](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_sequencer.html) is an example of a non-trivial application that remembers its runtime state.


The blog post [reactive reflective testing](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_reactive-reflective-testing.html) explains how reactive programming can super charge unit testing and development. It also shows the value of using lopebooks are interactive blog posts.

The notebook [Minimize Crossings: Spectral Circular Graph for Layout](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_spectral-layout.html) explains the spectral layout algorithm powering some of the visualizations.


[Jumpgate](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_jumpgate.html) can transform Observable notebooks to lopecode.
