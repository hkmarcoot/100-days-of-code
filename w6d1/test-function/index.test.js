import {sum} from "./index.js";

function test(title, cb) {
    try{
        //Run some code...
        cb();
        console.log(`✅  ${title}`);
    } catch (err) {
        console.log(`❌  ${title}`, err);
    }
}

test("1 + 2 should equal 3", function () {
    const actual = sum(2, 1);
    const expected = 3;

    expect(actual).toBe(expected);
});

test("150 + 200 should equal 350", function () {
    const actual = sum(150, 200);
    const expected = 350;

    expect(actual).toBe(expected);
});

function expect(actual) {
    return {
        toBe: function (expected) {
            if (actual !== expected){
                throw new error (`${actual} was not equal to  ${expected}`);
            }
        },
        greaterThan: function (expected) {
            if (actual <= expected){
                throw new Error(`${actual} was not greater than ${expected}`);
            }
        }
    }
}


// const actual = sum(2, 1);
// const expected = 4;

// // if (sum (1, 2) === 3){
// //     console.log("All good");
// // } else {
// //     console.log("broken");
// // }

// if (actual !== expected){
//     throw new error (`${actual} was not equal to  ${expected}`);
// }