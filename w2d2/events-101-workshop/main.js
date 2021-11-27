const button = document.querySelector("#click-me");
const flowerButton = document.querySelector(".task-2");

//Task 2: Change the title with emojis
function changeTitle () {
  document.querySelector("h1").innerHTML = "💐🌷🌼";
}

//When click is happened, the event is given by the browser
function handleClick(event) {
  // Task 1: If shift key pressed, change the inner text of the button to be NAILED IT
  // event.shiftKey is already a boolean
  if (event.shiftKey === true){
    button.innerText = "Nailed It";
  }
}

button.addEventListener("click", handleClick);
//Task 2: add event listener to flowerButton
flowerButton.addEventListener("click", changeTitle);

//console.log("hello")

//Task 3: We didn't do it
//when you type in the input field, 
//you should see your text show up on the page.
document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

//Task 4: Listen to the mouseenter event on the img element 
//and change the color of the h1 to hotpink when the mouse cursor 
//is over the image.
document.querySelector("img").addEventListener("mouseenter", () => {
  document.querySelector("h1").style.color = "hotpink";
});

//Task 4: Listen to the mouseleave event on the img element 
//and change the color of the h1 back to initial when the mouse cursor 
//is then removed from the image.
document.querySelector("img").addEventListener("mouseleave", () => {
  document.querySelector("h1").style.color = "initial";
});
