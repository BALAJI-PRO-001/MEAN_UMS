const express = require("express");
const { updateUser, deleteUser, uploadAvatar, downloadAvatar} = require("../controllers/user.controller");
const verifyToken = require("../utils/verifyToken");
const router = express.Router();

router.patch("/update/:id", verifyToken, updateUser)
      .delete("/delete/:id", verifyToken, deleteUser)
      .post("/upload/avatar", uploadAvatar)
      .get("/download/avatar/:fileName", downloadAvatar);

module.exports = router;

/*
  * PATCH: http://localhost:3000/api/v1/user/update/1
  * DELETE: http://localhost:3000/api/v1/user/delete/1
  * POST: http://localhost:3000/api/v1/user/upload/avatar
  * GET: http://localhost:3000/api/v1/user/download/avatar/1721574423851-Img-1.jpg
*/
