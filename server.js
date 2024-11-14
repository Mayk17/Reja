console.log("Web Serverni boshlash");
const express = require("express");
const app =  express();
const http = require("http")

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2:Session code

//3 Views cod
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Running code
/*
app.get ("/hello", function (req, res) {
    res.end("<h1>Hello world</h1>");
});
app.get ("/sovga", function (req, res) {
    res.end("<h1>Siz padarkalar bo'limidasiz</h1>");
}); */

app.post("/create-item",(req, res) => {
    console.log(req.body);
    res.json({ test: "sucess"});
});

app.get ("/", function (req, res) {
    res.render("harid");
});


const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function (){
    console.log(`The server ishga tushdi: ${PORT}`);
});