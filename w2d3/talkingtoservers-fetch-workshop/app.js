console.log("It's Kanye time...");
let datasetInh1 = document.querySelector("#kanye-quote");
let button = document.querySelector("#new-quote-button");
let addPreQuo = document.querySelector("#kanye-quote-history");
let arrayQuote = [];

//write an async function called getQuote
async function getQuote(event) {
//Use fetch to send a GET request to https://api.kanye.rest/ and store the resolved value of the returned promise in a variable called response.
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();
//console.log(data);
//Bouns Bouns Task
        if (arrayQuote.includes(data.quote) === false){
            datasetInh1.innerHTML = `<h1>${data.quote}</h1>`;
        }

//Task 3
//&
//Bonus Task
    //for (let i = 0; i < arrayQuote+1 ; i++){
        if (arrayQuote.includes(data.quote) === false){
            arrayQuote.push(data.quote);
            addListItem(data.quote);
        }
    //}
}

//getQuote();

//Task 2 - On Click
button.addEventListener('click', getQuote);

//Task 3 - Refer to w2d1
function addListItem(text) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = text;

    addPreQuo.appendChild(newListItem);
}

//Bonus Task 
//Use for loop to compare everything 
//in the order list one by one with the new quote.
//If they match, not add the new quote in the list.
//If they don't match, add the new quote in the list.

