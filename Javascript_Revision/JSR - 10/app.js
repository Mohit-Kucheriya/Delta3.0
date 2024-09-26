// let btn = document.querySelector("button");
// btn.onclick = function(){
//     console.log("Button was Clicked");
// }

// onclick : when any element is clicked. & onmouseenter : hover on any element
// let btns = document.querySelectorAll("button");

// for (const btn of btns) {
//     btn.onclick = saySuccess;
//     //   btn.onmouseenter = sayName;
// }
// function saySuccess() {
//     alert("There are no secrets to success. It is the result of preparation, hard work, and learning from failure.")
// }

// function sayName() {
//     let name = prompt("Enter your name");

//     alert(`Hi ${name} you hover on button`);
// }

// addEventListeners
// let button1 = document.querySelector("#btn1");

// button1.addEventListener("click", okHello);
// button1.addEventListener("click", okBye);

// function okHello() {
//     alert("Hello Developers");
// }

// function okBye() {
//     alert("Bye ");
// }

// Activity to generate random color.
// let nbutton = document.querySelector("button");

// nbutton.addEventListener("click", function () {
//     let nh1 = document.querySelector("h1");
//     let nh1color = getRandomColor();
//     nh1.innerText = nh1color;

//     let ndiv = document.querySelector("div");
//     let ndivcolor = getRandomColor();
//     ndiv.style.backgroundColor = ndivcolor;
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let ranColor = `rgb(${red},${green},${blue})`;
//     return ranColor;
// };

// Events listeners for elements
// let p = document.querySelector("p");
// p.addEventListener("click", function(){
//     p.style.color = "red";
// });

// let nbox = document.querySelector(".box");
// nbox.addEventListener("mouseenter", function(){
//     alert("Box Was Hover!")
// });

// this in Event Listeners
// let btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", function(){
//     console.log(this); //here this means button object only
//     console.dir(this);
// })

// let newh1 = document.querySelector("h1");
// let newh3 = document.querySelector("h3");
// let newpara = document.querySelector("p");
// let newbtn3 = document.querySelector("#btn3");

// function changeColor() {
//   this.style.backgroundColor = "pink";
// }

// newh1.addEventListener("click", changeColor);

// newh3.addEventListener("click", changeColor);

// newpara.addEventListener("click", changeColor);

// newbtn3.addEventListener("click", changeColor);

// Keyboard event
// let btn4 = document.querySelector("button");
// btn4.addEventListener("click", function(event){ //default argument i.e event
//     console.log(event);
//     console.log("Button was Clicked");
// });

// let newinp = document.querySelector("input");
// newinp.addEventListener("keydown", function(){
//     console.log("key was pressed Down");
// });
// let newinp = document.querySelector("input");
// newinp.addEventListener("keyup", function(event){
//     console.log("Key = ",event.key);
//     console.log("Code = ",event.code);
//     console.log("key was pressed Up");
// });

// let newinp1 = document.querySelector("input");
// newinp1.addEventListener("keydown", function (event) {
//     if (event.code == "ArrowUp") {
//         console.log("Charcter moves Upward");
//     }
//     else if (event.code == "ArrowDown") {
//         console.log("Charcter moves Down");
//     }
//     else if (event.code == "ArrowLeft") {
//         console.log("Charcter moves Left ");
//     }
//     else if (event.code == "ArrowRight") {
//         console.log("Charcter moves Right ");
//     }
// });

// let nform = document.querySelector("form");
// nform.addEventListener("submit", function(event){
//     event.preventDefault(); //to prevent
//     console.log("Form is Submitted");

// });

// let nform = document.querySelector("form");
// nform.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// let inpnew = document.querySelector("input");
// console.dir(inpnew);
// console.log(inpnew.value) //to access the value of input

// let newuser = document.querySelector("#user");
// let newpass = document.querySelector("#pass");
// console.log("Username =",newuser.value);
// console.log("Password =",newpass.value);
// alert(`Hi ${newuser.value} your Password is : ${newpass.value}`);

//   let newuser = this.elements[0]; //i.e form.elements[0]
//   let newpass = this.elements[1]; //i.e form.elements[1]
//   console.dir(nform);
//   console.dir(nform.elements);
//   console.log("Username =", newuser.value);
//   console.log("Password =", newpass.value);

// let newuser = document.querySelector("#user");
// newuser.addEventListener("change", function(){
//     console.log("Change Event");
//     console.log(this.value);
// });

// newuser.addEventListener("input", function(){
//     console.log("Input Event");
//     console.log(this.value);
// });

// let tinp = document.querySelector("input");
// tinp.addEventListener("input", function () {
//   let th3 = document.querySelector("h3");
//   th3.innerText = tinp.value;
// });

// Assignment Question 
// Qs2.
// let btn = document.createElement("button");
// btn.innerText = "Click ME!";

// let body = document.querySelector("body");
// body.append(btn);

// btn.addEventListener("click", function(){
//     btn.style.backgroundColor = "lightgreen";
//     console.log("Button is Clicked")
// });

let useinput = document.querySelector("input");
useinput.addEventListener("input", function () {
    let head1 = document.querySelector("h1");
    head1.innerText = useinput.value;
});




