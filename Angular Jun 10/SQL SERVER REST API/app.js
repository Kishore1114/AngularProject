var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();

app.use(cors());

app.use(bodyParser.json());

var studentCtrl = require("./student");

app.use("/students",studentCtrl);

var server = app.listen(8080, function () {
    console.log('Server is running..');
});