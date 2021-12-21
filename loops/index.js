console.log("--- print hello 1 time");
console.log("hello");

// print hello 10 times
console.log("--- print hello 10 times");
for (let i=0; i<10; i+=1) {
    console.log("hello");
}

// print hello 10 times with index
console.log("--- print hello 10 times with index");
for (let i=0; i<10; i+=1) {
    console.log(`hello ${i}`);
}

// nested for loops
console.log("--- nested for loops");
for (let i=0; i<3; i+=1) {
    for (let j=0; j<3; j+=1) {
        console.log(`i ${i}, j: ${j}`);
    }
}