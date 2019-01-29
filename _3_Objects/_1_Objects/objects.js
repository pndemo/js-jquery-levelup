/*
Objects are used to store keyed collections of various data and more complex entities. In
JavaScript, objects penetrate almost every aspect of the language. So we must understand them
first before going in-depth anywhere else.

An object can be created with figure brackets {…} with an optional list of properties. A property
is a “key: value” pair, where key is a string (also called a “property name”), and value can be
anything.

We can imagine an object as a cabinet with signed files. Every piece of data is stored in its file
by the key. It’s easy to find a file by its name or add/remove a file.
*/

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

/*
We can immediately put some properties into {...} as “key: value” pairs: In the user object below,
there are two properties:

1. The first property has the name "name" and the value "John".
2. The second one has the name "age" and the value 30.
*/
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// Property values are accessible using the dot notation.
alert( user.name ); // John
alert( user.age ); // 30

// To remove a property, we can use delete operator.
delete user.age;

// We can also use multiword property names, but then they must be quoted.
let user = {
    name: "John",
    age: 30,
    "likes birds": true
};

// The last property in the list may end with a comma.
let user = {
    name: "John",
    age: 30,
}

/*
For multiword properties, the dot access doesn’t work and instead gives a syntax error. I.e.

user.likes birds = true
*/

// There’s an alternative “square bracket notation” that works with any string.
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

/*
Square brackets also provide a way to obtain the property name as the result of any expression –
as opposed to a literal string. Here, the variable key may be calculated at run-time or depend
on the user input. And then we use it to access the property. That gives us a great deal of
flexibility. The dot notation cannot be used in a similar way.
*/
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// We can use square brackets in an object literal. That’s called computed properties.
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

/*
Square brackets are much more powerful than the dot notation. They allow any property names and
variables. But they are also more cumbersome to write. So most of the time, when property names
are known and simple, the dot is used.
*/

/*
In real code we often use existing variables as values for property names. In the example below,
properties have the same names as variables. The use-case of making a property from a variable is
so common, that there’s a special property value shorthand to make it shorter.
*/
function makeUser(name, age) {
    return {
        name, // same as name: name
        age   // same as age: age
        // ...
    };
}

// We can use both normal properties and shorthands in the same object.
let user = {
    name,  // same as name:name
    age: 30
};

// There exists a special operator "in" to check for the existence of a property.
"key" in object

/*
To walk over all keys of an object, there exists a special form of the loop: for..in. This is a
completely different thing from the for(;;) construct.
*/
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
  
for(let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}

/*
Ordering of objects works in such a way that integer properties are sorted, others appear in
creation order.
*/
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};
  
for(let code in codes) {
    alert(code); // 1, 41, 44, 49
}

/* One of the fundamental differences of objects vs primitives is that they are stored and copied
“by reference”. Primitive values: strings, numbers, booleans – are assigned/copied “as a whole
value”.
*/
let user = { name: "John" };
let admin = user; // copy the reference
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

/*
The equality == and strict equality === operators for objects work exactly the same. Two objects
are equal only if they are the same object.
*/
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

// Two independent objects are not equal, even though both are empty
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

// An object declared as const can be changed.
const user = {
    name: "John"
};
  
user.age = 25; // (*)
alert(user.age); // 25

/*
Copying an object variable creates one more reference to the same object. But what if we need to
duplicate an object? Create an independent copy, a clone? That’s also doable, but a little bit
more difficult, because there’s no built-in method for that in JavaScript. To do that, then we
need to create a new object and replicate the structure of the existing one by iterating over
its properties and copying them on the primitive level.
*/
let user = {
    name: "John",
    age: 30
};
  
let clone = {}; // the new empty object
  
// let's copy all user properties into it
for (let key in user) {
    clone[key] = user[key];
}
  
// now clone is a fully independent clone
clone.name = "Pete"; // changed the data in it
alert( user.name ); // still John in the original object
