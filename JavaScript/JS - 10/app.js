// let btns = document.querySelectorAll("button");

// for (const btn of btns) {
//   // btn.onclick = sayHello;
//   // btn.onmouseenter = sayHover;

// //   btn.addEventListener("click", sayHello);
// //   btn.addEventListener("click", sayHover);

// btn.addEventListener("dblclick", doubleClick);

// }

// function sayHello() {
//   alert("Welcome to Coding World!");
// }

// function sayHover() {
//   alert("Web Development : MERN STACK");
// }

// function doubleClick(){
//     console.log("Doubled Click");
// }

// Activity to generate a random color
// let btn1 = document.querySelector("button");

// btn1.addEventListener("click", function () {
//   let head1 = document.querySelector("h1");
//   let randomCol = getRandomColor();
//   head1.innerText = randomCol;

//   let ndiv = document.querySelector("div");
//   let bacCol = getRandomColor();
//   ndiv.style.backgroundColor = bacCol;
// });

// function getRandomColor() {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);

//   let finalColor = `rgb(${red}, ${green}, ${blue})`;
//   return finalColor;
// }

// let np = document.querySelector("p");
// np.addEventListener("click", function () {
//     console.log("Paragraph was Clicked");
// });

// let nbox = document.querySelector(".box");

// nbox.addEventListener("mouseenter", function () {
//     let ndiv = document.querySelector("div");
//     ndiv.style.backgroundColor = "black";
//     ndiv.style.color = "white";

// });

// this is even listener
// let nh1 = document.querySelector("h1");
// let nh3 = document.querySelector("h3");
// let npara = document.querySelector("p");
// let nbtn = document.querySelector("button");

// function chgColor() {
//     console.dir(this);
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";

// };

// nh1.addEventListener("click", chgColor);
// nh3.addEventListener("click", chgColor);
// npara.addEventListener("click", chgColor);
// nbtn.addEventListener("click", chgColor);

// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function () {
//     if (event.code == "KeyU") {
//         console.log("Key moves UP");
//     }
//     else if (event.code == "KeyD") {
//         console.log("Key moves DOWN");
//     }
//     else if (event.code == "KeyR") {
//         console.log("Key moves RIGHT");
//     }
//     else if (event.code == "KeyL") {
//         console.log("Key moves LEFT");
//     }
// });

// let nform = document.querySelector("form");
// nform.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let nuser = document.querySelector("#user");
//     let npass = document.querySelector("#pass");
//     console.log("Username :", nuser.value);
//     console.log("Password :", npass.value);

// });

// let ninput = document.querySelector("#inp");
// let np = document.querySelector("p");

// ninput.addEventListener("input", function () {
//     console.log(ninput.value);
//     np.innerText = ninput.value;
// });

// Assignment Question
// Qs1.
// let ediv = document.querySelector("#emoji");
// ediv.addEventListener("click", function (event) {
//     event.target.style.backgroundColor = "red";
//     event.target.style.color = "white";
// });

// ediv.addEventListener("mouseover", function (event) {
//     event.target.style.backgroundColor = "yellow";
// });

// ediv.addEventListener("mouseout", function (event) {
//     event.target.style.backgroundColor = "lightgreen";
// });

// window.addEventListener("scroll", function () {
//     console.log("para has been scrolled")
// });

// Qs2.
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click ME!";

// let bod = document.querySelector("body");
// bod.append(newBtn);

// newBtn.addEventListener("click", function () {
//   newBtn.style.backgroundColor = "green";
//   newBtn.style.color = "white";
// });

// newBtn.addEventListener("mouseover", function () {
//   newBtn.style.backgroundColor = "black";
//   newBtn.style.color = "white";
// });

// Qs3.Create an input element on the page with a placeholder ”enter your name ”and an H2 heading on the page inside HTML. The purpose of this input element is to enter a user’s name so it should only input letters from a-z,A-Z and space (all other characters should not be detected).Whenever the user inputs their name,their input should be dynamically visible inside the heading.[Please note that no other character apart from the allowed characters should be visible in the heading

let nh2 = document.querySelector("h2");
let newinput = document.querySelector("input");
newinput.addEventListener("input", function () {
    nh2.innerText = newinput.value;
    console.log(newinput.value);
});



