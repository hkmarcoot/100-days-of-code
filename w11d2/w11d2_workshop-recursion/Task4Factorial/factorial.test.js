import { factorial } from '../Task4Factorial/factorial.js'

const cases = [
  [0, 1], 
  [1, 1], 
  [2, 2], 
  [3, 6], 
  [4, 24], 
  [5, 120]
]

describe("factorial", () => {
  test.each(cases)(
    "given %p it should return %p",
    (firstArg, expectedResult) => {
      const result = factorial(firstArg)
      expect(result).toEqual(expectedResult)
    }
  )  
})
