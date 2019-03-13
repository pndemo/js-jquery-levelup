/*
JavaScript gives exceptional flexibility when dealing with functions. They can be passed around,
used as objects, and now we’ll see how to forward calls between them and decorate them.
*/

/*
Transparent caching.

Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable. In other
words, for the same x it always returns the same result. If the function is called often, we may
want to cache (remember) the results for different x to avoid spending extra-time on recalculations.
*/
function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }
  
function cachingDecorator(func) {
    let cache = new Map();
  
    return function(x) {
        if (cache.has(x)) { // if the result is in the map
          return cache.get(x); // return it
        }
  
        let result = func(x); // otherwise call func
  
        cache.set(x, result); // and cache (remember) the result
        return result;
    };
}
  
slow = cachingDecorator(slow);

alert( slow(1) ); // slow(1) is cached
alert( "Again: " + slow(1) ); // the same

alert( slow(2) ); // slow(2) is cached
alert( "Again: " + slow(2) ); // the same as the previous line

/*
“func.call” caching decorator mentioned above is not suited to work with object methods. There’s a
special built-in function method func.call(context, …args) that allows to call a function explicitly
setting this. The syntax is:

func.call(context, arg1, arg2, ...)
*/

/*
The functions below both call func with arguments 1, 2 and 3. The only difference is that func.call
also sets this to obj.
*/
func(1, 2, 3);
func.call(obj, 1, 2, 3);
