/*
The JSON (JavaScript Object Notation) is a general format to represent values and objects. It is
described as in RFC 4627 standard. Initially it was made for JavaScript, but many other languages
have libraries to handle it as well. So it’s easy to use JSON for data exchange when the client uses
JavaScript and the server is written on Ruby/PHP/Java/AnyOtherLanguage.

JavaScript provides methods:

1) JSON.stringify to convert objects into JSON.
2) JSON.parse to convert JSON back into an object.
*/

// For instance, to JSON.stringify a student:
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
  
let json = JSON.stringify(student);
alert(json);

/*
The method JSON.stringify(student) takes the object and converts it into a string. The resulting
json string is a called JSON-encoded or serialized object. Please note that a JSON-encoded object
has several important differences from the object literal:

1) Strings use double quotes. No single quotes or backticks in JSON. So 'John' becomes "John".
2) Object property names are double-quoted also. That’s obligatory. So age:30 becomes "age":30.

JSON is data-only cross-language specification, so some JavaScript-specific object properties are
skipped by JSON.stringify. Such as:

1) Function properties (methods).
2) Symbolic properties.
3) Properties that store undefined.

Nested objects are supported and converted automatically.
*/
let meetup = {
    title: "Conference",
    room: {
        number: 23,
        participants: ["john", "ann"]
    }
};
  
alert( JSON.stringify(meetup) );

/*
Like toString for string conversion, an object may provide method toJSON for to-JSON conversion.
JSON.stringify automatically calls it if available.
*/
let room = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
  
let meetup = {
    title: "Conference",
    room
};
  
alert( JSON.stringify(room) ); // 23
alert( JSON.stringify(meetup) ); // "room": 23

/*
To decode a JSON-string, we need another method named JSON.parse. The syntax being:

let value = JSON.parse(str[, reviver]);

1) str - JSON-string to parse.
2) reviver - Optional function(key,value) that will be called for each (key, value) pair and can
transform the value.
*/
let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1

/*
Let’s pass to JSON.parse the reviving function that returns all values “as is”, but date will become
a Date.
*/
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date.getDate() );
