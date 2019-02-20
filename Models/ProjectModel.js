const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Project = new Schema({
  linkToRepo: String,
  title: String,
  description: String,
  Thumbnail: String,
});

mongoose.model("ProjectModel", Project);

module.exports = mongoose;
