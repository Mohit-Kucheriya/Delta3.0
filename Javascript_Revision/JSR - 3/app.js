// // String Method
// // trim()
// let st = "     Hello     ";
// let neSt = st.trim();
// console.log(`Before trim : ${st}`);
// console.log(`After trim : ${neSt}`);

// // toLowerCase() & toUpperCase()
// let lc = "Mohit Kucheriya";
// let neLc = lc.toLowerCase();
// console.log(`LowerCase : ${neLc}`);

// let uc = "Mohit Kucheriya";
// let neUc = lc.toUpperCase();
// console.log(`UpperCase : ${neUc}`);

// // String Method with Arguments
// let str = "ILoveCoding";
// let newStr = str.indexOf("Coding");
// console.log(
//     `The indexOf ${str} : if present it will returns that index and if not then it will return (-1) i.e ${newStr}`
// );

// // Method Chaining
// let chain = "     hello    ";
// let newChain = chain.trim().toUpperCase();
// console.log(`Before trim & toUpperCase : ${chain}`);
// console.log(`After trim & toUpperCase Final output is : ${newChain}`);

// // slice(starting index, ending index i.e ending index is exclusive)
// // If we give -ve value as index than it will acts as (length - num i.e (-ve value))
// let sli = "MohitKucheriya";
// let newSli = sli.slice(5);
// console.log(`${newSli}`);

// let neg = "apna College";
// let newNeg = neg.slice(-4);
// console.log(`${newNeg}`);

// // replace
// let rep = "ILoveYou";
// let newRep = rep.replace("Love", "Hate");
// console.log(`Before replace : ${rep}`);
// console.log(`After replace : ${newRep}`);

// // repeat
// let rept = "Tu hi mera, ";
// let newRept = rept.repeat(2);
// console.log(`Before repeat : ${rept}`);
// console.log(`After repeat : ${newRept}`);

// // Practice Question 
// // Qs1.
// let msg = "help!";
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// // Qs2.
// let name = "ApnaCollege";

// // Qs3.
// let newName = name.slice(4).replace('l', 't');
// console.log(newName);
// console.log('------------------------------')
// console.log('------------------------------')

// // Array Method
// // push, pop, unshift, shift
// let cars = ["audi", "bmw", "xuv"];

// // indexOf & includes 
// let day = ["monday", "tuesday", "wednesday"];

// // concat & reverse 
// let primary = ["red", "orange", "blue"];
// let secondary = ["voilet", "indigo", "white"];
// let allColor = primary.concat(secondary);
// console.log(allColor);

// let reve = primary.reverse();
// console.log(reve);

// // slice
// let stationery = ["pencil", "pen", "erasor", "gemotry box", "drawing books", "notebooks"];

// // splice

// // sort
// let newStationery = stationery.sort()
// console.log(newStationery);

// console.log('------------------------------')
// // Array Practice Question
// // Qs1.
// let months = ["january", "july", "march", "august"];
// months.shift();
// console.log(months);
// months.shift();
// console.log(months);
// months.unshift("june");
// console.log(months);
// months.unshift("july");
// console.log(months);

// // Qs2.
// let month = ["january", "july", "march", "august"];
// let newMonth = month.splice(0, 2, "july", "june");
// console.log(`After using splice method : ${month}`);

// // Qs3.
// let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X'],]
// console.log(game);

// Assignment Question
// Qs1.
let num1 = [1, 2, 3, 4, 5];
let n = 4;
let newNum1 = num1.slice(0, n);
console.log(newNum1);

// Qs2.
let num2 = [6, 7, 8, 9, 10];
let nu = 3;
let newNum2 = num2.slice(num2.length - nu);
console.log(newNum2);

// Qs3.
// let st = prompt("Enter your name");
// if (st.length == "") {
//     console.log("String is empty")
// }
// else {
//     console.log("Not empty");
// }

// Q4.
let str = "apple";
let idx = 2;
if (str[idx] == str[idx].toLowerCase()) {
    console.log("Lower case");
}
else {
    console.log("Not a lower case");
}

// Q5.
// let space = prompt("Enter a quote");
// let newSpace = space.trim();
// console.log(`Before trim : ${space}`);
// console.log(`After trim : ${newSpace}`);

// Q6.
let arr = ["apple", "litchi", "orange", "pineapple"];
let inc = prompt("Enter fruit name");
let newArr = arr.includes(inc);

if (newArr == true) {
    console.log("Exist");
}
else {
    console.log("Not exist");
}








