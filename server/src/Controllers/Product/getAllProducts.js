const Product = require("../../Models/Product.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const getAllProducts = async (req, res) => {
  const {
    keyword,
    sortBy = "price",
    page = 1,
    limit = 10,
    order = "asc",
  } = req.query;
  try {
    const filter = keyword
      ? { name: { $regex: new RegExp(keyword, "i") } }
      : {};
    const sortOrder = order === "desc" ? -1 : 1;

    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);

    const skip = (pageInt - 1) * limitInt;
    const result = await Product.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limitInt);
    const totalProducts = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalProducts / limitInt);
    if (result) {
      return successCode(
        res,
        { result, totalProducts, page: pageInt, totalPages: totalPages },
        "lấy danh sách Product thành công"
      );
    }
    return failCode(res, "", "Danh sách Product trống");
  } catch (error) {
    return errorCode(error, "Lỗi 500");
  }
};
module.exports = { getAllProducts };
