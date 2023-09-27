const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/Assignment2_task", {})
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log(err + " connection is failure");
  });
