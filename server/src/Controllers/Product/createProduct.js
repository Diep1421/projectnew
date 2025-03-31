const Product = require("../../Models/Product.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");
const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category, brand, images } =
      req.body;

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      brand,
      images,
    });

    return successCode(res, product, "tạo sản phẩm thành công");
  } catch (error) {
    console.error(error);
    return errorCode(error, "Lỗi 500");
  }
};

module.exports = { createProduct };
