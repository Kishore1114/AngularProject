var express = require("express");

var router = express.Router();

var mysql = require("mysql");

var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"test"
})

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("success");
    }
})

router.get("/getAllStudents",function(req,resp){
    con.query("select * from students",function(err,results){
        if(err){
            console.log(err);
            resp.send("data loading failed:"+err.sqlMessage);
        }
        else{
            resp.send(results);
        }
    })
});

module.exports = router;