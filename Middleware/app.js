const express = require("express");
const app = express();
const ExpressError = require("./ExpressError.js")


// For each type of request all middleware function will get check i.e. (Middleware can perform only 2 things : a. can send the response b. passed the control to next middleaware).

// Example: Suppose we have a req at app.get("/"), middleware will get executes and if there is nothing to send the response it will passed the control to its ongoing request i.e app.get("/").


// The below tow middleware will check for all req
app.use((req, res, next) => {
    console.log("Hi, I'm middleware1 & will check for all request");
    next();
});

app.use((req, res, next) => {
    console.log("Hi, I'm middleware2 & will check for all request");
    next();
});

// app.use((req,res,next)=>{
//     req.time = new Date().toString();
//     console.log(`Request: ${req.method}, Path: ${req.path}, Date: ${req.time}`);
//     next();
// });

// Middleware can work for some specific path 
app.use("/random", (req, res, next) => {
    console.log("I'm only for Random Path");
    next();
});

// app.use("/api",(req,res,next)=>{
//     let {token} = req.query;
//     console.log("Checked Middleware")
//     if(token === "giveaccess"){
//         next();
//     }
//     else{
//         res.send("ACCESS DENIED");
//     }
// })

// we can also define it in variable and then pass it as function i.e. 

const checkToken = (req, res, next) => {
    let { token } = req.query;
    console.log("Checked Middleware")
    if (token === "giveaccess") {
        next();
    }
    else {
        throw new ExpressError(404, "ACCESS DENIED");
    }
};

app.get("/api", checkToken, (req, res) => {
    console.log("Checked api Token")
    res.send("Data");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something wrong" } = err;
    res.status(status).send(message);
});

app.use("/admin",(err,req,res)=>{
    throw new ExpressError(403,"Access to Admin Data is forbidden");
  
})

app.get("/admin",(req,res)=>{
    res.send("Admin Data");
})


app.get("/", (req, res) => {
    res.send("Welcome to Root");
});

app.get("/random", (req, res) => {
    res.send("Any Random Page");
});

// We can define a middleware at last for the error handling.
// Here all the above middleware function are being checked and control is passed to next
app.use((req, res) => {
    console.log("Page not found");
    res.send("Page not found");
});

app.listen(8080, () => {
    console.log("Server listening at port 8080");
});


app.get("/admin",(req,res)=>{
    throw new ExpressError(404,"Some error Occured");
    
});

app.use((err,req,res,next)=>{
    let{status,message}= err;
    res.status(status).send(message);
});