//npm install express --save (((CMD))) ===>> install modull express tampil node_modulus dan package.lock.json
//npm install ejs --save ===>>> memungkinkan berinteraski dengan variabel dan html dinamis
//selain ejs ada juga pug untuk akses template & template engine
//npm install body-parser --save =====>> menggunakan post tidak tampil di link
//npm install request --save 
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

const apiKey = '708645b6db497bb72c9aed124c3e59ca';// pin dari API cuaca

//seharusnya middleware
app.use(express.static('public')); //penggunan publik, bisa mengakses css
app.use(bodyParser.urlencoded({extended:true}));// dari modul body parser

app.set('view engine', 'ejs'); //template engine

app.get('/', function(req,res){
    res.render('index', {weather:null, error:null});
    //res.render('index'); //karena akan merender indes.ejs
});

app.post('/', function(req, res){
    let city = req.body.city; //menampilkan kota/city
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    request(url, function(err,response,body){
        if(err){
            res.render('index',{weather: null, error: 'Error, ini please try again'});
        }else {
            let weather = JSON.parse(body);
            if(weather.main == undefined){ //jika user bukan memasukan nama kota(string) yaitu angka
                res.render('index',{weather: null, error: 'Error, itu please try again'});// akan menampilkan eror dan cba lagi
            }else {
                let weatherText = `it's ${weather.main.temp} degrees in ${weather.name}!`; //respon ketika berhasil 
                res.render('index',{weather : weatherText, error : null});
            }
        }
    })
});

app.listen(3000, function(){
    console.log("Kode weather listening on port 3000");
})