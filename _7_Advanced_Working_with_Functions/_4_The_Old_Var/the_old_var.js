/*
let and const behave exactly the same way in terms of Lexical Environments. But var is a very
different, originating from very old times. It’s generally not used in modern scripts, but still
lurks in the old ones.
*/

// From the first sight, var behaves similar to let.
function sayHi() {
    var phrase = "Hello"; // local variable, "var" instead of "let"
  
    alert(phrase); // Hello
}
sayHi();
alert(phrase); // Error, phrase is not defined

// var variables are either function-wide or global, they are visible through blocks though.
if (true) {
    var test = true; // use "var" instead of "let"
}
alert(test); // true, the variable lives after if

// The same thing for loops: var cannot be block- or loop-local.
for (var i = 0; i < 10; i++) {
    // ...
}
  
alert(i); // 10, "i" is visible after loop

// If a code block is inside a function, then var becomes a function-level variable
function sayHi() {
    if (true) {
        var phrase = "Hello";
    }
    alert(phrase); // works
}
  
sayHi();
alert(phrase); // Error: phrase is not defined
