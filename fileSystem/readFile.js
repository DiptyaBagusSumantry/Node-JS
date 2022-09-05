// file system  untuk menulis, membaca 
//readfile untuk membaca file
const fs = require('fs'); // melakkukan request

//asyncornuse pake lms
// readFile untuk membaca filenya dari kode.txt
fs.readFile('./file/kode.html', {encoding : 'utf8'}, (err,content) => {  //callback function =>
    //do something
    if(err) return console.error(err);
    console.log(content);
});

//syncronuse
//const data = fs.readFileSync('/path/to/file')