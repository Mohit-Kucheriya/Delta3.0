// // Function in JS
// function helloWorld() {
//     console.log("Welcome to coding World!");
// }

// helloWorld();

// // function printTables() {
// //     let m = prompt("Enter the Number to print the table");
// //     for (let i = m; i <= m; i++) {
// //         for (let j = 1; j <= 10; j++) {
// //             console.log(`${i} X ${j} = ${i * j}`);
// //         }
// //     }
// // }

// // printTables();

// // Pratice Question : 1
// function printPoem() {
//     console.log("Baa, baa black sheep");
//     console.log("Have you any wool");
//     console.log("Yes sir, yes sir");
//     console.log("Three bags full");
//     console.log("One for my master");
//     console.log("And one for my dame");
//     console.log("And one for the little boy");
//     console.log("Who lives down the lane.");
// }

// printPoem();

// // Pratice Question : 2
// function rollDice() {
//     let dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);
// }
// rollDice();

// // Function with arguments
// function printName(name) {
//     console.log(`Hi ${name}`);
// }

// printName("Mohit");

// function sum(a, b) {
//     console.log(`Sum of ${a} & ${b} : ${a + b}`);
// }
// sum(102151, 56584);

// // Practice Question : 3
// function calAvg(a, b, c) {
//     avg = (a + b + c) / 3;
//     console.log(`Average of three numbers i.e ${a}, ${b}, ${c} : ${avg}`);
// }
// calAvg(20, 35, 45);

// // Practice Question : 4
// function table(n) {
//     console.log(`Table of ${n} is as follows :`);
//     for (let i = n; i <= n * 10; i = i + n) {
//         console.log(i);
//     }
// }
// table(5);
// console.log("-*-*-*-*-*-*-*-*-*-*-*-*-");

// // return
// function total(a, b) {
//     return a + b;
// }
// console.log(total(23, 54));

// function sumTotal(x, y) {
//     console.log("Hello World");
//     console.log("Welcome to Coding World!");
//     return x + y;
//     console.log("Getting started to JS"); //This line will never get execute because after return statement flow of function is stop.
// }

// function isAdult(age) {
//     if (age >= 18) {
//         return "Adult";
//     } else {
//         return "Not Adult";
//     }
//     console.log(`BYE BYE`);
// }

// // Practice Question : 5
// function sum1ton(n) {
//     let z = 0;
//     for (let i = 1; i <= n; i++) {
//         z = i + z;
//     }
//     return z;
// }
// console.log(sum1ton(5));

// // Practice Question : 6
// let str = ["Welcome", " ", "to", " ", "apnacollege"];
// function concat(str) {
//     let results = "";
//     for (let i = 0; i < str.length; i++) {
//         results = results + str[i];
//     }
//     return results;
// }

// // Function scope
// function calSum(a, b) {
//     let add = a + b;
//     console.log(add); //function scope
// }

// calSum(8, 6);
// // console.log(add); // Error, add is not defined.

// // Block scope{}
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // console.log(i); //Error, i is not defined.

// // Practice Question : 7
// let greet = "hello"; //Global scope

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet); //function scope
//     function innerGreet() {
//         console.log(greet); //lexical scope
//     }
// }
// console.log(greet);
// changeGreet();

// // Function Expression
// let sub = function (a, b) {
//     return a - b;
// };
// console.log(sub(5, 4));

// let hello = function () {
//     console.log("Welcome to Coding World");
// };
// hello();

// hello = function () {
//     console.log("Welcome to delta batch 3.0");
// };
// hello();

// // High order function
// function multipleGret(fun, count) {
//     for (let i = 1; i <= count; i++) {
//         fun();
//     }
// }

// let gret = function () {
//     console.log(`Hello World`);
// };
// multipleGret(gret, 10);

// // High order function(return)
// let req = "odd";
// function oddOrEven(req) {
//     if (req == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//         }
//         return odd;
//     } else if (req == "even") {
//         let even = function (n) {
//             console.log(n % 2 == 0);
//         }
//         return even;
//     }
//     else {
//         console.log("Wrong request");
//     }
// }

// let func = oddOrEven(req);
// func(3);

// // Method
// let calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     },
//     div: function (a, b) {
//         return a / b;
//     },
//     pow: function (a, b) {
//         return a ** b;
//     },
// };

// Assignment Question
// Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [1, 2, 5, 3, 8, 4, 70, 24, 6];
let num = 5;
function getElement(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
getElement(arr, num);

// Qs2.Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans =“abcdefgh”.
let str = "abcdabcdefgggh"
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currStr = str[i];
        if (ans.indexOf(currStr) == -1) {
            ans = ans + currStr;
        }

    }
    console.log(ans);
    return ans;

}
getUnique(str);

// Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example: country=["Australia","Germany","United States of America"]
// output:"United States of America

let country = ["Australia", "Germany", "United States of America"];
function longestCountry(country) {
    let idx = 0;
    for (let i = 0; i < country.length; i++) {
        let currCountry = country[idx].length;
        let finalCountry = country[i].length;
        if (finalCountry > currCountry) {
            idx = i;
        }
    }
    console.log(country[idx]);
    return country[idx];
}
longestCountry(country);

// Q4. Write a JavaScript function to count the number of vowels in a String argument.
let vow = "aeroplane";
function countVowel(vow) {
    let count = 0;
    for (let i = 0; i < vow.length; i++) {
        if (vow.charAt(i) == 'a' ||
            vow.charAt(i) == 'e' ||
            vow.charAt(i) == 'i' ||
            vow.charAt(i) == 'o' ||
            vow.charAt(i) == 'u') {
            count++;
        }
    }
    console.log(`Total vowels in ${vow} are : ${count}`);
    return count;
}
countVowel(vow);

// Q5. Write a JavaScript function to generate a random number within a range (start,end).




