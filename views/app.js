console.log("Web Serverni boshlash");
const express = require("express");
const app =  express();
const res = require ("express/lib/response");

/*
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data)
    }
});*/


// MongoDB chaqirish 
const db = require("./server").db();

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2:Session code
//3 Views cod
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Running code

app.post("/create-item",(req, res) => {
    console.log(req.body);
    res.json({ test: "sucess"});
});

app.get('/author', (req, res) => {
    res.render("author", {user: user});
    });

app.get ("/", function (req, res) {
    res.render("rejalar");
});

module.exports = app;
