const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.urlencoded({ extended: true })); //to understand the express, that the data is sent throught post req.
app.use(express.json()); //to raed the json data and parse it.

app.listen(port, () => {
    console.log(`Server listening at port at ${port} `);
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params
    res.send(`Welcome ${username} to Web Development Course`);
});

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    console.log(req.query);  //to get the data from get request in query string.
    res.send(`GET Request. Welcome ${username}`);
});

app.post("/register", (req, res) => {
    let { username } = req.body
    console.log(req.body); //to get the data from post request. 
    res.send(`POST Request. Welcome ${username}`);
});