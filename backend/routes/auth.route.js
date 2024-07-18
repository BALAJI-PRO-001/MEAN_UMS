const express = require("express");
const { signUp, signIn, signOut } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", signUp)
      .post("/sign-in", signIn)
      .get("/sign-out", signOut);

module.exports = router;

/*
  * POST: http://localhost:3000/api/v1/auth/sign-up
  * POST: http://localhost:3000/api/v1/auth/sign-in
  * GET: http://localhost:3000/api/v1/auth/sign-out
*/