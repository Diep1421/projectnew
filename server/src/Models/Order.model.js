const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          require: true,
        },
        quantity: { type: Number },
      },
    ],
    total_price: { type: Number },
    status: {
      type: String,
      enum: ["pending", "processing", "delivered", "cancelled"],
      default: "pending",
    },
    payment_method: {
      type: String,
      enum: ["COD", "Credit Card", "Bank Transfer"],
      require: true,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      require: true,
    },
    delivery: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Delivery",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;

/**
 * table ở trên sẽ viết được
 * auth: login, signin
 * Orders: getAllOrders, createOrder, updateOrder, deleteOrder, getOrderById
 */
