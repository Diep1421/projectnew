const express = require("express");
const authRoute = express.Router();
const { login } = require("../../Controllers/auth/login");

authRoute.post("/login", login);

module.exports = authRoute;
