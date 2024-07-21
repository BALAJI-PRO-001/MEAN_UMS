const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: (req, file, callback) => {
    const fileName = Date.now() + "-" + file.originalname;
    callback(null, fileName);
  }
});

const upload = multer({
  storage: storage,
  limits: 2000000
}).single("avatar");

module.exports = upload;
