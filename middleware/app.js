const express = require ('express')

const app = express()

app.use('/', (req,res,next)=>{
    console.log("selalu  berjalan");
    next();
});

app.get('/tambahProduk',(req,res)=>{
    console.log("ini adalah menu tmabah produk");
    res.send("TAMBAH PRODUK");
});

app.use('/',(req,res)=>{
    console.log("ini sama yaa");
}).listen(3001);
