var express = require("express");

var mysql = require("mysql");

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

router.get("/getAllStudents",function(req,resp){

    con.query("select * from students",function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student data loading failed"})
        }
        else{
            resp.send(results);
        }

    })

});

router.get("/getStudentById/:id",function(req,resp){
    con.query("select * from students where id = ?",[req.params.id],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student data loading failed"})
        }
        else{
            resp.send(results);
        }

    })
});

router.post("/insertStudent",function(req,resp){
    con.query("insert into students values(?,?,?)",[req.body.id,req.body.name,req.body.email],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student insertion failed"})
        }
        else{
            resp.send({"message":"student insertion success"});
        }

    })
});

router.put("/updateStudent/:id",function(req,resp){

    con.query("update students set name=?,email=?  where id = ?",[req.body.name,req.body.email,req.params.id],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student updation failed"})
        }
        else{
            resp.send({"message":"student update success"});
        }

    })
    
});

router.delete("/deleteStudent/:id",function(req,resp){
    con.query("delete students where id = ?",[req.params.id],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student deletion failed"})
        }
        else{
            resp.send({"message":"student delete success"});
        }

    })
});

module.exports = router;

