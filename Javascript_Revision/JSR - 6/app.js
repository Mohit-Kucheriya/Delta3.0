// function hello() {
//     console.log("Hello World");
//     console.log("Welcome to world of Coding!");
// }
// hello();

// function table() {
//     let m = prompt("Enter the number, to get the table.");
//     console.log(`Table of ${m} is as follows :`);
//     for (let i = m; i <= m; i++) {
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} X ${j} = ${i * j}`);
//         }
//     }
// }
// table();

// function printName() {
//     let name = prompt("Enter your name");
//     let age = prompt("Enter your age");
//     alert(`${name} is ${age} years old`);
// }
// printName();

// // Practice Question : 1
// function printPoem() {
//   console.log("Twinkle twinkle little star.");
//   console.log("How I wonder what you are");
//   console.log("Up above the world so high");
//   console.log("Like a diamond in the sky.");
// }
// printPoem();

// // Practice Question : 2
// function rollDice() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);
// }
// rollDice();

// // function with Arguments it takes any parameter or variable name as argument
// function printFname(name) {
//   console.log(name);
// }
// printFname("Mohit");

// function printTable(n) {
//   for (let i = n; i <= n; i++) {
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} X ${j} = ${i * j}`);
//     }
//   }
// }
// printTable(38);

// function fullName(fname, lastname) {
//   console.log(`Hi ${fname} ${lastname} how are you!`);
// }
// fullName("Mohit", "Kucheriya");

// function calSum(a, b) {
//   let sum = a + b;
//   console.log(`Addition of two numbers ${a} & ${b} is : ${sum}`);
// }
// calSum(235512, 2356);

// // Practice Question : 3
// function calAvgerage(x, y, z) {
//   let avg = (x + y + z) / 3;
//   console.log(`Average of three Numbers ${x} ${y} ${z} is : ${avg}`);
// }
// calAvgerage(23, 235, 54);

// // Practice Question : 4
// function mulTable(m) {
//   for (let i = m; i <= m * 10; i = i + m) {
//     console.log(i);
//   }
// }
// mulTable(23);

// function calAddition(a, b) {
//   let add = a + b;
//   console.log(`Addition of two numbers i.e ${a} & ${b} : ${add}`);
//   return add;
// }
// calAddition(231, 5641);

// // Practice question : 5
// function sum1ton(s) {
//   let sum = 0;
//   for (let i = 1; i <= s; i++) {
//     sum = sum + i;
//   }
//   console.log(`Total : ${sum}`);
//   return sum;
// }
// sum1ton(10);

// // Practice Question : 6
// let str = ["Hi", "Welcome"];
// let results = " ";
// function concatStr(str) {
//   for (let i = 0; i < str.length; i++) {
//     results = results + str[i];
//   }
//   console.log(`Concatination of ${str} : ${results}`);
//   return results;
// }
// concatStr(str);

// // Lexical Function
// function outerFunc() {
//   let x = 5;
//   let y = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   innerFunc();
// }
// outerFunc();

// function calAvg() {
//   let a = 10;
//   let b = 20;
//   let c = 32;
//   function calavg() {
//     let avg = (a + b + c) / 3;
//     console.log(avg);
//     return avg;
//   }

//   calavg();
// }
// calAvg();

// // Higher Order Functions

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("HELLO WORLD");
// }

// multipleGreet(greet, 100);

// function oddOrEven(req) {
//   if (req == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     }
//   }
//   else if (req == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     }
//   }
//   else {
//     console.log("Wrong request");
//   }

// }
// let req = "odd";
// let result = oddOrEven(req);
// result(565265);

// // Methods
// let calculator = {
//   add: function (a, b) {
//     console.log(`Addition :${a + b}`);
//     return a + b;
//   },
//   sub: function (a, b) {
//     console.log(`Subtraction :${a - b}`);
//     return a - b;
//   },
//   mul: function (a, b) {
//     console.log(`Multiplication :${a * b}`);
//     return a * b;
//   },
//   div: function (a, b) {
//     console.log(`Division :${a / b}`);
//     return a / b;
//   },
//   pow: function (a, b) {
//     console.log(`Exponentiation :${a ** b}`);
//     return a ** b;
//   },
// };

// Assignment Question
// Qs1
let arr = [1, 35, 2, 53, 65, 12, 5, 8];
let num = 5;
function larReturn(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
  return arr;
}
larReturn(arr, num);

// Qs2.
let str = "abcdabcehfghhg";
let ans = "";
function getUnique(str) {
  for (let i = 0; i < str.length; i++) {
    let result = str[i];
    if (ans.indexOf(result) == -1) {
      ans = ans + result;
    }
  }
  console.log(ans);
  return ans;
}
getUnique(str);

// Qs3.
let country = ["Australia", "Germany", "United States Of America"];

function longestCountry(country) {
  let id = 0;
  for (let i = 0; i < country.length; i++) {
    let currCountry = country[id].length;
    let finalCountry = country[i].length;
    if (finalCountry > currCountry) {
      id = i;

    }

  }
  console.log(country[id]);
  return country[id];
}
longestCountry(country);

// Qs4.
let vow = "aeroplaneapplemango";
let count = 0;
function countVowel(vow) {
  for (let i = 0; i < vow.length; i++) {
    if (vow.charAt(i) == 'a' ||
      vow.charAt(i) == 'e' ||
      vow.charAt(i) == 'i' ||
      vow.charAt(i) == 'o' ||
      vow.charAt(i) == 'u') {
      count++;
    }
  }
  console.log(`Total vowels count in ${vow} : ${count}`);

}
countVowel(vow);

