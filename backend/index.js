const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port 3000!"));
