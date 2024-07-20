const bcryptjs = require("bcryptjs");
const User = require("../db/models/user.model");
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


module.exports = {
  updateUser,
  deleteUser
};