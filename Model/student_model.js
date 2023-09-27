const mongoose = require("mongoose");

const student_schema = new mongoose.Schema({
  first_name: {
    type: String,
    require: true,
  },
  last_name: {
    type: String,
    require: true,
  },
  student_pic: {
    type: String,
  },
  marks: {
    type: Number,
  },
  attendance: {
    type: Number,
  },
});

exports.student = new mongoose.model("tbl_student", student_schema);
