var express = require("express");

var app = express();

var cors = require("cors");

app.use(cors());

var bodyParser = require("body-parser");

app.use(bodyParser.json());

var studentFile = require("./student");

app.use("/students",studentFile);

app.listen(8080);