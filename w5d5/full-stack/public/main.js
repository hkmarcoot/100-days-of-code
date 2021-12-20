const url = "http://localhost:3000";

const allEnscoresSection = document.querySelector("#allEnscores");

let button1 = document.querySelector("#fetch-button");
let button2 = document.querySelector("#id-button");
let button3 = document.querySelector("#name-button");

async function fetchAllScores() {
    
    const response = await fetch (`${url}/enscores`);
    const {payload} = await response.json(); 
    allEnscoresSection.innerHTML = "";
    console.log(payload);
    payload.forEach(renderEnscores);
}

function renderEnscores(enScore) {
    const article = createEnscoresView(enScore);
    allEnscoresSection.appendChild(article);
}

function createEnscoresView({ id, name, round, score}){
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    h2.innerText = "id: " + id;
    const p1 = document.createElement("div");
    p1.innerText = "Name: " + name;
    const p2 = document.createElement("div");
    p2.innerText = "Round: " + round;
    const p3 = document.createElement("div");
    p3.innerText = "Score: " + score;
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);
    return article;
}

async function searchById() {
    const idNum = document.querySelector("#searchById").value;
    const response = await fetch (`${url}/enscores/${idNum}`);
    const {payload} = await response.json(); 
    allEnscoresSection.innerHTML = "";
    console.log(payload);
    payload.forEach(renderEnscores);
}

async function searchByName() {
    const name = document.querySelector("#searchByName").value;
    const response = await fetch (`${url}/enscores?name=${name}`);
    const {payload} = await response.json(); 
    allEnscoresSection.innerHTML = "";
    console.log(payload);
    payload.forEach(renderEnscores);
}

// fetchAllScores();
button1.addEventListener("click", fetchAllScores);
button2.addEventListener("click", searchById);
button3.addEventListener("click", searchByName);