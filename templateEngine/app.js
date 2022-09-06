const express = require('express');
const app = express();

app.set("view engine","pug");

app.get('/', (req,res)=>{
    res.render("index",{
        judul : "Landing-Page",
        pesan: "Welcome"
    });
})

app.listen(3000, ()=>{
    console.log("berjalan di port 3000")
});