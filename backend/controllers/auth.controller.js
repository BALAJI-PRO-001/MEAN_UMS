const bcryptjs = require("bcryptjs");
const User = require("../db/models/user.model");
const errorHandler = require("../utils/errorHandler");

async function signUp(req, res, next) {
  try {
    const {name, email, password, avatar} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    await User.add(name, email, hashedPassword, avatar);
    res.status(201).json({
      success: true,
      message: "New user created"
    });
  } catch(err) {
    next(errorHandler(409, "Duplicate Key"));
  }
}


async function signIn(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({    
        success: false,
        message: "User not found"
      });
    }

    if (bcryptjs.compareSync(password, user.password)) {
      
    } else {
      res.status(401).json({
        success: false,
        message: "Unauthorized"
      });
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {
  signUp,
  signIn
};