const express = require("express");
const dotenv = require("dotenv").config();
const authRouter = require("./routes/auth.route");
const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server is running on port 3000!"));
