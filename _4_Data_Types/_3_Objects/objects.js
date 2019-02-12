/*
For plain objects, the following methods are available:

1) Object.keys(obj) – returns an array of keys.
2) Object.values(obj) – returns an array of values.
3) Object.entries(obj) – returns an array of [key, value] pairs.
*/
let user = {
    name: "John",
    age: 30
};

Object.keys(user) // ["name", "age"]
Object.values(user) // ["John", 30]
Object.entries(user) // [ ["name","John"], ["age",30] ]
