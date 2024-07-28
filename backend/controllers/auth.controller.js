const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
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
    const validUser = await User.getUserByEmail(email);
    if (!validUser) return next(errorHandler(404, "User not found"));
    const isValidPassword = bcryptjs.compareSync(password, validUser.password);
    if (!isValidPassword) return next(errorHandler(401, "Unauthorized"));

    const accessToken = jwt.sign({id: validUser.id}, process.env.JWT_SECRET_KEY);
    const { password: _, ...rest } = validUser;
    res.status(200).cookie("access_token", accessToken, {httpOnly: true}).json({
      success: true,
      data: {
        user: rest
      }
    });
  } catch(err) {
    next(err);
  }
}


async function signOut(req, res, next) {
  try {
    res.status(200).clearCookie("access_token").json({
      success: true,
      message: "User has been logged out"
    });
  } catch(err) {
    next(err);
  }
}


module.exports = {
  signUp,
  signIn,
  signOut
};