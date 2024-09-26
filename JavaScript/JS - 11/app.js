// function hello() {
//     console.log("Inside hello function");
//     console.log("Hello World");
// }

// function demo() {
//     console.log("Calling hello function");
//     hello();
// }

// console.log("Calling demo function");
// demo();
// console.log("Done!");

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// setTimeout(()=>{
//     console.log("Mohit Kucheriya");
// }, 2000);
// console.log("HELLO!");

// Callback Hell
let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "pink";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "red";
// }, 3000);

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color Changed");
        }, delay);
    });
}

changeColor("red", 1000)
    .then(() => {
        console.log("Red Color is Changed");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange Color is Changed");
        return changeColor("purple", 1000);
    })
    .then(() => {
        console.log("Purple Color is Changed");
    });

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000);

//     });
// });

// Setting up for Promises
// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 5) {
//         success();
//     } else {
//         failure();
//     }
// }
// savetoDb(                                       //1st call
//     "Mohit Kucheriya",
//     () => {
//         console.log("Success1 : Data1 saved");
//         savetoDb(                                   //2nd call
//             //Only when 1st Success is true then it will go further;
//             "Apna College",
//             () => {
//                 //2nd Success callback
//                 console.log("Success2 : Data2 saved");
//                 savetoDb(                               //3rd call
//                     "Web Development",
//                     () => {
//                         console.log("Success3 : Data3 saved");
//                     },
//                     () => {
//                         console.log("Failure3 : Weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure2 : Weak connection");
//             }
//         );
//     }, //1st Success callback

//     // 1st Failure callback
//     () => {
//         console.log("Failure : Weak connection");
//     }
// );

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve("Successfully data saved");
        } else {
            reject("Weak connection");
        }
    });
}

// then() & catch()
// Result & Errors in Promises
savetoDb("Web Development")
    .then((result) => {
        console.log("Data1 Saved");
        console.log(result);
        return savetoDb("MERN Stack");
    })
    .then((result) => {
        console.log("Data2 Saved");
        console.log(result);

        return savetoDb("JavaScript");
    })
    .then((result) => {
        console.log("Data3 Saved");
        console.log(result);
    })
    .catch((error) => {
        console.log("Promise Rejected");
        console.log(error);
    });
