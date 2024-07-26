var express = require("express");

var router = express.Router();

router.get("/getAllUsers",function(req,resp){
	resp.send("user data");
});

module.exports = router;