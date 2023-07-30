var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('/Q5/Q5.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./Q5.txt.gz'))

console.log("Zippes Done");



