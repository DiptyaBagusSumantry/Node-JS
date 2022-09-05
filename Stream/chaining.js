//mengkompress data menjadi zip
const fs = require('fs'); //memanggil modul fs
const zlib = require('zlib'); //memanggil modul zlib

fs.createReadStream('kode.txt') // membaca kode.txt
    .pipe(zlib.createGzip()) // membuat gzip
    .pipe(fs.createWriteStream('kode.txt.gz')); // melakuka kompress

console.log("File sudah di kompress"); // menampilkan file sudah di kompress