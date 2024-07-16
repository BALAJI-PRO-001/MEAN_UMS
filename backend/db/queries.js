const CREATE_USER_TABLE_SQL = `CREATE TABLE USERS (
                                ID INT AUTO_INCREMENT PRIMARY KEY,  
                                NAME VARCHAR(50) NOT NULL,
                                EMAIL VARCHAR(255) NOT NULL UNIQUE,
                                PASSWORD VARCHAR(255) NOT NULL,
                                AVATAR VARCHAR(255) NOT NULL
                              )`.toLowerCase();

const INSERT_USER_RECORD_SQL = "INSERT INTO USERS (NAME, EMAIL, PASSWORD, AVATAR) VALUES ? ";                  
                      
module.exports = {
  CREATE_USER_TABLE_SQL,
  INSERT_USER_RECORD_SQL
};