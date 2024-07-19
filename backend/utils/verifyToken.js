const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const accessToken = req.cookies.access_token;
  
  if (!accessToken) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
  }

  jwt.verify(accessToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: "Forbidden"
      });
    } 
    req.verifiedUserId = decoded.id;
    next();
  });
}

module.exports = verifyToken;