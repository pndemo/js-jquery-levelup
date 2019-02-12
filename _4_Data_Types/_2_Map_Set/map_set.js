/*
Map is a collection of keyed data items, just like an Object. But the main difference is that Map
allows keys of any type. The main methods are:

1) new Map() – creates the map.
2) map.set(key, value) – stores the value by the key.
3) map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
4) map.has(key) – returns true if the key exists, false otherwise.
5) map.delete(key) – removes the value by the key.
6) map.clear() – clears the map
7) map.size – returns the current element count.
*/
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert( map.size ); // 3

// When a Map is created, we can pass an array (or another iterable) with key-value pairs.
let map = new Map([
    ['1',  'str1'],
    [1,    'num1'],
    [true, 'bool1']
]);

/*
For looping over a map, there are 3 methods:

1) map.keys() – returns an iterable for keys,
2) map.values() – returns an iterable for values,
3) map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);
  
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// the same as of recipeMap.entries()
for (let entry of recipeMap) {
    alert(entry); // cucumber,500 (and so on)
}

/*
A Set is a collection of values, where each value may occur only once. Its main methods are:

1) new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
2) set.add(value) – adds a value, returns the set itself.
3) set.delete(value) – removes the value, returns true if value existed at the moment of the call,
otherwise false.
4) set.has(value) – returns true if the value exists in the set, otherwise false.
5) set.clear() – removes everything from the set.
6) set.size – is the elements count.

The alternative to Set could be an array of users, and the code to check for duplicates on every
insertion using arr.find. But the performance would be much worse, because this method walks
through the whole array checking every element. Set is much better optimized internally for
uniqueness checks.
*/
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
    alert(user.name); // John (then Pete and Mary)
}

// We can loop over a set either with for..of or using forEach.
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
    alert(value);
});

/*
The forEach function in the Set has 3 arguments: a value, then again a value, and then the target
object. Indeed, the same value appears in the arguments twice. That’s for compatibility with Map
where forEach has three arguments. Looks a bit strange, for sure. But may help to replace Map with
Set in certain cases with ease, and vice versa. The same methods Map has for iterators are also
supported:

1) set.keys() – returns an iterable object for values,
2) set.values() – same as set.keys, for compatibility with Map,
3) set.entries() – returns an iterable object for entries [value, value], exists for compatibility
with Map.
*/
