const modul = require('./aritmatika'); // const artinya konstata tetap

let hasilKali = modul.kali(5,4); //let hanya diakses dalam perulangan
let a = 3, b = 7; // var dapat diakses dalam satu function 
console.log("hasil kali :" +hasilKali);
console.log("Hasil tambah : "+modul.tambah(a,b));
console.log("Hasil Kurang : " +modul.kurang(b,a));

