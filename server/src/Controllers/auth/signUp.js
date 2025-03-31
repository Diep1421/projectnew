const User = require("../../Models/User.model");
const Role = require("../../Models/Role.model");
const { failCode, successCode, errorCode } = require("../../config/reponse");
const bcrypt = require("bcrypt");
const signUp = async (req, res) => {
  try {
    const { user_name, first_name, last_name, email, password, phone } =
      req.body;
    // Kiểm tra nếu email đã tồn tại trong hệ thống
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return failCode(res, "", "Email đã tồn tại.");
    }
    //tìm role là user
    const userRole = await Role.findOne({ role_name: "user" });
    // Tạo người dùng mới và lưu vào database
    const user = await User.create({
      user_name,
      first_name,
      last_name,
      email,
      password: await bcrypt.hash(password, 10),
      phone,
      role: userRole._id,
    });

    return successCode(
      res,
      {
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
      },
      "Đăng Ký thành công"
    );
  } catch (error) {
    return errorCode(res, "Lỗi 500");
  }
};

module.exports = { signUp };
