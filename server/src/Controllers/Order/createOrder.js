const Order = require("../../Models/Order.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");
const createOrder = async (req, res) => {
  try {
    const { customer, products, totalPrice, status, paymentMethod } = req.body;
    const order = await Order.create({
      customer,
      products,
      totalPrice,
      status,
      paymentMethod,
    });

    return successCode(res, order, "tạo đơn hàng thành công");
  } catch (error) {
    console.error(error);
    return errorCode(error, "Lỗi 500");
  }
};

module.exports = { createOrder };
