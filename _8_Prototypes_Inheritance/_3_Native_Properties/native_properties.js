/*
The "prototype" property is widely used by the core of JavaScript itself. All built-in constructor
functions use it.
*/

// Let’s say we output an empty object
let obj = {};
alert( obj ); // "[object Object]" ?

/*
The short notation obj = {} above is the same as obj = new Object(), where Object – is a built-in
object constructor function. And that function has Object.prototype that references a huge object
with toString and other functions.
*/

/*
Other built-in objects such as Array, Date, Function and others also keep methods in prototypes. For
instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally.
So the array data is written into the new object, and Array.prototype becomes its prototype and
provides methods. That’s very memory-efficient. By specification, all built-in prototypes have
Object.prototype on the top. Sometimes people say that “everything inherits from objects”.
*/

let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null

/*
The most intricate thing happens with strings, numbers and booleans. They are not objects, but if we
try to access their properties, then temporary wrapper objects are created using built-in
constructors String, Number, Boolean, they provide the methods and disappear. These objects are
created invisibly to us and most engines optimize them out, but the specification describes it
exactly this way. Methods of these objects also reside in prototypes, available as String.prototype,
Number.prototype and Boolean.prototype.
*/

/*
Native prototypes can be modified. For instance, if we add a method to String.prototype, it becomes
available to all strings.
*/
String.prototype.show = function() {
    alert(this);
};
  
"BOOM!".show(); // BOOM!

/*
Modifying native prototypes above is generally a bad idea though because Prototypes are global, so
it’s easy to get a conflict.  In modern programming, there is only one case when modifying native
prototypes is approved. That’s polyfilling.
*/

/*
Some methods of native prototypes are often borrowed. For instance, if we’re making an array-like
object, we may want to copy some array methods to it.
*/
let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
};
  
obj.join = Array.prototype.join;
  
alert( obj.join(',') ); // Hello,world!
