/*
Objects are usually created to represent entities of the real world, like users, orders and so on.
And, in the real world, a user can act: select something from the shopping cart, login, logout etc.
Actions are represented in JavaScript by functions in properties.
*/

// For the start, let’s teach the user to say hello.
let user = {
    name: "John",
    age: 30
};
  
user.sayHi = function() {
    alert("Hello!");
};
  
user.sayHi(); // Hello!

// There exists a shorter syntax for methods in an object literal
let user = {
    sayHi: function() {
      alert("Hello");
    }
};
  
// can be written as
let user = {
    sayHi() { // same as "sayHi: function()"
        alert("Hello");
    }
};

/*
It’s common that an object method needs to access the information stored in the object to do its
job. For instance, the code inside user.sayHi() may need the name of the user. To access the object,
a method can use the this keyword.
*/
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
        alert(this.name);
    }
};
  
user.sayHi(); // John

/*
Arrow functions are special: they don’t have their “own” this. If we reference this from such a
function, it’s taken from the outer “normal” function. For instance, here arrow() uses this from
the outer user.sayHi() method.
*/
let user = {
    firstName: "Ilya",
    sayHi() {
        let arrow = () => alert(this.firstName);
        arrow();
    }
};
  
user.sayHi(); // Ilya
