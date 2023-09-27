const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: Number,
  },
  profile_pic: {
    type: String,
  },
  //   profile_pic2: {
  //     type: String,
  //   },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

exports.user = new mongoose.model("tbl_user", user_schema);
