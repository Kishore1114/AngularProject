var express = require("express");

var mysql = require("mysql");

var jwt = require("jsonwebtoken");

var router = express.Router();

var con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"ecommerce"
})

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else
        console.log("success");
})


router.post("/registerUser",function(req,resp){
    console.log(req.body);
    con.query("insert into user(userName,emailId,password,phoneNumber,firstName,lastName,address1,address2,country,state,zip,createdOn,isAdmin,avatar) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[ req.body.userName,req.body.emailId,req.body.password,req.body.phoneNumber,req.body.firstName,req.body.lastName,req.body.address1,req.body.address2,req.body.country,req.body.state,req.body.zip,new Date(),0,req.body.avatar],function(err,results){
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
    console.log(req.body);
    con.query("select * from user where userName=? and password=? ",[req.body.username,req.body.password],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"user login failed"})
        }
        else{
            if(results.length==1){
                var jsondata = JSON.stringify(results[0]);
				var userData = JSON.parse(jsondata);
                var newTokenValue = jwt.sign(userData, 'AbCd', {
					expiresIn: 1800 // expires in 24 hours
			    });
                resp.send({"message":"user login successfully","userData":results[0],"token":newTokenValue});
            }
            else
                resp.status(500).send({"message":"invalid username and password"})     
        }

    })
});

module.exports = router;

