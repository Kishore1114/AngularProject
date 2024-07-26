var http = require("http");

var server = http.createServer(function(req,resp){
	
	resp.write("web application");

	resp.end();
	
});

server.listen(8080);

console.log("server started");
