let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];
//461, 538
//4a
function checkMultipleOf7(num){
    return num % 7 === 0;
}
//console.log(sevenTimesTable.every(checkMultipleOf7));

//4b
let multipleNum = 77;

function checkMultipleOf77(num){
    return num % multipleNum === 0;
}
//console.log(seventySevenTimesTable.every(checkMultipleOf77));

//4c 
//461 and 538 are both not a multiple of 77, 
//but we can only return 461 to console
//console.log(seventySevenTimesTable.find(checkMultipleOf77));
//
//console.log(seventySevenTimesTable.find(e => e % multipleNum != 0));

//4d
let incorrectNum = seventySevenTimesTable.find(e => e % multipleNum != 0);
//console.log(incorrectNum);
function checkIncorrectNum (num){
    return num === incorrectNum;
}
console.log(seventySevenTimesTable.findIndex(checkIncorrectNum));
