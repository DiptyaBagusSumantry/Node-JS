//membuat perubahan ke respon dan request
//mengakhiri request
//middelware mengeksekusi dari atas kke bawah

var express = require('express');
var app = express();

app.use('/kode',function(req,res,next){
    console.log("START  "+ Date.now());
    next();
});

app.get('/kode', function(req,res,next){
    res.send('KODE MIDDLE');
    next();
});

app.use('/kode',function(req,res){
    console.log("END  "+ Date.now());

});

app.listen(3000);