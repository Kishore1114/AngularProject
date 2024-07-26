var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

// intialize the application

var app = express();

app.use(cors());

app.use(bodyParser.json());

var studentCtrl = require("./student");

app.use("/students",studentCtrl);

var userCtrl = require("./user");

app.use("/users",userCtrl);

app.listen(8080);


