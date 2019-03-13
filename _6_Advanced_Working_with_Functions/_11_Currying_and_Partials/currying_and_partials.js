/*
We can bind not only this, but also arguments. That’s rarely done, but sometimes can be handy.
The full syntax of bind is:

let bound = func.bind(context, arg1, arg2, ...);
*/

// For a multiplication function mul(a, b) shown below.
function mul(a, b) {
    return a * b;
}

// We use bind to create a function double on its base.
let double = mul.bind(null, 2);

alert( double(3) ); // = mul(2, 3) = 6
alert( double(4) ); // = mul(2, 4) = 8
alert( double(5) ); // = mul(2, 5) = 10

/*
The call to mul.bind(null, 2) abovr creates a new function double that passes calls to mul, fixing
null as the context and 2 as the first argument. Further arguments are passed “as is”. That’s
called partial function application – we create a new function by fixing some parameters of the
existing one. Please note that here we actually don’t use this here. But bind requires it, so we 
must put in something like null.
*/

/*
The native bind does not allow that. We can’t just omit the context and jump to arguments.
Fortunately, a partial function for binding only arguments can be easily implemented.
*/
let user = {
    firstName: "John",
    say(time, phrase) {
        alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
};
  
// add a partial method that says something now by fixing the first argument
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

/*
Sometimes people mix up partial function application mentioned above with another thing named
“currying”. That’s another interesting technique of working with functions that we just have to
mention here. Currying is translating a function from callable as f(a, b) into callable as
f(a)(b).

For the example below the implementation is a series of wrappers.

1) The result of curry(func) is a wrapper function(a).
2) When it is called like sum(1), the argument is saved in the Lexical Environment, and a new
wrapper is returned function(b).
3) Then sum(1)(2) finally calls function(b) providing 2, and it passes the call to the original
multi-argument sum.
*/
function curry(func) {
    return function(a) {
        return function(b) {
            return func(a, b);
        };
    };
}
  
// usage
function sum(a, b) {
    return a + b;
}
  
let carriedSum = curry(sum);
alert( carriedSum(1)(2) ); // 3
