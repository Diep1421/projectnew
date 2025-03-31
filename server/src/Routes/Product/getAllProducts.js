const express = require("express");
const productRoute = express.Router();
const { getAllProducts } = require("../../Controllers/Product/getAllProducts");

productRoute.get("/get-all-products", getAllProducts);

module.exports = productRoute;
