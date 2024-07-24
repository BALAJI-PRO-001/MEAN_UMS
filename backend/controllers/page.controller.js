const path = require("path");
const fs = require("fs");

const INDEX_PAGE_PATH = path.join(__dirname, "../../client/views/index.html");

const indexHTML = fs.readFileSync(INDEX_PAGE_PATH, "utf-8");

function indexPage(req, res) {
  res.end(indexHTML);
}

module.exports = {
  indexPage
};