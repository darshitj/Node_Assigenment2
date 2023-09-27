const { check } = require("express-validator");

exports.registration_validation = () => {
  return [
    check("name").notEmpty().withMessage("Name is require"),
    check("last_name").notEmpty().withMessage("Name is require"),
    check("email").notEmpty().withMessage("Email is require"),
    check("email").isEmail().withMessage("Invalid Email Format "),
    check("password").notEmpty().withMessage("Passwoord is required"),
    check("profile_pic1").notEmpty().withMessage("Profile pic1 is required "),
    check("profile_pic2").notEmpty().withMessage("Profile pic1 is required"),
  ]; 
};
