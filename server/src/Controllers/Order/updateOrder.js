const Order = require("../../Models/Order.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params; // Lấy id từ params
    const { customer, products, totalPrice, status, paymentMethod } = req.body;
    const order = await Order.findOneAndUpdate(
      { _id: id },
      {
        customer,
        products,
        totalPrice,
        status,
        paymentMethod,
      },
      { new: true }
    );
    if (!order) {
      return failCode(res, null, "Không tìm thấy Order");
    }
    return successCode(res, order, "Cập nhật Order thành công");
  } catch (error) {
    return errorCode(res, error, "Lỗi 500");
  }
};

module.exports = { updateOrder };
