const fs = require('fs');
const normalizedPath = require("path").join(__dirname);

const models = fs.readdirSync(normalizedPath).filter(function (file) {
    if (file.indexOf(".js") > -1 && file != "index.js")
        return require('./' + file);
});
module.exports = models