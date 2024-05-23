const myString = "this is charles's home";
const newString = myString.replace("charles","alex");
console.log(newString);

const myArray =["isabella","alex","olivia","charles","judy","grandma","grandpa"]
const myAstring=myArray.join();
console.log(myAstring);
const myNum=Math.round(Math.random());
console.log(myNum);
//We were using a function!
//We are using a function !

/*function myFunction(){
    alert("Hello");
}
*/

//myFunction();

// Note: Parameters are sometimes called arguments, properties, or even attributes.
// Note: Parameters ar sometimes called arguments, properties, or even attributes.
//Note: When you need to specify multiple parameters, they are separated by commas.
// Note : When you need to specify multiple parameters, they are separated by commas.


const myArray1 = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray1.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray1.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'
//If no parameter is included to specify a joining/delimiting character, a comma is used by default.
//if no parameter is included to specify a joining /delimiting charater, a comma is used by default.
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
  }
  
  hello("Ari"); // Hello Ari!
  hello(); // Hello Chris!

function greet(name ="Charles"){
    console.log(`Greet ${name}!`);
}
greet("Alex");
greet();
//Anonymous functions and arrow functions
//Anonymous functions and arrow functions

