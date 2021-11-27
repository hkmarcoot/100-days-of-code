const hand = document.querySelector(".hand");
const handMin = document.querySelector(".handMin");
const handHour = document.querySelector(".handHour");

//Initialize the variable to be numbers
// let count = 0;
// let degree = 0;


// function move6DegreePerSec () {

// //Add one for every seconds
//     count++;
// //multiple by 6
//     degree = count * 6;
//     //console.log(degree);

// //Rotate the hand
//     hand.style.transform = `rotate(${degree}deg)`;// example of how to rotate the hand
//     //console.log("Clock"); 
// }

// //Using setInterval in here to move the hand every seconds
// let intervalID = setInterval(move6DegreePerSec, 1000);

let sec = 0;
let min = 0;
let hr = 0;
function clockMove() {
    const d = new Date();
    let seconds = d.getSeconds();
    let minutes = d.getMinutes();
    let hours = d.getHours();

    sec = seconds * 6;

    hand.style.transform = `rotate(${sec}deg)`;

    min = minutes * 6;

    handMin.style.transform = `rotate(${min}deg)`;

    hr = hours* 30;

    handHour.style.transform = `rotate(${hr}deg)`;
}

let intervalID = setInterval(clockMove, 1000);