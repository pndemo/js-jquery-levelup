/*
We already know that in JavaScript it’s easy to lose this. Once a method is passed somewhere
separately from the object – this is lost.
*/

// Below is how it may happen with setTimeout.
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
  
setTimeout(user.sayHi, 1000); // Hello, undefined!

/* The output shows not “John” as this.firstName, but undefined! That’s because setTimeout got the
function user.sayHi, separately from the object. The simplest solution is to use a wrapping
function as shown below.
*/

/*
Works because it receives user from the outer lexical environment, and then calls the method
normally.
*/
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
  
setTimeout(function() {
    user.sayHi(); // Hello, John!
}, 1000);

/*
For the methiod above, what if before setTimeout triggers (there’s one second delay!) user changes
value? Then, suddenly, it will call the wrong object. Functions provide a built-in method bind that
allows to fix this.
*/
let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
  
let sayHi = user.sayHi.bind(user); // (*)
  
sayHi(); // Hello, John!
  
setTimeout(sayHi, 1000); // Hello, John!
