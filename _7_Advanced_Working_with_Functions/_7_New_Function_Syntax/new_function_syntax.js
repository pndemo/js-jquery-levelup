/*
Usually, a function remembers where it was born in the special property [[Environment]]. It
references the Lexical Environment from where it’s created. But when a function is created using
new Function, its [[Environment]] references not the current Lexical Environment, but instead the
global one.
*/
function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
}

// error: value is not defined
getFunc()();

function getFunc() {
    let value = "test";
  
    let func = function() { alert(value); };
  
    return func;
}

// "test", from the Lexical Environment of getFunc
getFunc()();

/*
The “special feature” of new Function saves us from mistakes. And it enforces better code. If we
need to pass something to a function created by new Function, we should pass it explicitly as an
argument. For example, the “sum” function below.
*/
let sum = new Function('a', 'b', 'return a + b');
let a = 1, b = 2;
// outer values are passed as arguments
alert( sum(a, b) ); // 3
