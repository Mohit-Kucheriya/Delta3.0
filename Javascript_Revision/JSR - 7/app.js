// let student = {
//     name: "Mohit Kucheriya",
//     age: 23,
//     math: 65,
//     eng: 65,
//     phy: 45,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} average Score is : ${avg}`);
//     },
// };
// student.getAvg();

// function getThis() {
//     console.log(this);
// }
// getThis();

// // try & catch
// console.log("Hello");
// console.log("Mohit Kucheriya");
// try {
//     console.log(a);
// } catch (err) {
//     console.log("caught an error ");
//     console.log(err);
// }
// console.log("Hi");
// console.log("Namaste");

// // Arrow function
// const sum = (a, b) => {
//     console.log(a + b);
// };
// sum(23465, 32932);

// let calAvg = (a, b, c) => {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
// };
// calAvg(230, 25, 5);

// let calPow = (a, b) => {
//     let pow = a ** b;
//     console.log(pow);
// };
// calPow(12, 4);

// // Implicit Return in Arrow Function , in these we use () brackets & not to write return statement
// const calMul = (n, m) => n * m;
// calMul();

// // // Set TimeOut function
// // console.log("Hi");

// // setTimeout(() => {
// //     console.log("Apna College");
// //     console.log("Web Development : MERN Stack");
// // }, 4000);

// // console.log("Welcome to");

// // // Set Interval function
// // console.log("Hey!");

// //  let id = setInterval(() => {
// //     console.log("Mohit Kucheriya");
// // }, 2000)

// // clearInterval(id);

// // this with Arrow Function
// let infoStudent = {
//     name: "Mohit Kucheriya",
//     marks: 95,
//     prop: this, //global scope
//     getName: function () {
//         console.log(this);
//         console.log(this.name);
//     },
//     getMarks: () => {
//         console.log(this); //parent scope -> window
//         console.log(this.marks);
//     },

//     getInfo1: function () {
//         setTimeout(function () {
//             console.log(this); // global scope
//         }, 2000)
//     },

//     getInfo2: function () {
//         setTimeout(() => {
//             console.log(this); //parent scope i.e student object
//         }, 2000)
//     },
// };

// infoStudent.getName();
// infoStudent.getMarks();
// infoStudent.getInfo1();
// infoStudent.getInfo2();

// // Practice Question
// // Qs1.
// let calSquare = (n) => (n * n)
// calSquare(11);

// let id1 = setInterval(() => {
//     console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id1)
// }, 10000);

// Assignment question
// Qs1.
let arrAvg = (arr) => {
    let total = 0;
    for (let no of arr) {
        total = total + no;
    }
    return total / arr.length;
};
let arr = [2, 4, 6, 8, 10];
arrAvg(arr);

let isEven = (n) => {
    if (n % 2 == 0) {
        return "even";
    } else {
        return "not Even";
    }
};
constobject = {
    message: "Hello,World!",
    logMessage() {
        console.log(this.message);
    },
};
constobject.logMessage();
