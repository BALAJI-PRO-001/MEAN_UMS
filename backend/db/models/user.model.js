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


async function getUserById(id) {
  const user = await new Promise((resolve, reject) => {
    mysql.query(queries.SELECT_USER_BY_ID_SQL, id, (err, data) => {
      if (err) reject(err);
      else resolve(data[0]);
    });
  });
  return user;
}


async function updateUser(id, values) {
  await new Promise((resolve, reject) => {
    const promises = [];
    for (let [key, value] of Object.entries(values)) {
      promises.push(new Promise((innerResolve, innerReject) => {
        const sql = mysql.format(queries.UPDATE_USER_SQL, [key, value, id]);
        mysql.query(sql, (err) => {
          if (err) innerReject(err);
          else innerResolve();
        });
      }));
    }
    Promise.all(promises)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
  return await getUserById(id);
}



async function deleteUser(id) {
  await new Promise((resolve, reject) => {
    mysql.query(queries.DELETE_USER_SQL, id, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}


module.exports = {
  add,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser
};


