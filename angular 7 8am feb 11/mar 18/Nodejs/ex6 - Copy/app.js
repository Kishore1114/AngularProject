var express = require("express");

var app = express();

var users = require("./routes/users");

var products = require("./routes/products");

app.use("/users",users);

app.use("/products",products);

app.listen(8080);

console.log("server started");