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

router.put("/updateStudent",function(req,resp){

    con.query("update students set name=?,email=? where id = ?",
                [req.body.name,req.body.email,req.body.id],
        function(err,results){
            if(err){
                resp.send({"msg":"updation failed"+err.sqlMessage});
            }
            else{
                resp.send({"msg":"updation success"});
            }

    });

});

module.exports = router;