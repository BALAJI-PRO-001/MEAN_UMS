const express = require("express");
const { signUp } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/sign-up", signUp);

module.exports = router;

/*
  * POST: http://localhost:3000/api/v1/auth/sign-up
*/