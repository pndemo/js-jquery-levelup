/*
A variable in JavaScript can contain any data. At one moment can be a string and at another be
a number, hence JavaScript is a dynamically typed language.
*/

let name = 'John Doe';
name = 123;

let num = 123;
num = 1.23;

// Infinity represents the mathematical Infinity
alert( 1 / 0 );
alert( Infinity );

// NaN represents a computational error
alert( "number" / 2 );

/*
A string in JavaScript must be surrounded by quotes, either:
1) Double quotes: "Hello"
2) Single quotes: 'Hello'
3) Backticks: `Hello`
Double and single quotes are “simple” quotes. There’s no difference between them in JavaScript.
*/
let str = "Hi there";
let str2 = 'Single quotes are ok';
let phrase = `can embed ${str}`;

/*
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions
into a string by wrapping them in ${…}
*/

let name = "John Doe";

// Embed a variable
alert( `Hello, ${name}!` );

// Embed an expression
alert( `the result is ${1 + 2}` );

// The boolean type has only two values: true and false
let nameFieldChecked = true;
let ageFieldChecked = false;

// Boolean values also come as a result of comparisons
let isGreater = 4 > 1;
alert( isGreater ); // true

/*
The special null value does not belong to any of the types described above.
It forms a separate type of its own which contains only the null value.
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
*/
let age = null;

/*
The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned,
then its value is undefined
*/
let x;
alert(x); // undefined

/*
Technically, it is possible to assign undefined to any variable. Normally, we use null to assign
an “empty” or “unknown” value to a variable, and we use undefined for checks like seeing if a
variable has been assigned.
*/
let x = 123;
x = undefined;

/*
The typeof operator returns the type of the argument. It’s useful when we want to process values of
different types differently or just want to do a quick check and it supports two forms of syntax:
1. As an operator: typeof x.
2. As a function: typeof(x).
*/

typeof undefined // "undefined"
typeof 0 // "number"
typeof true // "boolean"
typeof "foo" // "string"
typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)

