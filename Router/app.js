const express = require('express')

const app = express()

//membuat middelware 
app.use('/', function(req,res,next){
    console.log(req)
    console.log(res)
    next()
});

//membuat router
app.get('/table/:nilai', function(req,res){
    var nilai = req.params.nilai
    res.send("nilai anda adalah"+nilai)
})

//membuat link server
app.listen(3000, function(){
    console.log('berhasil dijalankan diport 3000')
})

