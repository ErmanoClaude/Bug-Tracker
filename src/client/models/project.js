import mongoose from "mongoose";

var projectSchema = new mongoose.schema({
  project: String,
  creator: {
    provider: String,
    username: String,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  },
  bugs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bug"
    }
  ],
  roles: {
    admins: [
      {
        role: "Admin",
        provider: String,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        }
      }
    ],
    developers: [
      {
        role: "Developer",
        provider: String,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        }
      }
    ],
    projectManagers: [
      {
        role: "Project Manager",
        provider: String,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        }
      }
    ],
    submitters: [
      {
        role: "Submitter",
        provider: String,
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user"
        },
        username: String
      }
    ]
  }
});

const Project = mongoose.model("project", projectSchema);

module.exports = Project;
