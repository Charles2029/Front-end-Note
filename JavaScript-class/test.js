

class Person {
    name;
  
    constructor(name) {
      this.name = name;
    }
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

  const charles = new Person("charles");
  charles.introduceSelf();
//If you don't need to do any special initialization, 
//you can omit the constructor, 
//and a default constructor will be generated for you:
//If you don't need to do any special initialization,
//you can omit the constructor,
// and a default constructor will be generated for you :
/*class Animal {
    sleep() {
      console.log("zzzzzzz");
    }
  }
  
  const spot = new Animal();
  
  spot.sleep(); // 'zzzzzzz'

  */
 class Animal {
    sleep(){
        console.log('this is a dog,voice zzzzzzz');
    }
 }

 const spot = new Animal();
 spot.sleep();

class Professor extends Person{
    teaches;
    constructor(name,teaches){
        super(name);
        this.teaches =teaches;
    }

    introduceSelf(){
        console.log(`This is professor ${this.name} i will teach you /n
        a good ${teach}`
            
        )
    }
    grade(paper){
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);

    }
}


//




class Student extends Person {
    #year;
  
    constructor(name, year) {
      super(name);
      this.#year = year;
    }
  
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
  
    canStudyArchery() {
      return this.#year > 1 ;
      ;
    }
  }
  //In this class declaration,
  //#year is a private data property.
  //We can construct a Student object, and it can use #year internally,
  //We can construct a Student object, and it can use #year internally,
  //In this class declaration, 
  //#year is a private data property. 
  //We can construct a Student object, and it can use #year internally,
//but if code outside the object tries to access #year the browser throws an error:

  const Alex = new Student("Ales",5);
  Alex.canStudyArchery();

//Private data properties must be declared in the class declaration, 
//and their names start with #.
//Private data properties must be declared in the class declaration,
// and their names start with #.

class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log("You called me?");
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
  
  myExample.#somePrivateMethod(); // SyntaxError
  