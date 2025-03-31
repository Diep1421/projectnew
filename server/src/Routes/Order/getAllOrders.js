const express = require("express");
const orderRoute = express.Router();
const { getAllOrders } = require("../../Controllers/Order/getAllOrders");

orderRoute.get("/get-all-orders", getAllOrders);

module.exports = orderRoute;
