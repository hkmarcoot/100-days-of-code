import {
  expect,
  it,
  describe,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import { createObjectFromKeyValuePairs } from "../index.js";

const cases = [
  {
    keyValuePairs: [
      ["escape", false],
      ["garbage", true],
      ["gloom", true],
    ],
    expected: { escape: false, garbage: true, gloom: true },
  },
  {
    keyValuePairs: [
      ["bottle", false],
      ["safari", false],
      ["company", false],
    ],
    expected: { bottle: false, safari: false, company: false },
  },
  {
    keyValuePairs: [
      ["harvest", true],
      ["notion", false],
      ["interest", true],
    ],
    expected: { harvest: true, notion: false, interest: true },
  },
  {
    keyValuePairs: [
      ["network", false],
      ["bottle", false],
      ["invasion", false],
    ],
    expected: { network: false, bottle: false, invasion: false },
  },
  {
    keyValuePairs: [
      ["cheek", false],
      ["notion", false],
      ["pen", false],
    ],
    expected: { cheek: false, notion: false, pen: false },
  },
  {
    keyValuePairs: [
      ["charter", false],
      ["harvest", true],
      ["aisle", true],
      ["aisle", false],
      ["command", false],
      ["mouth", true],
      ["review", true],
      ["inch", true],
      ["escape", true],
      ["invasion", true],
    ],
    expected: {
      charter: false,
      harvest: true,
      aisle: false,
      command: false,
      mouth: true,
      review: true,
      inch: true,
      escape: true,
      invasion: true,
    },
  },
  {
    keyValuePairs: [
      ["garbage", true],
      ["performer", true],
      ["resident", false],
      ["cheek", true],
      ["buy", false],
      ["company", false],
      ["harvest", false],
      ["visible", true],
      ["vacuum", true],
      ["charter", true],
    ],
    expected: {
      garbage: true,
      performer: true,
      resident: false,
      cheek: true,
      buy: false,
      company: false,
      harvest: false,
      visible: true,
      vacuum: true,
      charter: true,
    },
  },
  {
    keyValuePairs: [
      ["harvest", true],
      ["invasion", false],
      ["substitute", true],
      ["prescription", false],
      ["cheek", false],
      ["dismissal", false],
      ["review", false],
      ["anxiety", true],
      ["safari", true],
      ["substitute", false],
    ],
    expected: {
      harvest: true,
      invasion: false,
      substitute: false,
      prescription: false,
      cheek: false,
      dismissal: false,
      review: false,
      anxiety: true,
      safari: true,
    },
  },
  {
    keyValuePairs: [
      ["wife", true],
      ["aisle", true],
      ["buy", false],
      ["garbage", true],
      ["inch", true],
      ["anxiety", true],
      ["substitute", true],
      ["circulation", false],
      ["available", false],
      ["charter", true],
    ],
    expected: {
      wife: true,
      aisle: true,
      buy: false,
      garbage: true,
      inch: true,
      anxiety: true,
      substitute: true,
      circulation: false,
      available: false,
      charter: true,
    },
  },
  {
    keyValuePairs: [
      ["daughter", false],
      ["mouth", false],
      ["available", true],
      ["inch", true],
      ["circulation", false],
      ["aisle", true],
      ["muscle", true],
      ["inch", false],
      ["charter", true],
      ["daughter", true],
    ],
    expected: {
      daughter: true,
      mouth: false,
      available: true,
      inch: false,
      circulation: false,
      aisle: true,
      muscle: true,
      charter: true,
    },
  },
].map((test) => [test.keyValuePairs, test.expected]);

describe.each(cases)(
  "createObjectFromKeyValuePairs(%j)",
  (keyValuePairs, expected) => {
    let spy;
    let actual;

    beforeEach(() => {
      spy = jest.spyOn(Array.prototype, "reduce");
      actual = createObjectFromKeyValuePairs(keyValuePairs);
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
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should pass in an object to Array.prototype.reduce", () => {
      const [args] = spy.mock.calls;
      expect(args?.[1]).toStrictEqual(expect.objectContaining({})); // Can't be more explicit/strict than this since their implementation might mutate the initial value in-place.
    });

    it("should have Array.prototype.reduce return the expected value", () => {
      expect(spy).toHaveReturnedWith(expected);
    });
  }
);
