const User = require("../db/models/user.model");

async function signUp(req, res) {
  try {
    const {name, email, password} = req.body;
    await User.add(name, email, password, "some url");
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  signUp
};