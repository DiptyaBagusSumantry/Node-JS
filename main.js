// memanggil modul penambahan dengan fungsi require
const modul = require('./penambahan'); // pada tanda ./ berarti moudul masih satu folder
//melakukan perkalian dengan memanggil modul tambah untuk melakukan proses penambahan
let hasil = modul.tambah(10,5);
//menampilkan hasil dari proses yang sudah dilakukan pada modul tambah
console.log(hasil);