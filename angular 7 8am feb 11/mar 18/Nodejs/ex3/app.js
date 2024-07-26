var express = require("express");

var app = express();


app.get("/getAllStudentNames",function(req,resp){
	resp.send("['s1','s2','s3']");
})

app.post("/insertStudent",function(req,resp){
	resp.send("success");
})


app.listen(8080);