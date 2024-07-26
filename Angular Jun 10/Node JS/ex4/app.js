var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"test"
})
con.connect(function(err){
    if(err)
    console.log(err);
    else
    console.log("success");
})
con.query("select * from students",function(err,results){
    if(err){
        console.log(err);
    }
    else{
        console.log(results);
    }
});