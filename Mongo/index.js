const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
        console.log("Connection Successful ");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/", (req, res) => {
    res.send("Welcome to MongoDB with Express");
});

// Index Route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats });
});

// New Route 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
});

// Create Route
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save().then(data => console.log(data)).catch(err => console.log(err));
    res.redirect("/chats");
});


// Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id); //as this is ashychronous function we need to use async and await
    res.render("edit.ejs", { chat });
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let chat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true }, { new: true });
    res.redirect("/chats");
});


// Destroy Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    console.log(deleteChat);
    res.redirect("/chats");


})

app.listen(8080, () => {
    console.log(`Listening Server at Port 8080`);
});