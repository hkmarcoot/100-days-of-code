// let input = document.getElementById("food-input");
// let button = document.querySelector("#recipe-button");

let snackImg1 = document.querySelector("#snack-img1");
let snackImg2 = document.querySelector("#snack-img2");
let snackImg3 = document.querySelector("#snack-img3");
let mainImg1 = document.querySelector("#main-img1");
let mainImg2 = document.querySelector("#main-img2");
let mainImg3 = document.querySelector("#main-img3");
let cocktailImg1 = document.querySelector("#cocktail-img1");
let cocktailImg2 = document.querySelector("#cocktail-img2");
let cocktailImg3 = document.querySelector("#cocktail-img3");

let ulSnackIngredients = document.querySelector("#ulSnackIngredients");
let ulSnackNutrition = document.querySelector("#ulSnackNutrition");
let ulMainIngredients = document.querySelector("#ulMainIngredients");
let ulMainNutrition = document.querySelector("#ulMainNutrition");
let ulCocktailIngredients = document.querySelector("#ulCocktailIngredients");
let ulCocktailNutrition = document.querySelector("#ulCocktailNutrition");




// function handleRecipeClick() {
//     let inputValue = input.value;
//     //console.log(inputValue);
//     fetchRecipe(inputValue);
// }

function handleInputChange1(data) {
    // document.querySelector("#recipe-label").innerHTML = data.hits[0].recipe.label;
    // document.querySelector("#recipe-img1").src = data.hits[0].recipe.image;
    //document.querySelector("#ingredients").innerHTML = data.hits[0].recipe.ingredientLines[0];
    ulSnackIngredients.innerHTML = "";
    for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.ingredientLines[i];
        li.appendChild(document.createTextNode(text));
        ulSnackIngredients.appendChild(li);
    }
    ulSnackNutrition.innerHTML = "";
    for (let i = 0; i < 3; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.digest[i].label + ": " + Math.round(data.hits[0].recipe.digest[i].total)+"g";
        li.appendChild(document.createTextNode(text));
        ulSnackNutrition.appendChild(li);
    }
}

function handleInputChange2(data) {
    // document.querySelector("#recipe-label").innerHTML = data.hits[0].recipe.label;
    // document.querySelector("#recipe-img1").src = data.hits[0].recipe.image;
    //document.querySelector("#ingredients").innerHTML = data.hits[0].recipe.ingredientLines[0];
    ulMainIngredients.innerHTML = "";
    for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.ingredientLines[i];
        li.appendChild(document.createTextNode(text));
        ulMainIngredients.appendChild(li);
    }
    ulMainNutrition.innerHTML = "";
    for (let i = 0; i < 3; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.digest[i].label + ": " + Math.round(data.hits[0].recipe.digest[i].total)+"g";
        li.appendChild(document.createTextNode(text));
        ulMainNutrition.appendChild(li);
    }
}

function handleInputChange3(data) {
    // document.querySelector("#recipe-label").innerHTML = data.hits[0].recipe.label;
    // document.querySelector("#recipe-img1").src = data.hits[0].recipe.image;
    //document.querySelector("#ingredients").innerHTML = data.hits[0].recipe.ingredientLines[0];
    ulCocktailIngredients.innerHTML = "";
    for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.ingredientLines[i];
        li.appendChild(document.createTextNode(text));
        ulCocktailIngredients.appendChild(li);
    }
    ulCocktailNutrition.innerHTML = "";
    for (let i = 0; i < 3; i++){
        let li = document.createElement("li");
        let text = data.hits[0].recipe.digest[i].label + ": " + Math.round(data.hits[0].recipe.digest[i].total)+"g";
        li.appendChild(document.createTextNode(text));
        ulCocktailNutrition.appendChild(li);
    }
}

async function fetchRecipe1(food) {
    const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=" + food + "&app_id=800926ef&app_key=61ce8883cbbbba0a94344b55d8991135");
    const data = await response.json();
    console.log(data);
    //console.log(data[0]);
    handleInputChange1(data);
}

async function fetchRecipe2(food) {
    const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=" + food + "&app_id=800926ef&app_key=61ce8883cbbbba0a94344b55d8991135");
    const data = await response.json();
    console.log(data);
    //console.log(data[0]);
    handleInputChange2(data);
}

async function fetchRecipe3(food) {
    const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=" + food + "&app_id=800926ef&app_key=61ce8883cbbbba0a94344b55d8991135");
    const data = await response.json();
    console.log(data);
    //console.log(data[0]);
    handleInputChange3(data);
}

function showSnackImg1Info() {
    let inputValue = "Kerala banana chips";
    fetchRecipe1(inputValue);
}

function showSnackImg2Info() {
    let inputValue = "smoked cheese in blankets";
    fetchRecipe1(inputValue);
}

function showSnackImg3Info() {
    let inputValue = "Tomato, Mozzarella, Peach & Prosciutto Caprese Skewers";
    fetchRecipe1(inputValue);
}

function showMainImg1Info() {
    let inputValue = "Orange chicken";
    fetchRecipe2(inputValue);
}

function showMainImg2Info() {
    let inputValue = "scallion fish with sesame kale";
    fetchRecipe2(inputValue);
}

function showMainImg3Info() {
    let inputValue = "Roast Beef Tenderloin with Caesar Crust";
    fetchRecipe2(inputValue);
}

function showCocktailImg1Info() {
    let inputValue = "Slushy Cherry Old Fashioned Cocktail";
    fetchRecipe3(inputValue);
}

function showCocktailImg2Info() {
    let inputValue = "Upside-Down Cake Cocktail";
    fetchRecipe3(inputValue);
}

function showCocktailImg3Info() {
    let inputValue = "Ultra-Tropical Piña Colada";
    fetchRecipe3(inputValue);
}

// let foodSearchName = "chicken";
// fetchRecipe(foodSearchName);

//button.addEventListener("click", handleRecipeClick);

snackImg1.addEventListener("click", showSnackImg1Info);
snackImg2.addEventListener("click", showSnackImg2Info);
snackImg3.addEventListener("click", showSnackImg3Info);
mainImg1.addEventListener("click", showMainImg1Info);
mainImg2.addEventListener("click", showMainImg2Info);
mainImg3.addEventListener("click", showMainImg3Info);
cocktailImg1.addEventListener("click", showCocktailImg1Info);
cocktailImg2.addEventListener("click", showCocktailImg2Info);
cocktailImg3.addEventListener("click", showCocktailImg3Info);
