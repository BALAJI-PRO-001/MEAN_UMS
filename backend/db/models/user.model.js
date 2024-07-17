const mysql = require("../mysql");
const queries = require("../queries");

async function add(name, email, password, avatar) {
  await new Promise((resolve, reject) => {
    mysql.query(queries.INSERT_USER_RECORD_SQL, [[[name, email, password, avatar]]], (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}


async function getUserByEmail(email) {
  const user = await new Promise((resolve, reject) => {
    mysql.query(queries.SELECT_USER_BY_EMAIL_SQL, email, (err, data) => {
      if (err) reject(err);
      else resolve(data[0]);
    });
  });
  return user;
}

module.exports = {
  add,
  getUserByEmail
};


