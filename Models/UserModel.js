const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    userName: String,
    email: String,
    firstName: String,
    lastName: String,
    profilePic: String,
    location: String,
    gitHubUrl: String,
    employer: String,
    specialty: String,
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProjectModel"
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "commentsModel"
        }
    ],
    post: String,
    // [Linked Model]
    jobs: String,
    // [Linked Model]
})

mongoose.model('userModel', User)

module.exports = mongoose