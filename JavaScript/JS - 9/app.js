// // Selecting element by ID, ClassName, Tags
// let smallImages = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`Value of images no ${[i]} is changed :`);
// }

// // Query Selectors
// console.dir(document.querySelector('p')); //Selects first p element

// console.dir(document.querySelector('#description')); //Selects first element with id ="description"

// console.dir(document.querySelector('.oldImg')); //Selects first element with class = "oldImg"

// console.dir(document.querySelector('div a')); //Selects first  element in div

// // Query SelectorsAll
// console.dir(document.querySelectorAll('ul li')); // Selects all elements

// let links = document.querySelectorAll('.box a');
// for(let i =0;i<links.length;i++){
//     links[i].style.color = "purple";
// }


// Practice Question
// Qs1.
let para1 = document.createElement("p");
para1.innerText = "Hi, I'm Red";
document.querySelector("body").append(para1);

para1.classList.add("red");

let heading3 = document.createElement("h3");
heading3.innerText = "I'm blue h3!";
document.querySelector("body").append(heading3);

heading3.classList.add("blue");

// Qs2.
let div = document.createElement("div");
let heading1 = document.createElement("h1");
let para2 = document.createElement("p");

heading1.innerText = "I'm in a div";
para2.innerText = "ME TOO";

div.append(heading1);
div.append(para2);

div.classList.add("box");
document.querySelector("body").append(div);

// Assignment Question
// Qs1.
let div1 = document.createElement("div");
let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

div1.append(input);
div1.append(button);

document.querySelector("body").append(div1);

// Qs2.
input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qs3.
let btnstyle = document.querySelector("#btn");
btnstyle.classList.add("btn");

// Qs4.
let heading4 = document.createElement("h1");
heading4.innerHTML = "<u> DOM Practice </u>";

document.querySelector("body").prepend(heading4);
let headstyle = document.querySelector("h1");
headstyle.classList.add("head4");

// Qs5.
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Pratice";
document.querySelector("body").append(p);
