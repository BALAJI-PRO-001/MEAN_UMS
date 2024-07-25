const path = require("path");
const fs = require("fs");

const HEADER_COMPONENT_PATH = path.join(__dirname, "../../client/views/components/header.component.html");
const INDEX_PAGE_PATH = path.join(__dirname, "../../client/views/index.html");
const SIGN_UP_PAGE_PATH = path.join(__dirname, "../../client/views/pages/sign-up.html");
const SIGN_IN_PAGE_PATH = path.join(__dirname, "../../client/views/pages/sign-in.html");

const headerHTML = fs.readFileSync(HEADER_COMPONENT_PATH, "utf-8");
const indexHTML = fs.readFileSync(INDEX_PAGE_PATH, "utf-8");
const signUpHTML = fs.readFileSync(SIGN_UP_PAGE_PATH, "utf-8");
const signInHTML = fs.readFileSync(SIGN_IN_PAGE_PATH, "utf-8");

function indexPage(req, res) {
  res.end(indexHTML.replace("{{HEADER}}", headerHTML));
}

function signUpPage(req, res) {
  res.end(signUpHTML.replace("{{HEADER}}", headerHTML));
}

function signInPage(req, res) {
  res.end(signInHTML.replace("{{HEADER}}", headerHTML));
}

module.exports = {
  indexPage,
  signUpPage,
  signInPage
};