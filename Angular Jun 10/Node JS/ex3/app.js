var express = require("express");

var app = express();

var studentFile = require("./student");

app.use("/students",studentFile);

var employeeFile = require("./employee");

app.use("/employees",employeeFile);

app.listen(3000);