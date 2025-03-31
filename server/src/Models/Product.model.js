const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: String,
    },
    stock: {
      type: String,
    },
    category: {
      type: Number,
    },
    brand: {
      type: String,
    },
    images: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
  }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;

/**
 * table ở trên sẽ viết được
 * auth: login, signin
 * Products: getAllProducts, createProduct, updateProduct, deleteProduct, getProductById
 */
