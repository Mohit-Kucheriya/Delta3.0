// JavaScript -  1
// Practice Question
// Qs1.
let age = 23;

age + 2;
console.log(age);

// Qs2.
let hindi = 89;
let eng = 52;
let phy = 90;
let avg = (hindi + eng + phy) / 3;
console.log(avg);

// JavaScript -  2
// Prc=actice Question
// Qs1.
let colo = "red";

if (colo === "red") {
  console.log("Stop!");
}

if (colo === "yellow") {
  console.log("Slow Down!");
}

if (colo === "green") {
  console.log("Go Now!");
}

// Qs2.
let size = "P";

if (size === "XL") {
  console.log(`Price for ${size} Popcorn is 250 Rs`);
} else if (size === "L") {
  console.log(`Price for ${size} Popcorn is 200 Rs`);
} else if (size === "M") {
  console.log(`Price for ${size} Popcorn is 100 Rs`);
} else if (size === "S") {
  console.log(`Price for ${size} Popcorn is 50 Rs`);
} else {
  console.log("Select valid size please");
}

// Nested if-else
let marks = 90;

if (marks >= 33) {
  console.log("Pass");
  if (marks >= 85) {
    console.log("Outstanding Performance");
  } else if (marks >= 60) {
    console.log("Good Performance");
  } else {
    console.log("Can do much Better!");
  }
} else {
  console.log("Fail");
}

// Qs3.
let str = "apple";
if (str[0] === "a" && str.length > 3) {
  console.log("Good String");
} else {
  console.log("Bad String");
}

// Switch Statement
let col = "green";

switch (col) {
  case "red":
    console.log("Stop!");
    break;

  case "yellow":
    console.log("Slow down!");
    break;

  case "green":
    console.log("Go!");
    break;

  default:
    console.log("Traffic light is broken");
}

// Qs4.
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Enter a valid Day");
}

// Assignment -2
// Qs1. Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not
let num = 21;
if (num % 10 == 0) {
  console.log("Good");
} else {
  console.log("Bad");
}

// Qs2. Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert(by substituting their name & age):name is age years old.
let fname = prompt("Enter your name");
let agee = prompt("Your Age please");

alert(`Hello, ${fname} is ${agee} year old`);

// Qs3. Write a switch statement to print the months in a quarter. Months in Quarter1: January, February, March Months in Quarter2: April,May, June Months in Quarter3:July, August, September Months in Quarter4:October, November, December [Use the number as the case value in switch}
let quarter = 1;
switch (quarter) {
  case 1:
    console.log("Months in Quarter 1 : January, February, March");
    break;

  case 2:
    console.log("Months in Quarter 2 : April, May, June");
    break;

  case 3:
    console.log("Months in Quarter 3 : July, August, September");
    break;

  case 4:
    console.log("Months in Quarter 4 : October, November, December  ");
    break;

  default:
    console.log("Enter valid Quarter number");
}

// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
let gstr = "App";

if ((gstr[0] === "A" || gstr[0] === "a") && gstr.length >= 5) {
  console.log("Good String");
} else {
  console.log("Bad String");
}

// Qs5. Write a program to find the largest of 3 numbers.
let a = 10;
let b = 18;
let c = 15;

if (a > b) {
  if (a > c) {
    console.log(`${a}, is Largest i.e a`);
  } else {
    console.log(`${c}, is Largest i.e c`);
  }
} else if (b > c) {
  console.log(`${b}, is Largest i.e b`);
} else {
  console.log(`${c}, is Largest i.e c`);
}

// Qs6. Write a program to check if 2 numbers have the same last digit. Eg: 32 and 47852 have the same last digit i.e. 2.
let num1 = 22;
let num2 = 47822;
let numm = 2;

if(num1%10 === numm && num2%10 ===numm){
    console.log(`Both Number ${num1} & ${num2} have the last digit same i.e ${numm}`);
}
else{
    console.log("Not Same");
}

// let num1 = 30;
// let num2 = 47852;

// if (num1 % 10 == num2 % 10) {
//   console.log("Both have same last digit");
// } else {
//   console.log("Not same");
// }
