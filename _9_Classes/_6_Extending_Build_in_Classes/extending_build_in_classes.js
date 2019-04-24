/*
Built-in classes like Array, Map and others are extendable also. For instance, below PowerArray
inherits from the native Array.
*/

// add one more method to it (can do more)
class PowerArray extends Array {
    isEmpty() {
        return this.length === 0;
    }
}
  
let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false
let filteredArr = arr.filter(item => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false

/*
Built-in methods like filter, map and others – return new objects of exactly the inherited type.
They rely on the constructor property to do so. In the example above, when arr.filter() is called,
it internally creates the new array of results exactly as new PowerArray.

Built-in objects have their own static methods, for instance Object.keys, Array.isArray etc.
And we know that native classes extend each other. Statics are an exception though. Built-in classes
don’t inherit static properties from each other. In other words, the prototype of build-in
constructor Array does not point to Object. This way Array and Date do not have Array.keys or
Date.keys. And that feels natural.
*/
