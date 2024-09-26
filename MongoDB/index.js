const mongoose = require("mongoose");

// Complusory to write below code 
main()
    .then(() => {
        console.log("Successfully connected");
    })

    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// define schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Models
const User = mongoose.model("User", userSchema);

// User.insertMany([
//     {name:"Bob",email:"bob123@yahoo.in",age:23},
//     {name:"Bruce",email:"bruce123@yahoo.in",age:23},
//     {name:"Tony",email:"stark123@yahoo.in",age:23},
//     {name:"Snape",email:"snape@yahoo.in",age:23},
// ]).then((res)=>{
//     console.log(res);
// });


// User.find({name:"Bob"}).then((data)=>{
//     console.log(data);
// });

// User.findById("6654834977ab9697af891358").then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// User.findByIdAndUpdate({ _id: "665479c04bca1eb62dd1fb90" }, { name: "Geralt of Rivia" }, { new: true }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// User.find().then(data => console.log(data)).catch(err => console.log(err));

// User.deleteMany({name:"Bob"}).then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err));

// User.deleteMany({name:"Snape"}).then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err));

// User.deleteMany({name:"Tony"}).then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err));

// User.deleteMany({name:"Bruce"}).then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err));

// User.deleteMany({name:"Hermoine Granger"}).then((res)=>{
//     console.log(res);
// }).catch(err=> console.log(err));

// User.findByIdAndDelete({_id :'665479c04bca1eb62dd1fb90'})
User.findByIdAndDelete({_id: "665479c04bca1eb62dd1fb90"}).then(data=> console.log(data)).catch(err=> console.log(err));

User.find().then(data=>console.log(data));