const EventEmiter = require('events');//memanggil modul events
class myEmitter extends EventEmiter{}//membuat kelas myEmitter keturunan dari EventEmitter
var emitter = new myEmitter(); //membuat objek emitter

emitter
.on("message", function(){
    console.log('satu pesan emitter');
})
.on("message", function(){
    console.log('pesan kedua, bukan pesan yang benar');
})
.on("data",function(){
    console.log("Pesan untuk data");
})

console.log(emitter.eventNames());
emitter.removeAllListeners("data");
console.log(emitter.eventNames());
