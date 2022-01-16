///////// No peeking! ////////


//#region Get Ingredients Solution

export function getIngredients(recipe) {
    let string = "";
    for (let i = 0; i < recipe.ingredients.length; i++) {
        string += recipe.ingredients[i].name + " ";
    }
    return string.trimEnd();
}

//#endregion

//#region Match Solution

export function matchArrays(arr1, arr2) {
    // Define empty array
    const arr3 = [];
    // Loop through first array
    for (let i = 0; i < arr1.length; i++) {
        //If item is not found in 2nd array, add it to arr3
        if (!arr2.includes(arr1[i])) {
            arr3.push(arr1[i])
        }
    }
    //Return the new array
    return arr3;
}

//#endregion

//#region Decode Solution

export function decoder(encodedString) {
    let alphabetASCLL = 0;
    let newArray = [];

    //For every alphabet in a word
    for (let i = 0; i < encodedString.length; i++) {
        //Convert the alphabet into ASCLL code, save it in alphabetASCLL
        alphabetASCLL = encodedString[i].charCodeAt(0);

        //Check if it is a symbol or space
        if (alphabetASCLL >= 31 && alphabetASCLL <= 64 ||
            alphabetASCLL >= 91 && alphabetASCLL <= 96 ||
            alphabetASCLL >= 123 && alphabetASCLL <= 127) {
            //Convert the ASCLL code back to alphabet, and push it into array
            newArray.push(String.fromCharCode(alphabetASCLL));

        } else {

            //Shifting each letter 2 letters up in alphabet 
            alphabetASCLL = alphabetASCLL - 2;
            //secret letter a, b  will become y, z 
            //(Never used in the given secret messages)
            if (alphabetASCLL < 97) {
                alphabetASCLL = alphabetASCLL + 26;
            }
            //Just in case it is shifting the letters down in alphabet 
            //(Never used in the given secret messages)
            if (alphabetASCLL > 122) {
                alphabetASCLL = alphabetASCLL - 26;
            }
            console.log(alphabetASCLL);

            //Convert the ASCLL code back to alphabet, and push it into array
            newArray.push(String.fromCharCode(alphabetASCLL));
        }
    }
    //Join the array into a string
    let text = newArray.join("");

    console.log(text);

    return text;
}

//#endregion