// Npm init yaitu membuat file .json yang berisi informasi,
// Npm install express –save yaitu untuk intall express
// Npm install body-parser – save yaitu untuk intall body untuk middleware untuk menghandle jason.
// membuat server dengan express

const { resolveSoa } = require('dns');
var express = require('express');
const { futimesSync } = require('fs');
var app = express();

app.get('/', function(req,res){ // callback function
    console.log("mendapat GET dari homepage") //menampilkan pada CLI/CMD
    res.send("Halo dari server kode"); // menampilkan pada web browser
})

//
app.post('/', function(req,res){
    console.log("mendapat POST dari homepage")
    res.send('Hallo Post')
})
///list_user merupakan tahap routing agar terkoneksi satu sama lainya
app.get('/list_user', function(req,res){
    console.log("mendapat GET dari LIST USER")
    res.send('Hallo get dari user')
})

app.get('/ko*de', function(req,res){ // tanda bintang untuk identifikasi kalo bintang bisa diubah pada bagian tengah di link browser, contoh : localhost:8000/ko1234de
    console.log("mendapat GET dari ko*de")//menampilkan lewat cli 
    res.send('Hallo get match') // menampilkan lewat browser
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Basic Routing Listening Pada port", host, port);
});

//ada res.send, res.write, rs.end, rs.writeHead