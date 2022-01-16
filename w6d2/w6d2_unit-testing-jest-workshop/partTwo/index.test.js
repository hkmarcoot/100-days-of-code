import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:

test('Given a number, the doubleAndAddOne function multiplies by 2 and returns the number with 1 added to it', () => {

  const num = 5
  const actual = doubleAndAddOne(num)
  const expected = 11

  expect(actual).toBe(expected);

})

test('Check if it is a long array that the length is greater than 10', () => {

  const actual = isLongArray(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]);
  const expected = true;

  expect(actual).toBe(expected);
})

test('Check if it is a long array that the length is greater than 10', () => {

  const actual = isLongArray(["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i", "j", "k"]);
  const expected = false;

  expect(actual).toBe(expected);
})

test('Check if it is a long array that the length is greater than 10', () => {

  const actual = isLongArray({
    id: 1,
    score: 10
  });
  const expected = false;

  expect(actual).toBe(expected);
})

test('return the new array with new item at the end', () => {

  const actual = addItemToArray(["apple", "orange"], "banana");
  const expected = ["apple", "orange", "banana"];

  expect(actual).toEqual(expected);
})

test('Given an object, key, and object, return the object with that key and value inserted', () => {
  const object = {
    id: 3,
    score: 10
  }
  const key = "name"
  const value = "Marco"
  const actual = addKeyValuePairToObject(object, key, value);

  const expected = {
    id: 3,
    score: 10,
    name: "Marco"
  }

  expect(actual).toEqual(expected);
})

test('Given an even number, throws an error', () => {

  const num = 4;
  const actual = () => throwErrorIfEven(num)

  expect(actual).toThrow(`Error, 1000000 is even!`);
})

test('Given an odd number, returns false', () => {
  const num = 5;
  expect(throwErrorIfEven(num)).toBe(false)
})