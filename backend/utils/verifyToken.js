
function verifyToken(req, res, next) {
  console.log(req.cookies);
}

module.exports = verifyToken;