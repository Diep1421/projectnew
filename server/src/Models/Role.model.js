const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema(
  {
    role_name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);
const Role = mongoose.model("Role", RoleSchema);
module.exports = Role;
