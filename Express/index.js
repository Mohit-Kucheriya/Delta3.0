const express = require("express");
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`app is listening at port ${port}`);
});

// app.use((req, res) => {
//     console.log("Request Recieved");
//     res.send("<h1>Fruits</h1> <ul><li>Mango</li><li>Apple</li><li>Orange</li><li>Pineapple</li><li>Jackfruit</li></ul>");
// });

// app.get("/", (req, res) => {
//     res.send("Home Path");
// });
// app.get("/apple", (req, res) => {
//     res.send("Apple Path");
// });
// app.get("/orange", (req, res) => {
//     res.send("Orange Path");
// });
// app.get("/banana", (req, res) => {
//     res.send("Banana Path");
// });
// app.get("/kiwi", (req, res) => {
//     res.send("Kiwi Path");
// });

// app.get("*", (req, res) => {
//     res.send("This path does not exist ");
// });

// app.post("/", (req, res) => {
//     res.send("Post Request");
// })

app.get("/:username/:id",(req,res)=>{
    console.log(req.params);
    res.send("Its Root Path")
})