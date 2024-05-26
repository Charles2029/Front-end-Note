
const myObject={
    city:"Hong Kong ",
    greet(){
        console.log(`Greeting from ${this.city}.`);
    }

};

myObject.greet();



/*const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null*/

const myDate = new Date(1995, 11, 17);

console.log(myDate.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'



const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype);
  // or
  // Person.prototype.greet = personPrototype.greet;
  
  const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false


const charles= new Person("charles")
 console.log(Object.hasOwn(charles,"name"));
 console.log(Object.hasOwn(charles,"greet"));
 
/*
 class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()*/
walsh = new Professor("walsh","chinese");
lillian = new Professor("lillian","english");

walsh.teach;
walsh.introduceSelf();
lillian.teach;
walsh.introduceSelf();
//This creates two objects, both instances of the Professor class.
// This creates two objects, both instances of the Professor class.

