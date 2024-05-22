// Step 1: Create variables to hold references to the list, input, and button elements
/*const shoppingList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');
*/
// Step 1: Creat variables to hold references to the lis, input, and button elements

const shoppingList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

//Step 2: Create a function to run when the button is clicked
button.addEventListener('click',function(){
    //Store the current  value of the input element in a variable 
    const newItemText = input.value;
    // Step 4: Empty the input element
    input.value = '';
    // Step 5: Create new elements - list item,span, and button
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    //Step 6:Append span and button as children of li;
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    




})

// Step 2: Create a function to run when the button is clicked
/* button.addEventListener('click', function() {
  // Step 3: Store the current value of the input element in a variable
  const newItemText = input.value;

  // Step 4: Empty the input element
  input.value = '';

  // Step 5: Create new elements - list item, span, and button
  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  // Step 6: Append span and button as children of the list item
  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  // Step 7: Set text content of span to the input element value and button to 'Delete'
  span.textContent = newItemText;
  deleteButton.textContent = 'Delete';

  // Step 8: Append the list item as a child of the list
  shoppingList.appendChild(listItem);

  // Step 9: Attach an event handler to the delete button to remove the list item
  deleteButton.addEventListener('click', function() {
    shoppingList.removeChild(listItem);
  });

  // Step 10: Focus the input element for entering the next shopping list item
  input.focus();
});
*/
