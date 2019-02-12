/*
Objects allow you to store keyed collections of values. But quite often we find that we
need an ordered collection, where we have a 1st, a 2nd, a 3rd element and so on. For example,
we need that to store a list of something: users or goods. It is not convenient to use an object
here, because it provides no methods to manage the order of elements. There exists a special data
structure named Array, to store ordered collections.
*/

// There are two syntaxes for creating an empty array.
let arr = new Array();
let arr = [];

// We can supply initial elements in the brackets.
let fruits = ["Apple", "Orange", "Plum"];

/*
Array elements are numbered, starting with zero. We can get an element by its number in square
brackets.
*/
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange

// We can replace an element.
fruits[2] = 'Pear';

// The total count of the elements in the array is its length.
let fruits = ["Apple", "Orange", "Plum"];
alert( fruits.length ); // 3

// An array can store elements of any type. For instance:
let arr = [ 'Apple', { name: 'Paul' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // Paul

// get the function at index 3 and run it
arr[3](); // hello

/*
Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements
both to/from the beginning or the end. In computer science the data structure that allows it is
called deque.
*/

// Method pop extracts the last element of the array and returns it.
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange

// Method push appends the element to the end of the array.
let fruits = ["Apple", "Orange"];
fruits.push("Pear");
alert( fruits ); // Apple, Orange, Pear

// Method shift extracts the first element of the array and returns it.
let fruits = ["Apple", "Orange", "Pear"];
alert( fruits.shift() ); // remove Apple and alert it
alert( fruits ); // Orange, Pear

// Method unshift adds the element to the beginning of the array.
let fruits = ["Orange", "Pear"];
fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear

// Methods push and unshift can add multiple elements at once.
let fruits = ["Apple"];
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

/*
An array is a special kind of object. The square brackets used to access a property arr[0] actually
come from the object syntax. Numbers are used as keys. They extend objects providing special methods
to work with ordered collections of data and also the length property. But at the core it’s still an
object. Remember, there are only 7 basic types in JavaScript. Array is an object and thus behaves
like an object.
*/
let fruits = ["Banana"]
let arr = fruits; // copy by reference
alert( arr === fruits ); // true
arr.push("Pear"); // modify array by reference
alert( fruits ); // Banana, Pear

/*
Methods push/pop run fast, while shift/unshift are slow. It’s not enough to take and remove the
element with the number 0. Other elements need to be renumbered as well. The shift operation must
do 3 things:

1) Remove the element with the index 0.
2) Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
3) Update the length property.

The similar thing happens with unshift: to add an element to the beginning of the array, we need
first to move existing elements to the right, increasing their indexes. And what’s with push/pop?
They do not need to move anything. To extract an element from the end, the pop method cleans the
index and shortens length. The pop method does not need to move anything, because other elements
keep their indexes. That’s why it’s blazingly fast. The similar thing with the push method.
*/

// One of the oldest ways to cycle array items is the for loop over indexes.
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}

// But for arrays there is another form of loop, for..of.
let fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  alert( fruit );
}

/*
Technically, because arrays are objects, it is also possible to use for..in. Technically, because
arrays are objects, it is also possible to use for..in. But that’s actually a bad idea. There are
potential problems with it. The loop for..in iterates over all properties, not only the numeric
ones. There are "array-like" objects in the browser and in other environments. That is, they have
length and indexes properties, but they may also have other non-numeric properties and methods,
which we usually don’t need. The for..in loop is optimized for generic objects, not arrays, and thus
is 10-100 times slower. Of course, it’s still very fast. The speedup may only matter in bottlenecks
or seem irrelevant. But still we should be aware of the difference.
*/

/*
Arrays can have items that are also arrays. We can use it for multidimensional arrays, to store
matrices.
*/
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
  
alert( matrix[1][1] ); // the central element
  
/*
Arrays have their own implementation of toString method that returns a comma-separated list of
elements.
*/
let arr = [1, 2, 3];
alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

/*
Arrays are objects, so we can try to use delete to remove an element from the array but the array
length doesn't change. That’s natural, because delete obj.key removes a value by the key.
*/
let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
alert( arr[1] ); // undefined
alert( arr.length ); // 3

/*
The arr.splice(str) method is a swiss army knife for arrays. It can do everything: add, remove and
insert elements. The syntax is:

arr.splice(index[, deleteCount, elem1, ..., elemN])

It starts from the position index: removes deleteCount elements and then inserts elem1, ..., elemN
at their place. Returns the array of removed elements.
*/
let arr = ["I", "study", "JavaScript"];
arr.splice(1, 1); // from index 1 remove 1 element
alert( arr ); // ["I", "JavaScript"]

let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0, 3, "Let's", "dance"); // remove 3 first elements
alert( arr ) // now ["Let's", "dance", "right", "now"]

// Here we can see that splice returns the array of removed elements.
let arr = ["I", "study", "JavaScript", "right", "now"];
let removed = arr.splice(0, 2); // remove 2 first elements
alert( removed ); // "I", "study"

/*
The splice method is also able to insert the elements without any removals. For that we need to
set deleteCount to 0.
*/
let arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
alert( arr ); // "I", "study", "complex", "language", "JavaScript"

/*
The slice method returns a new array containing all items from index "start" to "end" (not including
"end"). Both start and end can be negative, in that case position from array end is assumed. It
works like str.slice, but makes subarrays instead of substrings.
*/
let str = "test";
let arr = ["t", "e", "s", "t"];
alert( str.slice(1, 3) ); // es
alert( arr.slice(1, 3) ); // e,s

/*
The method arr.concat joins the array with other arrays and/or items. The syntax is:

arr.concat(arg1, arg2...)
*/
let arr = [1, 2];
alert( arr.concat([3, 4])); // 1,2,3,4
alert( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

/*
The arr.forEach method allows to run a function for every element of the array. The syntax is:

arr.forEach(function(item, index, array) {
    // ... do something with item
});
*/
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
});

/*
The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially
the same as their string counterparts, but operate on items instead of characters.

1) arr.indexOf(item, from) looks for item starting from index from, and returns the index where it
was found, otherwise -1.
2) arr.lastIndexOf(item, from) – same, but looks from right to left.
3) arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/
let arr = [1, 0, false];
alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1
alert( arr.includes(1) ); // true

/*
Imagine we have an array of objects. How do we find an object with the specific condition?
The arr.find method comes in handy here. If it returns true, the search is stopped, the item is
returned. If nothing found, undefined is returned.
*/
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
  
let user = users.find(item => item.id == 1);
  
alert(user.name); // John

/*
The find method looks for a single (first) element that makes the function return true. If there may
be many, we can use arr.filter(fn). The syntax is similar to find, but filter continues to iterate
for all array elements even if true is already returned.
*/
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];
  
// returns array of the first two users
let someUsers = users.filter(item => item.id < 3);
  
alert(someUsers.length); // 2

/*
In transforming arrays the arr.map method is one of the most useful and often used. It calls the
function for each element of the array and returns the array of results.
*/

// Transform each element into its length
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6

// The method arr.reverse reverses the order of elements in arr.
let arr = [1, 2, 3, 4, 5];
arr.reverse();
alert( arr ); // 5,4,3,2,1
