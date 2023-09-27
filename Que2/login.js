const { user } = require("../Model/user_model");
var jwt = require('jsonwebtoken'); 

exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  const useremail_check = await user.find({ email: email });

  if (useremail_check.length > 0) {
      console.log(useremail_check[0].password);
      console.log(password);
    if (password == useremail_check[0].password)
     {
        var token = jwt.sign({ useremail  : useremail_check.email  }, process.env.seckey, { algorithm: 'HS256' });
        res.cookie('token', token);
         res.redirect("/student_home");
  
    } 
    else 
    {
      const error = "Invalid Password , Please try again.";
      res.render("login", { error });
    }
  } else {
    const error = "Invalid Email  Please try again.";
    res.render("login", { error });
  }
};
