// const { file } = require('claudia-bot-builder/lib/facebook/format-message');
const fs = require('fs');
const util = require('util');

const unlinkAsync = util.promisify(fs.unlink);

const path = "./abcd.txt";

unlinkAsync(path)
    .then(() => {
        console.log("fille Deleted");
    })
    .catch(() => {
        console.log("some error are there");
    })