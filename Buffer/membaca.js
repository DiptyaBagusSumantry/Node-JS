const buf = Buffer.allocUnsafe(26); //membuat buffer dengan panjang 26
for(var i = 0; i<26; i++){ //melakukan perulangan for
    buf [i] = i + 97;
}

// memanggil buff dari const dan to String merubah data buffer menjadi string
//menggunakan ascii atau utf8 untuk defaultnya
console.log(buf.toString('ascii'));//menampilkan semuanya 

console.log(buf.toString('ascii',0,5)); // menampilkan data 0 sampai 4 dngn jumlah dat 5
// angka 0 artinya start dan angka 5 artinya end
console.log(buf.toString('utf8',0,6));
console.log(buf.toString(undefined,0,7));