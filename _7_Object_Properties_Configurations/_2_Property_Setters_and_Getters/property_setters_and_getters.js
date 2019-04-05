/*
There are two kinds of properties. The first kind is data properties. We already know how to work
with them. Actually, all properties that we’ve been using till now were data properties. The
second type of properties is something new. It’s accessor properties. They are essentially functions
that work on getting and setting a value, but look like regular properties to an external code.
*/

/*
Accessor properties are represented by “getter” and “setter” methods. In an object literal they are
denoted by get and set.
*/
let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },
  
    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};

/*
The getter works when obj.propName is read, the setter – when it is assigned. For instance, we have
a user object with name and surname as shown below.
*/
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};
  
alert(user.fullName); // John Smith

/*
From outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
*/

// Add setter for user.fullName
let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
};
  
// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
  
alert(user.name); // Alice
alert(user.surname); // Cooper

/*
Descriptors for accessor properties are different – as compared with data properties. For accessor
properties, there is no value and writable, but instead there are get and set functions. So an
accessor descriptor may have:

1) get – a function without arguments, that works when a property is read,
2) set – a function with one argument, that is called when the property is set,
3) enumerable – same as for data properties,
4) configurable – same as for data properties.
*/

// To create an accessor fullName with defineProperty, we can pass a descriptor with get and set
let user = {
    name: "John",
    surname: "Smith"
};
  
Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
  
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});
  
alert(user.fullName); // John Smith
  
for(let key in user) alert(key); // name, surname

/*
Getters/setters can be used as wrappers over “real” property values to gain more control over them.
For instance, if we want to forbid too short names for user, we can store name in a special property
_name.
*/
let user = {
    get name() {
        return this._name;
    },
  
    set name(value) {
        if (value.length < 4) {
            alert("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};
  
user.name = "Pete";
alert(user.name); // Pete
  
user.name = ""; // Name is too short...

/*
NB: Technically, the external code may still access the name directly by using user._name. But
there is a widely known agreement that properties starting with an underscore "_" are internal
and should not be touched from outside the object.
*/

/*
One of the great ideas behind getters and setters – they allow to take control over a “normal”
data property and tweak it at any moment. For instance, we started implementing user objects
using data properties name and age.
*/
function User(name, age) {
    this.name = name;
    this.age = age;
}
  
let john = new User("John", 25);
  
alert( john.age ); // 25

/*
But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s
more precise and convenient. Besides, age is a nice thing to have in user, right? In some places
it’s just what we want. Adding a getter for age mitigates the problem.
*/
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // birthday is available
alert( john.age );      // ...as well as the age
