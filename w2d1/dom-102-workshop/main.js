let pennies = 1;
const output = document.querySelector("output");

function handleClick() {
  console.log("Im just to prove it's working!");
  // Double the number of pennies
  pennies = pennies*2;
  // display in the output tag
  output.innerText = `${pennies} pennies`;

}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

//Task 2
let dummy = document.querySelector(".quote");
dummy.innerText = `Hello World`;

//Task 3
let dummy2 = document.querySelector("h1");

//Task 4
let dummy3 = document.querySelector("#tips-list");
let newListItem = document.createElement("div");
newListItem.innerText = "current tip";
for (let i = 0; i < extraTips.length; i++){
    console.log(extraTips[i]);

    const newListItem = document.createElement("li");
    newListItem.append(extraTips[i]);
    console.log(newListItem);
    dummy3.appendChild(newListItem);
    //newListItem.innerText = "current tip";
    // console.log("Testing");
    // dummy3.appendChild(newListItem);

    // const list = document.querySelector('#tips-list');
    // list.appendChild(newListItem);

}

//Task 5
//document.title. = 
