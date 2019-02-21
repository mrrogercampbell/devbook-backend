const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Project = new Schema({
  linkToRepo: String,
  title: String,
  description: String,
  Thumbnail: String,
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "commentsModel"
    }
  ]
});

module.exports = mongoose.model("ProjectModel", Project);
