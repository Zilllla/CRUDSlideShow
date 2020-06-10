const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  title: String,
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  img5: String
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
