var express = require("express");

var router = express.Router();

router.get("/getAllEmployee",function(request,response){
    response.send("get the employee data");
})

module.exports = router;