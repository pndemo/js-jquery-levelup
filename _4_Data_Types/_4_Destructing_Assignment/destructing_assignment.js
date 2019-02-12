/*
Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a
bunch of variables, as sometimes they are more convenient. Destructuring also works great with
complex functions that have a lot of parameters, default values, and soon we’ll see how these are
handled too
*/

// we have an array with the name and surname
let arr = ["Ilya", "Kantor"]

// destructuring assignment
let [firstName, surname] = arr;

alert(firstName); // Ilya
alert(surname);  // Kantor

// It looks great when combined with split or other array-returning methods.
let [firstName, surname] = "Ilya Kantor".split(' ');

/*
If we want not just to get first values, but also to gather all that follows – we can add one more
parameter that gets “the rest” using three dots "...".
*/
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

// The destructuring assignment also works with objects.
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
  
let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200

/*
Properties options.title, options.width and options.height are assigned to the corresponding
variables. The order does not matter.
*/

// changed the order of properties in let {...}
let {height, width, title} = { title: "Menu", height: 200, width: 100 }

/*
If we want to assign a property to a variable with another name, for instance, options.width to go
into the variable named w, then we can set it using a colon.
*/
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let {width: w, height: h, title} = options;

alert(title);  // Menu
alert(w);      // 100
alert(h);      // 200
