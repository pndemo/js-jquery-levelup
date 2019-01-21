/*
An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2
there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call
these “arguments” instead of “operands”.
*/

// An operator is unary if it has a single operand.
let x = 1;
x = -x;
alert( x ); // -1, unary negation was applied

// An operator is binary if it has two operands.
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

// Usually, the plus operator + sums numbers. But, if applied to strings, it concatenates them.
let s = "my" + "string";
alert(s); // mystring

// If one of the operands is a string, the other one is converted to a string too.
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

/*
Note that operations run from left to right. If there are two numbers followed by a string,
the numbers will be added before being converted to a string.
*/
alert(2 + 2 + '1' ); // "41" and not "221"

/*
String concatenation and conversion is a special feature of the binary plus +.
Other arithmetic operators work only with numbers and always convert their operands to numbers.
*/
alert( 2 - '1' );
alert( '6' / '2' );

/*
The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do
anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
*/

// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

/*
If an expression has more than one operator, the execution order is defined by their precedence, or,
in other words, the implicit priority order of operators. Below is the precedence table.

Precedence, name and sign:
16	unary plus	+
16	unary negation	-
14	multiplication	*
14	division	/
13	addition	+
13	subtraction	-
3	assignment	=
*/

/*
Chained assignments evaluate from right to left. First, the rightmost expression 2 + 2 is evaluated
and then assigned to the variables on the left: c, b and a. At the end, all the variables share a
single value.
*/

let a, b, c;
a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

/*
An operator always returns a value. That’s obvious for most of them like addition + or
multiplication *. But the assignment operator follows this rule too. The call x = value writes
the value into x and then returns it.
*/
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);
alert( a ); // 3
alert( c ); // 0

/*
The remainder operator %, despite its appearance, is not related to percents.
The result of a % b is the remainder of the integer division of a by b.
*/
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3

// The exponentiation operator ** is a recent addition to the language.
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

// Increasing or decreasing a number by one is among the most common numerical operations.

// Increment ++ increases a variable by 1
let counter = 2;
counter++;
alert( counter ); // 3

// Decrement -- decreases a variable by 1
let counter = 2;
counter--;
alert( counter ); // 1

/*
The operators ++ and -- can be placed either before or after a variable. When the operator goes
after the variable, it is in “postfix form”: counter++. The “prefix form” is when the operator
goes before the variable: ++counter. The prefix form returns the new value while the postfix
form returns the old value (prior to increment/decrement).
*/

/*
In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the
alert shows 2.
*/
let counter = 1;
let a = ++counter; // (*)
alert(a); // 2

/*
In the line (*), the postfix form counter++ also increments counter but returns the old value
(prior to increment). So, the alert shows 1.
*/
let counter = 1;
let a = counter++; // (*)
alert(a); // 1

// If the result of increment/decrement is not used, there is no difference in which form to use
let counter = 0;
counter++;
++counter;
alert( counter ); // 2

// To increase a value and immediately use the result of the operator, use the prefix form
let counter = 0;
alert( ++counter ); // 1

// If we’d like to increment a value but use its previous value, we need the postfix form
let counter = 0;
alert( counter++ ); // 0

/*
The operators ++/-- can be used inside expressions as well. Their precedence is higher than most
other arithmetical operations.
*/
let counter = 1;
alert( 2 * ++counter ); // 4

let counter = 1;
alert( 2 * counter++ ); // 2

/*
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their
binary representation. They are supported in most programming languages. These operators
are used rarely. The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/

// We often need to apply an operator to a variable and store the new result in that same variable.
let n = 2;
n = n + 5;
n = n * 2;

// The notation above can be shortened using the operators += and *=
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14

/*
The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of
them is evaluated but only the result of the last one is returned. Please note that the comma
operator has very low precedence, lower than =, so parentheses are important
*/
let a = (1 + 2, 3 + 4);
alert( a ); // 7 (the result of 3 + 4)
