const buf = Buffer.allocUnsafe(100); //membuat buffer dengan panjang 100
const len = buf.write("Halo dari kode");//cara menulis buffer

console.log("octets written : "+len) // menampilkan hasil