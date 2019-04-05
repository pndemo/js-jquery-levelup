/*
In programming, we often want to take something and extend it. For instance, we have a user object
with its properties and methods, and want to make admin and guest as slightly modified variants of
it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new
object on top of it.

When we want to read a property from object, and it’s missing, JavaScript automatically takes it
from the prototype. In programming, such thing is called “prototypal inheritance”. Many cool
language features and programming techniques are based on it. The property [[Prototype]] is
internal and hidden, but there are many ways to set it.
*/

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
  
rabbit.__proto__ = animal;

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true

/*
If animal above has a lot of useful properties and methods, then they become automatically
available in rabbit. Such properties are called “inherited”. The prototype chain can also
be longer.
*/
let animal = {
    eats: true,
    walk() {
        alert("Animal walk");
    }
};
  
let rabbit = {
    jumps: true,
    __proto__: animal
};
  
let longEar = {
    earLength: 10,
    __proto__: rabbit
};
  
// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

/*
There are actually only two limitations in using prototypes.

1) The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__
in a circle.
2) The value of __proto__ can be either an object or null, other types (like primitives) are
ignored.

Also it may be obvious, but still: there can be only one [[Prototype]]. An object may not inherit
from two others.
*/

/*
No matter where the method is found: in an object or its prototype. In a method call, this is always
the object before the dot. For instance below, animal represents a “method storage”, and rabbit
makes use of it. The call rabbit.sleep() sets this.isSleeping on the rabbit object.
*/
// animal has methods
let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};
  
let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};
  
// modifies rabbit.isSleeping
rabbit.sleep();
  
alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)
