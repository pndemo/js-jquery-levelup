/*
There are many ways to get keys/values from an object. Most of them operate on the object itself,
excluding the prototype:

1) Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of enumerable own
string property names/values/key-value pairs.

2) Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic property names.

3) Object.getOwnPropertyNames(obj) – returns an array of all own string property names.

4) Reflect.ownKeys(obj) – returns an array of all own property names.
*/

// The for..in loop loops over inherited properties too.
let animal = {
    eats: true
};
  
let rabbit = {
    jumps: true,
    __proto__: animal
};
  
// only own keys
alert(Object.keys(rabbit)); // jumps

// inherited keys too
for(let prop in rabbit) alert(prop); // jumps, then eats

/*
If we’d like to exclude inherited properties, there’s a built-in method obj.hasOwnProperty(key):
it returns true if obj has its own (not inherited) property named key.
*/
let animal = {
    eats: true
};
  
let rabbit = {
    jumps: true,
    __proto__: animal
};
  
for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
    alert(`${prop}: ${isOwn}`); // jumps: true, then eats: false
}
