const exp = require("constants");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

let posts = [
    {
        id: uuidv4(),
        username: "kucheriyamohit",
        content: "Thanks for checking in"
    },
    {
        id: uuidv4(),
        username: "harrypotter",
        content: "The boy who lived!"
    },
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "I love Coding"
    }
]

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.set(express.static(path.join(__dirname, "/public")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});

// To view all the posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
    // console.log("Server working Well");
});

// To create a new post
app.get("/posts/new", (req, res) => { //app.get to get the form and then post request.
    res.render("new.ejs");
});

// To add new post to main index.ejs
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts"); //automatically will redirect to GET request
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

// to update a specific post -> PATCH Request
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

// to edit the post 
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// to delete post
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});
