const express = require("express");
const { indexPage, signUpPage, signInPage } = require("../controllers/page.controller");
const router = express.Router();

router.get("/", indexPage)
      .get("/sign-up", signUpPage)
      .get("/sign-in", signInPage);

module.exports = router;

/* 
  * GET: /
  * GET: /sign-up
  * GET: /sign-in
*/