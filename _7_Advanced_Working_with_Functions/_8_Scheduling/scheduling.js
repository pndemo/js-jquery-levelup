/*
We may decide to execute a function not right now, but at a certain time later. That’s called
“scheduling a call”. There are two methods for it:

1) setTimeout allows to run a function once after the interval of time.
2) setInterval allows to run a function regularly with the interval between the runs.

These methods are not a part of JavaScript specification. But most environments have the internal
scheduler and provide these methods. In particular, they are supported in all browsers and Node.JS.
*/

// setTimeout method
setTimeout(() => alert('Hello'), 1000);

/*
A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
*/
let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// setInterval method

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

/*
There are two ways of running something regularly. One is setInterval. The other one is a recursive
setTimeout.
*/

/** instead of:
let timerId = setInterval(() => alert('tick'), 2000);
*/
let timerId = setTimeout(function tick() {
    alert('tick');
    timerId = setTimeout(tick, 2000); // (*)
}, 2000);

/*
The setTimeout above schedules the next call right at the end of the current one (*). The recursive
setTimeout is a more flexible method than setInterval. This way the next call may be scheduled
differently, depending on the results of the current one.
*/

/*
There’s a special use case: setTimeout(func, 0). This schedules the execution of func as soon as
possible. But scheduler will invoke it only after the current code is complete. So the function is 
cheduled to run “right after” the current code. In other words, asynchronously.
*/

// This outputs “Hello”, then immediately “World”.
setTimeout(() => alert("World"), 0);
alert("Hello");

/*
Some use cases of scheduling:

1) To split CPU-hungry tasks into pieces, so that the script doesn’t “hang”.
2) To let the browser do something else while the process is going on (paint the progress bar).
*/
