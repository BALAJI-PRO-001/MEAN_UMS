// const jwt = require("jsonwebtoken");

// const token = jwt.sign({id: 1}, "Balaji*)*()(*");

// console.log(token);\

const user = {
  "id": 8,
  "name": "Balaji",
  "email": "balaji@gmail.com",
  "password": "$2a$10$4qRkU6p/Q9J5MwB9NrZu5OUy4888eTZZVwZpdkHll.YOeJfNPopLC",
  "avatar": "some url"
};

const { password, ...rest } = user;

console.log(rest);