const express = require("express");
const { signUp, signIn } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", signUp)
      .post("/sign-in", signIn);

module.exports = router;

/*
  * POST: http://localhost:3000/api/v1/auth/sign-up
  * POST: http://localhost:3000/api/v1/auth/sign-in
*/