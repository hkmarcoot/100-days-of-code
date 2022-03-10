import { fibonacci } from '../Task5Fibonacci/fibonacci'

const cases = [
  [0, 1], 
  [1, 1], 
  [2, 2], 
  [3, 3], 
  [4, 5],
  [5, 8],
  [6, 13]
]

describe("fibonacci", () => {
  test.each(cases)(
    "given %p it should return %p",
    (firstArg, expectedResult) => {
      const result = fibonacci(firstArg)
      expect(result).toEqual(expectedResult)
    }
  )  
})
