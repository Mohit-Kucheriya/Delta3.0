// // Async Function
// async function sayHello() {
//     return "Hello World";
// }
// sayHello()
//     .then((result) => {
//         console.log("Success : ", result);
//     })
//     .catch((err) => {
//         console.log("Failure : weak connection", err);
//     });

// // Await
// function randNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function getNum() {
//     await randNum();
//     await randNum();
//     await randNum();
// }
// // getNum();

// // Change Color using promise and Async & Await Function.
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let ran = Math.floor(Math.random() * 5) + 1;
//             if (ran > 3) {
//                 reject("Promise Rejected");
//             }

//             let h1 = document.querySelector("h1");
//             h1.style.color = color;
//             console.log("Color changed to :", color);
//             resolve();
//         }, delay);
//     });
// }

// async function getColor() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("purple", 1000);
//         await changeColor("brown", 1000);
//         await changeColor("violet", 1000);
//     } catch (error) {
//         console.log("Error caught :", error);
//     }

//     let a = 5;
//     console.log("Value of a:", a);
//     console.log("New Value of a:", a + Math.floor(Math.random() * 20) + 1);
// }

// // getColor();

// // API & JSON
// let jsonRes =
//     '{"fact":"On average, a cat will sleep for 16 hours a day.","length":48}';
// console.log(jsonRes);

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);
// console.log(validRes.length);

// let data1 = {
//     name: "Mohit Kucheriya",
//     age: 23,
//     city: "Jalgaon",
// };
// console.log(data1);

// let jsonData = JSON.stringify(data1);
// console.log(jsonData);

// Creating API Request
let req = "https://catfact.ninja/fact";

// fetch(req)
//     .then((result) => {
//         return result.json();
//     })
//     .then((resp1) => {
//         console.log("Fact1 :", resp1.fact);
//         return fetch(req);
//     })
//     .then((result) => {
//         return result.json();
//     })
//     .then((resp2) => {
//         console.log("Fact2 :", resp2.fact);
//         return fetch(req);
//     })
//     .then((result) => {
//         return result.json();
//     })
//     .then((resp3) => {
//         console.log("Fact3 :", resp3.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR :", err);
//     });

// Using Async & Await
// async function getFacts() {
//     try {
//         let result1 = await fetch(req);
//         let validResult1 = await result1.json();
//         console.log(validResult1.fact);

//         let result2 = await fetch(req);
//         let validResult2 = await result2.json();
//         console.log(validResult2.fact);

//         let result3 = await fetch(req);
//         let validResult3 = await result3.json();
//         console.log(validResult3.fact);
//     }
//     catch (error) {
//         console.log("ERROR :", error);
//     }
// }

// Axios
// let url = "https://catfact.ninja/fact";

// async function getRandFacts() {
//     try {
//         let res = await axios.get(url);
//         return (res.data.fact);
//     } catch (error) {
//         return "ERROR :", error;
//     }
// }

// // async function onlyFacts() {
// //     await getRandFacts();
// //     await getRandFacts();
// //     await getRandFacts();
// //     await getRandFacts();
// //     await getRandFacts();
// // }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let catFact = await getRandFacts();

//     let np = document.querySelector("#generate");
//     np.innerText = catFact;
// });

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getDogImg() {
    try {
        let dimg = await axios.get(url2);
        return (dimg.data.message);
    } catch (error) {
        return ("NO Image Found");
    }
}

let btn2 = document.querySelector("button");
btn2.addEventListener("click", async () => {
    let dresult = await getDogImg();

    let nimg = document.querySelector("#dogimg");
    nimg.setAttribute("src", dresult);
});

// Passing Headers
let url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };

        let ranJoke = await axios.get(url3, config);
        console.log(ranJoke.data.joke);
    } catch (error) {
        console.log("ERROR :", error)
    }
}
