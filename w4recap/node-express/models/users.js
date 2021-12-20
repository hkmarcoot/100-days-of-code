import users from "../data/users.js";

// GET ALL USERS
export function getUsers() {
    return users;
}

// GET A USER BY ID
export function getUserByID(requestId) {
    const found = recipes.find(({ id }) => id === requestId);

    return found;
}

// CREATE A USER
export function createUser(newUser) {

    //-----------------Bonus part---------------------------//
    const newID = generateID();
    
    if (newUser.id === newID){
        console.log("The ID you are using is following the pattern.");
    } else{
        console.log("The ID is NOT following the pattern. We have changed it for you.")
        newUser.id = newID;
    }
    //------------------------------------------------------//

    users.push(newUser);

    return users[users.length - 1];
}

// UPDATE A USER BY ID
export function updateUserByID(id, updatedUser) {
    const foundIndex = users.findIndex(function (user){
        return user.id === id;
    });

    users[foundIndex] = updatedUser;

    return users[foundIndex];
}

// DELETE A USER BY ID
export function deleteUserByID(id) {
    const foundIndex = users.findIndex(function (user){
        return user.id === id;
    });

    const item = users[foundIndex];

    users.splice(foundIndex, 1);

    return item;
}

//BONUS:
//This function could be used when creating new users
//It would ensure that new IDs are valid and follow our pattern

function generateID() {
    //Look through the users list
    for ( let i = 0; i < users.length; i++){
        //Find the first ID number missing
        let idNumToBeChecked = i + 1;

        if (users[i].id != idNumToBeChecked ){
            //Return the missing ID number
            return idNumToBeChecked;
        } else {
            //console.log(`ID ${idNumToBeChecked} is correct.`);
        }
    }
    //If there is no ID number missing, 
    //the next number in the sequence will be: users.length + 1
    return users.length + 1;
}
