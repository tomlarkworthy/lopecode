# Lopecode

Lopecode is a web-based modable programming environment where a small microkernal core defines a small set of features to enable live coding
1. hot code swapping
2. modules
3. reactive dataflow programming model

and everything else is implemented in userspace, including the editor and UI. There is no external cannonical source code, instead the runtime itself is decompiled on demand.

One module, the Exporter, serializes to a single static self-hosting HTML file but it is not the only possability. Lopecode's microkernel is the `Observable Runtime`, and as such, Observable notebooks can be serialized to Lopecode.


The ["Tour of Lopecode"](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-tour.html) is an interactive introduction to some of the things you can build in Lopebooks

The ["vision statement"](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_lopecode-vision.html) explains the endgoal in more detail and is itself a lopebook you can hack around with.

The ["audio sequencer"](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_sequencer.html) is an example of a non-trivial application that remembers its state.


The blog post [reactive reflective testing](https://tomlarkworthy.github.io/lopebooks/notebooks/@tomlarkworthy_reactive-reflective-testing.html) explains how reactive programming can super charge unit testing and development. It also shows the value of using lopebooks are interactive blog posts.


[Jumpgate](https://tomlarkworthy.github.io/lopecode/notebooks/@tomlarkworthy_jumpgate.html) can transform Observable notebooks to lopecode.
