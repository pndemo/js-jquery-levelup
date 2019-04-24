/*
One of the most important principles of object oriented programming – delimiting internal interface
from the external one. In object-oriented programming, properties and methods are split into two
groups:

1) Internal interface – methods and properties, accessible from other methods of the class, but not
from the outside.
2) External interface – methods and properties, accessible also from outside the class.

In JavaScript, there are three types of properties and members:

1) Public: accessible from anywhere. They comprise the external interface. Till now we were only
using public properties and methods.
2) Private: accessible only from inside the class. These are for the internal interface.

In many other languages there also exist “protected” fields: accessible only from inside the class
and those extending it. They are also useful for the internal interface. They are in a sense more
widespread than private ones, because we usually want inheriting classes to gain access to properly
do the extension.

Protected fields are not implemented in Javascript on the language level, but in practice they are
very convenient, so they are emulated.
*/

/*
Protected properties are usually prefixed with an underscore _. That is not enforced on the language
level, but there’s a convention that such properties and methods should not be accessed from the
outside. Most programmers follow it.
*/
class CoffeeMachine {
    _waterAmount = 0;
  
    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }
  
    get waterAmount() {
        return this._waterAmount;
    }
  
    constructor(power) {
        this._power = power;
    }
  
}
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
// add water
coffeeMachine.waterAmount = -10; // Error: Negative water

/*
For power property, let’s make it read-only. It sometimes happens that a property must be set at
creation time only, and then never modified. That’s exactly the case for a coffee machine: power
never changes. To do so, we only need to make getter, but not the setter.
*/
class CoffeeMachine {
    // ...
  
    constructor(power) {
        this._power = power;
    }
  
    get power() {
        return this._power;
    }
}
  
// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);
alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // Error (no setter)

/*
There’s a finished Javascript proposal, almost in the standard, that provides language-level support
for private properties and methods. Privates should start with #. They are only accessible from
inside the class.
*/
class CoffeeMachine {

    #waterAmount = 0;
  
    get waterAmount() {
        return this.#waterAmount;
    }
  
    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this.#waterAmount = value;
    }
}
  
let machine = new CoffeeMachine();
machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
