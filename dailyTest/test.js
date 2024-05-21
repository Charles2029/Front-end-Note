
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

const students = ["Pete", "Biggles", "Jasmine"];

let myFavoriteStudents = "My students are called ";

let i = 0;

while (i < students.length) {
  if (i === students.length - 1) {
    myFavoriteStudents+= `and ${students[i]}.`;
  } else {
    myFavoriteStudents += `${students[i]}, `;
  }

  i++;
}

console.log(myFavoriteStudents); // "My cats are called Pete, Biggles, and Jasmine."





const output = document.querySelector('.output');
output.innerHTML ='';



let index =10;

while (index >=0){
    const para =document.createElement('p');
    if(index ===10){
        para.textContent =`Countdown ${index}`;
    }else if(index ===0){
        para.textContent ='Blast off!';
    }else{
        para.textContent ='index';
    }

    output.appendChild(para);
    i--;
}


while (i>= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}

const group =['alex','isabella','olivia','charles','judy',];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent ='Admit:';
refused.textContent ='Refuse:';


for (const mem of group) {
  if (mem === 'Phil' || mem === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}
refused.textContent = refused.textContent.slice(0,refused.textContent.length-2)+'.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2)+'.';

