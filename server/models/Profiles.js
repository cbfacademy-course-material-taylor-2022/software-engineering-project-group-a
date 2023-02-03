const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileSchema = new Schema({
  username: String,
  password: String,
  balance: Number,
});

mongoose.model("profiles", profileSchema);
