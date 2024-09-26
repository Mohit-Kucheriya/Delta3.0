// // // /Assignment Question: 2
// // // Qs1.
// // let num = 1050;
// // if (num % 10 == 0) {
// //     console.log(`Good : Number ${num} is Divisible by 10`);
// // } else {
// //     console.log(`Bad : Not divisible`);
// // }

// // // Qs2.
// // // let nam = prompt(`Enter your name`);
// // // let age = prompt(`Enter your age`);

// // // alert(`${nam} is ${age} years old.`);

// // // Qs3.
// // let months = 5;
// // switch (months) {
// //     case 1:
// //         console.log(`Months in Quarter 1 : January, February, March`);
// //         break;
// //     case 2:
// //         console.log(`Months in Quarter 2 : April, May, June`);
// //         break;
// //     case 3:
// //         console.log(`Months in Quarter 3 : July, August, September`);
// //         break;
// //     case 4:
// //         console.log(`Months in Quarter 4: October, November, December`);
// //         break;
// //     default:
// //         console.log(`Enter valid Quarter nos`);
// // }

// // // Qs4.
// // let str = "Aeroplane";
// // if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
// //     console.log(`Golden String : it starts with the character ‘A’ or ‘a’ and has a total
// //     length greater than 5`);
// // } else {
// //     console.log(`Not a golden string`);
// // }

// // // Qs5.
// // let a = 10;
// // let b = 12;
// // let c = 15;

// // if (a > b) {
// //     if (a > c) {
// //         console.log(`a : ${a} is the Largest number`);
// //     } else {
// //         console.log(`c : ${c} is the Largest number`);
// //     }
// // } else if (b > c) {
// //     console.log(`b : ${b} is the Largest number`);
// // } else {
// //     console.log(`c : ${c} is the Largest number`);
// // }

// // // Qs6.
// // let num1 = 11;
// // let num2 = 4562;

// // if (num1 % 10 == num2 % 10) {
// //     console.log(`Both ${num1} & ${num2} have same last digit`);
// // }
// // else {
// //     console.log(`Both ${num1} & ${num2} doesnt have same last digit`);
// // }

// // // Assignment Question : 3
// // // Qs1.
// // let arr = [1, 2, 3, 4, 5, 45, 25, 10];
// // let n = 3;
// // let newArr = arr.slice(0, n);
// // console.log("First", n, "elements of array", arr, "are", newArr);

// // // Qs2.
// // let numb = [1, 2, 3, 4, 5, 45, 25, 10];
// // let nu = 3;
// // let newNumb = numb.slice(numb.length - nu);
// // console.log("Last", nu, "elements of array", numb, "are", newNumb);

// // // Qs3.
// // let str = prompt(`Enter any String`);
// // if (str.length == "") {
// //     console.log(`String is Empty`);
// // } else {
// //     console.log(`Not empty`);
// // }

// // // Qs4.
// // let char = "MoHit";
// // let idx = 2;
// // if (char[idx] == char[idx].toLowerCase()) {
// //     console.log(`The character ${char} at the given
// //     index ${idx} is lower case.`);
// // } else {
// //     console.log(` The character ${char} at the given
// //     index ${idx} is not a Lower case`);
// // }

// // let charc = "MoHit";
// // let id = 2;
// // if (charc[id] == charc[id].toUpperCase()) {
// //     console.log(`The character ${charc} at the given
// //     index ${id} is Upper case.`);
// // } else {
// //     console.log(` The character ${charc} at the given
// //     index ${id} is not a Upper case`);
// // }

// // // Q5.
// // let fname = prompt(`Enter your name`);
// // let newFmame = fname.trim();
// // console.log(`Before trim : ${fname}`);
// // console.log(`After trim : ${newFmame}`);

// // // Qs6.
// // let color = ["red", "orange", "blue", "white"];
// // let newColor = prompt(`Enter color Name`);
// // if (color.includes(newColor)) {
// //     console.log("color", newColor, "exist in given array", color);
// // } else {
// //     console.log(newColor, "color does not exist in given array", color);
// // }

// // Assignment Question
// // Qs1. Solution : 1
// let arr = [1, 2, 6, 3, 4, 5, 6, 6, 6, 3, 7, 10];
// let m = 6;
// for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == m) {
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);

// // let arr1 = [1, 2, 6, 3, 4, 5, 6, 6, 6, 3, 7, 10]; //Forward solution is not better for element next to each other
// // let x = 6;
// // for (let i = 0; i < arr1.length; i++) {
// //     if (arr1[i] == x) {
// //         arr1.splice(i, 1);
// //     }
// // }
// // console.log(arr1);

// // Solution : 2
// let arr2 = [1, 2, 3, 4, 5, 6, 6, 3, 7, 10]; // By using while loop we are accessing all the elements
// let y = 6;
// let i = arr2.length;

// while (i--) {
//     if (arr2[i] === m) {
//         arr2.splice(i, 1);
//     }
// }
// console.log(arr2);

// // Solution : 3
// let arr3 = [1, 2, 3, 2, 4, 5, 6];
// let z = 2;
// for (let i = 0; i < arr3.length; i++) {
//     if (arr3[i] == z) {
//         arr3.splice(i, 1);
//     }
// }
// console.log(arr3);

