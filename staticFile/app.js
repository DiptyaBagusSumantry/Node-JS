const express = require('express');

const app = express();
const port = 3000;


app.get('/', (req,res)=>{
    res.sendFile('./tampilan/home.html',{root:__dirname});
});

app.get('/kontak', (req,res)=>{
    res.sendFile('./tampilan/kontak.html',{root: __dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./tampilan/about.html', {root: __dirname});
});

app.get('/*', (req,res)=>{
    res.send("NOT FOUND")
});

app.listen(port, ()=>{
    console.log(`Program Berjalan Pada port : ${port}`);
});
