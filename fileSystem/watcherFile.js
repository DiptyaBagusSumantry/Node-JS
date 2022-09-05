//melihat perubahan pada folder
// monitor folder

const fs = require('fs'); // memanggil modul fs

const watcher = fs.watch('./file')//direktori mau dimonitor

//function watcher
watcher.on('change', function(event, filename){ //melihat file
    console.log(`${event} pada file ${filename}`);
})