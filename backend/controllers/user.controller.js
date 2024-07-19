const User = require("../db/models/user.model");
const errorHandler = require("../utils/errorHandler");

async function updateUser(req, res, next) {
  if (req.verifiedUserId != req.params.id) {
    return next(errorHandler(401, "Unauthorized"));
  }

  if (req.body.id) {
    return next(errorHandler(400, "Cannot update id"));
  }

  // const userToUpdate = await User.getUserById(req.params.id);
  // console.log(userToUpdate);
}

module.exports = {
  updateUser
};