// // Arithmetic Operators
// let a = 10;
// let b = 8;
// console.log(`Addition of ${a} & ${b} is ${a + b}`);
// console.log(`Subtraction of ${a} & ${b} is ${a - b}`);
// console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
// console.log(`Division of ${a} & ${b} is ${a / b}`);
// console.log(`Modulo of ${a} & ${b} is ${a % b}`);
// console.log(`Exponentiation of ${a} & ${b} is ${a ** b}`);

// // Unary Operator
// console.log(a++);
// console.log(++a);

// // Assignment Operator
// let ages = 23;
// ages += 10;
// console.log(ages);

// // Conditional Statement
// // if
// console.log(`Before if statement`);

// let age = 23;
// if (age >= 18) {
//     console.log(`You can vote`);
//     console.log(`You can Drive also`);
// }

// console.log(`After if statement`);

// // else if
// let marks = 50;
// if (marks >= 80) {
//     console.log(`Congratulation on Scoring ${marks} marks & your Grade is : A+`);
// } else if (marks >= 60) {
//     console.log(`Congratulation on Scoring ${marks} marks & your Grade is : A`);
// } else if (marks >= 40) {
//     console.log(`Congratulation on Scoring ${marks} marks & your Grade is : B`);
// } else if (marks < 33) {
//     console.log(` Grade : Fail`);
// }

// // Nested if-esle
// let per = 30;
// if (per >= 33) {
//     console.log(`Pass`);
//     if (per >= 80) {
//         console.log(`Grade : Outstanding`);
//     } else if (per >= 60) {
//         console.log(`Grade : A`);
//     } else {
//         console.log(`Grade : B`);
//     }
// }
// else {
//     console.log(`Fail, Better luck next time`);
// }

// // Switch statement
// let festival = "diwali";
// switch (festival) {
//     case "diwali":
//         console.log(`It's Diwali Festival`);
//         break;
//     case "holi":
//         console.log(`It's Holi Festival`);
//         break;
//     case "christmas":
//         console.log(`It's Christmas Festival`);
//         break;
//     default:
//         console.log(`No Festival `);
//         break;
// }

// // Practice Question
// //Qs1. Create a traffic light system that shows what to do based on color.
// let color = "yellow";
// if (color === "red") {
//     console.log(`Please Stop!`);
// }
// if (color === "yellow") {
//     console.log(`Get ready `);
// }
// if (color === "green") {
//     console.log(`GO!`);
// }

// // Qs2.
// let size = 'L';
// if (size === 'XL') {
//     console.log(`Price of ${size} size Popcorn is Rs.250`);
// }
// else if (size === "L") {
//     console.log(`Price of ${size} size Popcorn is Rs.200`);
// }
// else if (size === "M") {
//     console.log(`Price of ${size} size Popcorn is Rs.100`);
// }
// else if (size === "S") {
//     console.log(`Price of ${size} size Popcorn is Rs.50`);
// }
// else {
//     console.log(`Please enter valid size `)
// }

// // Qs3.
// let st = "aeroplane";
// if (st[0] === 'a' && st.length >= 3) {
//     console.log(`${st} is a Good String`);
// }
// else {
//     console.log(` Bad String`);
// }

// // Qs4.
// let numb = 12;
// if ((numb % 3 === 0) && ((numb + 1 == 15) || (numb - 1 == 11))) {
//     console.log(`Safe`);
// }
// else {
//     console.log(`Unsafe`);
// }

// // Qs5. Use Switch statement to print the day of week using a number variable 'day' with values 1 to 7.
// let day = 10;
// switch (day) {
//     case 1:
//         console.log(`MONDAY`);
//         break;
//     case 2:
//         console.log(`TUESDAY`);
//         break;
//     case 3:
//         console.log(`WEDNESDAY`);
//         break;
//     case 4:
//         console.log(`THURSDAY`);
//         break;
//     case 5:
//         console.log(`FRIDAY`);
//         break;
//     case 6:
//         console.log(`SATURDAY`);
//         break;
//     case 7:
//         console.log(`SUNDAY`);
//         break;
//     default:
//         console.log(`Enter valid day range(1 to 7)`);
//         break;

// }

// // Traffic signal system using all conditional statement
// let traffic = "blue";
// if (traffic === "red") {
//     console.log(`STOP!`);
// } else if (traffic === "yellow") {
//     console.log(`SLOW DOWN!`);
// } else if (traffic === "green") {
//     console.log(`GO!`);
// }
// else {
//     console.log(`Traffic signal is not Working.`)
// }

// Assignment Question
// Practice Qs1.
let num = 20;
if (num % 10 == 0) {
    console.log(`Good, ${num} is divisible by 10`);
} else {
    console.log(`Bad`);
}
// Practice Qs2.
// let fname = prompt(`Enter your name`);
// let age = prompt(`Enter your age`);

// alert(`${fname} is ${age} years old`);

// Practice Qs3.
let quarter = 1;
switch (quarter) {
    case 1:
        console.log(`Months in Quarter 1 : January, February, March`);
        break;
    case 2:
        console.log(`Months in Quarter 2 : April, May, June`);
        break;
    case 3:
        console.log(`Months in Quarter 3 : July, August, September`);
        break;
    case 4:
        console.log(`Months in Quarter 4: October, November, December`);
        break;
    default:
        console.log(`Enter valid Quarter No`);
        break;
}

// Practice Qs4.
let strin = "Apple";
if ((strin[0] == "A" || strin[0] == "a") && strin.length >= 5) {
    console.log(`GOOD STRING`);
} else {
    console.log(`BAD STRING`);
}

// Practice Qs5.
let a = 10;
let b = 12;
let c = 15;
if (a > b) {
    if (a > c) {
        console.log(`a, ${a} is Largest`);
    } else {
        console.log(`c, ${c} is Largest`);
    }
} else if (b > c) {
    console.log(`b, ${b} is Largest`);
} else {
    console.log(`c, ${c} is Largest`);
}

// Practice Qs6.
let num1 = 35;
let num2 = 47855;
let d = 5
if (num1 % 10 == d && num2 % 10 == d) {
    console.log(`Both ${num1} & ${num2} have the same last digit i.e ${d}`);
}
else {
    console.log(`Not same`);
}