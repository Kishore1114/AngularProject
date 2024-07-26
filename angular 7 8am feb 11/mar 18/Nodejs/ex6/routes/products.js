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

router.get("/getAllProducts",function(req,resp){
	connection.query("select * from products",
			function(err,results){
				resp.send(results);
			});
});

module.exports = router;