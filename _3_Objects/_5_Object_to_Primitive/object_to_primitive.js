/*
When an object is used in the context where a primitive is required, for instance, in an alert or
mathematical operations, it’s converted to a primitive value using the ToPrimitive algorithm
(specification). That algorithm allows us to customize the conversion using a special object method.
Depending on the context, the conversion has a so-called “hint”. There are three variants shown
below.
*/

// When an operation expects a string, for object-to-string conversions, like alert:
// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

// When an operation expects a number, for object-to-number conversions, like maths.
// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

/*
Methods toString and valueOf come from ancient times. They are “regular” string-named methods. They
provide an alternative “old-style” way to implement the conversion.
*/

let user = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }
  
};
  
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
