/*
Object properties, besides a value, have three special attributes, called “flags”:

1) writable – if true, can be changed, otherwise it’s read-only.
2) enumerable – if true, then listed in loops, otherwise not listed.
3) configurable – if true, the property can be deleted and these attributes can be modified,
otherwise not.

When we create a property “the usual way”, all of them are true. But we also can change them
anytime.

The method Object.getOwnPropertyDescriptor allows to query the full information about a property.
*/

let user = {
    name: "John"
};
  
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
alert( JSON.stringify(descriptor, null, 2 ) );
/* property descriptor:
{
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
}
*/

/*
To change the flags, we can use Object.defineProperty. The syntax is:

Object.defineProperty(obj, propertyName, descriptor)

If the property exists, defineProperty updates its flags. Otherwise, it creates the property with
the given value and flags; in that case, if a flag is not supplied, it is assumed false.
*/

let user = {};

Object.defineProperty(user, "name", {
    value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
    "value": "John",
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/

// If either of the above is not what we want, we can set them to true in descriptor.
let user = {
    name: "John"
};
  
Object.defineProperty(user, "name", {
    writable: false
});
  
user.name = "Pete"; // Error: Cannot assign to read only property 'name'...

/*
No one can change the name of our user above, unless they apply their own defineProperty to override
ours.
*/

/*
Normally, a built-in toString for objects is non-enumerable, it does not show up in for..in. But if
we add toString of our own, then by default it shows up in for..in.
*/
let user = {
    name: "John",
    toString() {
        return this.name;
    }
};
  
// By default, both our properties are listed:
for (let key in user) alert(key); // name, toString

// Math.PI is read-only, non-enumerable and non-configurable
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

alert( JSON.stringify(descriptor, null, 2 ) );
/*
{
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
}
*/

// A programmer is unable to change the value of Math.PI or overwrite it
Math.PI = 3; // Error

/*
Making a property non-configurable is a one-way road. We cannot change it back, because
defineProperty doesn’t work on non-configurable properties.
*/

// Making user.name a “forever sealed” constant
let user = { };

Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
});

// won't be able to change user.name or its flags
// all this won't work:
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", ...)
Object.defineProperty(user, "name", {writable: true}); // Error

/*
There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties
at once. The syntax is:

Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2
    // ...
});
*/

/*
To get all property descriptors at once, we can use the method
Object.getOwnPropertyDescriptors(obj). Together with Object.defineProperties it can be used as a
“flags-aware” way of cloning an object. The syntax is:

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));
*/
