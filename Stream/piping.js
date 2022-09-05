//piping adalah mengambil data untuk stream satu ke stream lainya.
var fs = require('fs');

var readerStream = fs.createReadStream('kode.txt'); //membaca file kode.txt terlebih dahulu

var writeStream = fs.createWriteStream('output.txt') // menulis pada output.txt

readerStream.pipe(writeStream);

console.log("Program Selesai");