console.log("Qs1.");
// Print all odd numbers form 1 to 15 using for loop
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

console.log("----------");
console.log("----------");

console.log("Qs.2");
// Print all even numbers from 2 to 20
for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

console.log("----------");
console.log("----------");

console.log("Qs3.");
// Print multiplication table of n
let n = 5;
for (let i = 5; i <= n * 10; i = i + 5) {
    console.log(i);
}

// Print multiplication table in proper format
console.log("----------");
let m = 10;
for (let i = 1; i <= 10; i++) {
    console.log(`${m} X ${i} = ${m * i}`);
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop ${i}`);
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

// Practice Qs Guess FavMovie
// const favMovie = "avatar";

// let guess = prompt("Guess my fav movie ");

// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong guess. Please try Again");
// }

// if(guess == favMovie){
//     console.log("Congrats right Guess!")
// }
// else{
//     console.log("You quit");
// }

// Loops with array
let fruits = ["apple", "banana", "mango", "orange", "litchi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Nested loops with Nested arrays
let heroes = [
    ["ironman", "spiderman", "thor"],
    ["superman", "wonder woman", "flash"],
];

for (let i = 0; i < heroes.length; i++) {
    console.log(i, heroes[i]);
    for (let j = 0; j < heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}

// for of loop
let cars = ["audi", "bmw", "mercedes", "gwagon"];

for (car of cars) {
    console.log(car);
}

let strb = "Mohit Kucheriya";

for (char of strb) {
    console.log(`each character of string : ${char}`);
}

// Nested for of loop
let cartoon = [["doraemon", "shinchan", "hagemaru"], ["ninja hattori", "power rangers", "oggy"]];

for (toon of cartoon) {
    console.log(toon);
    for (kid of toon) {
        console.log(kid);
    }
}

// Todo app 
// let todo = [];

// let req = prompt("enter the request you want");

// while (true) {
//     if (req == "quit") {
//         console.log("Quitting to-do");
//         break;
//     }

//     if (req == "list") {
//         console.log("----------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }

//     }
//     else if (req == "add") {
//         let task = prompt("enter the task you want to add");
//         todo.push(task);
//         console.log("Task added successfully")
//     }
//     else if (req == "delete") {
//         let idx = prompt("Please enter the index to delete")
//         todo.splice(idx, 1);
//         console.log("Task deleted");
//     }

//     else {
//         console.log("Enter valid request ");
//     }
//     req = prompt("enter the request you want");
// }

// Assignment - 4
// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 2]

let num = 2;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }

}
console.log(arr);

// Qs2. Write a JS program to find the number of digits(count) in number
let number = 123456;
let count = 0;
let cpy = number;

while (cpy > 0) {
    count++;
    cpy = Math.floor(cpy / 10);
}
console.log(`Total count = ${count}`);

// Qs3. Write a JS program to find the sum of digits in a number
let number1 = 1010101010101;
let sum = 0;
let copy = number1;

while (copy > 0) {
    rem = copy % 10;
    sum = sum + rem;
    copy = Math.floor(copy / 10);
}
console.log(`Total Of all digits = ${sum}`);

// Qs4. Print the factorial of a number n.[Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.
let number2 = prompt("Enter the number for factorail");

let fact = 1;

if (number2 == 0) {
    console.log(`Factorail of 0! is always 1`);

}
else if (number2 < 0) {
    console.log(`Factorail of Number less than 0 is not possible`);
}

else {
    for (let i = 1; i <= number2; i++) {
        fact = fact * i
    }
}
console.log(`Factorail of ${number2}! is ${fact}`);

// Qs5. To find the largest number in array
let numb3 = [2, 3, 4, 6, 7, 8, 55];
let largest = numb3[0];
for (let i = 0; i < numb3.length; i++) {
    if (largest < numb3[i]) {
        largest = numb3[i];
    }

}
console.log(`Largest number in array is ${largest}`);

// Qs6. To find smallest number in array
let numb4 = [2, 3, 4, 6, 7, 8, 55, 1];
let smallest = numb4[0];
for (let i = 0; i < numb4.length; i++) {
    if (smallest > numb4[i]) {
        smallest = numb4[i];
    }

}
console.log(`Smallest number in array is ${smallest}`);






