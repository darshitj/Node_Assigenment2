const express = require("express");
const {
  registration_validation,
} = require("./Validation/user_registration_validation");
const { register } = require("./Que1/register");
require("dotenv").config();
const app = express();
const multer = require("multer");
const path = require("path");
const { login } = require("./Que2/login");
const { error } = require("console");
const cookieParser = require("cookie-parser");
const {
  student_data_disply,
  student_create,
  student_delete,
  student_edit,
  student_edit_display,
} = require("./Que4/student_crud");
require("./Model/db");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "C:/Users/DELL/Desktop/Assignment_2/public");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.get("/register", (req, res) => {
  res.render("registration");
});
app.post("/registration", upload.single("profile_pic1"), register);

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/login", login);

app.get("/student_home", student_data_disply);
app.get("/student_create", (req, res) => {
  res.render("student_create");
});
app.post("/student_create", upload.single("student_pic"), student_create);

app.get('/edit_student/:id', student_edit_display );
app.post("/student_edit/:id", upload.single("student_pic"), student_edit);
app.post("/student_delete/:id", student_delete);

app.post("/logout" , (req, res) => {

  req.session.destroy((err) => {
    if (err) { 
      console.error('Error destroying session:', err);
    }
    res.redirect('/login');
  });
})

 

app.listen(process.env.port, () => {
  console.log(`server running on ${process.env.port}`);
});
