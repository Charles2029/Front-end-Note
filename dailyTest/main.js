
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

    for (let i=0;i<10;i++){
        const result =`${i} x ${i} = ${i * i}`;
        console.log(result);
    }
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    for (const cat of cats) {
      console.log(`${cat} \n`);
    }
    
    for(let i=0;i<cats.length;i++){
        console.log(cats[i]);
    }

    const dogs = ["Pete", "Biggles", "Jasmine"];

let myFavoriteDogs = "My cats are called ";

for (const dog of dogs) {
  myFavoriteDogs += `${dog}, `;
}

console.log(myFavoriteDogs); // "My cats are called Pete, Biggles, Jasmine, "

const children=["Isabella","Olivia","Alex"];
let myBestChildren ="My children are ";
/*
for(const child of children){
    myBestChildren += `${child},`;
    console.log(myBestChildren);

}
*/

for (let i=0;i<children.length;i++){
    if(i===children.length-1){
        myBestChildren +=`and ${children[i]}`;
    }else{
        myBestChildren += `${children[i]},`;
    }

}
console.log(myBestChildren);


