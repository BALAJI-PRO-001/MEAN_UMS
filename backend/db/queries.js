const CREATE_USER_TABLE_SQL = `CREATE TABLE USERS (
                                ID INT AUTO_INCREMENT PRIMARY KEY,  
                                NAME VARCHAR(50) NOT NULL,
                                EMAIL VARCHAR(255) NOT NULL,
                                PASSWORD VARCHAR(255) NOT NULL,
                                AVATAR VARCHAR(255) NOT NULL
                              )`.toLowerCase();

                              
module.exports = {
  CREATE_USER_TABLE_SQL
};