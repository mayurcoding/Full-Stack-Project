const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Project")
  .then(() => {
    console.log("Connected is Estabished");
  })
  .catch((err) => {
    console.log("Error in connection : ${err}");
  });