// // Qs2.
// let num = 136425879125488;
// let count = 0;
// let copyNum = num;

// while (copyNum > 0) {
//     count++;
//     copyNum = Math.floor(copyNum / 10);
// }
// console.log(`Total no of digit in ${num} : ${count}`);

// // Qs3.
// let fig = 23157942252245;
// let sum = 0;
// let copyFig = fig;

// while (copyFig > 0) {
//     rem = copyFig % 10;
//     sum = sum + rem;
//     copyFig = Math.floor(copyFig / 10);
// }
// console.log(`Total Sum of ${fig} digits is : ${sum}`);

// // Qs4.
// let fno = prompt("Enter the no to print the factorial of that number");
// let fact = 1;
// if (fno == 0) {
//     console.log(`Factorial of ${fno}! Is always 1`);
// }
// else if (fno < 0) {
//     console.log(`Factorial of ${fno}! Is not Possible`);
// }
// else if (fno > 0) {
//     for (let i = 1; i <= fno; i++) {
//         fact = fact * i;
//     }
//     console.log(`Factorial of ${fno}! Is  ${fact}`);
// }

// // Qs5.
// let lar = [1, 2, 25, 55, 120, 16, 100];
// let largest = lar[0];

// for (let i = 0; i < lar.length; i++) {
//     if (largest < lar[i]) {
//         largest = lar[i];
//     }

// }
// console.log(`Largest Number in given aaray is ${largest}`);

// Assignment Question : 6
// Solution 1:

// JavaScript Part : 10
// DOM Events

// let btns = document.querySelectorAll("button");
// console.dir(btns);

// // btn.onclick = function () {
// //     console.log("Button was Clicked");
// // };

// function sayHello() {
//     console.log("Hello!, Welcome to Apna College");
//     console.log("MERN Stack : Web Development");
// }

// // To select all Buttons loop is used. To access all btns.
// for (const btn of btns) {
//     btn.onclick = sayHello;
// }

// let btns = document.querySelectorAll("button");
// console.dir(btns);

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("Welcome to coding World!");
// }

// for (const btn of btns) {
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     btn.addEventListener("dblclick", function () {
//         console.log("Double clicked ")
//     });
// }

// Activity
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let h1 = document.querySelector("h1");
//     let headText = getRandom();
//     h1.innerText = headText;

//     let div1 = document.querySelector("div");
//     let divColor = getRandom();
//     div1.style.backgroundColor = divColor;
// });

// function getRandom() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.dir(this); //here this means that object only i.e button object.
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";
// });

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// h1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "lightgreen";
// });

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "lightgreen";
// });

// p.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "lightgreen";
// });

// btn.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "lightgreen";
// });

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "lightgreen";
// }
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// p.addEventListener("click", changeColor);
// btn.addEventListener("click", changeColor);

// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("Button was Clicked");
// });

// let inp  = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("Key was pressed DOWN");
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup", function (event) {
//     if (event.code == "ArrowUp") {
//         // console.log("Code =",event.code);
//         // console.log("Key =",event.key);
//         console.log("Character moves UP");
//     } else if (event.code == "ArrowDown") {
//         console.log("Character moves DOWN");
//     } else if (event.code == "ArrowLeft") {
//         console.log("Character moves LEFT");
//     } else if (event.code == "ArrowRight") {
//         console.log("Character moves RIGHT");
//     }
// });

// inp.addEventListener("keyup", function (event) {
//     console.log(event.key);
//     console.log(event.code);
// });

// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   console.dir(event);
// console.dir(form);
// console.dir(form.elements);
// event.preventDefault();

//   let user = document.querySelector("#user");
//   let pass = document.querySelector("#pass");
// let user = this.elements[0]; //this.element -> form.element
// let pass = this.elements[1];

// console.log("Username :", user.value);
// console.log("Password :", pass.value);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("change",function(){
//     console.log("Change Event was triggered");
//     console.log("Final Value =", inp.value);
// });

// inp.addEventListener("input",function(){
//     console.log("Input Event was triggered");
//     console.log("Final Value =", inp.value);
// });

// Activity My Text Editior
// let txtinp1 = document.querySelector("#editior1");
// txtinp1.addEventListener("change",function(){
//     console.log(txtinp1.value);

//     let h4 = document.querySelector("#head1");
//     h4.innerText = txtinp1.value;
// });

// let txtinp2 = document.querySelector("#editior2");
// txtinp2.addEventListener("input",function(){
//     console.log(txtinp2.value);

//     let h4 = document.querySelector("#head2");
//     h4.innerText = txtinp2.value;
// });

// Assignment Question
// Qs2.
let btn = document.createElement("button");

let body = document.querySelector("body");
body.appendChild(btn);
btn.innerText = "Click ME!";
btn.addEventListener("click", function () {
    btn.style.backgroundColor = "lightgreen";
});


let nh2 = document.querySelector("h2");
let newinput = document.querySelector("input");
newinput.addEventListener("input", function () {
    // Regular expression to match only letters (both uppercase and lowercase) and spaces
    let validInput = /^[a-zA-Z\s]*$/;

    if (validInput.test(newinput.value)) {
        nh2.innerText = newinput.value;
    } else {
        // If the input contains invalid characters, clear the input field
        newinput.value = newinput.value.replace(/[^a-zA-Z\s]/g, '');
    }
});