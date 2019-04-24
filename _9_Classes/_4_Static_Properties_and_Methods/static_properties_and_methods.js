/*
We can also assign a method to the class function, not to its "prototype". Such methods are called
static.
*/
class User {
    static staticMethod() {
        alert(this === User);
    }
}
  
User.staticMethod(); // true

/*
Usually, static methods are used to implement functions that belong to the class, but not to any
particular object of it. For instance, we have Article objects and need a function to compare them.
*/
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
  
    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}
  
// usage
let articles = [
    new Article("Mind", new Date(2019, 1, 1)),
    new Article("Body", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];
  
articles.sort(Article.compare);
alert( articles[0].title ); // Body

/*
Static methods are also used in database-related classes to search/save/remove entries from the
database.
*/

// assuming Article is a special class for managing articles
// static method to remove the article:
Article.remove({id: 12345});

// Static properties are also possible, just like regular class properties
class Article {
    static publisher = "Ilya Kantor";
}
  
alert( Article.publisher ); // Ilya Kantor

/*
Statics are inherited, we can access Parent.method as Child.method. For instance, Animal.compare
in the code below is inherited and accessible as Rabbit.compare.
*/
class Animal {

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }
  
    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
  
}
  
// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}
  
let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];
  
rabbits.sort(Rabbit.compare);
rabbits[0].run(); // Black Rabbit runs with speed 5.

