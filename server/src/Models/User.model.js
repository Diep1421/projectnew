const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  },
  {
    versionKey: false,
  }
);
const User = mongoose.model("User", UserSchema);
module.exports = User;

/**
 * table ở trên sẽ viết được
 * auth: login, signin
 * users: getAllUsers, createUser, updateUser, deleteUser, getUserById
 */
