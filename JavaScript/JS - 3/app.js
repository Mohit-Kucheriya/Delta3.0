// Qs1.
let msg = "hello";
let newMsg = msg.trim().toUpperCase();

console.log(newMsg);

// Qs2.
let name = "ApnaCollege";
let newName = name.slice(4, 9);
console.log(newName);
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log(name.replace('l', 't'));

// Practice Question
// Qs3.
let month = ["January", "July", "March", "August"];

// Qs4.
let months = ["January", "July", "March", "August"];
let newMonths = months.splice(0, 2, "July", "June");

console.log(newMonths);
console.log(months);

// Qs5.
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];

console.log(lang.reverse());

let newLang = lang.indexOf("javascript");
console.log(newLang);

// Qs6. tic-tac-toe game 
let game = [['X', 'null', 'O'], ['null', 'X', 'null'], ['O', 'null', 'X']]
console.log(game);

// Assignment Qs
// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 6;

let newArr = arr.slice(0, num);
console.log(newArr);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number]
let ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nu = 5;

let newAr = arr.slice(arr.length - nu);
console.log(newAr);

// Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("Enter any String");
if (str.length == 0) {
    console.log("String is Empty");
}
else {
    console.log("String is not Empty");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lowercase.
let strr = "Apple";
let idx = 2;

if(strr[idx] == strr[idx].toLowerCase()){
    console.log("Is Lower Case");
}

else{
    console.log("Not a Lower Case");
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let st = prompt("Enter any string");
let newSt = st.trim();

console.log(`Before trim : ${st}`);
console.log(`After trim : ${newSt}`);

// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let elm = ["apple", "mango","orange","pineapple"];
let checkElm = "strawberry"

if(elm.includes(checkElm)){
    console.log("Elements exist in Array");
}
else{
    console.log("Not exist in Array");
}



