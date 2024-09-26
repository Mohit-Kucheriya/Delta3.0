// let student = {
//     name: "Mohit",
//     age: 23,
//     marks: 94.4
// };
// console.log(student);

// let item = {
//     name: "Maggi",
//     price: 10,
//     ingridents: "Dehydrated vegetables (18.6%) (Carrot bits (9.3%) & Green french beans (9.3%)), Mixed spices (17.6%), Refined wheat flour (Maida), Iodised salt, Sugar, Starch, Palm oil, Dehydrated onion (4%), Toasted onion flakes (3.7%), Flavour enhancer (635), Dried garlic, Acidity regulator (330), Colour (150d), Yeast"
// };
// console.log(item);

// // creating a post
// let post = {
//     username: "kucheriyamohit",
//     content: "This is my first post",
//     likes: 10,
//     repost: 5,
//     tags: ["@apnacollege", "@delta", "@alpha"]
// };
// console.log(post);

// // Add/update value
// let student1 = {
//     name: "Mohit Kucheriya",
//     age: 23,
//     marks: 94.4
// };

// // Note : to delete any property we have to use delete obj.key;
// // Objects of Objects .. Nested
// let studentInfo = {
//     Mohit: {
//         city: "Jalgaon",
//         marks: 85
//     },
//     Ruchita: {
//         city: "Pune",
//         marks: 95
//     },
//     Dia: {
//         city: "Jalgaon",
//         marks: 58
//     }
// };
// console.log(studentInfo);

// // Array of Objects
// let collegeInfo = [
//     {
//         name: "Shubham",
//         age: 23,
//         city: "Jalgaon"
//     },
//     {
//         name: "Uday",
//         age: 23,
//         city: "Savda"
//     },
//     {
//         name: "Deepak",
//         age: 24,
//         city: "Jalgaon-city"
//     }
// ];

// // Practice on random integers 
// // 1 to 100
// let ran1 = Math.floor(Math.random() * 100) + 1;
// console.log(ran1);

// // 21 to 25
// let ran2 = Math.floor(Math.random() * 5) + 21;
// console.log(ran2);

// // Guessing Game
// let max = prompt("Enter any Max number");
// let dom = Math.floor(Math.random() * max) + 1;

// let guess = prompt("Guess the number");
// while (true) {
//     if (guess == "quit") {
//         console.log("Quitting game!");
//         break;
//     }
//     if (guess == dom) {
//         console.log("Congratulation your Guess was right! i.e", guess);
//         break;
//     }
//     else if (guess < dom) {
//         guess = prompt("hint : Your guess is too small, please try again!");
//     }
//     else if (guess > dom) {
//         guess = prompt("hint : Your guess is too big, please try again!");

//     }

// }

// Assignment Question : 5
// Qs1.
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// Qs2.
const car = {
    name: "BMW",
    model: "BMW XM",
    color: "Storm Bay Metallic"
};
console.log(car);
console.log(car.name);

// Q3.
let person = {
    name: "Mohit Kucheriya",
    age: 23,
    city: "Jalgaon"
};
console.log(person);
console.log(person.city = "New York");
console.log(person);
console.log(person.country = "United States");
console.log(person);



