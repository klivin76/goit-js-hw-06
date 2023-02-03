const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulIngredients = document.querySelector(`#ingredients`);


const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
const listLiIngredients = document.createElement(`li`);
  listLiIngredients.classList.add(`item`);
  listLiIngredients.textContent = ingredient.valueOf(ingredients);
  return listLiIngredients;
  });
}
const elemIngredients = makeIngredients(ingredients);
ulIngredients.append(...elemIngredients);

