const EventEmiter = require('events');

class MyEmitter extends EventEmiter{}  
// callbacks adalah  sebuah fungsi  ketika dipanggil ketika ada event terntentu 

const myEmitter = new MyEmitter();

myEmitter.on("budi",() =>{
    console.log("Terpanggil Budi");
});
