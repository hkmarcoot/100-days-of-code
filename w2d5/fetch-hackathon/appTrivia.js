let showQuestion = document.querySelector("#question");
let firstButton = document.querySelector("#first-button");
let secondButton = document.querySelector("#second-button");
let thirdButton = document.querySelector("#third-button");
let forthButton = document.querySelector("#forth-button");

let gamesPlayed = document.querySelector("#games-played");
let correctAnswers = document.querySelector("#correct-answers");
let wrongAnswers = document.querySelector("#wrong-answers");

let winNum = 0;
let loseNum = 0;
let totalGamesPlayed = 0;

async function getTrivia(event) {
    //Get data from the server
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();

        //console.log(data.results[0].question);
    console.log(data.results);

    //return data;
    //Show the first question on the webpage
        //console.log(data.results.length);
        // for (let i = 0; i < data.results.length; i++){ 
        //     console.log(data.results[i].type);
        // }
    for (let i = 0; i < data.results.length; i++){
        if (data.results[i].type === "multiple"){
            //show the question
            showQuestion.innerHTML = "Question: " + data.results[i].question;
            //put correct answer to first button
            firstButton.innerHTML = data.results[i].correct_answer;
            //put incorrect answer to second button
            secondButton.innerHTML = data.results[i].incorrect_answers[0];
            //put incorrect answer to third button
            thirdButton.innerHTML = data.results[i].incorrect_answers[1];
            //put incorrect answer to forth button
            forthButton.innerHTML = data.results[i].incorrect_answers[2];
            break;
        } else if (data.results[i].type === "boolean"){
    //Do boolean question here
        }
    }

}

getTrivia();

// let globalData = getTrivia();

function win(){
    winNum++;
    totalGamesPlayed++;
    correctAnswers.innerHTML = "Correct Answers: " + winNum;
    gamesPlayed.innerHTML = "Total Games Played: " + totalGamesPlayed;
}

function lose(){
    loseNum++;
    totalGamesPlayed++;
    wrongAnswers.innerHTML = "Wrong Answers: " + loseNum;
    gamesPlayed.innerHTML = "Total Games Played: " + totalGamesPlayed;
}

firstButton.addEventListener("click", win);
secondButton.addEventListener("click", lose);
thirdButton.addEventListener("click", lose);
forthButton.addEventListener("click", lose);



