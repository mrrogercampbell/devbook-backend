const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
    content: String,
    createdAt: {
        Type: Date,
        Default: Date.now()
    }
});

mongoose.model("PostModel", Post);

module.exports = mongoose;
