const express = require("express");
const { updateUser, deleteUser } = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyToken");
const router = express.Router();

router.patch("/update/:id", verifyToken, updateUser)
      .delete("/delete/:id", verifyToken, deleteUser);

module.exports = router;

/*
  * PATCH: http://localhost:3000/api/v1/user/update/1
  * DELETE: http://localhost:3000/api/v1/user/delete/1
*/
