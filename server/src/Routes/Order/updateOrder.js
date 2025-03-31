const express = require("express");
const orderRoute = express.Router();
const { updateOrder } = require("../../Controllers/Order/updateOrder");

orderRoute.put("/update-order/:id", updateOrder);

module.exports = orderRoute;
