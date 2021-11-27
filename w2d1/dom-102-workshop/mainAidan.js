let pennies = 1;
const output = document.querySelector("output");
// Task 1
function handleClick() {
  console.log("Im just to prove it's working!");
  // double the number of pennies
  pennies = pennies * 2;
  // display in the output tag
  output.innerText = `${pennies} pennies`;
  console.log(pennies);
}
let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];
// Task 2
let dummy = document.querySelector(".quote");
dummy.innerText = `Hello World`;
// Task 3
let dummy2 = document.querySelector("h1");
dummy2.style.textDecoration = "underline";
// Task 4
let dummy3 = document.querySelector("#tips-list");
let newListItem = document.createElement("div");
for (let i = 0; i < extraTips.length; i++) {
  const newListItem = document.createElement("li");
  newListItem.append(extraTips[i]);
  dummy3.append(newListItem);
}