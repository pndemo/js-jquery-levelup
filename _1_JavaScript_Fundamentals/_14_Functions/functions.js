/*
Functions are the main “building blocks” of the program. They allow the code to be called many
times without repetition. We’ve already seen examples of built-in functions, like alert(message),
prompt(message, default) and confirm(question). But we can create functions of our own as well.
*/

// To create a function we can use a function declaration.
function showMessage() {
  alert( 'Hello everyone!' );
}

/*
The call showMessage() executes the code of the function. Here we will see the message two times.
This example clearly demonstrates one of the main purposes of functions: to avoid code duplication.
*/
showMessage();
showMessage();

// A variable declared inside a function is only visible inside that function.
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable
  
  alert( message );
}
  
showMessage(); // Hello, I'm JavaScript!

// A function can access an outer variable as well, for example:
let userName = 'John';
function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}
showMessage(); // Hello, John

// The function has full access to the outer variable. It can modify it as well.
let userName = 'John';
function showMessage() {
  userName = "Bob"; // changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John
showMessage();
alert( userName ); // Bob

/*
If a same-named variable is declared inside the function then it shadows the outer one.
For instance, in the code below the function uses the local userName. The outer one is ignored.
*/
let userName = 'John';
function showMessage() {
  let userName = "Bob"; // local variable
  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// create and use its own userName
showMessage();
alert( userName ); // John

/*
We can pass arbitrary data to functions using parameters (also called function arguments).
In the example below, the function has two parameters: from and text.
*/
function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

/*
If a parameter is not provided, then its value becomes undefined. For instance, the aforementioned
function showMessage(from, text) can be called with a single argument.
*/
showMessage("Ann");

// If we want to use a “default” text in this case, then we can specify it after =.
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

/*
Above "no text given" is a string, but it can be a more complex expression, which is only
evaluated and assigned if the parameter is missing.
*/
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() only executed if no text given
  // its result becomes the value of text
}

/*
A function can return a value back into the calling code as the result. The simplest example
would be a function that sums two values.
*/
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

// There may be many occurrences of return in a single function.
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
  
let age = prompt('How old are you?', 18);
  
if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}

// It is possible to use return without a value. That causes the function to exit immediately.
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }
  
  alert( "Showing you the movie" );
}

// If a function does not return a value, it is the same as if it returns undefined.
function doNothing() { /* empty */ }
alert( doNothing() === undefined ); // true

// An empty return is also the same as return undefined.
function doNothing() {
  return;
}
alert( doNothing() === undefined ); // true

/*
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible
and describe what the function does, so that someone reading the code gets an indication of what
the function does. It is a widespread practice to start a function with a verbal prefix which
vaguely describes the action. There must be an agreement within the team on the meaning of the
prefixes. For instance, functions that start with "show" usually show something. For example:

1. "get…" – return a value,
2. "calc…" – calculate something,
3. "create…" – create something,
4. "check…" – check something and return a boolean, etc.

A function should do exactly what is suggested by its name, no more. Two independent actions usually
deserve two functions, even if they are usually called together (in that case we can make a 3rd
function that calls those two). A few examples of breaking this rule:

1. getAge – would be bad if it shows an alert with the age (should only get).
2. createForm – would be bad if it modifies the document, adding a form to it (should only
create it and return).
3. checkPermission – would be bad if it displays the access granted/denied message (should only
perform the check and return the result).
*/
