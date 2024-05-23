
/*(function logKey(event) {
    console.log(`You pressed "${event.key}".`);
  }
  
  textBox.addEventListener("keydown", logKey);
  
*/
/*
function logKey(event){
    console.log(`You pressed "${event.key}".`);

}

textBox.addEventListener("keydown",logKey);
textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}".`);
  });
  
textBox.addEventListener("keydown",function (event){
    console.log(`You pressed "${event.key}"`)

});

textBox.addEventListener("keydown",(event)=>{
    console.log(`You pressed "${event.key}"`)
})

*/

const grade=[50,58,69,79,88];

const newGrade=grade.map(item =>item *2);
console.log(newGrade);