var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "test"
});

connection.connect(function(err){
	console.log("success");
})

connection.query("select * from students",function(err,results){
	console.log(results);
})