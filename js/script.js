// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// break and continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         continue;
//     }
//     console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("Five");
//         break;
//     }
//     console.log(i)
// }

// function
function mySelf(){
    console.log("My name is John Doe");
}

// funtion with parameter
function mySelf(name){
    console.log("My name is", name);
}

mySelf("John Doe");
mySelf("Ben 10");
mySelf("Jane Doe");
mySelf("Jenny 10");
mySelf("Gifty Doe");


function add(x, y){
    let sum = x + y;
    console.log(sum);
}

add(5, 6);
add(6, 7);
add(7, 8);

function multiply(a, b){
    let product = a * b;
    console.log(product);
}

multiply(2, 5);
multiply(10, 5);
multiply(3, 5);
multiply(7, 5);

// function with return value
function add(x, y){
    let sum = x + y;
    return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// arrow function
let divide = (a,b) => a / b;
let prod = (a,b) => a * b;
console.log(divide(10,5));
console.log(prod(10,5));

// Higher Order Function
// Is a function that takes a function as parameter

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);

let doubles = numbers.map((number) => number + number);
console.log(doubles);

let evens = numbers.filter((number) => number % 2 === 0);
console.log(evens);

let odds = numbers.filter((number) => number % 2 !== 0);
console.log(odds);

let five = numbers.find((num) => num === 5);
console.log(five);

//Strings
let sentence ="The quick brown fox jumps over the lazy dog";
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.endsWith("o"));
console.log(sentence.includes("lazy"));
console.log(sentence.includes("hardworking"));
console.log(sentence.indexOf("q"));
console.log(sentence.indexOf("brown"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.repeat(2));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));
console.log(sentence.split(" "));
console.log(sentence.split(" "));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.trim());


let words ="The quick";
console.log(words.padStart(10));
console.log(words.padEnd(10));


