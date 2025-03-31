const express = require("express");
const productRoute = express.Router();
const { createProduct } = require("../../Controllers/Product/createProduct");

productRoute.post("/create-product", createProduct);

module.exports = productRoute;
