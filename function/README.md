# function 

Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():

Instead of defining a separate logKey() function, you can pass an anonymous function into 
addEventListener();
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});


Arrow functions
If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
Arrow functions 
If you pass an anonymous function like this, there's an alternative form you can use, called 
an arrow function. Instead of function(event), you write(event)=>{}
Finally, if your function contains only one line that's a return statement, you can also omit the braces and the return keyword and implicitly return the expression. In the following example, we're using the map() method of Array to double every value in the original array:

// Finally ,if your function contains only one line that's a return statement, you can also omit  the braces and teh return keyword and implicitly return the expression. In the following example, we're using the map() method of Array to double every value in the original array:

回调函数 callback function.
