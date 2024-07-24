const express = require("express");
const { indexPage } = require("../controllers/page.controller");
const router = express.Router();

router.get("/", indexPage);

module.exports = router;

/* 
  GET: /
*/