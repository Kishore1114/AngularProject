var express = require("express");
var mysql = require("mysql");

var app = express();

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

app.get("/getAllStudents",function(req,resp){

	// db logic

	connection.query("select * from students",function(err,results){

		resp.send(results);

	});

});

app.listen(8080);

console.log("server started");