let datasetInh1 = document.querySelector("#joke");
let button = document.querySelector("#new-joke-button");
let addPreJoke = document.querySelector("#joke-history");

async function getDadJoke(event) {
    const response = await fetch("https://icanhazdadjoke.com/", {
                                headers: { accept: "application/json" },
                    });
    const data = await response.json();

    console.log(data.joke);
    
    //Task 4
    datasetInh1.innerHTML = `<h1>${data.joke}</h1>`;                

    //Task 3
    addListItem(data.joke);
}

//getDadJoke();

async function getTrivia(event) {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();

    console.log(data);
}

//getTrivia();


//Task 2
button.addEventListener('click', getDadJoke);

//Task 3
function addListItem(text) {
    const newListItem = document.createElement('li');
    newListItem.innerHTML = text;

    addPreJoke.appendChild(newListItem);
}
