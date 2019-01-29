/*
Memory management in JavaScript is performed automatically and invisibly to us. We create
primitives, objects, functions… All that takes memory. What happens when something is not
needed any more? How does the JavaScript engine discover it and clean it up? The main concept
of memory management in JavaScript is reachability. “reachable” values are those that are
accessible or usable somehow. They are guaranteed to be stored in memory.

1. There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.
For instance:

a) Local variables and parameters of the current function.
b) Variables and parameters for other functions on the current chain of nested calls.
c) Global variables.

2. Any other value is considered reachable if it’s reachable from a root by a reference or by a
chain of references. For instance, if there’s an object in a local variable, and that object has
a property referencing another object, that object is considered reachable. And those that it
references are also reachable.

There’s a background process in the JavaScript engine that is called garbage collector. It monitors
all objects and removes those that have become unreachable.

JavaScript engines apply many optimizations to make it run faster and not affect the execution.

Some of the optimizations:

1. Generational collection – objects are split into two sets: “new ones” and “old ones”. Many
objects appear, do their job and die fast, they can be cleaned up aggressively. Those that
survive for long enough, become “old” and are examined less often.
2. Incremental collection – if there are many objects, and we try to walk and mark the whole
object set at once, it may take some time and introduce visible delays in the execution. So the
engine tries to split the garbage collection into pieces. Then the pieces are executed one by one,
separately.
3. Idle-time collection – the garbage collector tries to run only while the CPU is idle, to reduce
the possible effect on the execution.
*/
