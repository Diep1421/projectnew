import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CallSignUp } from "../../redux/reducers/auth/signUp"; // Đảm bảo CallSignUp đã được import đúng

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Kiểm tra mật khẩu nhập lại
    if (formData.password !== formData.confirmpassword) {
      Swal.fire({
        icon: "error",
        title: "Lỗi!",
        text: "Mật khẩu không khớp!",
      });
      return;
    }

    const res = await CallSignUp({
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      phone: formData.phone, // Gửi thông tin số điện thoại
    });

    console.log(res);
    if (res?.data?.statusCode == 200) {
      Swal.fire({
        icon: "success",
        title: "Đăng ký thành công!",
        showConfirmButton: false,
        timer: 3000, // Thông báo thành công trong 3 giây
      });

      setTimeout(() => {
        navigate("/login"); // Chuyển hướng đến trang đăng nhập
      }, 3000);
    }
    if (res.status == 400) {
      Swal.fire({
        icon: "error",
        title: "Email đã tồn tại",
        showConfirmButton: false,
        timer: 3000, // Thông báo thành công trong 3 giây
      });
    }
  };
  return (
    <div className="mx-auto px-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl text-center font-bold py-3 text-purple-500 ">
        Register here
      </h1>
      <form
        action=""
        onSubmit={handleSignUp}
        className="bg-pink-200 w-auto  rounded-md px-2 py-2"
      >
        <div className="mb-4">
          <label>Tên đăng nhập:</label>
          <input
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Nhập tên đăng nhập"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label for="first_name">first_name</label>
          <input
            name="first_name"
            type="text"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Nhập first_name"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label for="last_name">last_name:</label>
          <input
            name="last_name"
            type="text"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Nhập last_name"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label for="email">email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label>password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Nhập password"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label>Xác Nhận password</label>
          <input
            name="confirmpassword"
            type="password"
            value={formData.confirmpassword}
            onChange={handleChange}
            placeholder="Nhập password"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <div className="mb-4">
          <label for="phone">phone</label>
          <input
            name="phone"
            type="number"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập phone"
            className="w-full px-3 py-2 border-3 border-yellow-300 rounded focus:outline-none focus:ring focus:border-red-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded transition duration-200"
        >
          Đăng Ký
        </button>
      </form>
      <p className="text-center text-gray-600 mt-4">
        Bạn đã có tài khoản? <a href="/login">Đăng Nhập</a>
      </p>
    </div>
  );
}
