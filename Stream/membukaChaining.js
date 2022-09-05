//membuka / ekstrak data dari zip kembali ke txt dengan nama file baru
const fs = require('fs'); //memanggil modul fs
const zlib = require('zlib'); //memanggil modul zlib

fs.createReadStream('kode.txt.gz') // membaca kode.txt
    .pipe(zlib.createGunzip()) // membuat gzip
    .pipe(fs.createWriteStream('kodebaru.txt')); // melakuka kompress

console.log("File sudah di kompress"); // menampilkan file sudah di kompress