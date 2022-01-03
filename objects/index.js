console.log("-- print hello 1 time");
console.log("hello");

// create an empty object
console.log("--create an empty object");
let myObject = {};
console.dir(myObject);

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
age = myObject[myKey];
console.log(age);

// get all keys from an object
console.log("get all keys from an object");
var allKeys = Object.keys(myObject);
console.dir(allKeys);

// get all values from an object
console.log("get all values from an object");
var allValues = Object.values(myObject);
console.dir(allValues);

// iterate over an object
console.log("iterate over an object");
allKeys = Object.keys(myObject);
for (var i=0; i < allKeys.length; i++) {
    var key = allKeys[i];
    var value = myObject[key];
    console.log(`key: ${key}, value: ${value}`);
}

// check whether a key exists within an object
console.log("check whether a key exists within an object");
if ("age" in myObject) {
    console.log("found age");
} else {
    console.log("did not find age");
}

if ("foo" in myObject) {
    console.log("found foo");
} else {
    console.log("did not find foo");
}
