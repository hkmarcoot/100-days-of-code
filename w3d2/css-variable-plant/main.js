// .dark-mode-theme
// #dark-mode-button
/*-------- TASK 4 --------*/

// grab the button - add event listener to the button
let darkBtn = document.querySelector('#dark-mode-button');
darkBtn.addEventListener('click', darkMode);

// create function that changes styles on body
function darkMode(){
    //grab the body of the document
    var element = document.querySelector("body");
    // change the style to ^^^
    //toggle
    element.classList.toggle("dark-mode-theme");
}