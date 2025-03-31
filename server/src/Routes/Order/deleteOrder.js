const express = require("express");
const orderRoute = express.Router();
const { deleteOrder } = require("../../Controllers/Order/deleteOrder");

orderRoute.delete("/delete-order/:id", deleteOrder);

module.exports = orderRoute;
