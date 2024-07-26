var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var student = require("./student");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/student",student);

app.listen(3000);

console.log("success");