
const dog ={
    name :"red",
    breed:"德牧",
    color:"红色",
    bark(){
        console.log(`some one is coming, this ${this.name} is barking,
        his body is ${this.color} .
        his breed is ${this.breed}.`
        )
    }
}

const dog3={
    name:"小黑",
    breed:"京巴",
    color:"blue",
    bark(){
        console.log(`some one is coming, this ${this.name} is barking,
        his body is ${this.color} .
        his breed is ${this.breed}.`
        )}
}


const cat = {
    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    },
  };
  
  // New cat2 object
 const cat2 = {
    name: "Whiskers",
    breed: "Siamese",
    color: "brown",
    greeting() {
      console.log(`Hello, said ${this.name} the ${this.breed}.`);
    },
  };
  
  // Call greeting() method for both cat and cat2
  cat.greeting();
  cat2.greeting();
  dog.bark();
  dog3.bark();