//menampilkan / membaca kode.txt
const fs = require('fs'); // me require

var data="";

var readerStream = fs.createReadStream('kode.txt'); //membuat readerStream dengan file kode.txt

readerStream.setEncoding('UTF8'); // membuat encoding dengan UTF8

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('erroe',function(){
    console.log(err.stack);
});

console.log("Program selesai");