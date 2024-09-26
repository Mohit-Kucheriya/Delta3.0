// this keyword
let student = {
    name: "Mohit Kucheriya",
    age: 23,
    eng: 95,
    phy: 65,
    math: 68,
    getAvg() {
        let avg = (this.eng + this.phy + this.math) / 3;
        console.log(avg);
    }
};

// try & catch
console.log("Hello World");
console.log("welcome to coding game!");
try {
    console.log(a);
}
catch {
    console.log("This is an Error");
}
console.log("Web development 3.0");

// Arrow function
let calAdd = (a, b) => {
    console.log("Addition of two numbers :", a + b);

};
calAdd(23255, 356245);

let calCube = (n) => {
    let cube = n * n * n;
    console.log(`Cube of given number ${n} is : ${cube}`);
    return cube;

};
calCube(9);

// Implicit return in Arrow Function in these we use ()brackets.
const calMul = (a, b) => (
    a * b
);
calMul(23, 56);

// Set Timeout function
console.log("Hi there!");
setTimeout(() => {
    console.log("Apna College");
    console.log("MERN Stack : Web development");

}, 4000);
console.log("Welcome to Coding World");

// Set Interval function
console.log("Namaste");
let id = setInterval(() => {
    console.log("JavaScript : Set Interval function");
}, 3000);

// Practice Question : 1
const calSquare = (n) => {
    let square = n * n;
    console.log(square);
    return square;
}
calSquare(65);

const squ = (m) => (
    m * m
);
squ(12);

// Practice Question : 2
let idx = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(idx);
}, 10000);

// Assignment Question
// Qs1.
const arrAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total = total + number;
    }
    let avg = total / arr.length;
    console.log(`Average : ${avg}`);
    return avg;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrAverage(arr);

// Qs2.
const isEven = (n) => {
    if (n % 2 == 0) {
        console.log("Even number");
        return n;
    }
    else {
        console.log("Not even ");
        return n;
    }

};
isEven(15);