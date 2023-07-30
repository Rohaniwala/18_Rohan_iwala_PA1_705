var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('../Q5/Q5.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('../Q5/xyz.txt', 'utf-8'))

console.log("dcompress done")