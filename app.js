const http = require('http'); //menambahkan modul dengan perintah require('nama modul')

//membuat server baru dengan fungdi createServer pada http
http.createServer(function(req,res){ // res respon, req request
    //content tpye enjadi text html
    res.writeHead(200,{ //200 yaitu http respon
        "Content-Type" : "text/html"
    });
    //menammpilkan tulisan hello word di browser
    //res.end("Hello Word"); 
    res.write('jalann');
    res.end('selesai');
}).listen(8000);

console.log("Server is runing at port 8000");