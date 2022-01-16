import {
  scrabbleScore,
  wordScore
} from "./scrabble-score.js";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

describe("scrabble score", () => {

  const letterScores = [
    ["a", 1],
    ["b", 3],
    ["c", 3],
    ["d", 2],
    ["e", 1],
    ["f", 4],
    ["g", 2],
    ["h", 4],
    ["i", 1],
    ["j", 8],
    ["k", 5],
    ["l", 1],
    ["m", 3],
    ["n", 1],
    ["o", 1],
    ["p", 3],
    ["q", 10],
    ["r", 1],
    ["s", 1],
    ["t", 1],
    ["u", 1],
    ["v", 4],
    ["w", 4],
    ["x", 8],
    ["y", 4],
    ["z", 10]
  ];

  it.each(letterScores)("should score %s as %i", (letter, score) => {
    expect(scrabbleScore(letter)).toBe(score);
  });

});

describe("word score", () => {
  //Step 2
  it("should score 8 for the word 'hello'", () => {
    expect(wordScore("hello")).toBe(8);
  })

  it("should score 9 for the word 'world'", () => {
    expect(wordScore("world")).toBe(9);
  })


});

//step 3
describe("check outside of A-Z", () => {
  it('should throw an error if string contains any non-alphabetical character', () => {
    expect(() => wordScore("!a/sdasdw!/3")).toThrow();
  })


});

describe("check if using 7 tiles in a word", () => {
  it("should score 83 for the word 'edcfkxq'", () => {
    expect(wordScore("edcfkxq")).toBe(83);
  })
});

describe("check if uppercase letters can work", () => {
  it("should score 8 for the word 'HeLLo'", () => {
    expect(wordScore("HeLLo")).toBe(8);
  })
})

