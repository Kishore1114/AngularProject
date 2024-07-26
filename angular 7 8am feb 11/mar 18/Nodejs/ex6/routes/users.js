var express = require("express");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "test"
});

connection.connect(function(err){
	console.log("connection success");
})

var router = express.Router();

router.get("/getAllUsers",function(req,resp){
	connection.query("select * from users",
			function(err,results){
				resp.send(results);
			});
});

router.post("/insertUser",function(req,resp){
	console.log(req.body);
	resp.send("insert success");
});

module.exports = router;