// function sayHello() {
//     console.log("Inside Hello function");
//     console.log("Hello World!");
// }

// function sayDemo() {
//     console.log("Calling Hello function");
//     sayHello();
// }

// console.log("Calling Demo function");
// sayDemo();
// console.log("DONE, BYE!");

// // Visualizing Call Stack
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let result = two() + one();
//     console.log("Answer =", result);
// }
// three();

// // JS is single threaded
// // setTimeout (()=>{
// //     console.log("Apna College");
// // },2000);
// // console.log("Welcome to");

// setTimeout(function () {
//     console.log("Apna College");
// }, 2000);
// console.log("Welcome to");

// // CallBack Hell -> asynchronous nature
// // callback nesting -> callback hell
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextChangeColor) {
//     setTimeout(function () {
//         h1.style.color = color;
//         if (nextChangeColor)
//             nextChangeColor();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("pink", 1000);
//             });
//         });
//     });
// });

// Promises
// function savedDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savedDb(
//     "Mohit Kucheriya",
//     () => {
//         console.log("Success : Data Saved!");
//         savedDb(
//             "Apna College",
//             () => {
//                 console.log("Success2 : Data2 Saved!"); // Success2 callback
//                 savedDb(
//                     "Web Development",
//                     () => {
//                         console.log("Success3 : Data3 Saved!"); // Success3 callback
//                     },
//                     () => {
//                         console.log("Failure3 : Weak connection, Data not Saved"); //Failure3 callback
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure2 : Weak connection, Data not Saved"); //Failure2 callback
//             }
//         ); // Success1 callback
//     },
//     () => {
//         console.log("Failure : Weak connection, Data not Saved"); //Failure1 callback
//     }
// );

function savedDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 5) {
            resolve("Success : Data Saved");
        } else {
            reject("Error : Weak connection");
        }
    });
}

let request = savedDb("Apna College");
request
    .then(() => {
        console.log("Data1 Saved");
        return savedDb("Mohit Kucheriya");
    })
    .then(() => {
        console.log("Data2 Saved");
    })
    .catch(() => {
        console.log("Promise Rejected");
    });

let h1 = document.querySelector("h1");

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
        console.log("Red Color");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange Color");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue Color");
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("Green Color");
        return changeColor("purple", 1000);
    })
    .then(() => {
        console.log("Purple Color");
        return changeColor("green", 1000);
    })

    .then(() => {
        console.log("Green Color");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("Blue Color");
        return changeColor("orange", 1000);
    })
    .then(() => {
        console.log("Orange Color");
        return changeColor("red", 1000);
    })
    .then(() => {
        console.log("Red Color");
        return changeColor("black",1000)
    })

    .catch((error) => {
        console.log("Promise Rejected");
    });
