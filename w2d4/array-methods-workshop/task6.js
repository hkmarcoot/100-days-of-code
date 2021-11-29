const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

//6a
//they are in ASCENDING order
broomCupboard.sort(function(a,b){return a - b});

//6b
//they are in DESCENDING order of their shelves
function compare (a, b) {
  if (a.shelf > b.shelf) {
    return -1;
  }
  if (a.shelf < b.shelf) {
    return 1;
  }
  return 0;
}

potions.sort(compare);

//6c
//Sort the names in the array 
//in alphebetical order according to their last name.

let fullNameList = [];

function createObjectInArray (names) {
  for(let i = 0; i < names.length; i++){
        let lastName = names[i].split(" ")[1];
        let firstName = names[i].split(" ")[0];
        fullNameList.push({First_Name: `${firstName}`, Last_Name: `${lastName}`});
  }
}

function compareName(a, b){
  if (a.Last_Name < b.Last_Name) {
    return -1;
  }
  if (a.Last_Name > b.Last_Name) {
    return 1;
  }
  return 0;
}

function getFullName(item) {
  return [item.First_Name, item.Last_Name].join(" ");
}

createObjectInArray(students);
fullNameList.sort(compareName);
fullNameList = fullNameList.map(getFullName);

console.log(fullNameList);

//students.sort(sortLastName);


