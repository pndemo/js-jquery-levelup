/*
Loops are a way to repeat the same code multiple times.
*/

// While the condition is true, the code from the loop body is executed.
let i = 0;

// shows 0, then 1, then 2
while (i < 3) {
  alert( i );
  i++;
}

/*
The condition check can be moved below the loop body using the do..while syntax. The loop
will first execute the body, then check the condition, and, while it’s truthy, execute it
again and again.
*/
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);

/*
The for loop is the most commonly used loop. The loop below runs alert(i) for i from 0 up to
(but not including) 3.
1. begin	i = 0	Executes once upon entering the loop.
2. condition	i < 3	Checked before every loop iteration. If false, the loop stops.
3. step	i++	Executes after the body on each iteration but before the condition check.
4. body	alert(i)	Runs again and again while the condition is truthy.
*/

// shows 0, then 1, then 2
for (let i = 0; i < 3; i++) {
  alert(i);
}

/*
Normally, a loop exits when its condition becomes falsy. But we can force the exit at any time
using the special break directive. For example, the loop below asks the user for a series of
numbers, “breaking” when no number is entered.
*/
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

/*
The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead,
it stops the current iteration and forces the loop to start a new one (if the condition allows).
We can use it if we’re done with the current iteration and would like to move on to the next one.
*/
for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
}

/*
Sometimes we need to break out from multiple nested loops at once. For example, in the code below
we loop over i and j, prompting for the coordinates (i, j) from (0,0) to (3,3).
*/
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');
    // what if I want to exit from here to Done (below)?
  }
}
  
alert('Done!');
