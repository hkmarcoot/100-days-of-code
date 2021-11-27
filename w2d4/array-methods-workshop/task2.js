let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(checkB); 

function checkB(cold) {
  return cold.charAt(0) === `b`;
}// Your 'filter' code here.

