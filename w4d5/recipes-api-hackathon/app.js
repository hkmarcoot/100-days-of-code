import express from "express";

import recipes from "./libs/recipes.js";

import * as actions from "./models/recipes.js";

import { html } from "./config.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

//Bonus: Add middleware
let count = 0;
app.use(function (req, res, next) {
  count = count + 1;
  console.log("We got a request. Count: " + count);
  next();
})

//Bonus: Using a query to search recipes by title
//GET https://localhost:3000/recipes?title=PutTitleHere
app.get("/recipes", function (req, res) {
  const requestTitle = req.query.title;
  const requestIngredient = req.query.ingredients;

  if (requestTitle != undefined){
    const result = actions.searchRecipeByTitle(requestTitle);

    if (result) {
      res.json({
        success: true,
        payload: result
      });
    } else {
      res.json({
        success: false,
        payload: `No recipe with title ${requestTitle} found.`
      });
    }
  } else if(requestIngredient != undefined){
    //Bonus: Using a query to search recipes by ingredients
    const result = actions.searchRecipeByIngredient(requestIngredient);

    if (result) {
      res.json({
        success: true,
        payload: result
      });
    } else {
      res.json({
        success: false,
        payload: `No recipe with ingredient ${requestIngredient} found.`
      });
    }
  } else {
    //GET recipes
    const result = actions.getRecipes();

    res.json({ success: true, payload: result });
  }

});

//Bonus: Using a query to search recipes by ingredients
////GET https://localhost:3000/recipes?ingredients=PutIngredientHere

//This code cannot be executed. It stops at "search recipes by title".
//I moved the code and combined it to above.

// app.get("/recipes", function (req, res) {
//   const requestIngredient = req.query.ingredients;
//   console.log(requestIngredient);

//   const result = actions.searchRecipeByIngredient(requestIngredient);

//   if (result) {
//     res.json({
//       success: true,
//       payload: result
//     });
//   } else {
//     res.json({
//       success: false,
//       payload: `No recipe with ingredient ${requestIngredient} found.`
//     });
//   }
// });

/** DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

/** YOUR ROUTES GO HERE */

//This code cannot be executed. It stops at "search recipes by title".
//I moved the code and combined it to above.

// app.get("/recipes", function (req, res) {

//   const result = actions.getRecipes();

//   res.json({ success: true, payload: result });
// });

app.get("/recipes/:id", function (req, res) {
  const id = Number(req.params.id);
  
  const recipe = actions.getRecipeByID(id);

  if (recipe) {
    res.json({
      success: true,
      payload: recipe
    });
  } else {
    res.json({
      success: false,
      payload: `No recipe with id ${id} found.`
    });
  }
});
//Post = CRUD Create
app.post("/recipes", function (req, res) {
  const newRecipe = req.body;
  const result = actions.createRecipe(newRecipe);
  
  res.json({
    success: true,
    payload: result
  });
});

//Put = CRUD Update
app.put("/recipes/:id", function (req, res) {
  const id = Number(req.params.id);
  const updates = req.body;

  const result = actions.updateRecipeByID(id, updates);
  res.json({
    success: true,
    payload: result
  });
  
});

app.delete("/recipes/:id", function (req, res) {
  const id = Number(req.params.id);
  
  const result = actions.deleteRecipeByID(id);
  res.json({
    success: true,
    payload: result
  });
});

//Bonus: Using a PATCH request to update specific parts of recipes
app.patch("/recipes/:id", function (req, res){
  const id = Number(req.params.id);
  const updates = req.body;

  const result = actions.patchRecipeByID(id, updates);
  console.log(result);
  res.json({
    success: true,
    payload: result
  });
})

/** END OF YOUR ROUTES */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
