/*
If F.prototype is an object, then new operator uses it to set [[Prototype]] for the new object.
Please note that F.prototype here means a regular property named "prototype" on F. It sounds
something similar to the term “prototype”, but here we really mean a regular property with this
name.
*/

let animal = {
    eats: true
};
  
function Rabbit(name) {
    this.name = name;
}
  
Rabbit.prototype = animal;
  
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
  
alert( rabbit.eats ); // true
  
/*
F.prototype is only used when new F is called, it assigns [[Prototype]] of the new object. After
that, there’s no connection between F.prototype and the new object. Think of it as a “one-time
gift”. After the creation, F.prototype may change, new objects created by new F will have another
[[Prototype]], but already existing objects keep the old one.
*/

/*
Every function has the "prototype" property even if we don’t supply it. The default "prototype"
is an object with the only property constructor that points back to the function itself.
*/

function Rabbit() {

}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

/*
We can use constructor property to create a new object using the same constructor as the existing
one. That’s handy when we have an object, don’t know which constructor was used for it (e.g. it
comes from a 3rd party library), and we need to create another one of the same kind.
*/
function Rabbit(name) {
    this.name = name;
    alert(name);
}
  
let rabbit = new Rabbit("White Rabbit");
  
let rabbit2 = new rabbit.constructor("Black Rabbit");


