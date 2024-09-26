// // Array Methods
// // forEach
// let num = [1, 23, 54, 65, 8];

// let print = function (el) {
//     console.log(el);
// };

// num.forEach(print);

// let info = [
//     {
//         name: "Mohit Kucheriya",
//         marks: 94,
//     },
//     {
//         name: "Ruchita Jain",
//         marks: 95,
//     },
//     {
//         name: "Dee",
//         marks: 95,
//     },
// ];

// let printInfo = (el) => {
//     console.log(el);
//     console.log(el.marks);
// };
// info.forEach(printInfo);

// let info1 = [
//     {
//         name: "Mahi",
//         score: 7,
//     },
//     {
//         name: "Virat",
//         score: 18,
//     },
//     {
//         name: "Rohit",
//         score: 10,
//     },
// ];

// info1.forEach((el1) => {
//     console.log(el1.score);
// });

// // map
// let no = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let double = no.map((no1) => {
//     return no1 * 2;
// });
// console.log(double);

// let sq = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let square = sq.map((sq1) => {
//     return sq1 * sq1;
// });
// console.log(square);

// let info3 = [
//     {
//         name: "Superman",
//         marks: 94,
//     },
//     {
//         name: "Batman",
//         marks: 99,
//     },
//     {
//         name: "Spiderman",
//         marks: 95,
//     },
// ];

// let printInfo3 = info3.map((cgp) => {
//     let conv = cgp.marks / 10;
//     console.log(conv);
//     return conv;
// });

// // filter
// let even = [1, 12, 45, 23, 21, 87, 68, 12, 32];

// let printEven = even.filter((ev) => {
//     return ev % 2 == 0;
// });
// console.log(printEven);

// let odd = [1, 12, 45, 23, 21, 87, 68, 12, 32];

// let printOdd = odd.filter((od) => {
//     return od % 2 != 0;
// });
// console.log(printOdd);

// // every & some
// let arr1 = [10, 12, 44, 22, 20, 86, 68, 12, 32];

// let newArr1 = arr1.every((evarr) => {
//     return evarr % 2 == 0;
// });
// console.log(newArr1);

// // reduce

// let add = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newAdd = add.reduce((result, ad) => {
//     console.log(result);
//     return result + ad;
// });
// console.log(newAdd);

// let max = [1, 21, 12, 55, 47, 89, 100];

// let newMaximum = max.reduce((ans, m) => {
//     if (ans < m) {
//         return m;
//     } else {
//         return ans;
//     }
// });
// console.log("Maximum number in the Given Array", max, ":", newMaximum);

// // Practice Question
// // Qs1.
// // let mul = [10, 100, 120];

// // let newMul = mul.every((mu) => {
// //     if (mu % 10 == 0) {
// //         console.log("All numbers in given array i.e", mul, "are multiple of 10 ");

// //     } else {
// //         console.log(
// //             "All numbers in given array i.e",
// //             mul,
// //             "are not multiple of 10"
// //         );
// //     }
// // });


// let mul = [100, 100, 120];

// let newMul = mul.every((mu) => (mu % 10 == 0));
// console.log(newMul);

// // Qs2.
// function getMin(nums) {
//     let min = nums.reduce((x, y) => {
//         if (x > y) {
//             return y;
//         }
//         else {
//             return x;
//         }
//     });
//     return min;

// };

// let nums = [10, 12, 54, 2, 1, 15];
// console.log(getMin(nums));

// // Default parameter
// function calSum(a, b = 10) {
//     return a + b;

// };

// // spread
// let spr = [10236215862, 1212, 3263, 4351, 42565, 12252];
// let newSpr = Math.min(...spr);
// console.log(newSpr);

// let str = "Mohit Kucheriya";
// console.log(...str);

// // spread with array literal
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [...arr];
// console.log(newArr);

// let char = "Hare Krishna";
// let newChar = [...char];
// console.log(newChar);

// let odd1 = [1, 3, 5, 7, 9];
// let even1 = [2, 4, 6, 8, 10];
// let newNumbers = [...even1, ...odd1];
// console.log(newNumbers);

// let data = {
//     email: "kucheriyamohit@gmail.com",
//     password: "abc123",
// };
// let newData = { ...data, id: 123, country: "India" };
// console.log(data);
// console.log(newData);

// let id = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; //arr -> value
// let newId = { ...id }; //object key:value pair 
// console.log(newId);

// // rest
// function small(...smin) {
//     return smin.reduce((fmin, elmin) => {
//         if (fmin > elmin) {
//             return elmin;
//         }
//         else {
//             return fmin;
//         }
//     })
// }

// // destructing with array
// let hero = ["ironman", "spiderman", "superman", "batman", "wonder woman"];
// let [winner, runnerup, ...other] = hero;

// // destructing with object
// const collegeInfo = {
//     name: "Tony Stark",
//     age: 21,
//     marks: 65,
//     subject: ["hindi", "english", "science", "math"],
//     username: "starktony@123",
//     password: "ironman"
// };

// let { username, name } = collegeInfo;

// Assignment Question
// Qs1.Square and sum the array elements using the arrow function and then find the average of the array
let num = [1, 2, 3, 4, 5];
let square = num.map((el) => {
    return el * el;
});
console.log(square);

let sum = square.reduce((ans, sq) => {
    return ans + sq;
});
console.log(sum);

let avg = (sum / num.length);
console.log(avg);

// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((el) => {
    return el + 5;
});
console.log(newArr);

// Qs3.Create a new array whose elements are in uppercase of words present in the original array.
let str = ["biceps", "triceps", "back", "shoulder", "back", "legs"];
let newStr = str.map((st) => {
    console.log(st.toUpperCase());
});

// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
let arr1 = []

