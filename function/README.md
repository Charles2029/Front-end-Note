# function 

Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
## If you want code , please keep going on
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

Function scope and conflicts
Function scope and conflicts
The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.
The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.
//The zoo keeper is like the global scope — they have the keys to access every enclosure, restock food, tend to sick animals, etc.

The zoo keeper is like the global scope - they have the keys to access every enclosure, restock food, tent do sick animals, etc.
Build your own function
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Build_your_own_function

test your function skills
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions

