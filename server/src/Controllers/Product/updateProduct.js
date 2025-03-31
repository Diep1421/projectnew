const Product = require("../../Models/Product.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params; // Lấy id từ params
    const { name, description, price, stock, category, brand, images } =
      req.body;
    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        name,
        description,
        price,
        stock,
        category,
        brand,
        images,
      },
      { new: true }
    );
    if (!product) {
      return failCode(res, null, "Không tìm thấy Product");
    }
    return successCode(res, product, "Cập nhật Product thành công");
  } catch (error) {
    return errorCode(res, error, "Lỗi 500");
  }
};

module.exports = { updateProduct };
