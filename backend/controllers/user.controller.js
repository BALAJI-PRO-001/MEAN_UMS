const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv").config();
const path = require("path");
const fs = require("fs");
const User = require("../db/models/user.model");
const upload = require("../utils/multer");
const errorHandler = require("../utils/errorHandler");

async function updateUser(req, res, next) {
  if (req.verifiedUserId != req.params.id) return next(errorHandler(401, "Unauthorized"));
  if (req.body.id) return next(errorHandler(400, "Cannot update id"));

  try {
    const userToUpdate = await User.getUserById(req.params.id);
    if (!userToUpdate) return next(errorHandler(404, "User not found"));
    if (req.body.password) req.body.password = bcryptjs.hashSync(req.body.password, 10);

    const updatedUser = await User.updateUser(req.params.id, req.body);
    const { password, ...rest } = updatedUser;
    res.status(200).json({
      success: true,
      data: {
        user: rest
      }
    });
  } catch(err) {
    next(errorHandler(409, "Duplicate Key"));
  }
}


async function deleteUser(req, res, next) {
  if (req.verifiedUserId != req.params.id) return next(errorHandler(401, "Unauthorized"));

  try {
    const { email, password } = req.body;
    const userToDelete = await User.getUserByEmail(email);
    if (!userToDelete) return next(errorHandler(404, "User not found"));
    const isvalidPassword = bcryptjs.compareSync(password, userToDelete.password);
    if (!isvalidPassword) return next(errorHandler(401, "Unauthorized"));

    await User.deleteUser(req.params.id);
    res.status(204).json({});
  } catch(err) {
    next(err);
  }
}


async function uploadAvatar(req, res, next) {
  upload(req, res, (err) => {
    if (err) return next(errorHandler(500, err.message));
    if (req.file == undefined) next(errorHandler(400, "No File Selected"));

    const { originalname, filename} = req.file;
    const downloadURL = `${req.protocol}://${req.hostname}:${process.env.PORT || 3000}/api/v1/user/download/avatar/${filename}`;
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: {
        originalname: originalname,
        downloadURL: downloadURL
      }
    });
  });
}


async function downloadAvatar(req, res, next) {
  try {
    const avatarFilePath = path.join(__dirname, "../uploads", req.params.fileName);
    if (!fs.existsSync(avatarFilePath)) next(errorHandler(404, "File not found"));
    res.status(200).sendFile(avatarFilePath);
  } catch(err) {
    next(err);
  }
}


module.exports = {
  updateUser,
  deleteUser,
  uploadAvatar,
  downloadAvatar
};

