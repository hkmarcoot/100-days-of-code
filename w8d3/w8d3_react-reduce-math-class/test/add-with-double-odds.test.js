import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { addWithDoubleOdds } from "../index.js";

const cases = [
  { numbers: [2, 10, 10], expected: 22 },
  { numbers: [3], expected: 6 },
  { numbers: [1], expected: 2 },
  { numbers: [0, 2, 16, 18], expected: 36 },
  { numbers: [4, 11], expected: 26 },
  { numbers: [20, 24, 41, 87, 88, 97, 97], expected: 776 },
  { numbers: [7, 43, 69], expected: 238 },
  { numbers: [21, 55, 62, 64, 81, 90, 97], expected: 724 },
  { numbers: [62, 69], expected: 200 },
  { numbers: [22, 70, 75, 77, 87, 96], expected: 666 },
  { numbers: [2, 6, 7, 20, 47, 48, 84, 86, 94], expected: 448 },
  { numbers: [11, 14, 36, 39, 53, 55, 78, 94], expected: 538 },
  { numbers: [12, 55, 70, 85, 85, 85], expected: 702 },
  { numbers: [22, 34, 38, 92], expected: 186 },
  { numbers: [6, 26, 50, 52, 58, 68, 68], expected: 328 },
  { numbers: [12, 37, 59, 62, 87], expected: 440 },
  { numbers: [8, 27, 37, 41, 57, 79, 80, 88], expected: 658 },
  { numbers: [17, 20, 34, 35, 58, 58, 65, 66], expected: 470 },
  { numbers: [4, 27, 78, 82], expected: 218 },
  { numbers: [49, 56, 73], expected: 300 },
  { numbers: [136, 187, 211, 220, 467, 849, 895], expected: 5574 },
  {
    numbers: [
      48, 95, 208, 214, 228, 245, 245, 250, 313, 316, 317, 324, 329, 342, 356,
      367, 372, 377, 394, 411, 429, 457, 468, 480, 556, 564, 567, 601, 688, 693,
      756, 782, 807, 889, 901, 916, 922, 954, 973,
    ],
    expected: 28170,
  },
  {
    numbers: [
      1, 18, 26, 94, 217, 230, 352, 373, 382, 387, 406, 430, 461, 466, 503, 510,
      525, 530, 570, 574, 600, 618, 643, 647, 722, 752, 774, 800, 814, 817, 829,
      862, 872, 903, 970, 970,
    ],
    expected: 25954,
  },
  {
    numbers: [
      26, 201, 208, 248, 324, 364, 367, 432, 462, 463, 606, 613, 668, 713, 716,
      725, 750, 751, 832, 854, 866, 898, 955, 957,
    ],
    expected: 19744,
  },
  {
    numbers: [
      5, 41, 45, 63, 141, 151, 175, 203, 254, 263, 265, 289, 301, 354, 367, 383,
      384, 389, 391, 416, 423, 443, 511, 513, 521, 530, 584, 662, 669, 695, 700,
      728, 747, 754, 759, 759, 789, 818, 824, 909, 912, 917, 952,
    ],
    expected: 33126,
  },
];

describe.each(cases)("addWithDoubleOdds($numbers)", ({ numbers, expected }) => {
  let spy;
  let actual;

  beforeEach(() => {
    spy = jest.spyOn(Array.prototype, "reduce");
    actual = addWithDoubleOdds(numbers);
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
