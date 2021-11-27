let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

//5a
// queue.push("catHorse");
// console.log(queue);

//5b
// queue.shift();
// console.log(queue);

//5c
//1st parameter define the position, called index
//2nd parameter define how many number of items to be removed
//3rd parameter(s) is the new element(s) to be added
queue.splice(0, 0, "owlDonkey");
console.log(queue);

