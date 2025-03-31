const Order = require("../../Models/Order.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");

const getAllOrders = async (req, res) => {
  const {
    keyword,
    sortBy = "totalPrice",
    page = 1,
    limit = 10,
    order = "asc",
  } = req.query;
  try {
    const filter = keyword
      ? { status: { $regex: new RegExp(keyword, "i") } }
      : {};
    const sortOrder = order === "desc" ? -1 : 1;

    const pageInt = parseInt(page);
    const limitInt = parseInt(limit);

    const skip = (pageInt - 1) * limitInt;
    const result = await Order.find(filter)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(limitInt);
    const totalOrders = await Order.countDocuments(filter);
    const totalPages = Math.ceil(totalOrders / limitInt);
    if (result) {
      return successCode(
        res,
        { result, totalOrders, page: pageInt, totalPages: totalPages },
        "lấy danh sách Order thành công"
      );
    }
    return failCode(res, "", "Danh sách Order trống");
  } catch (error) {
    return errorCode(error, "Lỗi 500");
  }
};
module.exports = { getAllOrders };
