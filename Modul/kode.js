/*const fs = require('fs'); //memanggil modul fs

fs.printMessages = function(str){ //menampilkan pesan 
    console.log("Pesan Masuk");
    console.log(str);
}

module.exports = fs
fs.printMessages("Sukses");*/

const fs = require('fs');//memanggil modul fs

delete fs['readFile']; // mengahpus modul fs pada funsi readFile

fs.readFilebaru = function(str){ //membuat fungsi readFile baru
    console.log("Function baru dari Overide");
    console.log(str);
}

module.exports = fs
fs.readFilebaru('kode.txt');

