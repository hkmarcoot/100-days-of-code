import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { getMinAndMax } from "../index.js";

const cases = [
  { numbers: [3, 1], expected: [1, 3] },
  { numbers: [0, 4], expected: [0, 4] },
  { numbers: [2], expected: [2, 2] },
  { numbers: [8, 3], expected: [3, 8] },
  { numbers: [4], expected: [4, 4] },
  { numbers: [5, 9, -2], expected: [-2, 9] },
  { numbers: [15, -5, -5, 12, 14], expected: [-5, 15] },
  { numbers: [-1, -5, 20, -9, 1, 0], expected: [-9, 20] },
  { numbers: [2, 10, 5, 17, -1, 6, 16, -10], expected: [-10, 17] },
  { numbers: [-3, 2, -3, 19, -2, 17, 20, 20, -9], expected: [-9, 20] },
  {
    numbers: [-52, -77, 59, -175, 86, 205, 463, -446, -261, 76, -473, 403, 82],
    expected: [-473, 463],
  },
  {
    numbers: [
      -415, 176, -480, 115, -392, -492, 345, 59, -109, -390, 4, -78, -339, 20,
    ],
    expected: [-492, 345],
  },
  { numbers: [96, 466, 117, -16, 491, 488, -117], expected: [-117, 491] },
  {
    numbers: [-145, -440, 49, -202, -455, -138, 148, -410, 136, 309],
    expected: [-455, 309],
  },
  {
    numbers: [
      300, 480, 72, -56, 459, -480, -396, 472, -47, 154, 345, -432, -286, -346,
    ],
    expected: [-480, 480],
  },
];

describe.each(cases)("getMinAndMax($numbers)", ({ numbers, expected }) => {
  let spy;
  let actual;

  beforeEach(() => {
    spy = jest.spyOn(Array.prototype, "reduce");
    actual = getMinAndMax(numbers);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it(`should return ${JSON.stringify(expected)}`, () => {
    expect(actual).toStrictEqual(expected);
  });

  // Normally we shouldn't test implementation details, but probably want to make sure
  // the implementation at least uses Array.prototype.reduce (and not, say, a for loop which is valid
  // but defeats the point of the exercise).
  it("should use Array.prototype.reduce", () => {
    expect(spy).toHaveBeenCalled();
  });
});
