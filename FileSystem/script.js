const fs = require('fs');
const http = require('http');

http.createServer(function(req,res){
    //membaca file
    fs.readFile("index.html", (err, data)=>{
        if(err) throw err;

        //response
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
    });
}).listen(8000);

console.log("bisa dibuka di browser 8000")
