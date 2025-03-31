const express = require("express");
const rootRoute = express.Router();

const signUp = require("./auth/signUp");
const login = require("./auth/login");

const getAllUsers = require("./user/getAllUsers");
const getUserById = require("./user/getUserById");
const createUser = require("./user/createUser");
const updateUser = require("./user/updateUser");
const deleteUser = require("./user/deleteUser");

const getAllOrders = require("./Order/getAllOrders");
const createOrder = require("./Order/createOrder");
const updateOrder = require("./Order/updateOrder");
const deleteOrder = require("./Order/deleteOrder");

const getAllProducts = require("./Product/getAllProducts");
const createProduct = require("./Product/createProduct");
const updateProduct = require("./Product/updateProduct");
const deleteProduct = require("./Product/deleteProduct");

rootRoute.use("/auth", signUp);
rootRoute.use("/auth", login);

//User
rootRoute.use("/users", getAllUsers);
rootRoute.use("/users", getUserById);
rootRoute.use("/users", createUser);
rootRoute.use("/users", updateUser);
rootRoute.use("/users", deleteUser);

rootRoute.use("/order", getAllOrders);
rootRoute.use("/order", createOrder);
rootRoute.use("/order", updateOrder);
rootRoute.use("/order", deleteOrder);

rootRoute.use("/product", getAllProducts);
rootRoute.use("/product", createProduct);
rootRoute.use("/product", updateProduct);
rootRoute.use("/product", deleteProduct);

module.exports = rootRoute;
