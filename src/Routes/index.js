const fs = require("fs");
const normalized_path = require("path").join(__dirname);

const routes = (app) => {
    fs.readdirSync(normalized_path).filter(function (file) {
        if (file.indexOf(".js") > -1 && file != "index.js") {
            return require("./" + file)({ app });
        }
    });
};

module.exports = routes;