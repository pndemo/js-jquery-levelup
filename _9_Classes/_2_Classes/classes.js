/*
The “class” construct allows one to define prototype-based classes with a clean, nice-looking
syntax. It also introduces great new features which are useful for object-oriented programming.
*/

// The class syntax is versatile
class User {

    constructor(name) {
        this.name = name;
    }
  
    sayHi() {
        alert(this.name);
    }
  
}
  
let user = new User("John");
user.sayHi();

/*
In Javascript, a class is a kind of function. The definition class User {...} creates a function
under the same name and puts the methods into User.prototype. So the structure is similar.
*/
class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
}
  
// proof: User is a function
alert(typeof User); // function

// proof: User is the "constructor" function
alert(User === User.prototype.constructor); // true

// proof: there are two methods in its "prototype"
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

/*
Just like functions, classes can be defined inside another expression, passed around, returned etc.
*/
function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            alert(phrase);
        };
    };
}
  
let User = makeClass("Hello");
new User().sayHi(); // Hello

/*
And, like Named Function Expressions, such classes also may have a name, that is visible inside that
class only.
*/

let User = class MyClass {
    sayHi() {
        alert(MyClass); // MyClass is visible only inside the class
    }
};
  
new User().sayHi(); // works, shows MyClass definition
alert(MyClass); // error, MyClass not visible outside of the class

/*
Differences between classes and functions:
1) Unlike a regular function, a class constructor can’t be called without new.
2) If we output it like alert(User), some engines show "class User...", while others show "function
User...".
3) A class definition sets enumerable flag to false for all methods in the "prototype". That’s good,
because if we for..in over an object, we usually don’t want its class methods.
4) If there’s no constructor in the class construct, then an empty function is generated, just as if
we had written constructor() {}.
5) All code inside the class construct is automatically in strict mode.
*/

// Classes also include getters/setters implemented using get/set.
class User {

    constructor(name) {
        // invokes the setter
        this._name = name;
    }
  
    get name() {
        return this._name;
    }
  
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }
}
  
let user = new User("John");
alert(user.name); // John

user = new User(""); // Name too short.
