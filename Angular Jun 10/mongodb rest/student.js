var express = require('express');

var router = express.Router();

var MongoClient = require('mongodb');
var db;

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
	  if (err) throw err
	  db = client.db("test");
	  console.log("connected successfully");
	  
	});

router.get("/",function(req,resp){

	db.collection("students").find().toArray(function(err, docs) {
	    console.log("Found the following records");
	    resp.send(docs);
  	});

});

router.get("/:id",function(req,resp){

	db.collection("students").find({"id":parseInt(req.params.id)}).toArray(function(err, docs) {
	    console.log("Found the following records");
	    resp.send(docs);
  	});

});

module.exports = router;