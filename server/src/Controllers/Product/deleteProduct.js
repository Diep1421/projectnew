const Product = require("../../Models/Product.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params; // Lấy ID từ params

    const product = await Product.findByIdAndDelete(id); // Xóa tác giả theo ID

    console.log("Deleted Product:", product);

    if (!product) {
      return failCode(res, null, "Không tìm thấy Product để xóa");
    }

    return successCode(res, product, "Xóa Product thành công");
  } catch (error) {
    return errorCode(res, error, "Lỗi 500");
  }
};

module.exports = { deleteProduct };
