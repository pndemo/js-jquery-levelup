/*
In JavaScript there are several well-known programming patterns to make classes even without using
the class keyword. People talk about “classes” meaning not only those defined with class, but also
with these patterns. The class construct will be described in the next chapter, but in JavaScript
it’s a “syntax sugar” and an extension of the prototypal class pattern.
*/

// The constructor function below can be considered a “class” according to the definition
function User(name) {
    this.sayHi = function() {
        alert(name);
    };
}
  
let user = new User("John");
user.sayHi(); // John

/*
The function class above follows all parts of the definition:

1) It is a “program-code-template” for creating objects (callable with new).
2) It provides initial values for the state (name from parameters).
3) It provides methods (sayHi).
*/

/*
In the functional class pattern, local variables and nested functions inside User, that are not
assigned to this, are visible from inside, but not accessible by the outer code. So we can easily
add internal functions and variables, like calcAge().
*/
function User(name, birthday) {
    // only visible from other methods inside User
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }
  
    this.sayHi = function() {
        alert(`${name}, age:${calcAge()}`);
    };
}
  
let user = new User("John", new Date(2000, 0, 1));
user.sayHi(); // John, age:17

/*
In the factory class pattern, we can create a class without using new at all. The only benefit of
this method is that we can omit new. In other aspects it’s almost the same as the functional
pattern.
*/

function User(name, birthday) {
    // only visible from other methods inside User
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }
  
    return {
        sayHi() {
            alert(`${name}, age:${calcAge()}`);
        }
    };
}
  
let user = User("John", new Date(2000, 0, 1));
user.sayHi(); // John, age:17

/*
Prototype-based classes are the most important and generally the best. Functional and factory class
patterns are rarely used in practice. The code structure is as shown below:

1) The constructor User only initializes the current object state.
2) Methods are added to User.prototype.
*/

function User(name, birthday) {
    this._name = name;
    this._birthday = birthday;
}
  
User.prototype._calcAge = function() {
    return new Date().getFullYear() - this._birthday.getFullYear();
};
  
User.prototype.sayHi = function() {
    alert(`${this._name}, age:${this._calcAge()}`);
};
  
let user = new User("John", new Date(2000, 0, 1));
user.sayHi(); // John, age:17

/*
For Prototype-based inheritance for classes, let’s say we have two prototype-based classes. That is
Rabbit and Animal. The line (*) sets up the prototype chain. So that rabbit first searches methods
in Rabbit.prototype, then Animal.prototype.
*/

// Animal
function Animal(name) {
    this.name = name;
}
  
// All animals can eat, right?
Animal.prototype.eat = function() {
    alert(`${this.name} eats.`);
};
  
// Rabbit
function Rabbit(name) {
    this.name = name;
}
  
Rabbit.prototype.jump = function() {
    alert(`${this.name} jumps!`);
};
  
// setup the inheritance chain
Rabbit.prototype.__proto__ = Animal.prototype; // (*)

let rabbit = new Rabbit("White Rabbit");
rabbit.eat(); // rabbits can eat too
rabbit.jump();
