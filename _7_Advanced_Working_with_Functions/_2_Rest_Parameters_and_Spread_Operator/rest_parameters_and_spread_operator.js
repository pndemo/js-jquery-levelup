/*
Rest parameters can be mentioned in a function definition with three dots .... They literally mean
“gather the remaining parameters into an array”. For instance, to gather all arguments into array
args:
*/
function sumAll(...args) { // args is the name for the array
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
  
alert( sumAll(1) ); // 1
alert( sumAll(1, 2) ); // 3
alert( sumAll(1, 2, 3) ); // 6

/*
We can choose to get the first parameters as variables, and gather only the rest. For the example
below, the first two arguments go into variables and the rest go into titles array:
*/
function showName(firstName, lastName, ...titles) {
    alert( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    alert( titles[0] ); // Consul
    alert( titles[1] ); // Imperator
    alert( titles.length ); // 2
}
  
showName("Julius", "Caesar", "Consul", "Imperator");

/*
There is also a special array-like object named arguments that contains all arguments by their
index.
*/
function showName() {
    alert( arguments.length );
    alert( arguments[0] );
    alert( arguments[1] );
  
    // it's iterable
    // for(let arg of arguments) alert(arg);
}
  
// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

/*
If we access the arguments object from an arrow function, it takes them from the outer “normal”
function. For example:
*/
function f() {
    let showArg = () => alert(arguments[0]);
    showArg();
}
f(1); // 1

/*
The Spread operator looks similar to rest parameters, also using ..., but does quite the opposite.
When ...arr is used in the function call, it “expands” an iterable object arr into the list of
arguments. For example, using the Math.max function:
*/
let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5

// We can even combine the spread operator with normal values:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25

// Also, the spread operator can be used to merge arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];
let merged = [0, ...arr, 2, ...arr2];
alert(merged); // 0,3,5,1,2,8,9,15

// We use the spread operator to turn the string into array of characters:
let str = "Hello";
alert( [...str] ); // H,e,l,l,o
