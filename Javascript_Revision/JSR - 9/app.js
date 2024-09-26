let allImg = document.getElementsByClassName("oldImg");

for (let i = 0; i < allImg.length; i++) {
    allImg[i].src = "assets/spiderman_img.png";
    console.log(`value of img ${i} is changed.`);
}

// Query Selectors
console.log(document.querySelector("p"));
console.log(document.querySelector(".oldImg"));

console.log(document.querySelectorAll("div a"));
console.log(document.querySelectorAll("ul li"));


let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++) {
    links[i].style.color = "red";
}
