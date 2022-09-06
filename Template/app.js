const express = require('express');
const app = express();

app.set("view engine", 'pug');

app.get('/', (req,res)=>{
    res.send("hallo");
    res.render("index", { //render untuk membaca sebuah file
        title: "Ini Judul", 
        message: "Hallo there"});
});
// app.get('/'. function(req,res){
//     res.send("index", {title: "Hy". message: "Hallo there"});
// });

app.listen(3002,()=>{console.log("jalan")});