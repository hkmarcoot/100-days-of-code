import {
    decoder,
    getIngredients,
    matchArrays
} from "./main.js";

//👉 Write your tests below here:


//#region Get Ingredients Tests...

describe('Get Ingredients', () => {

    const recipe = {
        ingredients: [{
                name: "bacon",
                quantity: 3
            },
            {
                name: "eggs",
                quantity: 1
            },
            {
                name: "bread",
                quantity: 2
            },
        ],

        instructions: [
            "1. Cook bacon in frying pan",
            "2. fry eggs in oil",
            "3.put bread in toaster",
        ],
    };

    test("When given a recipe, function should return a string with only ingredients from the recipe", () => {
        //arrange

        const expected = "bacon eggs bread";

        //act
        const actual = getIngredients(recipe);
        //assert
        expect(actual).toBe(expected);
    });

})

//#endregion

//#region Match Array Tests...


describe('Match Arrays', () => {

    it('Should return an array if given an empty array', () => {
        expect(matchArrays([])).toEqual([]);
    })

    it('Should return [4] when given [1,2,3,4],[1,2,3]', () => {
        expect(matchArrays([1, 2, 3, 4], [1, 2, 3])).toEqual([4]);
    })

    it('Should return ["apples", "bananas", "grapes"] when given ["apples", "bananas", "grapes"], ["kiwi", "pears"]', () => {
        expect(matchArrays(["apples", "bananas", "grapes"], ["kiwi", "pears"])).toEqual(["apples", "bananas", "grapes"])
    })

    it('Should return ["Five", 8] when given [1, "Five", 2, 8], [1,2,3,4,5,6]', () => {
        expect(matchArrays([1, "Five", 2, 8], [1, 2, 3, 4, 5, 6])).toEqual(["Five", 8])
    })

})

//#endregion

//#region Decode Tests...

describe('Decode', () => {

    test("See if you can decode the secret message", () => {
        const actual = {
            success: true,
            payload: decoder("k co pqy kp nc, eqog cpf hkpf og.")
        }

        const expected = {
            success: true,
            payload: "i am now in la, come and find me."
        }

        expect(actual).toStrictEqual(expected);
    })

    test("See if you can decode the secret message 2", () => {
        const actual = {
            success: true,
            payload: decoder("k jkfg c dqz qh iqnf eqkp wpfgt vjg crrng vtgg.")
        }

        const expected = {
            success: true,
            payload: "i hide a box of gold coin under the apple tree."
        }

        expect(actual).toStrictEqual(expected);
    })

})

//#endregion