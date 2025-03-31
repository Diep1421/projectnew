const express = require("express");
const productRoute = express.Router();
const { deleteProduct } = require("../../Controllers/Product/deleteProduct");

productRoute.delete("/delete-product/:id", deleteProduct);

module.exports = productRoute;
