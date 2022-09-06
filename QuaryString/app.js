//queryString untuk mengambil query(data) dari sebuah URL
const express = require('express');

const app = express();

app.use(express.urlencoded({extended : false})); //middleware 
app.use(express.json());

//fungsi untuk menghandle root path
app.get('/', (req,res)=> {
    //akses provided page and limit parameter
    // let page = req.query.page;
    // let limit = req.query.limit;
    const {page, limit} = req.query; // lebih pendek
    res.send(`page : ${page}, limit : ${limit}`);
}).listen(8080, function(){
    console.log("server is listening on port 8080");
});
