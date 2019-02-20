const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Jobs = new Schema({
    content: String,
    position: String,
    company: String,
    location: String,
    logoURL: String,
    createdAt: {
        Type: Date
        // Default: Date.now()
    }
    // user:
    // userId: [Linked Model ]
    // userName: [Linked Model]
});

mongoose.model("JobModel", Jobs);

module.exports = mongoose;
