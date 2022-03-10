import { sumEven } from '../Task2SumEven/sumEven.js'

const cases = [
  [0, 0], 
  [1, 0], 
  [2, 2], 
  [4, 6],
  [10, 30]
]

describe("sumEven", () => {
  test.each(cases)(
    "given %p it should return %p",
    (firstArg, expectedResult) => {
      const result = sumEven(firstArg)
      expect(result).toEqual(expectedResult)
    }
  )  
})
