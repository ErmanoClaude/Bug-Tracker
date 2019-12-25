import mongoose from "mongoose";

const bugSchema = new mongoose.Schema({
  issue_title: String,
  issue_text: String,
  created_on: new Date(),
  updated_on: Date(),
  created_by: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    username: String,
    role: String
  },
  assigned_to: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      username: String,
      role: String
    }
  ],
  open: Boolean,
  status_text: String
});

const Bug = mongoose.model("bug", bugSchema);

module.exports = Bug;
