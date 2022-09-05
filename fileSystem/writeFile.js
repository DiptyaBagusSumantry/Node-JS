const fs = require('fs');
const { buffer } = require('stream/consumers');
//cara asyncornuse
fs.writeFile('./file/output.txt', 'menulis dengan write file.js',(err)=>{
    //do something
    console.log("berhasil ditulis di output.txt")
    //chech eror
    if(err) return console.error(err);
})

//cara syncronuse
try{
    fs.writeFileSync('./file/output.txt', 'dirubah dengan sync', {mode : 0o755} )
} catch(err){
    console.error(err);
}

//untuk bisa menghasilkan output di comnet salah satu caranya
// atau gunakan cara asyncronus saja atau syncronuse saja

//mengunakan buffer jika ingin run, comment asyncronuse dan sycnronuse nya
var buffer = new Buffer([0x48, 0x65, 0x6c, 0xf6f]);

fs.writeFile('./file/output.txt', buffer, function(err){
    if(err) return console.error(err);
})