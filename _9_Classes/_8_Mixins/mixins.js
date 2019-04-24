/*
In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an
object. And a class may extend only one other class. But sometimes that feels limiting. For
instance, I have a class StreetSweeper and a class Bicycle, and want to make a
StreetSweepingBicycle. Or, talking about programming, we have a class Renderer that implements
templating and a class EventEmitter that implements event handling, and want to merge these
functionalities together with a class Page, to make a page that can use templates and emit events.
There’s a concept that can help here, called “mixins”. A mixin provides methods that implement a
certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
*/

/*
The simplest way to make a mixin in JavaScript is to make an object with useful methods, so that we
can easily merge them into a prototype of any class. For instance below the mixin sayHiMixin is used
to add some “speech” for User.
*/
let sayHiMixin = {
    sayHi() {
        alert(`Hello ${this.name}`);
    },
    sayBye() {
        alert(`Bye ${this.name}`);
    }
};
  
// usage:
class User {
    constructor(name) {
        this.name = name;
    }
}
  
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

/*
Mixins can make use of inheritance inside themselves. For instance, below sayHiMixin inherits from
sayMixin.
*/
let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};
  
let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.create to set the prototype here)
  
    sayHi() {
        // call parent method
        super.say(`Hello ${this.name}`);
    },
    sayBye() {
        super.say(`Bye ${this.name}`);
    }
};
  
class User {
    constructor(name) {
        this.name = name;
    }
}
  
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
