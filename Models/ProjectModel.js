const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Project = new Schema({
  content: String,
  position: String,
  company: String,
  location: String,
  companyLogo: String,
  createdAt: {
    Type: Date,
    // Default: Date.now()
  }
  // user:
  // userId: [Linked Model ]
  // userName: [Linked Model]
});

mongoose.model("ProjectModel", Project);

module.exports = mongoose;
