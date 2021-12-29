console.log("-- print hello 1 time");
console.log("hello");

// create an empty object
console.log("--create an empty object");
let myObject = {};
let myString = JSON.stringify(myObject);
console.log(myString);

// create a non-empty object
console.log("--create a non-empty object");
myObject = {
    age: 1,
    name: "Luna",
}
myString = JSON.stringify(myObject);
console.log(myString);

// get a value given a literal key using square bracket notation
console.log("--get a value given a literal key using square bracket notation");
age = myObject["age"];
console.log(age);


// get a value given a literal key using dot notation
console.log("--get a value given a literal key using dot notation");
age = myObject.age;
console.log(age);

// get a value given a variable that contains a key
console.log("--get a value given a variable that contains a key");
myKey = "age";
age = myObject.myKey;
console.log(age);