// // forEach
// let arr1 = [1, 2, 3, 4, 5];
// let print1 = function (el1) {
//     console.log(el1);
// };
// arr1.forEach(print1);

// let arr2 = [1, 2, 3, 4, 5];
// let print2 = (el2) => {
//     console.log(el2);
// };
// arr2.forEach(print2);

// let arr3 = [
//     {
//         name: "Mohit Kucheriya",
//         age: 23,
//         city: "Jalgaon",
//     },
//     {
//         name: "Tony Stark",
//         age: 45,
//         city: "USA",
//     },
//     {
//         name: "Peter Parker",
//         age: 33,
//         city: "Australia",
//     },
// ];

// let print3 = (el3) => {
//     console.log(el3);
//     console.log(el3.name);
//     console.log(el3.age);
// };
// arr3.forEach(print3);

// // map & filter
// let num1 = [6, 7, 8, 9, 10];
// let double = num1.map((n1) => {
//     return n1 * 2;
// });
// console.log(num1);
// console.log(double);

// let marvel = [
//     {
//         name: "Batman",
//         score: 94,
//     },
//     {
//         name: "Superman",
//         score: 54,
//     },
//     {
//         name: "Spiderman",
//         score: 95,
//     },
// ];

// let hero = marvel.map((he) => {
//     return he.score / 10;
// });
// console.log(marvel);
// console.log(hero);

// let num2 = [1, 2, 3, 4, 21, 12, 54, 6, 7, 8, 10, 98];
// let result = num2.filter((even) => {
//     return even % 2 == 0;
// });
// console.log(result);

// let num3 = [1, 2, 3, 4, 21, 12, 54, 6, 7, 8, 10, 98];
// let result1 = num3.filter((odd) => {
//     return odd % 2 != 0;
// });
// console.log(result1);

// // every & some
// let num4 = [1, 2, 3, 4, 5, 6, 7, 9, 10];
// let result2 = num4.every((n4) => {
//     return n4 % 2 == 0;
// });
// console.log(result2);

// let num5 = [1, 2, 3, 4, 5, 6, 7, 9, 10];
// let result3 = num5.some((n5) => {
//     return n5 % 2 == 0;
// });
// console.log(result3);

// // reduce
// let add = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newAdd = add.reduce((sum, el) => {
//     console.log(sum);
//     return sum + el;
// });
// console.log(newAdd);

// let max = [12, 13, 15, 23, 45, 1, 68, 10, 100];
// let newMax = max.reduce((maxii, nu) => {
//     if (maxii > nu) {
//         return maxii;
//     } else {
//         return nu;
//     }
// });
// console.log("Maximum number in given array", max, "is", newMax);

// console.log(
//     "........................................................................................"
// );
// console.log("PRACTICE QUESTION");
// // Practice Question
// // Qs1.
// let mul = [10, 20, 30];
// let newMul = mul.every((m1) => m1 % 10 == 0);
// console.log(newMul);

// // Qs2.
// let min = [12, 13, 15, 23, 45, 1, 68, 10, 100];
// let newMin = min.reduce((mini, nub) => {
//     if (mini < nub) {
//         return mini;
//     } else {
//         return nub;
//     }
// });
// console.log("Minimum number in given array", min, "is", newMin);
// console.log(
//     "........................................................................................"
// );

// // default parameter
// function sum(a, b = 2) {
//     console.log(`Sum of two number : ${a + b}`);
//     return a + b;
// }
// sum(23, 235);

// // spread
// let arr4 = [1, 2, 3, 4, 5, 6, 7, 9, 2, 3, 16, 5, 3, 1, 55, 0];
// let result4 = Math.min(...arr4);
// console.log(result4);

// let name = "MohitKucheriya";
// console.log(...name);

// // Spread(Array Literal)
// let arr5 = [1, 2, 3, 4, 5];
// let newArr5 = [...arr5];
// console.log(newArr5);

// let q1 = [1, 2, 3, 4, 5];
// let q2 = [2, 4, 6, 8, 10];

// let newQ = [...q1, ...q2];
// console.log(newQ);

// // Spread(Object Literal)
// let data = {
//     name: "Tony Stark",
//     movie: "Ironman",
// };

// let newData = { ...data, id: 123, country: "United States Of America" };
// console.log(newData);

// let arr6 = [2, 4, 6, 8, 10];
// let newArr6 = { ...arr6 };
// console.log(newArr6);

// let str = "Mohit Kucheriya";
// let newStr = { ...str };
// console.log(newStr);

// // rest
// function sum(...args) {
//     for (let i = 0; i < args.length; i++) {
//         console.log("You gave us", args[i]);
//     }
// }
// sum(1, 2, 3, 4, 5, 6, 7, 9, 10);

// function calAdd(...args) {
//     return args.reduce((ans, res) => ans + res);
// }
// console.log(calAdd(10, 20, -10 - 200, 51504020));

// function calMinimum(msg, ...min) {
//     console.log(msg);
//     return min.reduce((mini, el) => {
//         if (mini > el) {
//             return el;
//         }
//         else {
//             return mini;
//         }
//     });
// };
// console.log(calMinimum("Mohit", 10, 205, 6, 5, 2, 3, 1, 2, 10, 0));

// // destructing(array)
// let anime = ["superman", "batman", "spiderman", "wonder woman", "hulk"];
// let [winner, runnerup, ...other] = anime;
// console.log(winner);
// console.log(runnerup);
// console.log(other);

// // destructing(object)
// let student1 = {
//     names: "Mohit Kucheriya",
//     age: 23,
//     city: "Jalgaon",
//     subject: ["eng", "phy", "math", "sci"],
//     marks: 84,
// };
// let { names, city } = student1;
// console.log(names);
// console.log(city);


// Assignment Question
// Qs1.
let n10 = [2, 4, 6, 8, 10];
let square = n10.map((el) => {
    return el * el;
});
console.log(square);

let add = square.reduce((ans, resu) => {
    return ans + resu;
});
console.log(add);

let avg = (el1) => {
    return add / n10.length;
};
console.log(avg());

// Qs2.
let eqaul = [1, 2, 3, 4, 5];
let newEqual = eqaul.map((el2) => {
    return el2 + 5;
});
console.log(eqaul);
console.log(newEqual);

let nameArr = ["mohit", "ruchita", "dia"];
let newNameArr = nameArr.map((el3) => {
    return el3.toUpperCase();
});
console.log(nameArr);
console.log(newNameArr);

// Qs4.


let doubleAndReturn = (arr, ...args) => [
    arr, ...args.map((el10) => el10 * 2),
];
console.log(doubleAndReturn([1, 2, 3], 10, 20));
console.log(doubleAndReturn([20], 1, 2, 3));



