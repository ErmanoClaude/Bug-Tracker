import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  displayName: String,
  provider: String,
  facebook: {
    id: String,
    displayName: String
  },
  google: {
    id: String,
    displayName: String,
    email: String
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;
