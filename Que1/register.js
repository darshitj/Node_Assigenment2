const { user } = require("../Model/user_model");
const { validationResult } = require("express-validator");

exports.register = async (req, res) => {
  try {
    console.log("from dd");
    const { lastName, firstName, email, password } = req.body;

    const profile_pic1 = req.file.filename;
    console.log(req.body);
    console.log(req.file);
    console.log(password);
    console.log(profile_pic1);

    const user_insert = new user({
      name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      profile_pic: profile_pic1,
    }).save();

    if (user_insert) {
      res.render("login");
    }
  } catch (err) {
    console.log(err);
  }
};
