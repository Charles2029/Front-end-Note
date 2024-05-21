
function toUpper(string){
    return string.toUpperCase();

}

const  family =["isabella","alex","olivia","charles","judy","grandma","im"];

const upperFamily= family.map(toUpper);
console.log(upperFamily);


/*function iName(name){
    return name.startsWith("I");
}*/

const newName=upperFamily;
console.log(newName);
const filtered = newName.filter((name) => name.startsWith("I"));
console.log(filtered);