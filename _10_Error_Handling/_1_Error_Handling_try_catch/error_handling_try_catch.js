/*
No matter how great we are at programming, sometimes our scripts have errors. They may occur because
of our mistakes, an unexpected user input, an erroneous server response and for a thousand of other
reasons. Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
But there’s a syntax construct try..catch that allows to “catch” errors and, instead of dying, do
something more reasonable.
*/

// An errorless example: shows alert (1) and (2) below
try {

    alert('Start of try runs');  // (1) <--
  
    // ...no errors here
  
    alert('End of try runs');   // (2) <--
  
} catch(err) {
  
    alert('Catch is ignored, because there are no errors'); // (3)
  
}
  
alert("...Then the execution continues");

// An example with an error: shows (1) and (3) below
try {

    alert('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    alert('End of try (never reached)');  // (2)
  
} catch(err) {
  
    alert(`Error has occured!`); // (3) <--
  
}
  
alert("...Then the execution continues");

/*
NB: For try..catch to work, the code must be runnable. In other words, it should be valid
JavaScript. It won’t work if the code is syntactically wrong.
*/

// To catch an exception inside a scheduled function, try..catch must be inside that function
setTimeout(function() {
    try {
        noSuchVariable; // try..catch handles the error!
    } catch {
        alert( "error is caught here!" );
    }
}, 1000);

/*
When an error occurs, JavaScript generates an object containing the details about it. The object is
then passed as an argument to catch. For all built-in errors, the error object inside catch block
has two main properties:

1) name - Error name. For an undefined variable that’s "ReferenceError".
2) message - Textual message about error details.

There are other non-standard properties available in most environments. One of most widely used
and supported is stack with a string with information about the sequence of nested calls that
led to the error. This is mostly used for debugging purposes.
*/
try {
    lala; // error, variable is not defined!
} catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at ...
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
}

/*
The throw operator generates an error. The syntax is:

throw <error object>

JavaScript has many built-in constructors for standard errors: Error, SyntaxError, ReferenceError,
TypeError and others. We can use them to create error objects as well. Their syntax is:

let error = new Error(message);
*/
let json = '{ "age": 30 }'; // incomplete data

try {
    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    alert( user.name );

} catch(e) {
    alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
}

/*
Catch should only process errors that it knows and “rethrow” all others. The “rethrowing” technique
can be explained in more detail as:

1) Catch gets all errors.
2) In catch(err) {...} block we analyze the error object err.
3) If we don’t know how to handle it, then we do throw err
*/

// Use rethrowing so that catch only handles SyntaxError
let json = '{ "age": 30 }'; // incomplete data
try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name");
    }

    blabla(); // unexpected error

    alert( user.name );

} catch(e) {
    if (e.name == "SyntaxError") {
        alert( "JSON Error: " + e.message );
    } else {
        throw e; // rethrow (*)
    }
}

/*
The try..catch construct may have one more code clause: finally. If it exists, it runs in all cases:

1) after try, if there were no errors,
2) after catch, if there were errors.
*/
try {
    alert( 'try' );
    if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
    alert( 'catch' );
} finally {
    alert( 'finally' );
}

/*
Let’s imagine we’ve got a fatal error outside of try..catch, and the script died. Like a programming
error or something else terrible. Is there a way to react on such occurrences? We may want to log
the error, show something to the user (normally they don’t see error messages) etc. There is none in
the specification, but environments usually provide it, because it’s really useful. For instance,
Node.JS has process.on(‘uncaughtException’) for that. And in the browser we can assign a function to
special window.onerror property. The syntax is:

window.onerror = function(message, url, line, col, error) {
  // ...
};

1) message - Error message.
2) url - URL of the script where error happened.
3) line, col - Line and column numbers where error happened.
4) error - Error object.
*/
<script>
    window.onerror = function(message, url, line, col, error) {
        alert(`${message}\n At ${line}:${col} of ${url}`);
    };

    function readData() {
        badFunc(); // Whoops, something went wrong!
    }

    readData();
</script>
