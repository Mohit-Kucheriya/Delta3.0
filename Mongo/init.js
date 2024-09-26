const mongoose = require("mongoose");
const Chat = require("./models/chat");
main()
    .then(() => {
        console.log("Connection Successful ");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        
        from: "Neha",
        to: "Sneha",
        msg: "Hey kase ho",
        created_at: new Date()
    },
    {
        from: "Mohit",
        to: "Rohit",
        msg: "Bhag Bsdk",
        created_at: new Date()
    },
    {
        from: "Harry",
        to: "Hermoine",
        msg: "The boy who lived",
        created_at: new Date()
    },
    {
        from: "Tanmay",
        to: "Zakir",
        msg: "Farzi Mushayra",
        created_at: new Date()
    },
    {
        from: "Dimple",
        to: "Simple",
        msg: "Just looking like a wow",
        created_at: new Date()
    },
    {
        from: "Mother",
        to: "Son",
        msg: "Luv u ",
        created_at: new Date()
    },
    {
        from: "Kamini",
        to: "Kamina",
        msg: "Chl b!",
        created_at: new Date()
    },
]

Chat.insertMany(allChats);

