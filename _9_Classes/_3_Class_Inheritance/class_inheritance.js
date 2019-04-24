/*
To inherit from another class, we should specify "extends" and the parent class before the
brackets {..}. Here Rabbit inherits from Animal.
*/
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
  
    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
        this.speed = 0;
        alert(`${this.name} stopped.`);
    }
  
}
  
// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}
  
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

/*
Now let’s move forward and override a method. As of now, Rabbit inherits the stop method that sets
this.speed = 0 from Animal. If we specify our own stop in Rabbit, then it will be used instead.
*/
class Rabbit extends Animal {
    stop() {
        // ...this will be used for rabbit.stop()
    }
}

/*
But usually we don’t want to totally replace a parent method, but rather to build on top of it,
tweak or extend its functionality. We do something in our method, but call the parent method
before/after it or in the process. Classes provide "super" keyword for that.
*/
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
  
    run(speed) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
        this.speed = 0;
        alert(`${this.name} stopped.`);
    }
  
}
  
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
  
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}
  
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!

/*
According to the specification, if a class extends another class and has no constructor, then the
constructor below is generated.
*/
class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
  
    // ...
  }
  
class Rabbit extends Animal {
  
    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }
  
    // ...
}
  
// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
