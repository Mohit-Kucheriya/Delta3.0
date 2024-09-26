const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
    .then(() => console.log("Connnection Successfull"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({ // User Schema
    username :String,
    email:String
});

const postSchema = new Schema({ // Post Schema
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});



const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);

// const addData = async()=>{
//     let user =  await User.findOne({username : "Mohit Kucheriya"});

//     let post2 = new Post({
//         content:"Bye",
//         likes:10
//     });

//     post2.user = user;


//     await post2.save();
// }
// addData();

// const getData = async()=>{
//     let result = await Post.find({}).populate("user");
//     console.log(result);
// }
// getData();

const getData = async()=>{
    let result = await Post.find({}); //This will only return our userId: reference 
    console.log(result); 
}
getData();
