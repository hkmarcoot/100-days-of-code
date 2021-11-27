//put them into a function
function getWinner(player1, player2){

    let playerMove = player1;
    let computerMove = player2;

    //write a set of if statements that will determine the winner of rock, paper, scissors.
    if (playerMove === "rock"){
        if (computerMove === "spock" || computerMove === "paper"){
            //Lose
            console.log("You Lose!");
            //return -1 if player1 loses
            return -1;
        } else if (computerMove === "lizard" || computerMove === "scissors"){
                //Win
                console.log("You Win!");
                //return 1 if player1 wins
                return 1;
        } else if (computerMove === "rock"){
                //Draw
                console.log("Draw!");
                //return 0 if it is a draw
                return 0;
        }
    }

    if (playerMove === "lizard"){
        if (computerMove === "scissors" || computerMove === "rock"){
            //Lose
            console.log("You Lose!");
            //return -1 if player1 loses
            return -1;
        } else if (computerMove === "spock" || computerMove === "paper"){
                //Win
                console.log("You Win!");
                //return 1 if player1 wins
                return 1;
        } else if (computerMove === "lizard"){
                //Draw
                console.log("Draw!");
                //return 0 if it is a draw
                return 0;
        }
    }

    if (playerMove === "spock"){
        if (computerMove === "lizard" || computerMove === "paper"){
            //Lose
            console.log("You Lose!");
            //return -1 if player1 loses
            return -1;
        } else if (computerMove === "scissors" || computerMove === "rock"){
                //Win
                console.log("You Win!");
                //return 1 if player1 wins
                return 1;
        } else if (computerMove === "spock"){
                //Draw
                console.log("Draw!");
                //return 0 if it is a draw
                return 0;
        }
    }

    if (playerMove === "scissors"){
        if (computerMove === "spock" || computerMove === "rock"){
            //Lose
            console.log("You Lose!");
            //return -1 if player1 loses
            return -1;
        } else if (computerMove === "lizard" || computerMove === "paper"){
                //Win
                console.log("You Win!");
                //return 1 if player1 wins
                return 1;
        } else if (computerMove === "scissors"){
                //Draw
                console.log("Draw!");
                //return 0 if it is a draw
                return 0;
        }
    }

    if (playerMove === "paper"){
        if (computerMove === "scissors" || computerMove === "lizard"){
            //Lose
            console.log("You Lose!");
            //return -1 if player1 loses
            return -1;
        } else if (computerMove === "spock" || computerMove === "rock"){
                //Win
                console.log("You Win!");
                //return 1 if player1 wins
                return 1;
        } else if (computerMove === "paper"){
                //Draw
                console.log("Draw!");
                //return 0 if it is a draw
                return 0;
        }
    }
}


//Write a function that generates a random computer move.
function computerRandomChoice() {
    let computerDrawNum = Math.floor(Math.random() * 5);
    if (computerDrawNum === 0) {
        return "rock";
    } else if (computerDrawNum === 1) {
        return "paper";
    } else if (computerDrawNum === 2) {
        return "scissors";
    } else if (computerDrawNum === 3) {
        return "spock";
    } else if (computerDrawNum === 4) {
        return "lizard";
    }
}

//Create a username prompt and use the username the player inputs in the game so that a player can see their name in the messages sent to them.
let userNameCheck = true;
let userNameFirstLetterCheck = true;
let userNameCapitalisedCheck = true;
let userName;

while (userNameCheck || userNameFirstLetterCheck || userNameCapitalisedCheck){

    userName = prompt("Please input you name: ");

    //check the name length is equal or less than 10 characters
    if (userName.length > 10) {
        alert("The name length should be equal or less than 10 characters.");
    } else {
        //Here, false means that the checking is passed
        userNameCheck = false;
    }

    //check the name is only start with letters, not numbers or symbols.
    if ((userName.charAt(0) >='A' && userName.charAt(0) <= 'Z') ||
        (userName.charAt(0) >='a' && userName.charAt(0) <= 'z')) {
            //Here, false means that the checking is passed
            userNameFirstLetterCheck = false;
    } else {
            alert("The name should only start with letters, not numbers or symbols.");
    }

    //check the first letter of the name is capitalised
    if ( userName.charAt(0) === userName.charAt(0).toLowerCase()) {
        alert("The first letter of the username should be capitalised.");
    } else {
        //Here, false means that the checking is passed
        userNameCapitalisedCheck = false;
    }
}


//to have it run as many times as people would like to play without having to refresh the page.
let r = true;
let totalNumOfGame = 0;
let wins = 0;
let losses = 0;
let draws = 0;

while (r === true) {

    //Using prompt, get a user-inputted value for the player move.
    let player1Prompt = prompt("Please choose rock, paper, scissors, spock or lizard.");
    let computerChoice = computerRandomChoice();

    let result = getWinner(player1Prompt, computerChoice);

    //Keep track of how many games have been played, 
    //as well as the number of wins, losses, and draws.
    totalNumOfGame++;

    if (result === 1){
        wins++;
    } else if (result === 0) {
        draws++;
    } else if (result === -1) {
        losses++;
    }

    //Display the result using alert.
    alert("Name of player: "+ userName + "\n" +
        "Player: " + player1Prompt +
        " Computer: " + computerChoice + 
        " Result: " + result + 
        "\n" +
        "Total Number of Game: " + totalNumOfGame +
        "\n" +
        "Wins: " + wins +
        " draws: " + draws +
        " losses: " + losses);

    r = confirm("Do you want to play again?");

}