/*
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing)
function’s variables.

In JavaScript, every running function, code block, and the script as a whole have an associated
object known as the Lexical Environment. The Lexical Environment object consists of two parts:

1) Environment Record – an object that has all local variables as its properties (and some other
information like the value of this).
2) A reference to the outer lexical environment, usually the one associated with the code lexically
right outside of it (outside of the current curly brackets).
*/

/* For instance, in this simple code, there is only one Lexical Environment. This is called a global
Lexical Environment. The global Lexical Environment has no outer reference, so it points to null.
*/
let phrase = "Hello";
alert(phrase);

// A function gets outer variables as they are now; it uses the most recent values.
let name = "John";

function sayHi() {
    alert("Hi, " + name);
}
name = "Pete"; // (*)
sayHi(); // Pete

/*
A function is called “nested” when it is created inside another function. Here the nested function
getFullName() is made for convenience. It can access the outer variables and so can return the full
name. Nested functions are quite common in Javascript.
*/
function sayHiBye(firstName, lastName) {
    // helper nested function to use below
    function getFullName() {
        return firstName + " " + lastName;
    }
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
}

/*
What’s much more interesting, a nested function can be returned: either as a property of a new
object (if the outer function creates an object with methods) or as a result by itself. It can then
be used somewhere else. No matter where, it still has access to the same outer variables. For
instance, here the nested function is assigned to the new object by the constructor function:
*/
// constructor function returns a new object
function User(name) {

    // the object method is created as a nested function
    this.sayHi = function() {
        alert(name);
    };
}
  
let user = new User("John");
user.sayHi(); // the method "sayHi" code has access to the outer "name"

/*
A Lexical Environment is created when a code block runs and contains block-local variables. For
examples: if, while, for blocks.
*/
for (let i = 0; i < 10; i++) {
    // Each loop has its own Lexical Environment
    // {i: value}
}
alert(i); // Error, no such variable

/*
We also can use a “bare” code block {…} to isolate variables into a “local scope”. That may happen
if the variable name is a widespread word, and script authors are unaware of each other. If we’d
like to avoid that, we can use a code block to isolate the whole script or a part of it.
*/
{
    // do some job with local variables that should not be seen outside
    let message = "Hello";
    alert(message); // Hello
} 
alert(message); // Error: message is not defined
