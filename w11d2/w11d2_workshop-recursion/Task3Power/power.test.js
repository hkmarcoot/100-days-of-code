import { power } from '../Task3Power/power.js'

const cases = [
  [2, 0, 1],
  [2, 2, 4],
  [2, 3, 8],
  [2, 4, 16]
]

describe("power", () => {
  test.each(cases)(
    "given %p as base and %p as exponent it should return %p",
    (firstArg, secondArg, expectedResult) => {
      const result = power(firstArg, secondArg)
      expect(result).toEqual(expectedResult)
    }
  )  
})
