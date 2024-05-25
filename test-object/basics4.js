//Define a student constructor function
function Student(name,sex,room){
    this.name = name;
    this.sex = sex;
    this.room =room;
    //Define the greeting method for each student instance
    this.greeting =function(){
        console.log(`Hello,  ${this.name}  is a ${this.sex} and from ${this.room}, `)
        
    }

}
let isabella = new Student('isabella','female','2e');
isabella.greeting();

// Define a Cat constructor function
function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  
    // Define the greeting method for each Cat instance
    this.greeting = function() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    };
  }
  
  // Create cat1 instance
  let cat1 = new Cat('Bertie', 'Cymric', 'black');
  cat1.greeting(); // Output: Hello, said Bertie the Cymric.
  
  // Create cat2 instance
  let cat2 = new Cat('Whiskers', 'Siamese', 'white');
  cat2.greeting(); // Output: Hello, said Whiskers the Siamese.


