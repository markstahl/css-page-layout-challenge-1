let dishes = [
  "Chicken Pot Pie",
  "Baked Beans",
  "Macaroni and Cheese",
  "Burgundy Sauce with Beef and Noodles",
  "Creamed Spinach",
  "Pumpkin Pie",
  "Strawberry Shortcake"
];

let mainDiv = document.getElementById('main');

dishes.forEach((dish) => {
  let foodDiv = document.createElement('div');
  foodDiv.className = "food-item";
  foodDiv.innerHTML = dish;
  mainDiv.appendChild(foodDiv);
  foodDiv.addEventListener('click', () => {
    foodDiv.className += ' hidden';
  });
});
