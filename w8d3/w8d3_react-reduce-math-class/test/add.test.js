import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { add } from "../index.js";

const cases = [
  { numbers: [0, 2, 2, 4], expected: 8 },
  { numbers: [3, 4, 8, 9, 10], expected: 34 },
  { numbers: [1, 6, 8, 10], expected: 25 },
  { numbers: [0, 2, 2], expected: 4 },
  { numbers: [2, 6], expected: 8 },
  { numbers: [1, 10], expected: 11 },
  { numbers: [5, 7, 8], expected: 20 },
  { numbers: [1, 1, 2, 4, 6], expected: 14 },
  { numbers: [4, 5, 7], expected: 16 },
  { numbers: [7], expected: 7 },
  { numbers: [74, 76, 87, 88, 95], expected: 420 },
  { numbers: [21], expected: 21 },
  { numbers: [16, 18, 58, 81, 89, 99, 99], expected: 460 },
  { numbers: [8, 50, 52, 57, 72, 81, 87, 92], expected: 499 },
  { numbers: [40, 98], expected: 138 },
  { numbers: [95], expected: 95 },
  { numbers: [38], expected: 38 },
  { numbers: [17, 23, 27, 35, 68, 78, 86, 94], expected: 428 },
  { numbers: [7, 27, 59, 67, 77, 91], expected: 328 },
  { numbers: [3, 5, 14, 18, 59, 59, 92, 94], expected: 344 },
  { numbers: [211, 257, 366, 820, 877], expected: 2531 },
  {
    numbers: [
      12, 89, 102, 148, 178, 226, 233, 273, 277, 369, 425, 464, 473, 486, 493,
      585, 652, 676, 685, 698, 753, 806, 835, 948,
    ],
    expected: 10886,
  },
  {
    numbers: [
      2, 11, 19, 39, 41, 86, 86, 92, 128, 165, 179, 185, 189, 213, 240, 251,
      257, 258, 264, 265, 271, 309, 368, 398, 454, 496, 510, 523, 526, 537, 600,
      638, 677, 693, 694, 701, 752, 754, 758, 788, 800, 807, 815, 845, 857, 895,
      925, 952, 972, 983,
    ],
    expected: 23268,
  },
  {
    numbers: [36, 131, 265, 359, 698, 793, 877, 891, 939, 961],
    expected: 5950,
  },
  {
    numbers: [
      14, 22, 41, 42, 56, 56, 65, 79, 92, 93, 111, 185, 193, 223, 257, 263, 293,
      359, 364, 373, 375, 420, 426, 435, 507, 522, 564, 594, 646, 668, 717, 729,
      745, 797, 806, 917, 925, 965, 979, 993,
    ],
    expected: 16911,
  },
];

describe.each(cases)("add($numbers)", ({ numbers, expected }) => {
  let spy;
  let actual;

  beforeEach(() => {
    spy = jest.spyOn(Array.prototype, "reduce");
    actual = add(numbers);
  });

  afterEach(() => {
    spy.mockRestore();
  });

  it(`should return ${expected}`, () => {
    expect(actual).toBe(expected);
  });

  // Normally we shouldn't test implementation details, but probably want to make sure
  // the implementation at least uses Array.prototype.reduce (and not, say, a for loop which is valid
  // but defeats the point of the exercise).
  it("should use Array.prototype.reduce", () => {
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("should pass in an initial value of 0 to Array.prototype.reduce", () => {
    const [args] = spy.mock.calls;
    expect(args?.[1]).toBe(0);
  });

  it("should have Array.prototype.reduce return the expected total", () => {
    expect(spy).toHaveReturnedWith(expected);
  });
});
