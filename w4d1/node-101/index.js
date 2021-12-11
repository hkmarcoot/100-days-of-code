import chalk from 'chalk';
import myCollection from "./collection.js";

// console.log(myCollection);

//Task 2c
// function describeItem(item) {
//   console.log(
//     "I have a " +
//       item[0].name +
//       ". Here is what I like about it: " +
//       item[0].whatILike
//   );
//   console.log(
//     "I have " +
//       item[1].count +
//       " " +
//       item[1].name +
//       "s" +
//       ". Here is what I like about them: " +
//       item[1].whatILike
//   );
//   console.log(
//     "I have a " +
//       item[2].name +
//       ". Here is what I like about it: " +
//       item[2].whatILike
//   );
// }
// describeItem(myCollection);

//Task 2d
function describeItem(item) {
  console.log(
      "I have " +
      chalk.yellow(item.count) +
       " " +
      chalk.cyan(item.name) +
      ". Here is what I like about it: " +
      chalk.green.bgWhite.bold(item.whatILike)
  );
}

function describeCollection(items) {
  for (let i = 0; i < items.length; i++) {
    describeItem(items[i]);
  }
}

console.log(describeCollection(myCollection));
