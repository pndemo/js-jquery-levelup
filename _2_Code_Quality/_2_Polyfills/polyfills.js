/*
The JavaScript language steadily evolves. New proposals to the language appear regularly, they are
analyzed and, if considered worthy, are appended to the list at https://tc39.github.io/ecma262/ and
then progress to the specification.

Teams behind JavaScript engines have their own ideas about what to implement first. They may decide
to implement proposals that are in draft and postpone things that are already in the spec, because
they are less interesting or just harder to do.

So it’s quite common for an engine to implement only the part of the standard.

A good page to see the current state of support for language features is
https://kangax.github.io/compat-table/es6/ (it’s big, we have a lot to study yet).


When we use modern features of the language, some engines may fail to support such code. Just as
said, not all features are implemented everywhere. Here Babel comes to the rescue. Babel is a
transpiler. It rewrites modern JavaScript code into the previous standard.

1. First, the transpiler program, which rewrites the code. The developer runs it on their own
computer. It rewrites the code into the older standard. And then the code is delivered to the
website for users. Modern project build system like webpack or brunch provide means to run
transpiler automatically on every code change, so that doesn’t involve any time loss from
our side.

2. Second, the polyfill where the transpiler rewrites the code, so syntax features are covered.
But for new functions we need to write a special script that implements them. JavaScript is a
highly dynamic language, scripts may not just add new functions, but also modify built-in ones,
so that they behave according to the modern standard.
*/