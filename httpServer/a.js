const http = require('http');
const fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{"conten-type" : "text/html"});

    fs.readFile('./kode.txt')
    res.write('./kode.txt');
    res.end("selesai");
}).listen(8000);

console.log("server runing in http://localhost:8000/");