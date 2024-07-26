var express = require("express");

var mysql = require("mysql");

var router = express.Router();

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
    else
        console.log("success");
})


router.post("/register",function(req,resp){
    con.query("insert into user values(?,?,?,?)",[req.body.username,req.body.password,req.body.email,req.body.phoneNo],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"user registration failed"})
        }
        else{
            resp.send({"message":"user registered successfully"});
        }

    })
});

router.post("/login",function(req,resp){
    con.query("select * from user where username=? and password=? ",[req.body.username,req.body.password],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"user login failed"})
        }
        else{
            if(results.length==1)
                resp.send({"message":"user login successfully"});
            else
                resp.status(500).send({"message":"invalid username and password"})     
        }

    })
});

module.exports = router;

