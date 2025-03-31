const express = require("express");
const orderRoute = express.Router();
const { createOrder } = require("../../Controllers/Order/createOrder");

orderRoute.post("/create-order", createOrder);

module.exports = orderRoute;
