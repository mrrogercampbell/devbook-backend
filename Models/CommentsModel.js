const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comments = new Schema({
    postId: String,
    userId: String,
    content: String,
    likes: Number,
    // userName: String
})



module.exports = mongoose.model('commentsModel', Comments)
