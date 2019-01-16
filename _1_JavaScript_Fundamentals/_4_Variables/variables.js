/*
Most of the time, a JavaScript application needs to work with information and variables
are used to store this information.

To create a variable in JavaScript, use the let keyword.
*/

let name; // declare variable

name = 'John Doe'; // store string in variable

alert(name); // shows variable content

let name = 'John Doe'; // define variable and assign value

/*
Declaring multiple variables in one line as shown below might seem shorter, it's not recommended
though. For the sake of better readability, a single line per variable should be used.
*/

// BAD
let name = 'John Doe', age = 25, message = 'This is just me!';

// GOOD
let name = 'John Doe';
let age = 25;
let message = 'This is just me!';

// GOOD
let name = 'John Doe',
    age = 25,
    message = 'This is just me!';

// GOOD
let name = 'John Doe'
    , age = 25
    , message = 'This is just me!';

// All the variants above do the same thing. It’s a matter of personal preference and conventions.

/* In older scripts, you may find keyword: var instead of let. It also declares a variable but
in a slightly different, “old-school” way.
*/

// Declare two variables and copy values from them
let name = 'John Doe';
let message = 'Newman';

name = message;

/*
Limitations of variable naming in JavaScript are as follows:
1. The name must contain only letters, digits, or the symbols $ and _.
2. The first character must not be a digit.
3. For multiple words, camelCase is commonly used.
4. The dollar sign '$' and the underscore '_' can also be used in names.
5. Case matters, apple and AppLE are two different variables.
6. Non-English letters are allowed, but not recommended.
7. There are reserved words, which cannot be used as variable names because they
are used by the language itself. Visit
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
to view these words.
8. An assignment without use strict, i.e name = 'John Doe' works.
*/

let firstName; // GOOD
let number123; // GOOD
let $ = 1; // GOOD
let _ = 2; // GOOD
// let 123; // BAD 
// let first-name; // BAD
