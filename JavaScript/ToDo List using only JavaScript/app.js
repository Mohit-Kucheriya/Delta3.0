// // Event Bubbling
// let ndiv = document.querySelector("div");
// let nul = document.querySelector("ul");
// let nli = document.querySelectorAll("li");

// ndiv.addEventListener("click", function () {
//     console.log("div was clicked");
// });
// nul.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (const fli of nli) {
//     fli.addEventListener("click", function (event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     });

// }

// Todo Application
let tdbtn = document.querySelector("button");
let tdinp = document.querySelector("input");
let tdul = document.querySelector("ul");

tdbtn.addEventListener("click", function () {
  let tdli = document.createElement("li");
  tdli.innerText = tdinp.value;

  let dltbtn = document.createElement("button");
  dltbtn.innerText = "delete";
  dltbtn.classList.add("delete");

  tdli.appendChild(dltbtn);
  tdul.appendChild(tdli);
  tdinp.value = "";
});

tdul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let delpar = event.target.parentElement;
    delpar.remove();
    console.log("Delete Successfully");
  }
});
