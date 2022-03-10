function double(num) {
  return num * 2;
}

function square(num) {
  return num * num;
}

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  // a = String(a);
  return a + b;
}

function calc(numA, numB) {
  numA = double(numA);
  numA = square(numA);
  numA = multiply(numA, numB);
  numA = add(1, numA);

  let answer = add(numA, numB) + 1;
  return answer;
}

/* DO NOT CHANGE THE CODE BELOW */
let correctAnswer = 70;
let yourAnswer = calc(2, 4);

if (correctAnswer === yourAnswer) {
  console.log(`Correct answer! You fixed all the bugs. Well done`);
} else {
  console.log(`${yourAnswer} is incorrect! The code still has bugs`);
}
