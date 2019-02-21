const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Post = new Schema({
    content: String,
    createdAt: {
        Type: Date,
        // Default: Date.now()
    }
});



module.exports = mongoose.model("PostModel", Post)
