/*
The JavaScript language was initially created for web browsers. Since then, it has evolved and
become a language with many uses and platforms. A platform may be a browser, or a web-server, or a
washing machine, or another host. Each of them provides platform-specific functionality. The
JavaScript specification calls that a host environment. A host environment provides
platform-specific objects and functions additional to the language core. Web browsers give a means
to control web pages. Node.JS provides server-side features, and so on.
*/

/*
There’s a “root” object called window. It has two roles:

1) First, it is a global object for JavaScript code, as described in the chapter Global object.
2) Second, it represents the “browser window” and provides methods to control it.

For instance, below we use it as a global object.
*/
function sayHi() {
    alert("Hello");
}
  
// global functions are accessible as properties of window
window.sayHi();

/*
The document object gives access to the page content. We can change or create anything on the page
using it.
*/

// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);

/*
Browser Object Model (BOM) are additional objects provided by the browser (host environment) to work
with everything except the document. For instance:

1) The navigator object provides background information about the browser and the operating system.
There are many properties, but the two most widely known are: navigator.userAgent – about the
current browser, and navigator.platform – about the platform (can help to differ between
Windows/Linux/Mac etc).
2) The location object allows us to read the current URL and can redirect the browser to a new one.
*/
alert(location.href); // shows current URL
if (confirm("Go to wikipedia?")) {
    location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
