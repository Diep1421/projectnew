const express = require("express");
const productRoute = express.Router();
const { updateProduct } = require("../../Controllers/Product/updateProduct");

productRoute.put("/update-product/:id", updateProduct);

module.exports = productRoute;
