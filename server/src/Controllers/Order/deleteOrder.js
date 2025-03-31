const Order = require("../../Models/Order.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID từ params

    const order = await Order.findByIdAndDelete(id); // Xóa tác giả theo ID

    console.log("Deleted Order:", order);

    if (!order) {
      return failCode(res, null, "Không tìm thấy Order để xóa");
    }

    return successCode(res, order, "Xóa Order thành công");
  } catch (error) {
    return errorCode(res, error, "Lỗi 500");
  }
};

module.exports = { deleteOrder };
