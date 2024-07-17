const bcryptjs = require("bcryptjs");

const password = "Balaji1234";

const hashedPassword = bcryptjs.hashSync(password, 10);

console.log(hashedPassword);

