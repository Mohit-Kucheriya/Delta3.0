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
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
    },
    discount:{
        type:Number,
        default : 0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]
    }
});

const Book = mongoose.model("Book",bookSchema);

// let book1 = new Book({
//     title : "Marvel comic",
//     author: "Tony Stark",
//     price :500,
//     category: "fiction"
// });

// book1.save().then(data=>console.log(data)).catch(err=>console.log(err));

Book.findByIdAndDelete("6654bc4f335244425fd03c69").then(data=>console.log(data)).catch(err=>console.log(err));