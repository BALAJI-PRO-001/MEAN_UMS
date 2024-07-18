const express = require("express");
const { updateUser } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyToken");
const router = express.Router();

router.patch("/update/:id", verifyToken, updateUser);

module.exports = router;

/*
  * http://localhost:3000/api/v1/user/update/1
*/