/*
The regular {...} syntax allows to create one object. But often we need to create many similar
objects, like multiple users or menu items and so on. That can be done using constructor functions
and the "new" operator.
*/

/*
Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.

When a function is executed as new User(...), it does the following steps:

1. A new empty object is created and assigned to this.
2. The function body executes. Usually it modifies this, adds new properties to it.
3. The value of this is returned.
*/
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
  
let user = new User("Jack");
  
alert(user.name); // Jack
alert(user.isAdmin); // false

/*
Now if we want to create other users, we can call new User("Ann"), new User("Alice") and so on. 
Technically, any function can be used as a constructor. That is: any function can be run with new,
and it will execute the algorithm above. The “capital letter first” is a common agreement, to make
it clear that a function is to be run with new.
*/

/*
Using constructor functions to create objects gives a great deal of flexibility. The constructor
function may have parameters that define how to construct the object, and what to put in it. Of
course, we can add to this not only properties, but methods as well. For instance, new User(name)
below creates an object with the given name and the method sayHi.
*/
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}
  
let john = new User("John");
  
john.sayHi(); // My name is: John
