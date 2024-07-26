var express = require("express");

var app = express();

var cors = require("cors");

app.use(cors());

var studentFile = require("./student");

app.use("/students",studentFile);

app.listen(8080);