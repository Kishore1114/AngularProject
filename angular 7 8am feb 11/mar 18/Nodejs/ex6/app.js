var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");

var app = express();

var users = require("./routes/users");

var products = require("./routes/products");

app.use(bodyParser.json());

app.use("/users",users);

app.use("/products",products);

app.use(express.static(path.join(__dirname, 'public')));




app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8080);

console.log("server started");