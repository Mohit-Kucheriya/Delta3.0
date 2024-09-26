const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

app.set("view emgine", "ejs");
app.set("views", path.join(__dirname, "/views")); //to run the page, even if the server is running outside the main directory.

app.listen(port, () => {
    console.log(`Server grtting started at port ${port} `);
});

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("Hey!!");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params
    const instaData = require("./data.json");
    const data = instaData[username];
    if (data) { // if username is available then only render.
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs")
    }
});
