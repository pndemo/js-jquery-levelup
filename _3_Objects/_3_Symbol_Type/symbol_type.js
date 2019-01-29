/*
By specification, object property keys may be either of string type, or of symbol type. Not
numbers, not booleans, only strings or symbols, these two types.

“Symbol” value represents a unique identifier. A value of this type can be created using
Symbol():
*/

// id is a new symbol
let id = Symbol();

/*
We can also give symbol a description (also called a symbol name), mostly useful for debugging
purposes.
*/

// id is a symbol with the description "id"
let id = Symbol("id");

/*
Symbols are guaranteed to be unique. Even if we create many symbols with the same description, they
are different values. The description is just a label that doesn’t affect anything.
*/
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

/*
Symbols allow us to create “hidden” properties of an object, that no other part of code can
occasionally access or overwrite. For instance, if we want to store an “identifier” for the object
user, we can use a symbol as a key for it.
*/
let user = { name: "John" };
let id = Symbol("id");

user[id] = "ID Value";
alert( user[id] ); // we can access the data using the symbol as the key

/*
Imagine that another script wants to have its own “id” property inside user, for its own purposes.
That may be another JavaScript library, so the scripts are completely unaware of each other. Then
that script can create its own Symbol("id") as shown below. There will be no conflict, because
symbols are always different, even if they have the same name.
*/
let id = Symbol("id");

user[id] = "Their id value";

// If we want to use a symbol in an object literal, we need square brackets.
let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123 // not just "id: 123"
};

// Symbolic properties do not participate in for..in loop.
let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );

// In contrast, Object.assign copies both string and symbol properties.
let id = Symbol("id");
let user = {
    [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123

/*
Symbols are usually different, even if they have the same names. But sometimes we want same-named
symbols to be same entities. For instance, different parts of our application want to access
symbol "id" meaning exactly the same property. To achieve that, there exists a global symbol
registry. We can create symbols in it and access them later, and it guarantees that repeated
accesses by the same name return exactly the same symbol. In order to create or read a symbol in
the registry, use Symbol.for(key). That call checks the global registry, and if there’s a symbol
described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the
registry by the given key.
*/

// read from the global registry
let id = Symbol.for("id"); // if the symbol did not exist, it is created

// read it again
let idAgain = Symbol.for("id");

// the same symbol
alert( id === idAgain ); // true

/*
For global symbols, not only Symbol.for(key) returns a symbol by name, but there’s a reverse call:
Symbol.keyFor(sym), that does the reverse: returns a name by a global symbol.
*/
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name from symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
