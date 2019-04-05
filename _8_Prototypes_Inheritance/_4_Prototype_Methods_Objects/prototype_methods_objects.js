/*
The __proto__ is considered outdated and somewhat deprecated (in browser-only part of the Javascript
standard). The modern methods are:

1) Object.create(proto[, descriptors]) – creates an empty object with given proto as [[Prototype]]
and optional property descriptors.
2) Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
3) Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.
*/
let animal = {
    eats: true
};
  
// create a new object with animal as a prototype
let rabbit = Object.create(animal);

alert(rabbit.eats); // true
alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

/*
Object.create has an optional second argument: property descriptors. We can provide additional
properties to the new object.
*/
let animal = {
    eats: true
};
  
let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});
  
alert(rabbit.jumps); // true

/*
We can use Object.create to perform an object cloning more powerful than copying properties in
for..in.
*/
let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

/*
As we know, objects can be used as associative arrays to store key/value pairs. But if we try to
store user-provided keys in it (for instance, a user-entered dictionary), we can see an interesting
glitch: all keys work fine except "__proto__".
*/
let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // [object Object], not "some value"!

/*
That behaviour above shouldn’t surprise us though. The __proto__ property is special: it must be
either an object or null, a string can not become a prototype. The __proto__ is not a property of
an object, but an accessor property of Object.prototype. So, if obj.__proto__ is read or set, the
corresponding getter/setter is called from its prototype, and it gets/sets [[Prototype]].
*/

/*
If we want to use an object as an associative array, we can do it with a little trick.
Object.create(null) creates an empty object without a prototype ([[Prototype]] is null).
*/
let obj = Object.create(null);

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]); // "some value"
