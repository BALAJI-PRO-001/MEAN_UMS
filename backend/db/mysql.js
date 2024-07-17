const mysql = require("mysql2");
const queries = require("./queries");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.MYSQL_DB_HOST,
  port: process.env.MYSQL_DB_PORT,
  user: process.env.MYSQL_DB_USER, 
  // password: process.env.MYSQL_DB_PASSWORD,
  database: "mean_ums"
});

db.connect((err) => {
  if (err) throw err; 
  
  db.query(queries.CREATE_USER_TABLE_SQL, (err) => {
    if (err && !err.message.includes("Table 'users' already exists")) {
      console.log("Error: " + err.message);
      return;
    }
    console.log("Mysql database connected!");
  });
});

module.exports = db;