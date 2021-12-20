import recipes from "../libs/recipes.js";

// GET ALL RECIPES
// should return an array of all recipes
export function getRecipes() {
  return recipes;
}

// GET A RECIPE BY ID
// should return the particular recipe we are looking for
export function getRecipeByID(requestId) {
 
  const found = recipes.find(({ id }) => id === requestId);
 
  return found;
}

// CREATE A RECIPE
// should add a recipe to the collection and return the new recipe
export function createRecipe(recipe) {
  
  //add it to the collection
  recipes.push(recipe);
  //return the new recipe
  return recipes[recipes.length - 1];


}

// UPDATE A RECIPE BY ID
// should replace the recipe at a certain ID with an updated version and return the new recipe
export function updateRecipeByID(id, updates) {
  
  const foundIndex = recipes.findIndex(function (recipe) {
    return recipe.id === id;
  });

  
  recipes[foundIndex] = updates;

  return recipes[foundIndex];
}

// DELETE A RECIPE BY ID
// should remove the specific recipe from the collection, and return the deleted recipe
export function deleteRecipeByID(id) {
  //take in an id
  // find the item with that id
  const foundIndex = recipes.findIndex(function (recipe) {
    return recipe.id === id;
  });
  
  const item = recipes[foundIndex]; //so that we can return it later
  
  //remove it from the array
  recipes.splice(foundIndex, 1);
  //return the removed item
  return item;
}

//Bonus: Using a query to search recipes by title
export function searchRecipeByTitle(requestTitle) {
  const foundIndex = recipes.findIndex(function (recipe){
    return recipe.title === requestTitle;
  });

  const item = recipes[foundIndex];

  return item;
}

//Bonus: Using a query to search recipes by ingredients
export function searchRecipeByIngredient(requestIngredient) {
  const foundIndex = recipes.findIndex(function (recipe){
    //return recipe.ingredients === requestIngredient;
    for (let i = 0; i < recipe.ingredients.length; i++){
      if (recipe.ingredients[i].search(requestIngredient) >= 0){
        return true;
      }
    }

  });

  const item = recipes[foundIndex];

  return item;
}

//Bonus: Using a PATCH request to update specific parts of recipes
//Not Completed Yet
export function patchRecipeByID(requestId, updates) {
  //recipes is assigned to tempRecipes 
  //or else it has TypeError: Assignment to constant variable in line 107
  let tempRecipes = recipes;
  
  const foundIndex = tempRecipes.findIndex(({id}) => id === requestId);
  
  if (foundIndex != undefined) {
    let updatedRecipe = tempRecipes[foundIndex];

    Object.keys(updatedRecipe).map((key) => {
      if (Object.keys(updates).includes(key)) {
        updatedRecipe[key] = updates[key];
      }
    });

    tempRecipes = [
      ...tempRecipes.slice(0, foundIndex),
      updatedRecipe,
      ...tempRecipes.slice(foundIndex + 1),
    ];

    return tempRecipes[foundIndex];
  }
}