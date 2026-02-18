const http = require("http");
http.createServer((req,res)=>{
	res.end("Devops ci/cd project by Abhay");
}).listen(3000);
