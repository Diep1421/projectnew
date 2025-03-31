const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."));
require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.listen(PORT);
// tạo database từ config/initDB
// trong require lúc nào cũng có ""
require("../config/initDB")();
const bcrypt = require("bcrypt");

//tạo model(database)

const rootRoute = require("../Routes");
const Role = require("../Models/Role.model");
const User = require("../Models/User.model");

// Lây tất cả từ file src/Routes/index.js để sử dụng
// api sẽ có dạng ví dụ: localhost:5000/api/auth/signup
app.use("/api", rootRoute);
const seedRoles = async () => {
  const roles = ["admin", "user", "staff"];
  for (const role of roles) {
    const exists = await Role.findOne({ role_name: role });
    if (!exists) {
      await Role.create({ role_name: role, description: role });
    }
  }
};
// const seedUsers = async () => {
//   const adminRole = Role.findOne({ role_name: "admin" });
//   const exists = User.findOne({ email: "admin@gmail.com" });
//   console.log(exists);

//   if (!exists) {
//     await User.create({
//       email: "admin@gmail.com",
//       password: await bcrypt.hash("123456", 10),
//       role: adminRole._id,
//     });
//   }
// };
const runSeed = async () => {
  console.log("Start seed data...");
  await seedRoles();
  // await seedUsers();
  console.log("Seed data completed.");
};

runSeed();
