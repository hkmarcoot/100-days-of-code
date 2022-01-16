import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { addIfTwoDigits } from "../index.js";

const cases = [
  { numbers: [7, 11, 11, 16, 16], expected: 54 },
  { numbers: [9, 16, 18], expected: 34 },
  { numbers: [1, 16], expected: 16 },
  { numbers: [6, 14], expected: 14 },
  { numbers: [0, 1, 9, 12, 14], expected: 26 },
  { numbers: [10, 20, 27, 72, 84, 85], expected: 298 },
  { numbers: [12, 36, 93], expected: 141 },
  { numbers: [14, 21, 28, 82], expected: 145 },
  { numbers: [8, 32, 68], expected: 100 },
  { numbers: [8, 12, 94], expected: 106 },
  { numbers: [19, 62, 62, 64, 71, 75], expected: 353 },
  { numbers: [], expected: 0 },
  { numbers: [12, 58], expected: 70 },
  { numbers: [9], expected: 0 },
  { numbers: [5, 14, 29, 30, 50, 92], expected: 215 },
  { numbers: [31, 40, 83, 85, 91], expected: 330 },
  { numbers: [2, 9, 32, 45, 79, 84], expected: 240 },
  { numbers: [2, 13, 14, 22, 25, 47, 65, 80, 95], expected: 361 },
  { numbers: [0, 31, 40, 48, 79, 82, 93], expected: 373 },
  { numbers: [4, 34, 37, 70, 76, 93], expected: 310 },
  {
    numbers: [
      12, 83, 120, 128, 142, 157, 161, 163, 234, 302, 347, 369, 382, 403, 416,
      423, 432, 512, 523, 525, 558, 579, 603, 648, 672, 683, 685, 699, 700, 708,
      717, 776, 789, 793, 803, 814, 834, 835, 837, 909, 926, 963, 979,
    ],
    expected: 95,
  },
  {
    numbers: [
      10, 20, 43, 55, 134, 136, 261, 278, 378, 383, 385, 392, 430, 431, 478,
      500, 505, 526, 531, 558, 563, 588, 599, 615, 620, 639, 642, 644, 664, 729,
      771, 777, 849, 869, 929, 935, 952, 977, 998,
    ],
    expected: 128,
  },
  {
    numbers: [
      60, 108, 110, 146, 166, 195, 246, 266, 305, 362, 373, 375, 384, 471, 585,
      642, 647, 714, 735, 736, 737, 747, 753, 766, 787, 858, 865, 888, 977, 983,
      984,
    ],
    expected: 60,
  },
  {
    numbers: [
      8, 126, 214, 251, 336, 361, 374, 427, 434, 454, 469, 473, 537, 569, 610,
      628, 639, 654, 656, 658, 698, 710, 783, 817, 826, 849, 884, 938, 940, 947,
      985,
    ],
    expected: 0,
  },
  { numbers: [326, 831], expected: 0 },
];

describe.each(cases)("addIfTwoDigits($numbers)", ({ numbers, expected }) => {
  let spy;
  let actual;

  beforeEach(() => {
    spy = jest.spyOn(Array.prototype, "reduce");
    actual = addIfTwoDigits(numbers);
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
