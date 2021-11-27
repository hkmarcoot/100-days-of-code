let nestedObjects = {
    name: "Marco",
    age: 30,
    color: "yellow",
    pets: {
        name: "Lucky",
        color: "brown",
    }
}

let myNewName = "Ken";
let myNewAge = 28;

nestedObjects.name = myNewName;
nestedObjects.age = myNewAge;

console.log(nestedObjects);

