/*
Arrow functions are not just a “shorthand” for writing small stuff. JavaScript is full of situations
where we need to write a small function, that’s executed somewhere else. For instance:

1) arr.forEach(func) – func is executed by forEach for every array item.
2) setTimeout(func) – func is executed by the built-in scheduler.
*/

/*
Arrow functions do not have this. If this is accessed, it is taken from the outside. For instance,
we can use it to iterate inside an object method. Here in forEach, the arrow function is used, so
this.title in it is exactly the same as in the outer method showList. That is: group.title.
*/
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
        this.students.forEach(
            student => alert(this.title + ': ' + student)
        );
    }
};
  
group.showList();

// If we used a “regular” function, there would be an error.
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
        this.students.forEach(function(student) {
            // Error: Cannot read property 'title' of undefined
            alert(this.title + ': ' + student)
        });
    }
};
  
group.showList();

/*
The error above occurs because forEach runs functions with this=undefined by default, so the attempt
to access undefined.title is made. That doesn’t affect arrow functions, because they just don’t have
this.
*/

/*
Arrow functions also have no arguments variable. That’s great for decorators, when we need to
forward a call with the current this and arguments. For instance, defer(f, ms) gets a function and
returns a wrapper around it that delays the call by ms milliseconds.
*/
function defer(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    };
}
  
function sayHi(who) {
    alert('Hello, ' + who);
}
  
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds

// The same without an arrow function would look like as shown below.
function defer(f, ms) {
    return function(...args) {
        let ctx = this;
        setTimeout(function() {
            return f.apply(ctx, args);
        }, ms);
    };
}

/*
For the function above, we had to create additional variables args and ctx so that the function
inside setTimeout could take them.
*/
