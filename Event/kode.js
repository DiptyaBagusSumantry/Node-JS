const EventEmiter = require ("events").EventEmitter; //memanggil modul events

class Dog extends EventEmiter{}//kelas dog keturunan dari kelas EventEmiter
class Food{}//membuat kelas Food
let myDog = new Dog(); //membuat objek mydog

myDog.on("chew", item =>{
    if(item instanceof Food){
        console.log("Good Dog");
    } else{
        console.log(`Time to buy another ${item}`);
    }
});

myDog.emit("chew", "Shoe");
const bone = new Food();
myDog.emit("chew", bone);