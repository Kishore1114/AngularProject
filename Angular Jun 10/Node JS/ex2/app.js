var express = require("express");

var app = express();

app.get("/getAllStudents",function(req,resp){
    
    var students = [{"id":1,"name":"s1"},{"id":2,"name":"s2"},]

    resp.send(students);
})

app.listen(3000);