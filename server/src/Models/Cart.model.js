const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    products: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      require: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;

/**
 * table ở trên sẽ viết được
 * auth: login, signin
 * Carts: getAllCarts, createCart, updateCart, deleteCart, getCartById
 */
