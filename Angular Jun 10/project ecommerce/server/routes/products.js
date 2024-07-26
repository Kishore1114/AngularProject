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

router.get("/getAllProducts",function(req,resp){

    con.query("select * from products",function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student data loading failed"})
        }
        else{
            resp.send(results);
        }

    })

});

router.get("/getHotProducts",function(req,resp){
    
        con.query("select * from products LIMIT 10;",function(err,results){
            if(err){
                console.log(err);
                resp.status(500).send({"message":"student data loading failed"})
            }
            else{
                resp.send(results);
            }
    
        })
    
    });

router.get("/getProductById/:id",function(req,resp){
    con.query("select * from products where id = ?",[req.params.id],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"products data loading failed"})
        }
        else{
            resp.send(results);
        }

    })
});

router.post("/insertProduct",function(req,resp){
    con.query("insert into products(name,category,price,description,imageUrl,quantity,seller,added) values(?,?,?,?,?,?,?,?)",[req.body.name,req.body.category,req.body.price,req.body.description,req.body.imageUrl,req.body.quantity,req.body.seller,new Date()],function(err,results){
        if(err){
            console.log(err);
            resp.status(500).send({"message":"student insertion failed"})
        }
        else{
            resp.send({"message":"student insertion success"});
        }

    })
});



module.exports = router;

