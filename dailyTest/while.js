

const eggs =["yellow","blue","red"];
let myFavoriteColor ="My favoriteColor is "
/*
initializer
do{
    //code to run
    final-expression
}while (condition)


initializer
do {
  // code to run

  final-expression
} while (condition)



*/

let i = 0;

do {
  if (i === eggs.length - 1) {
    myFavoriteColor += `and ${eggs[i]}.`;
  } else {
    myFavoriteColor += `${eggs[i]}, `;
  }

  i++;
} while (i < eggs.length);

console.log(myFavoriteColor); // 


const houses = ["Xi'an", "Hong Kong", "ShenZhen","ZhuHai"];

let myFavoriteHouses = "My houses are called ";

let index = 0;

while(index <houses.length){
    if(index ===houses.length -1 ){
        myFavoriteHouses += ` and ${houses[index]}`;
    }else{
        myFavoriteHouses += ` ${houses[index]}`
    }
index++;
}

console.log(myFavoriteHouses);

