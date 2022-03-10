import wave from "./mexicanWave.js";

describe("Test Kata 1, Mexican Wave", () => {
  const provider = [
    {
      word: "hello",
      expected: ["Hello", "hEllo", "heLlo", "helLo", "hellO"],
    },
    {
      word: "codewars",
      expected: [
        "Codewars",
        "cOdewars",
        "coDewars",
        "codEwars",
        "codeWars",
        "codewArs",
        "codewaRs",
        "codewarS",
      ],
    },
    {
      word: "two words",
      expected: [
        "Two words",
        "tWo words",
        "twO words",
        "two Words",
        "two wOrds",
        "two woRds",
        "two worDs",
        "two wordS",
      ],
    },
  ];

  provider.forEach(({ word, expected }) => {
    it(`Correctly processes ${word}`, () => {
      const actual = wave(word);

      expect(actual).toEqual(expected);
    });
  });
});
