const EventEmitter = require("events");

class a extends EventEmitter{}

const emitter = new a();

//listener 1
let listener1 = function(){
    console.log("Listener Satu telah berhasil diuat");
};

//listner 2
let listener2 = function(){
    console.log("listneer 2");
};

//listener 3
function listener3(){
    console.log("listener 3");
};

//hubungkan listener 1,2,3 dengan key "Connection"
emitter.on("koneksi", listener1);
emitter.on("koneksi", listener2);
emitter.on("koneksi", listener3);

//memanggil listenerCount pada modul EventEmitter
let count = EventEmitter.listenerCount(emitter,"koneksi");
//melihat berapa listener yang berhubungan dengan connction
console.log(count = "Listener(s) yang berhubungan dengan kye connction")
//memanggil key connction dan menampilkan evnet yang berhubungan dengan listener1,2 dan 3
emitter.emit("koneksi");