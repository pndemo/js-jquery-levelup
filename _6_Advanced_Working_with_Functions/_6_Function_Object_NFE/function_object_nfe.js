// A a function’s name is accessible as the “name” property.
function sayHi() {
    alert("Hi");
}
  
alert(sayHi.name); // sayHi

// There is another built-in property “length” that returns the number of function parameters.
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

/*
We can also add properties of our own. Below we add the counter property to track the total calls
count.
*/
function sayHi() {
    alert("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert( `Called ${sayHi.counter} times` ); // Called 2 times

/*
Named Function Expression, or NFE, is a term for Function Expressions that have a name. For instance,
let’s take an ordinary Function Expression. There are two special things about this:
1) It allows the function to reference itself internally.
2) It is not visible outside of the function.
*/

// For instance, the function sayHi below calls itself again with "Guest" if no who is provided.
let sayHi = function func(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        func("Guest"); // use func to re-call itself
    }
};
  
sayHi(); // Hello, Guest
  
// But this won't work:
func(); // Error, func is not defined (not visible outside of the function)
