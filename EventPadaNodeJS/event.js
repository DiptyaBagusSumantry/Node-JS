const { EventEmitter } = require('events');

//membuat kelas dengan extands modul events
class MyEmitter extends EventEmitter{}

//membuat objek baru dari class myemiteer
const a = new MyEmitter();

//membuat listener baru dengan key "event"
a.on("event", ()=>{ // callback dan a.on untuk mendaftarkan listener
    //event
    console.log("ini dari .on dapat dipanggil lebih dari satu kali");
});

a.on("error", ()=>{
    console.error("upss, terjadi erorr");
});

a.once("once", ()=>{
    //event
    console.log("ini dari .once Hanya dapat dipanggil/ditampilkan satu kali");
});

//memanggil listener yang key-nya "event"
a.emit("event"); //emit() digunakan untuk memicu event
a.emit("event");
a.emit("once");
a.emit("once");
a.emit("error");
