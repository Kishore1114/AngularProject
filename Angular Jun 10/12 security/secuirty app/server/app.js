var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var jwt = require("jsonwebtoken");

var path = require("path");

// intialize the application

var app = express();

app.use(cors());

app.use(bodyParser.json());

var mw2 = function (req, res, next) {
    if((req.path.indexOf("login")==-1)){
        var token = req.headers['x-access-token'];
        jwt.verify(token, 'AbCd', function(err, decoded) {
            if (err) 
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            else
                next();
          });
      }
      else
          next();
  }
  
app.use(mw2);

var studentCtrl = require("./student");

app.use("/students",studentCtrl);

var userCtrl = require("./user");

app.use("/users",userCtrl);

app.listen(8080);


