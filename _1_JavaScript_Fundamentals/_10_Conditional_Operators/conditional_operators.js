/*
Sometimes, we need to perform different actions based on different conditions. To do that, we use
the if statement and the conditional operator also referred to as the “question mark” operator ?
for simplicity.
*/

/*
The if statement evaluates a condition and, if the condition’s result is true, executes a
block of code. Wrapping code with curly braces {} every an if statement is used improves
readability.
*/
if (year == 2015) {
    alert( "It was 2015" );
}

/*
The if () statement evaluates the expression in its parentheses and converts result to a boolean.
A number 0, an empty string "", null, undefined, and NaN all become false while other values
become true.
*/

// 0 is falsy
if (0) {
}

// 1 is truthy
if (1) {
}

// We can also pass a pre-evaluated boolean value to if and equality will evaluate to true or false.
let cond = (year == 2015);
if (cond) {
}

// The if statement may contain an optional “else” block. It executes when the condition is false.
let year = prompt('In which year was the ECMAScript-2015 published?', '');
if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be wrong?' );
}

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.
let year = prompt('In which year was the ECMAScript-2015 published?', '');
if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

/*
The ternary operator works in such a way that the condition is evaluated: if it’s truthy then value1
is returned, otherwise – value2.
*/
let accessAllowed = (age > 18) ? true : false;

/*
A sequence of question mark operators ? can return a value that depends on more than one condition.
1. The first question mark checks whether age < 3.
2. If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon
‘":"’, checking age < 18.
3. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next
colon ‘":"’, checking age < 100.
4. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the
last colon ‘":"’, returning 'What an unusual age!'.
*/
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );
