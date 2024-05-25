
/*
const person = {
    name: ["Bob", "Smith"],
    age: 32,
  };
  
  function logProperty(propertyName) {
    console.log(person[propertyName]);
  }
  
  logProperty("name");
  // ["Bob", "Smith"]
  logProperty("age");
  // 32

*/

const person ={
    name: ["Bob","Smith"],
    age:32,
    
};
person.age =45;
person["name"]["last"]="Liu";

function logProperty(propertyName){
    console.log(person[propertyName]);
};

logProperty("name");
logProperty("age");

function Person(name){
    this.name =name;
    this.introduceSelf=function (){
        console.log(`Hi,I'm ${this.name}.`)

    }
}

const charles = new Person("charles");
charles.introduceSelf();

const alex = new Person("alex");
alex.introduceSelf();
const myNotification = new Notification("Hello!");