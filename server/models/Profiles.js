const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  username: String,
  password: String,
  currency: String,
});

mongoose.model("profiles", profileSchema);
