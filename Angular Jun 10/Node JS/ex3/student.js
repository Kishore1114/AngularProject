var express = require("express");

var router = express.Router();

router.get("/getAllStudents",function(request,response){
    response.send("get the student data");
})

module.exports = router;