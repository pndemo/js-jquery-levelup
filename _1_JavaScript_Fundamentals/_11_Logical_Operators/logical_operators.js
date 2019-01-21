/*
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT). Although they are
called “logical”, they can be applied to values of any type, not only boolean. Their result can
also be of any type.
*/

/*
The “OR” operator is represented with two vertical line symbols. In classical programming, the
logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns
true, otherwise it returns false.
*/
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

/*
If an operand is not a boolean, it’s converted to a boolean for the evaluation. For instance, the
number 1 is treated as true, the number 0 as false.
*/
if (1 || 0) {
    alert( 'truthy!' );
  }

/*
Most of the time, OR || is used in an if statement to test if any of the given conditions is true.
*/
let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

// More conditions can be passed
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

/*
Given multiple OR’ed values:

result = value1 || value2 || value3;
The OR || operator does the following:

1. Evaluates operands from left to right.
2. For each operand, converts it to boolean. If the result is true, stops and returns the original
value of that operand.
3. If all operands have been evaluated (i.e. all were false), returns the last operand.
4. A value is returned in its original form, without the conversion. In other words, a chain of
OR "||" returns the first truthy value or the last one if no such value is found.
*/
alert( 1 || 0 ); // 1 (1 is truthy)
alert( true || 'no matter what' ); // (true is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

/*
Operands can be not only values, but arbitrary expressions. OR evaluates and tests them from left
to right. The evaluation stops when a truthy value is reached, and the value is returned. This
process is called “a short-circuit evaluation” because it goes as short as possible from left to
right. This is clearly seen when the expression given as the second argument has a side effect like
a variable assignment.
*/
let x;
true || (x = 1);
alert(x); // undefined, because (x = 1) not evaluated

/*
If, instead, the first argument is false, || evaluates the second one, thus running the assignment.
*/
let x;
false || (x = 1);
alert(x); // 1

/*
The AND operator is represented with two ampersands &&. In classical programming, AND returns true
if both operands are truthy and false otherwise.
*/
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

// Just as with OR, any value is allowed as an operand of AND.
if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
}

/*
Given multiple AND’ed values. The AND && operator does the following:
1. Evaluates operands from left to right.
2. For each operand, converts it to a boolean. If the result is false, stops and returns the
original value of that operand.
3. If all operands have been evaluated (i.e. all were truthy), returns the last operand.
4. In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value
while OR returns the first truthy one.
*/

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

/*
The precedence of AND && operator is higher than OR ||. So the code a && b || c && d is essentially
the same as if the && expressions were in parentheses: (a && b) || (c && d).
*/

// Just like OR, the AND && operator can sometimes replace if.
let x = 1;
(x > 0) && alert( 'Greater than zero!' );

/*
The action in the right part of && would execute only if the evaluation reaches it. That is, only if
(x > 0) is true.
*/
let x = 1;
if (x > 0) {
  alert( 'Greater than zero!' );
}

/*
The boolean NOT operator is represented with an exclamation sign ! and the syntax is pretty simple.

The operator accepts a single argument and does the following:

1. Converts the operand to boolean type: true/false.
2. Returns the inverse value.
*/

alert( !true ); // false
alert( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type.
alert( !!"non-empty string" ); // true
alert( !!null ); // false
