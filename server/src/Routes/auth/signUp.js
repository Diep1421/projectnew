const express = require("express");
const authRoute = express.Router();
const { signUp } = require("../../Controllers/auth/signUp");
authRoute.post("/signup", signUp);
module.exports = authRoute;
