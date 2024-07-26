var express = require("express");

var router = express.Router();

router.get("/getAllProducts",function(req,resp){
	resp.send("product data");
});

module.exports = router;