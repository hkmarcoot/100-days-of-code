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
let h1 = document.querySelector("h1");
h1.style.textDecoration = "underline";

//Task 4
let ul = document.querySelector("#tips-list");

for (let i = 0; i < extraTips.length; i++){

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(extraTips[i]));
    ul.appendChild(li);

}

//Task 5
//document.title = "Hello World this is DOM 102";

//task 6
function changeTitle() {
  document.title = "Hello World this is DOM 102";
}

document.querySelector("#click-me").addEventListener("click", changeTitle);

//Task 7
let newInput = document.querySelector("#new-input");
let newButton = document.querySelector("#new-button");

function changeh1 () {
  let newInputValue = newInput.value;
  h1.innerHTML = newInputValue;
}

newButton.addEventListener("click", changeh1);
