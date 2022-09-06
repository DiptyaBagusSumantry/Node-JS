const express = require('express')

const app = express()

//membuat midelware
app.use(function(req,res,next){
    console.log('Reguest : ', req)
    console.log('Response : '. res)
    next()
});

//ini router
app.get('/',function(req,res){
    res.send("Hallo Semuanya")
})

//ini portnya
app.listen(3000, function(){
    console.log('server berjalan di port 3000')
})