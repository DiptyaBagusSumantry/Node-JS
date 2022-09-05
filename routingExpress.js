var express = require('express');// modul express
var bodyParser = require('body-parser');

var app= express(); //menyipan padas variabel app

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/index.html', function(req,res){ //membuat routing index.html
    res.sendFile(__dirname + "/" + "index.html"); // menampilkan form html
});

app.post('/user', function(req,res){ //pada link web 8888/user tampilan
    response = { //mersepon data 
        First_Name : req.body.First_Name, // nama pertama
        Last_Name : req.body.Last_Name, // nama terakhir
        gender : req.body.gender // jenis kelamin
    };
    console.log(response); //tampil di layar
    res.end(JSON.stringify(response)); //di convert ke format json
});

var server = app.listen(8888, function(){ // membuat serven listen di 8888
    var host = server.address().address
    var port = server.address().port
    console.log("kode app listening at ", host, port);
});

// const kampusMerdeka = (isi parameter) => {};  lebih Ringkas pake ini kalo callback //fungsi expresion

// () => {} namanya anonymouse function
//lebih cepat tidak menggunakan fungsi

//function kampusMerdeka (isi parameter){}; // fungsi deklarasi 
