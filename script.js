const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Get the reference to the fruit list element
const fruitList = document.getElementById("fruit-list");

// Create list items for each fruit
fruits.forEach(fruit => {
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  fruitList.appendChild(listItem);
});
