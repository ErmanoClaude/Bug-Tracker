import mongoose from "mongoose";

var commentSchema = new mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    username: String
  }
});

var Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;
