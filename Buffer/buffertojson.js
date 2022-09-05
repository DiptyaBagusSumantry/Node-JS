const buf = new Buffer('Sedang belajar Node.js');

const json = buf.toJSON(buf);

console.log(json);