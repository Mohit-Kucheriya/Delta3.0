const { faker } = require("@faker-js/faker"); //faker to generate fake data
const mysql = require("mysql2"); //require mysql2
const path = require("path");
const express = require("express");
const app = express();
const methodOverride = require('method-override')
const port = 8080;


// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "mohit4022@",
});

const getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// Inserting data
// let q = "INSERT INTO user_details (id, username,email,password) VALUES ?";

// let data = []
// for (let i = 1; i <= 10; i++) {
//     data.push(getRandomUser()); //calling getRandomUser 100 times.

// }

// Express
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, (req, res) => {
    console.log(`Listening at server ${port}`);
});

// TO show the total Count
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user_details`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["count(*)"]);
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count })
        });
    } catch (err) {
        console.log(err);
        res.send("Something Wrong in DB");
    }
});

// /All users data
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user_details`;
    try {
        connection.query(q, (err, users) => {
            if (err) throw err;
            res.render("show.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("Something Wrong in DB");
    }

})

// Edit route
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user_details WHERE id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });

        });
    } catch (err) {
        console.log(err);
        res.send("Something Wrong in DB");
    }
});

// Update (DataBase) route
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { password: formPassword, username: newUsername } = req.body;
    let q = `SELECT * FROM user_details WHERE id= '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPassword != user.password) {
                console.log("Wrong Password");
            } else {
                let q2 = `UPDATE user_details SET username= '${newUsername}' WHERE id= '${id}'`;
                connection.query(q2, (err, result) => {
                    if (err) throw (err);
                    res.redirect("/user");
                })
            }
        });
    } catch (err) {
        console.log(err);
        res.send("Something Wrong in DB");
    }

});


















// connection.end(); // to end the connection with mysql after the further execution.
