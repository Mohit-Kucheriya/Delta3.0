// // async Function
// async function greet() {
//     return "Hello!";
// }

// greet()
//     .then((result) => {
//         console.log("Promise Resolved");
//         console.log("Result :", result);
//     })

//     .catch((err) => {
//         console.log("Promise Rejected");
//         console.log(err);
//     });

// let demo = async () => {
//     return 10;
// };

// // await
// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function getRandom() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

// getRandom();

// let h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let ran = Math.floor(Math.random() * 5) + 1;
//             if (ran > 3) {
//                 reject("Promise Rejected");
//                 console.log(ran);
//             }
//             h1.style.color = color;
//             resolve("Color Changed");
//         }, delay);
//     });
// }

// async function getColor() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("pink", 1000);
//     } catch (err) {
//         console.log(err);
//     }

//     let a = 23;
//     console.log("Value of a :", a);
//     console.log("New number = ", a + 3);
// }
// getColor();

// Accessing JSON data
// Parse method -> JSON data to JS Object
// let jsonData = '{"fact":"Unlike humans, cats do not need to blink their eyes on a regular basis to keep their eyes lubricated.","length":101}';
// console.log(jsonData);

// let validData = JSON.parse(jsonData);
// console.log(validData);
// console.log(validData.fact);
// console.log(validData.length);

// // Stringify -> JS Object to JSON data

// let studentObj = {
//     name: "Mohit Kucheriya",
//     age: 23,
//     marks: 95,
//     location: "Jalgaon"
// };

// console.log(studentObj);

// let newStudentData = JSON.stringify(studentObj);
// console.log(newStudentData);

// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res)=>{
//         console.log(res);
//         res.json().then((data)=>{
//             console.log(data)
//         })
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// To Get Random Fact about Cats
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;

//     } catch (err) {
//         console.log(err);
//         console.log("NO Fact Found!");
//     }

// }

// To Get Random Dog Image
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let link = await getImage();

    let img = document.querySelector("#result");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (err) {
        console.log(err);
        console.log("NO Image Found!");
    }
}
