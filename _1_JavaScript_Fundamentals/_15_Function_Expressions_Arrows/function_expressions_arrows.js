/*
In JavaScript, a function is not a “magical language structure”, but a special kind of value.
The syntax that we used before is called a Function Declaration:
*/
function sayHi() {
  alert( "Hello" );
}

// There is another syntax for creating a function that is called a Function Expression.
let sayHi = function() {
  alert( "Hello" );
};


// shows the function code
alert( sayHi );

// We can copy a function to another variable.
function sayHi() {   // (1) create
  alert( "Hello" );
}
  
let func = sayHi;    // (2) copy
  
func(); // Hello     // (3) run the copy
sayHi(); // Hello    // this still works too

/*
Note that we could also have used a Function Expression to declare sayHi.
A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code
block. The semicolon ; is recommended at the end of statements, no matter what is the value. So
the semicolon here is not related to the Function Expression itself in any way, it just terminates
the statement.
*/

/*
Callback functions are used to pass functions as values. The function below should ask the question
and, depending on the user’s answer, call yes() or no().
*/
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
  
function showOk() {
  alert( "You agreed." );
}
  
function showCancel() {
  alert( "You canceled the execution." );
}
  
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/*
We can use Function Expressions to write the function above in a much shorter way. Here, functions
are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such
functions are not accessible outside of ask (because they are not assigned to variables), but
that’s just what we want here. Such code appears in our scripts very naturally, it’s in the spirit
of JavaScript.
*/
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
  
ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

/*
Key differences between Function Declarations and Expressions are as follows:
In Function Declaration: a function, declared as a separate statement, in the main code flow.
In Function Expression: a function, created inside an expression or inside another syntax
construct. Here, the function is created at the right side of the “assignment expression” =.
A Function Expression is created when the execution reaches it and is usable from then on. On
the other hand a Function Declaration is usable in the whole script/code block. When a Function
Declaration is made within a code block, it is visible everywhere inside that block. But not
outside of it.
*/

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
let sum = function(a, b) {
  return a + b;
};

/*
There’s one more very simple and concise syntax for creating functions, that’s often better than
Function Expressions. It’s called “arrow functions”.
*/

let sum = (a, b) => a + b;
/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

// If we have only one argument, then parentheses can be omitted, making that even shorter.

// same as let double = function(n) { return n * 2 }
let double = n => n * 2;
alert( double(3) ); // 6

// If there are no arguments, parentheses should be empty (but they should be present).
let sayHi = () => alert("Hello!");
sayHi();

/*
Arrow functions can be used in the same way as Function Expressions. For instance, below is the
rewritten example with welcome().
*/
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();

/*
Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as
the eyes get used to the structure. They are very convenient for simple one-line actions.
*/

/*
The examples above took arguments from the left of => and evaluated the right-side
expression with them. Sometimes we need something a little bit more complex, like multiple
expressions or statements. It is also possible, but we should enclose them in curly braces.
Then use a normal return within them.
*/
let sum = (a, b) => { 
  let result = a + b;
  // if we use curly braces, use return to get results
  return result;
};
  
alert( sum(1, 2) ); // 3
