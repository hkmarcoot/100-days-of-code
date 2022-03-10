import sumOfIntegersInString from "./sumOfIntegersInString";

describe("Test Kata 2, Sum integers in string", () => {
  const provider = [
    { word: "12.4", sum: 16 },
    { word: "h3ll0w0rld", sum: 3 },
    { word: "2 + 3 = ", sum: 5 },
    {
      word: "Our company made approximately 1 million in gross revenue last quarter.",
      sum: 1,
    },
    { word: "The Great Depression lasted from 1929 to 1939.", sum: 3868 },
    { word: "Dogs are our best friends.", sum: 0 },
    { word: "C4t5 are 4m4z1ng.", sum: 18 },
    {
      word: "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
      sum: 3635,
    },
  ];

  provider.forEach(({ word, sum }) => {
    it(`Correctly sum integers present in ${word}`, () => {
      const actual = sumOfIntegersInString(word);

      expect(actual).toEqual(sum);
    });
  });
});
