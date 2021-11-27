//Pseudo-code for Extension 2: The Clairvoyant Computer

    //How would you go about making the computer win every time?
      //
      //Use If Loop to let computer win every time
      //For example: player:rock <- computer:paper
      //             player:paper <- computer:scissors
      //             player:scissors <- computer:rock

    //How would you go about making it so that the computer wins 
    //more often (1/2 the time, 1/4 of the time 90% of the time)?
      //player :rock
      //computer Win: paper (1/2 chance)
      //computer Lose: scissors
      //computer Draw: rock
      //computer Lose + Draw: other 1/2 chance

      //player :rock
      //computer Win: paper (1/4 chance)
      //computer Lose: scissors
      //computer Draw: rock
      //computer Lose + Draw: 3/4 chance

      //player :rock
      //computer Win: paper (90/100 chance)
      //computer Lose: scissors
      //computer Draw: rock
      //computer Lose + Draw: 10/100 chance
      //*(For the Draw chance: 10/100 x 1/2 = 5/100 = 0.05)

      //player :paper
      //computer Win: scissors (1/2 chance)
      //computer Lose: rock
      //computer Draw: paper
      //computer Lose + Draw: other 1/2 chance

      //In if loop for the 90/100 chance
        //   let chanceToWin = 0.9;
        //   let randomNumZeroToOne = Math.random();

        //   console.log(randomNumZeroToOne);

        //   if ( randomNumZeroToOne <= chanceToWin ) {
        //       //win
        //   } else {
        //       //lose or draw
        //   }

//End of Pseudo-code


//put them into a function
function getWinner(player1, player2){

    let playerMove = player1;
    let computerMove = player2;

    //write a set of if statements that will determine the winner of rock, paper, scissors.
    if ( playerMove === "rock" && computerMove === "rock") {
        //Draw
        console.log("Draw!");
        //return 0 if it is a draw
        return 0;
    } else if ( playerMove === "rock" && computerMove === "paper") {
        //Lose
        console.log("You Lose!");
        //return -1 if player1 loses
        return -1;
    } else if ( playerMove === "rock" && computerMove === "scissors"){
        //Win
        console.log("You Win!");
        //return 1 if player1 wins
        return 1;
    }

    if ( playerMove === "paper" && computerMove === "rock") {
        //Win
        console.log("You Win!");
        //return 1 if player1 wins
        return 1;
    } else if ( playerMove === "paper" && computerMove === "paper") {
        //Draw
        console.log("Draw!");
        //return 0 if it is a draw
        return 0;
    } else if ( playerMove === "paper" && computerMove === "scissors"){
        //Lose
        console.log("You Lose!");
        //return -1 if player1 loses
        return -1;
    }

    if ( playerMove === "scissors" && computerMove === "rock") {
        //Lose
        console.log("You Lose!");
        //return -1 if player1 loses
        return -1;
    } else if ( playerMove === "scissors" && computerMove === "paper") {
        //Win
        console.log("You Win!");
        //return 1 if player1 wins
        return 1;
    } else if ( playerMove === "scissors" && computerMove === "scissors"){
        //Draw
        console.log("Draw!");
        //return 0 if it is a draw
        return 0;
    }
}

//Write a function that generates a random computer move.
function computerRandomChoice(player1Prompt, chanceToWin) {
    let randomNumZeroToOne = Math.random();
    console.log(randomNumZeroToOne);

    if (player1Prompt === "rock") {
        if (randomNumZeroToOne <= chanceToWin){
            return "paper";
        } else {
            let randomNumZeroToOne = Math.random();
            if (randomNumZeroToOne <= 0.5) {
                return "rock";
            } else {
                return "scissors";
            }
        }
    }

    if (player1Prompt === "paper") {
        if (randomNumZeroToOne <= chanceToWin){
            return "scissors";
        } else {
            let randomNumZeroToOne = Math.random();
            if (randomNumZeroToOne <= 0.5) {
                return "paper";
            } else {
                return "rock";
            }
        }
    }

    if (player1Prompt === "scissors") {
        if (randomNumZeroToOne <= chanceToWin){
            return "rock";
        } else {
            let randomNumZeroToOne = Math.random();
            if (randomNumZeroToOne <= 0.5) {
                return "scissors";
            } else {
                return "paper";
            }
        }
    }

    // if (computerDrawNum === 0) {
    //     return "rock";
    // } else if (computerDrawNum === 1) {
    //     return "paper";
    // } else if (computerDrawNum === 2) {
    //     return "scissors";
    // }
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
//let computerChanceToWin = 0.9;
//let computerChanceToWin = 0.5;
let computerChanceToWin = 0.25;

while (r === true) {

    //Using prompt, get a user-inputted value for the player move.
    let player1Prompt = prompt("Please choose rock, paper or scissors.");
    let computerChoice = computerRandomChoice(player1Prompt, computerChanceToWin);

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

