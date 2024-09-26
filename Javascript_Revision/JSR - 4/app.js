// // for loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log("----------for loop----------");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// console.log(" Print all odd numbers from 1 to 15");
// for (let i = 1; i <= 15; i = i + 2) {
//     console.log(i);
// }

// console.log(" Print all even numbers from 2 to 20");
// for (let i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// }

// console.log("Print the multiplication table of 5");
// for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
// }

// console.log("Print the multiplication table of n");
// let n = 87
// for (let i = n; i <= n * 10; i = i + n) {
//     console.log(i);
// }

// // let m = prompt("Enter any number");
// // m = parseInt(m);
// // for (let i = m; i <= m; i++) {
// //     for (let j = 1; j <= 10; j++)
// //         console.log(`${i} X ${j} = ${i * j}`)
// // }

// // nested loop
// for (let i = 1; i <= 5; i++) {
//     console.log(`Outer loop : ${i}`);
//     for (let j = 1; j <= 5; j++) {
//         console.log(j);
//     }
// }
// console.log("----------while loop----------");

// // while loop
// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// // Favourite movie game
// // let favMovie = "avatar";
// // let guess = prompt("Guess Favourite Movie");

// // while ((guess != favMovie) && (guess != "quit")) {
// //     guess = prompt(`Wrong guess! Please try again.`);
// // }

// // if (guess == favMovie) {
// //     console.log(`Congratulation! your guess is correct.`);
// // }
// // else {
// //     console.log(`You Quit.`);
// // }

// // Loops with array
// let fruit = ["apple", "orange", "litchi", "mango"]
// for (let i = 0; i < fruit.length; i++) {
//     console.log(i, fruit[i]);
// }

// // Loops with Nested array
// let heroes = [["superman", "batman", "thor"], ["spiderman", "hulk", "wonder woman"]];
// for (let i = 0; i < heroes.length; i++) {
//     console.log(i, heroes[i], heroes[i].length);
//     for (let j = 0; j < heroes[i].length; j++) {
//         console.log(`j = ${j}, ${heroes[i][j]}`);
//     }
// }

// // for of loop
// let color = ["red", "violet", "green", "blue", "indigo", "orange"];
// for (col of color) {
//     console.log(col);
// }

// let str = "Mohit Kucheriya";
// for (char of str) {
//     console.log(char);
// }

// // Nested for of loop
// let mov = [["Salar", "KGF", "Bahubali"], ["Hera Pheri", "De Dana Dan", "Welcome"]];
// for (list of mov) {
//     console.log(list);
//     for (type of list) {
//         console.log(type);
//     }
// }

// Todo App
// let todo = [];

// let req = prompt("Enter your request");

// while (true) {
//     if (req == "quit") {
//         console.log(`Quitting TODO App`);
//         break;
//     }

//     if (req == "list") {
//         console.log(`List of TODO App`);
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//     }

//     else if (req == "add") {
//         let task = prompt("Please enter the task you want to ADD");
//         todo.push(task);
//         console.log(`Task added successfully`);
//     }

//     else if (req == "delete") {
//         let idx = prompt("Enter the task index to delete");
//         todo.splice(idx, 1);
//         console.log("Task Deleted");
//     }

//     req = prompt("Enter your request");

// }

// Assignment Question
// Qs1.
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Q2.
let numb = 123456;
let count = 0;
let newNumb = numb;
while (newNumb > 0) {
    count++;
    newNumb = Math.floor(newNumb / 10);
}

console.log(count);

// Qs3.
let num1 = 123456;
let sum = 0;
let newNum1 = num1;

while (newNum1 > 0) {
    rem = newNum1 % 10;
    sum = sum + rem;
    newNum1 = Math.floor(newNum1 / 10);
}
console.log(sum);

// Qs4.
// let fat = prompt("Enter any number");
// let fact = 1;

// if (fat == 0) {
//     console.log(`Factorial of ${fat}! is always 1`);
// } else if (fat < 0) {
//     console.log(`Factorial of  ${fat}! is not possible`);
// } else if (fat > 0) {
//     for (let i = 1; i <= fat; i++) {
//         fact = fact * i;
//     }
//     console.log(`Factorail of ${fat}! is ${fact}`);
// }

// Qs5.
console.log(`Find the largest number in the given array`);

let lar = [1, 2, 120, 3, 5, 4, 10]
let largest = lar[0];
for (let i = 0; i < lar.length; i++) {
    if (largest < lar[i]) {
        largest = lar[i];
    }

}
console.log("Largest number in", lar, "is", largest);

console.log(`Find the smallest number in the given array`);
let small = [12, 120, 3, 1, 5, 4, 10];
let smallest = small[0];
for (let i = 0; i < small.length; i++) {
    if (smallest > small[i]) {
        smallest = small[i];
    }

}
console.log("Smallest number in", small, "is", smallest);
