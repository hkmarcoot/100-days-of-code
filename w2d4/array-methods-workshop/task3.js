let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];
let num1 = 3;
let num2 = 5;
let num3 = 60;
let num4 = 90;
someNumbers.some(checkNum);
function checkNum(num) {
  return num % num1 === 0||num % num2 === 0||num % num3 === 0||num % num4 === 0;
}
console.log(someNumbers.some(checkNum));

