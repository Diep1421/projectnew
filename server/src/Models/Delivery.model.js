const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliverySchema = new Schema(
  {
    delivery_name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
const Delivery = mongoose.model("Delivery", DeliverySchema);
module.exports = Delivery;

/**
 * table ở trên sẽ viết được
 * auth: login, signin
 * Deliverys: getAllDeliverys, createDelivery, updateDelivery, deleteDelivery, getDeliveryById
 */
