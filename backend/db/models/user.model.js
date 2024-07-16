const mysql = require("../mysql");
const queries = require("../queries");

async function add(name, email, password, avatar) {
  await new Promise((resolve, reject) => {
    mysql.query(queries.INSERT_USER_RECORD_SQL, [[[name, email, password, avatar]]], (err) => {
      if (err) reject();
      else resolve();
    });
  });
}

module.exports = {
  add
};