/* Solve the tasks below. Remember to use .reduce() in 
each function with its callback and its initial value. 
Only write your code inside the functions where the "Your 
code here" comments indicate.

Run the file with Node (node index.js in your terminal!) 
to check the console.logs for each task's result. (You 
  might have to get your calculator out to check your 
  answers! 🧠🔢)  
 */

/* 👉 1. Replicate the add function from the demonstration so 
that the variable sum is equal to the sum of the array. Use 
an initial value of zero after your reduce callback function. */

export function add(numbers) {
  //Your code here
  let sum = numbers.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum;
}

/* 👉 2. In addIfTwoDigits, use reduce to add up *only* the numbers 
that have exactly two digits. Return the sum.*/

export function addIfTwoDigits(numbers) {
  //Your code here
  const sumNum = numbers.reduce((acc, cur) => {
    if (cur > 9 && cur < 100) {
      return acc + cur;
    } else {
      return acc;
    }
  }, 0);
  return sumNum;
}

/* 👉 3. In addWithDoubleOdds, use reduce to double the odd numbers 
in the array and then add up the array. The returned value should be 
the sum of the whole array with the odd numbers doubled.*/

export function addWithDoubleOdds(numbers) {
  //Your code here
  const oddsDoubled = numbers.reduce((acc, cur) => {
    if (cur % 2 === 1) return acc + cur * 2;
    else return acc + cur;
  }, 0);

  return oddsDoubled;
}
/* 🌟 BONUS: 4. Reduce isn't just for numbers. In createObjectFromKeyValuePairs, 
take in an array of key-value pairs and use reduce to reduce them into a single object
that contains the key-value pairs encountered.

For example:
  createObjectFromKeyValuePairs([["a", 1], ["b", 2]]) should return { a: 1, b : 2 }
  createObjectFromKeyValuePairs([["football", true], ["badminton", true]]) should return { football: true, badminton: true }
  createObjectFromKeyValuePairs([["UK", 66], ["UK", 34]]) should return { UK: 34 } because the last key-value pair wins 

(Object.fromEntries does a similar job, but let's ignore that for now and use reduce instead.)
*/

export function createObjectFromKeyValuePairs(keyValuePairs) {
  //Your code here
  const newObj = keyValuePairs.reduce((acc, cur) => {
    return { ...acc, [cur[0]]: cur[1] };
  }, {});
  return newObj;
}

/* 🌟 BONUS: 5. In createTallyFromLetters, take in an array of letters and use reduce to 
reduce them into a single object containing the letters and their respective counts.

For example:
  createTallyFromLetters(["a", "a", "b", "c"]) should return { a: 2, b: 1, c: 1 }
  createTallyFromLetters(["z", "x", "d", "j"]) should return { z: 1, x: 1, d: 1, j: 1 }
  createTallyFromLetters(["c", "c", "c", "C"]) should return { c: 3, C: 1 }
*/
export function createTallyFromLetters(letters) {
  // Your code here
  let countedLetters = letters.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  return countedLetters;
}

/* 🌟 BONUS: 6. In getMinAndMax, take in an array of numbers
and use reduce to reduce them into an array containing both 
the smallest number and largest number (in that order).

For example:
  getMinAndMax([1, 7, 5, 6, 8]) should return [1, 8]
  getMinAndMax([-5, 43, 208]) should return [-5, 208]
  getMinAndMax([-4, 78]) should return [-4, 78]
  getMinAndMax([5, 3, 3, 1, 4, -6, 15, 78, 103, 32, 2, 11]) should return [-6, 103]
  getMinAndMax([1]) should return [1, 1]

The input array will always contain at least 1 number.

(Math.min and Math.max do a similar job, but let's ignore that for now and use reduce instead.)
*/
export function getMinAndMax(numbers) {
  // Your code here
  const minAndMax = numbers.reduce(
    (acc, cur) => {
      if (cur < acc[0]) {
        acc[0] = cur;
      }

      if (cur > acc[1]) {
        acc[1] = cur;
      }

      return acc;
    },
    [numbers[0], numbers[0]]
  );

  return minAndMax;
}
