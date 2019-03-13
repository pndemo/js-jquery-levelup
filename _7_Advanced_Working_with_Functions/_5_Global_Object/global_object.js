/*
The global object provides variables and functions that are available anywhere. Mostly, the ones
that are built into the language or the host environment. In a browser it is named “window”, for
Node.JS it is “global”, for other environments it may have another name.
*/

// For instance, we can call alert as a method of window.
alert("Hello");
// the same as
window.alert("Hello");

/*
For historical reasons, in-browser window object is a bit messed up. ***
*/

// We can use window to access properties and methods, specific to the browser window.
alert(window.innerHeight); // shows the browser window height
window.open('http://google.com'); // opens a new browser window

// Top-level var variables and function declarations automatically become properties of window.
var x = 5;
alert(window.x); // 5 (var x becomes a property of window)
window.x = 0;
alert(x); // 0, variable modified

// It doesn’t happen with more modern let/const declarations though.
let x = 5;
alert(window.x); // undefined ("let" doesn't create a window property)

/*
Al scripts share the same global scope, so variables declared in one <script> become visible in
another.
*/
<script>
    var a = 1;
    let b = 2;
</script>

<script>
    alert(a); // 1
    alert(b); // 2
</script>

// The value of this in the global scope is window.
alert(this); // window

/*
As of now, the multi-purpose window is considered a design mistake in the language. Luckily,
there’s a fix, called “Javascript modules”. If we set type="module" attribute on a <script> tag,
then such script is considered a separate “module” with its own top-level scope (lexical
environment), not interfering with window.
*/

// In a module, var x does not become a property of window.
<script type="module">
    var x = 5;
    alert(window.x); // undefined
</script>

// Two modules that do not see variables of each other.
<script type="module">
    let x = 5;
</script>

<script type="module">
    alert(window.x); // undefined
    alert(x); // Error: undeclared variable
</script>

// Also, the top-level value of this in a module is undefined.
<script type="module">
    alert(this); // undefined
</script>

/*
Using global variables is generally discouraged. There should be as few global variables as
possible, but if we need to make something globally visible, we may want to put it into window
(or global in Node.js). Here we put the information about the current user into a global object,
to be accessible from all other scripts.
*/

// explicitly assign it to `window`
window.currentUser = {
  name: "John",
  age: 30
};

// then, elsewhere, in another script
alert(window.currentUser.name); // John

/*
We can test the global object for support of modern language features. For instance, to test if a
built-in Promise object exists (it doesn’t exist in very old browsers).
*/
if (!window.Promise) {
    alert("Your browser is really old!");
}

/*
We can create “polyfills”: add functions that are not supported by the environment (say, an old
browser), but exist in the modern standard.
*/
if (!window.Promise) {
    window.Promise = ... // custom implementation of the modern language feature
}
