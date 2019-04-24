/*
When we develop something, we often need our own error classes to reflect specific things that may
go wrong in our tasks. For errors in network operations we may need HttpError, for database
operations DbError, for searching operations NotFoundError and so on. Our errors should support
basic error properties like message, name and, preferably, stack. But they also may have other
properties of their own, e.g. HttpError objects may have statusCode property with a value like 404
or 403 or 500. JavaScript allows to use throw with any argument, so technically our custom error 
classes don’t need to inherit from Error. But if we inherit, then it becomes possible to use obj 
instanceof Error to identify error objects. So it’s better to inherit from it. As we build our 
application, our own errors naturally form a hierarchy, for instance HttpTimeoutError may inherit 
from HttpError, and so on.
*/
class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}
  
function test() {
    throw new ValidationError("Whoops!");
}
  
try {
    test();
} catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
}
