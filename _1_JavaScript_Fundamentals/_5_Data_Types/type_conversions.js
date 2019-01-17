/*
Most of the time, operators and functions automatically convert the values given to them to the
right type. This is called “type conversion”. For example, alert automatically converts any value
to a string to show it.
*/

// String conversion happens when we need the string form of a value.
let value = true;
alert(typeof value); // boolean
value = String(value); // string "true"
alert(typeof value); // string

// Numeric conversion happens in mathematical functions and expressions automatically.
alert( '6' / '2' );

// We can use the Number(value) function to explicitly convert a value to a number.
let str = "123";
alert(typeof str); // string
let num = Number(str); // 123
alert(typeof num); // number

/*
Numeric conversion rules:
1. undefined => NaN
2. null => 0
3. true and false => 1 and 0
4. string => Whitespaces from the start and end are removed. If the remaining string is empty,
The result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
*/

// Addition ‘+’ concatenates strings
alert( 1 + '2' ); // '12'
alert( '1' + 2 ); // '12'

/*
Boolean conversion is the simplest one. It happens in logical operations but can also be performed
explicitly with a call to Boolean(value). The conversion rule:
1) Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become
false.
2) Other values become true.
*/
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false
alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
