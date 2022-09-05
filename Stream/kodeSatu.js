//merubah / menulis data pada kode.txt
const fs = require("fs");
var data = "Ini data baru dengan writeStream"; // data baru

var writeStream = fs.createWriteStream('kode.txt');// data baru akan dimasukan ke kode.txt

writeStream.write(data, 'UTF8'); //menggunakan encoding utf 8

writeStream.end(); //progam selesai diubah

writeStream.on('finish', function(){ // menampilkan comleted
    console.log("Write Completed");
});

writeStream.on('error',function(err){ //menampilkan eror
    console.log(err.stack);
});

console.log("Porgram Selesai"); //pemberitahuan program selesai