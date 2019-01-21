/*
From maths:

1. Greater/less than: a > b, a < b.
2. Greater/less than or equals: a >= b, a <= b.
3. Equals: a == b (please note the double equals sign =. A single symbol a = b would mean an
assignment).
4. Not equals. In maths the notation is ≠, but in JavaScript it’s written as an assignment with
an exclamation sign before it: a != b.

Like all other operators, a comparison returns a value. In this case, the value is a boolean.
1. true – means “yes”, “correct” or “the truth”.
2. false – means “no”, “wrong” or “not the truth”.
*/
alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

// A comparison result can be assigned to a variable, just like any value
let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

/*
To see whether a string is greater than another, JavaScript uses the so-called “dictionary”
or “lexicographical” order. In other words, strings are compared letter-by-letter.
*/
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

/*
The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then
the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same
way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is
greater.
*/

// When comparing values of different types, JavaScript converts the values to numbers.
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

// For boolean values, true becomes 1 and false becomes 0.
alert( true == 1 ); // true
alert( false == 0 ); // true

// A regular equality check == has a problem. It cannot differentiate 0 from false.
alert( 0 == false ); // true
alert( '' == false ); // true

// A strict equality operator === checks the equality without type conversion.
alert( 0 === false );

// There’s a non-intuitive behavior when null or undefined are compared to other values.
alert( null === undefined ); // false for a strict equality check ===
alert( null == undefined ); // true for a non-strict check ==

/*
For maths and other comparisons < > <= >=
null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN
*/

// Strange result: null vs 0
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// The value undefined shouldn’t be compared to other values
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
