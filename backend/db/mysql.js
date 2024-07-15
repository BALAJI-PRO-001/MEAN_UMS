const mysql = require("mysql2");
const queries = require("./queries");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", 
  // password: "<your password>",
  database: "mern_ums"
});

db.connect((err) => {
  if (err) throw err; 
  
  db.query(queries.CREATE_USER_TABLE_SQL, (err) => {
    if (err) throw err;
    console.log("Mysql database connected!");
  });
});