/*
The instanceof operator allows to check whether an object belongs to a certain class. It also takes
inheritance into account. The syntax is:

obj instanceof Class

It returns true if obj belongs to the Class (or a class inheriting from it).
*/
class Rabbit {}
let rabbit = new Rabbit();
// is it an object of Rabbit class?
alert( rabbit instanceof Rabbit ); // true

// It also works with constructor functions
function Rabbit() {}
alert( new Rabbit() instanceof Rabbit ); // true

// It also works with built-in classes like Array
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true

/*
Please note that arr also belongs to the Object class. That’s because Array prototypally inherits
from Object. The instanceof operator examines the prototype chain for the check, and is also
fine-tunable using the static method Symbol.hasInstance.
*/

/*
We already know that plain objects are converted to string as [object Object]. That’s their
implementation of toString. But there’s a hidden feature that makes toString actually much more
powerful than that. We can use it as an extended typeof and an alternative for instanceof.
*/
let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]
