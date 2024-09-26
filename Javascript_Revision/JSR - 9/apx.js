// Qs1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Clickme”.

// Qs2. Add following attributes to the element:- Change place holder value of input to “username”. Change the id of button to “btn”.

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.

// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.

// Qs5. Create a p tag on the page and set its text to “Apna College Delta Practice”, where Delta is bold.

let ninput = document.createElement("input");
let nbutton = document.createElement("button");
nbutton.innerText = "Click Me";

ninput.setAttribute("placeholder", "username");
nbutton.setAttribute("id", "btn");

let nbody = document.querySelector("body");
nbody.append(ninput);
nbody.append(nbutton);

let inputid = document.querySelector("#btn");
inputid.classList.add("btn");

let nh1 = document.createElement("h1");
nh1.innerText = "DOM Pratice";
nbody.prepend(nh1);

nh1.classList.add("head1");

let np = document.createElement("p");
np.innerHTML = "Apna College <b> Delta </b> Practice";
nbody.append(np);
