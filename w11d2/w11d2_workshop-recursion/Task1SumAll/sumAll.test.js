import { sumAll } from '../Task1SumAll/sumAll.js'

const cases = [
  [0, 0], 
  [1, 1], 
  [2, 3], 
  [4, 10],
  [100, 5050]
]

describe("sumAll", () => {
  test.each(cases)(
    "given %p it should return %p",
    (firstArg, expectedResult) => {
      const result = sumAll(firstArg)
      expect(result).toEqual(expectedResult)
    }
  )  
})
